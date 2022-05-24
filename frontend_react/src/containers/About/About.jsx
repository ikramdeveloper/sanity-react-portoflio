import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionWrap, AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'about']";
    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        I know that <span>Good Websites</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profile">
        {about.map((about) => (
          <motion.div
            key={about.title}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgurl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
