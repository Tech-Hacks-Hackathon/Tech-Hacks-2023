import numpy as np
import pandas as pd
import os
import tensorflow as tf
from tensorflow.keras.layers import Input, Dense, Conv2D, MaxPooling2D, Dropout, Conv2DTranspose, UpSampling2D, add, Flatten
from tensorflow.keras.models import Model
from tensorflow.keras.optimizers import Adam
from tensorflow.keras import regularizers
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.python.keras.callbacks import ModelCheckpoint, EarlyStopping, \
    ReduceLROnPlateau
import matplotlib.pyplot as plt
base_directory = "C:/Users/PREETHAM/OneDrive/Desktop/python/archive/Image Super Resolution - Unsplash"
hires_folder = os.path.join(base_directory, 'high res')
lowres_folder = os.path.join(base_directory, 'low res')

data = pd.read_csv("C:/Users/PREETHAM/OneDrive/Desktop/python/archive/Image Super Resolution - Unsplash/image_data.csv")

data['low_res']=data['low_res'].apply(lambda x: os.path.join(lowres_folder, x)).tolist()
data['high_res']=data['high_res'].apply(lambda x: os.path.join(hires_folder, x)).tolist()
data.head()
batch_size = 4
image_datagen = ImageDataGenerator(rescale=1./255, validation_split=0.15)
mask_datagen = ImageDataGenerator(rescale=1./255,validation_split=0.15)
train_hiresimage_generator = image_datagen.flow_from_dataframe(
        data,
        x_col='high_res',
        target_size=(800, 1200),
        class_mode = None,
        batch_size = batch_size,
        seed=42,
        subset='training')

train_lowresimage_generator = image_datagen.flow_from_dataframe(
        data,
        x_col='low_res',
        target_size=(800, 1200),
        class_mode = None,
        batch_size = batch_size,
        seed=42,
        subset='training')

val_hiresimage_generator = image_datagen.flow_from_dataframe(
        data,
        x_col='high_res',
        target_size=(800, 1200),
        class_mode = None,
        batch_size = batch_size,
        seed=42,
        subset='validation')

val_lowresimage_generator = image_datagen.flow_from_dataframe(
        data,
        x_col='low_res',
        target_size=(800, 1200),
        class_mode = None,
        batch_size = batch_size,
        seed=42,
        subset='validation')
train_generator = zip(train_lowresimage_generator, train_hiresimage_generator)
val_generator = zip(val_lowresimage_generator, val_hiresimage_generator)
train_samples = train_hiresimage_generator.samples
def imageGenerator(train_generator):
    for (low_res, hi_res) in train_generator:
            yield (low_res, hi_res)
            # Define the generator model
def build_generator(input_shape):
    inputs = Input(shape=input_shape)

    # Encoder
    x = Conv2D(64, (3, 3), padding='same', activation='relu')(inputs)
    x = MaxPooling2D(padding='same')(x)
    x = Dropout(0.3)(x)
    x = Conv2D(128, (3, 3), padding='same', activation='relu')(x)
    x = MaxPooling2D(padding='same')(x)
    encoded = Conv2D(256, (3, 3), padding='same', activation='relu')(x)

    # Decoder
    x = UpSampling2D()(encoded)
    x = Conv2D(128, (3, 3), padding='same', activation='relu')(x)
    x = UpSampling2D()(x)
    x = Conv2D(64, (3, 3), padding='same', activation='relu')(x)
    decoded = Conv2D(3, (3, 3), padding='same', activation='sigmoid')(x)  # Use sigmoid for GAN

    return Model(inputs, decoded, name='generator')
# Define the discriminator model
def build_discriminator(input_shape):
    inputs = Input(shape=input_shape)

    x = Conv2D(64, (3, 3), padding='same', activation='relu')(inputs)
    x = MaxPooling2D(padding='same')(x)
    x = Dropout(0.3)(x)
    x = Conv2D(128, (3, 3), padding='same', activation='relu')(x)
    x = MaxPooling2D(padding='same')(x)
    x = Conv2D(256, (3, 3), padding='same', activation='relu')(x)

    x = Flatten()(x)
    x = Dense(1, activation='sigmoid')(x)

    return Model(inputs, x, name='discriminator')
# Build and compile the GAN model
def build_gan(generator, discriminator):
    discriminator.trainable = False

    gan_input = Input(shape=(800, 1200, 3))
    generated_image = generator(gan_input)
    gan_output = discriminator(generated_image)

    gan = Model(gan_input, gan_output)
    gan.compile(optimizer=Adam(learning_rate=0.0002, beta_1=0.5), loss='binary_crossentropy')

    return gan
# Build and compile the generator, discriminator, and GAN
generator = build_generator(input_shape=(800, 1200, 3))
discriminator = build_discriminator(input_shape=(800, 1200, 3))
gan = build_gan(generator, discriminator)
# Compile the generator
generator.compile(optimizer=Adam(learning_rate=0.0002, beta_1=0.5), loss='mean_squared_error')

# Compile the discriminator
discriminator.compile(optimizer=Adam(learning_rate=0.0002, beta_1=0.5), loss='binary_crossentropy', metrics=['accuracy'])

# Compile the GAN
gan.compile(optimizer=Adam(learning_rate=0.0002, beta_1=0.5), loss='binary_crossentropy')
# Train the GAN
epochs = 10
batch_size = 4
for epoch in range(epochs):
    for _ in range(train_samples // batch_size):
        low_res, high_res = next(train_generator)

        # Generate high-resolution images from low-resolution input using the generator
        generated_high_res = generator.predict(low_res)

        # Train the discriminator on real and generated images
        real_labels = np.ones((batch_size, 1))
        fake_labels = np.zeros((batch_size, 1))

        real_loss = discriminator.train_on_batch(high_res, real_labels)
        fake_loss = discriminator.train_on_batch(generated_high_res, fake_labels)

        # Train the generator via GAN
        gan_labels = np.ones((batch_size, 1))
        gan_loss = gan.train_on_batch(low_res, gan_labels)

    print(f"Epoch {epoch + 1}/{epochs}, Discriminator Loss: {0.5 * np.add(real_loss, fake_loss)}, GAN Loss: {gan_loss}")

# Generate super-resolution images using the trained generator
generated_images = generator.predict(validation_low_res_images)
# Visualization
for i in range(5):
    fig, axs = plt.subplots(1, 2, figsize=(12, 6))
    axs[0].imshow(validation_low_res_images[i])
    axs[0].set_title('Low Resolution')
    axs[1].imshow(generated_images[i])
    axs[1].set_title('Generated High Resolution')
    plt.show()

