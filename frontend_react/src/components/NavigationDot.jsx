import React from "react";

const NavigationDot = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item) => (
          <a
            href={`#${item}`}
            key={item}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          >
            {}
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDot;
