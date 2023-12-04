import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import './Home.css'; 
import { useState } from "react";
import { SectionButton } from "./SectionButton";
import Section from "./Section";

const sections = [
  { title: 'Jump straight to the action!', content: `Just click on any of these and you will find yourself immersed in no time. Login with a swift click on your phone, and all the sports data you need will be in the palm of your hand.` },
  { title: 'Your Passion, Your Experience:', content: 'Immerse yourself in the vast world that sport is and create your own Eleven to share with your friends, follow your tennis coach to check his bets on tomorrow"s race, or simply check what your favourite deadlifter"s record is. You set the limits.' },
];

export const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  const handleButtonClick = (index) => {
    setActiveSection(index);
    setIsVisible(true);
  };

  return (
      <div className="containerGeneral">
        <animated.div style={fadeIn} className="sectionContainer">
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
              isVisible={index === activeSection}
            />
          ))}
        </animated.div>

        <div className="buttonsContainer">
          {sections.map((section, index) => (
            <SectionButton
              key={index}
              title={section.title}
              onClick={() => handleButtonClick(index)}
            />
          ))}
        </div>
      </div>
  );
};

