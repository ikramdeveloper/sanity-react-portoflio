import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const contact = {
      _type: "contact",
      ...formData,
    };

    client
      .create(contact)
      .then(() => {
        setIsFormSubmitted(true);
        setFormData(initialState);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <h2 className="p-text">Take a tea and chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:m.ikramch22@gmail.com" className="p-text">
            m.ikramch22@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+923034927390" className="p-text">
            +92-303-492-7390
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="p-text"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="p-text">
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h5>Thanks for getting in touch!</h5>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
