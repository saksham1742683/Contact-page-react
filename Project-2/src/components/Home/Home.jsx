// import React from 'react'
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [fill, setFill] = useState([
    {
      name: "",
      email: "",
      text: "",
    },
  ]);

  const fillData = () => {
    setFill({
      name: "saksham saleem",
      email: "mohammadsaksham@pakistan.com",
      text: " me maqsad nahi bhuluga , kanak hamari dushman hai",
    });
  };
  const clearData = () => {
    setFill({ name: "", email: "", text: "" });
  };
  
  useEffect(() => {
    
  }, []);

  return (
    <div className="home">
      <div>
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="main-container">
          <div className="contact-form">
            <div className="access-options">
              <div className="chat-callbtn">
                <button>💬 VIA SUPPORT CHAT</button>
                <button>📞 VIA CALL</button>
              </div>

              <div className="email-btn">
                <button>📝 VIA EMAIL FORM</button>
              </div>
            </div>
            <div className="email-form">
              <fieldset>
                <legend>Name</legend>
                <input type="text" value={fill.name} />
              </fieldset>

              <fieldset>
                <legend>Email</legend>

                <input type="text" value={fill.email} />
              </fieldset>

              <fieldset>
                <legend>TEXT</legend>

                <textarea type="text" rows={5} value={fill.email} />
              </fieldset>
              <div className="submit-btn">
                <button>Submit</button>
                <button onClick={fillData}>Fill data</button>
                <button onClick={clearData}>clear data</button>
              </div>
            </div>
          </div>
          <div className="service-image">
            <img src="/images/service_image.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
