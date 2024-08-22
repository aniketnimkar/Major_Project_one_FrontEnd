import React from "react";
import insta1 from "../images/instagram-1.jpg";
import insta2 from "../images/instagram-2.jpg";
import insta3 from "../images/instagram-3.jpg";
import insta4 from "../images/instagram-4.jpg";
import insta5 from "../images/instagram-5.jpg";
import insta6 from "../images/instagram-6.jpg";
import "../FooterCards.css"; // Ensure you have this CSS file

const FooterCards = () => {
  return (
    <>
      {/* <!-- Instagram Section Begin --> */}
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={insta1} className="img-fluid" alt="Instagram 1" />
                </div>
                <div className="col-4">
                  <img src={insta2} className="img-fluid" alt="Instagram 2" />
                </div>
                <div className="col-4">
                  <img src={insta3} className="img-fluid" alt="Instagram 3" />
                </div>
                <div className="col-4">
                  <img src={insta4} className="img-fluid" alt="Instagram 4" />
                </div>
                <div className="col-4">
                  <img src={insta5} className="img-fluid" alt="Instagram 5" />
                </div>
                <div className="col-4">
                  <img src={insta6} className="img-fluid" alt="Instagram 6" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="instagram-text">
                <h2>Instagram</h2>
                <p>
                  Share a photo of our product or showcase it in action on
                  social media using the hashtag #bzz_fashion. We’d love to
                  feature your post on our profile! Let’s collaborate and grow
                  together—join our community and be a part of our fashion
                  journey. We can’t wait to see your unique style and celebrate
                  it with you!
                </p>
                <h3 className="instagram-hgashtag">#Buzz_Fashion</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Section End */}
    </>
  );
};

export default FooterCards;
