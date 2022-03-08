import React from "react";
import "./App.css";
import avatar from "./avatar.jpg";
import blackNature from "./black nature.jpg";
import forest from "./forest.jpg";
import leaves from "./leaves.jpg";
// import logo from './logo.jpeg';
import sunrise from "./sunrise.jpg";
import trip from "./trip.jpg";
import window from "./window.jpg";
import rr from "./rr.jpg";
import images from './images.jpeg';
import images1 from './images (2).jpeg';

const App = () => {
  return (
    <div className="w3-black">
      {/* <a href="#about"></a> */}
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <img src={avatar} alt="main" style={{ width: "100%" }} />
        <a
          href="#home"
          className="w3-bar-item w3-button w3-padding-large w3-black"
        >
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a
          href="#about"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </a>
        <a
          href="#photos"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>PHOTOS</p>
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </a>
      </nav>
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href="#home"
            className="w3-bar-item w3-button"
            style={{ height: "20px !important" }}
          >
            HOME
          </a>
          <a href="#about"
            className="w3-bar-item w3-button"
            style={{ height: "20px !important" }}
          >
            ABOUT
          </a>
          <a href="#photos"
            className="w3-bar-item w3-button"
            style={{ height: "20px !important" }}
          >
            PHOTOS
          </a>
          <a href="#contact"
            className="w3-bar-item w3-button"
            style={{ height: "20px !important" }}
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="w3-padding-large" id="main">
        <header
          className="w3-container w3-padding-32 w3-center w3-black"
          id="home"
        >
          <h1 className="w3-jumbo">
            <span className="w3-hide-small">I'm</span> Sampath Mestha.
          </h1>
          <p style={{fontWeight:"bold" }} >Web Designer</p>
          <img
            src={avatar}
            alt="boy"
            className="w3-image"
            width="992"
            height="1108"
          />
        </header>

        <div
          className="w3-content w3-justify w3-text-grey w3-padding-64"
          id="about"
        >
          <h2 className="w3-text-light-grey">My Name</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />
          <p>
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
          <p className="w3-wide">Web Designing</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "95%" }}
            ></div>
          </div>
          <p className="w3-wide">Photography</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "65%" }}
            ></div>
          </div>
          <p className="w3-wide">Photoshop</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "45%" }}
            ></div>
          </div>
          <br />
        </div>

        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span> <br /> partner
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span> <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span>
            <br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span>
            <br />
            Meetings
          </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>

        <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>

        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>

          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>
          <img
            src={images1}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "80px" }}
          />
          <p>
            <span className="w3-large w3-margin-right">Chris Fox.</span> CEO at
            Mighty Schools.
          </p>
          <p>John Doe saved us from a web disaster.</p>
          <br />

          <img
            src={images}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "80px" }}
          />
          <p>
            <span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO
            at Company.
          </p>
          <p>No one is better than John Doe.</p>
        </div>

        <div className="w3-padding-64 w3-content" id="photos">
          <h2 className="w3-text-light-grey">My Photos</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />

          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half">
              <img src={forest} alt="1" style={{ width: "100%" }} />
              <img alt="12" src={leaves} style={{ width: "100%" }} />
              <img alt="123" src={blackNature} style={{ width: "100%" }} />
            </div>

            <div className="w3-half">
              <img alt="1" src={sunrise} style={{ width: "100%" }} />
              <img alt="2" src={rr} style={{ width: "100%" }} />
              <img alt="3" src={trip} style={{ width: "100%" }} />
              <img alt="4" src={window} style={{ width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />

          <div className="w3-section">
            <p>
              <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              karnataka, INDIA
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              Phone: +91 8497818677
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
                {" "}
              </i>{" "}
              Email: mesthasampath696k@.com
            </p>
          </div>
          <br />
          <p>Let's get in touch. Send me a message:</p>

          <form>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Email"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Subject"
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
            </p>
            <p>
              <button
                className="w3-button w3-light-grey w3-padding-large"
                type="submit"
              >
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
        </div>

        <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
          <i id="fa" className="fa fa-facebook-official w3-hover-opacity"></i>
          <i id="fa" className="fa fa-instagram w3-hover-opacity"></i>
          <i id="fa" className="fa fa-snapchat w3-hover-opacity"></i>
          <i id="fa" className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i id="fa" className="fa fa-twitter w3-hover-opacity"></i>
          <i id="fa" className="fa fa-linkedin w3-hover-opacity"></i>
          <p className="w3-medium">
            Powered by{" "}
            <a href="#/" className="w3-hover-text-green">
              WebDesigningWithSampath
            </a>
          </p>
           
           <a style={{textAlign:"center", border:"1px solid white" , textDecoration:"none" ,display:"flex", justifyContent:"center" ,backgroundColor:"black", color:"white"}} href="#home">Return to Top</a>

        </footer>
      </div>
    </div>
  );
};

export default App;
