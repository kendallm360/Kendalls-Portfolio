import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { alternateSkills } from "../../utils/MockData";

const Talents = () => {
  const [talent, setTalent] = useState<{
    id: number;
    title: string;
    image: string;
    imageAlt: string;
  }>({
    id: 0,
    title: "",
    image: "",
    imageAlt: "",
  });

  useEffect(() => {
    setTalent(alternateSkills[0]);
  }, []);

  const handleClick = () => {
    let next = talent.id + 1;
    setTalent(
      alternateSkills[next] ? alternateSkills[next] : alternateSkills[0]
    );
  };
  return (
    <ScrollAnimation initiallyVisible animateOnce animateIn="fadeInDown">
      <div className="PersonalityContent">
        <h2 className="Fact">{talent.title}</h2>
        <img
          className="FactGraphic"
          src={talent.image}
          alt={talent.imageAlt}
          onClick={handleClick}
        />
        <button className="NewFact" onClick={handleClick}>
          What Else?
        </button>
      </div>
    </ScrollAnimation>
  );
};
export default Talents;
