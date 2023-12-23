<?php
define('BASE_URL', 'http://localhost/librarysys/');

$logo="/-1.png";
$favicon="/favicon.png";
$mainpage='main-1.php';
$signup="signup.php"

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="about.css?v=2.0">
    <title>Buddy Library - About Us</title>
    <link rel="icon" type="image/x-icon" href="<?php echo BASE_URL.$favicon?>">
</head>
<body>
    <nav>
        <div class="navbar-1">
            <a href="<?php echo BASE_URL.$mainpage?>"><img src="<?php echo BASE_URL.$logo?>" alt="logo" id="logo"></a>
        <div class="elements-1">
            <a href="<?php echo BASE_URL.$mainpage?>" id="home">Home</a>
            <a href="/" id="howitworks">How it Works ?</a>
            <a href="/" id="books">Learn</a>
            <a href="/authors.html" id="author">Downloads</a>
            <a href="/about.html" id="about">About</a>
        </div>
        </div>
        <div class="navbar-2">
            <a href="/" id="contact">Contact Us</a>
            <a href="/login-1.html" id="login" >Login</a>
            <a href="/signup.html" id="signup">Sign Up</a>
            <img src="/icons8-menu-50.png" alt="" id="menu">
        </div>
    </nav>
    <div class="box">
        <div class="subbox">
        <div class="cancel-div"><img src="/icons8-cancel-30.png" alt="" id="cancel"></div>
        <div id="home-1"><a href="<?php echo BASE_URL.$mainpage?>" class="nav_link">Home</a></div>
        <div id="how-1"><a href="" class="nav_link">How it works ?</a></div>
        <div id="books-1"><a href="" class="nav_link">Books</a></div>
        <div id="author-1"><a href="/authors.html" class="nav_link">Authors</a></div>
        <div id="about-1"><a href="/about.html" class="nav_link">About</a></div>
        <div id="login-1"><a href="/login-1.html" class="nav_link">Login</a></div>
        <div class="signup-head">
        <a href="<?php echo BASE_URL.$signup?>" id="signup-1">Sign Up</a></div>
    </div>
    </div>
    <div class="matter">
                <h1>About Us</h1>
                <div class="about-us">
                <div class="matter-1">
                <p id="head-1">Our Mission</p>
                <p id="subhead-1">At the heart of Buddy Library is a simple yet profound mission – to make the treasure trove of literature freely available to everyone. We believe that access to knowledge and stories should be unrestricted, transcending geographical, economic, and linguistic barriers. Our commitment is to empower individuals with the transformative power of books, fostering a love for reading that knows no bounds.</p>
                </div>
                <div class="matter-1">
                    <p id="head-1">A Haven for Bibliophiles</p>
                    <p id="subhead-1">Buddy Library is more than just a digital repository of books; it's a haven for bibliophiles seeking a sanctuary where they can discover, explore, and immerse themselves in the magic of storytelling. Our virtual shelves are filled with a diverse collection of literary gems, spanning genres, cultures, and eras. Whether you're a seasoned reader or just beginning your literary adventure, there's a place for you here.</p>
                </div>
                <div class="matter-1">
                    <p id="head-1">Free Books for All</p>
                    <p id="subhead-1">In a world where access to quality literature can be limited, Buddy Library stands as a beacon of generosity. Every book on our platform is available for free, ensuring that knowledge and imagination are within reach of everyone, regardless of their economic circumstances. This commitment to accessibility reflects our belief in the democratization of information and the power of storytelling to inspire, educate, and unite.</p>
                    </div>
                <div class="matter-1">
                        <p id="head-1">Community-Driven Growth</p>
                        <p id="subhead-1">Buddy Library thrives on the vibrant energy of our community of readers. Every user contributes to the collective growth of our digital library by recommending books, sharing insights, and participating in discussions. We celebrate the diversity of voices within our community, recognizing that every reader adds a unique chapter to the unfolding story of Buddy Library.</p>
                    </div>
                <div class="matter-1">
                        <p id="head-1">Navigating the Buddy Library Universe
                        </p>
                        <p id="subhead-1">Navigating Buddy Library is a user-friendly experience designed to encourage exploration. Users can browse through genres, discover hidden literary gems, and build their virtual bookshelves with ease. The platform is intuitive, making it accessible to users of all ages and backgrounds.</p>
                </div>
                <div class="matter-1">
                    <p id="head-1">The Invitation to Join</p>
                    <p id="subhead-1">Buddy Library extends an open invitation to readers around the globe. Whether you're seeking a literary escape, a thought-provoking read, or simply a cozy corner to unwind, Buddy Library welcomes you. Join us in celebrating the magic of words, the joy of shared stories, and the boundless possibilities that unfold when readers come together.</p>
                </div>
                <div class="matter-1">
                    <p id="head-1">Together, Let's Write the Next Chapter</p>
                    <p id="subhead-1">In the digital realm of Buddy Library, every reader is an author contributing to the collective narrative of our shared literary adventure. Together, let's turn the pages, explore new horizons, and write the next chapter in the ever-evolving story of Buddy Library.</p>
                </div>
            </div> 
            <footer>
                <div class="foot">
                    <div class="foot-1">
                        <p id="footer-heading">Buddy Library</p>
                        <a href="">Quick Links</a>
                        <a href="">Browse by Genre</a>
                        <a href="">New Arrivals</a>
                        <a href="">Popular Reads</a>
                        <a href="">Library Policies</a>
                        <a href="">Educational Resources</a>
                        <a href="">Library Mission</a>
                        <a href="">Connect with Us</a>
                    </div>
                    <div class="foot-2">
                        <p id="footer-heading">Journey Through</p>
                        <a href="">Hidden Gems</a>
                        <a href="">Thematic Collections</a>
                        <a href="">Genre Excursionse</a>
                        <a href="">Join Our Team</a>
                        <a href="">Reading Histories</a>
                        <a href="">Book Recommendations</a>
                    </div>
                    <div class="foot-3">
                        <p id="footer-heading">Help</p>
                        <a href="">FAQs</a>
                        <a href="">Report A Problem</a>
                        <a href="">Privacy and Security</a>
                        <a href="">Feedback</a>
                        <a href="">Tutorials and Guides</a>
                    </div>
                    <div class="foot-4">
                        <p id="footer-heading">Follow Us</p>
                        <div class="icons">
                            <a href="https://github.com/singghh" target="_blank"><img src="/icons8-github-30.png" alt="" id="github"></a>
                            <a href="https://twitter.com/YUGEN___STUDIO" target="_blank"><img src="/icons8-twitter-50.png" alt="" id="twitter"></a>
                            <a href="www.linkedin.com/in/bamla-varun-singh-b05245259" target="_blank"><img src="/icons8-linkedin-50.png" alt="" id="linkedin"></a>
                        </div>
                    </div>
                    <div class="languages">
                        <p id="footer-heading">Website Languages</p>
                            <a href="" id="eng">English</a>
                            <a href="" id="hind">Hindi</a>
                            <a href="" id="Spanish">Spanish</a>
                            <a href="" id="french">French</a>
                            <a href="" id="german">German</a>
                            <a href="" id="japan">Japanese</a>
                            <a href="" id="china">Chinese</a>
                            <a href="" id="russia">Russian</a>
                            <a href="" id="Portuguese">Portuguese</a>
                            <a href="" id="arabic">Arabic</a>
                    </div>
                    <div class="subscribe">
                        <div><p id="footer-heading">Subscribe to our email newsletter</p></div>
                        <div class="subscribe-button"><input type="email" placeholder="Your email" id="your-email" required><input type="submit" value="SUBSCRIBE" id="subscribe"></div>
                    </div>
                </div>
                <div>
                    <p id="footer-para">© 2023 Buddy Library. All Rights Reserved.</p>
                </div>
            </footer>
<script src="about.js"></script>
</body>
</html>