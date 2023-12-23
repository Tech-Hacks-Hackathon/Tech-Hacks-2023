import "./index.css";

const FeddBackSection = (props) => {
  const { eachItem } = props;
  const { user_image_url, feedback1, name, date } = eachItem;
  return (
    <li>
      <div className="card-container">
        <div className="card-container-2">
          <div className="name">
            <img
              src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703286167/Screenshot_2023-12-23_043229_mcm0ji.png"
              alt="userLogo"
              className="img-logo"
            />
            <h1 className="userName">{name}</h1>
          </div>
          <div>
            <p className="userName">{date}</p>
          </div>
        </div>
        <p className="userName">{feedback1}</p>
        <div className="img-container">
          <div>
            <img
              src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703276222/Screenshot_2023-12-23_014010_axdz5s.png"
              className="img1"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703276305/Screenshot_2023-12-23_014040_d2zpvl.png"
              className="img1"
            />
          </div>
          <img
            src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703276376/Screenshot_2023-12-23_014134_pw7dbl.png"
            class="img1"
          />
        </div>
      </div>
    </li>
  );
};

export default FeddBackSection;
