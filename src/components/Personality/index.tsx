import "../Personality/styles.scss";
import { funFacts } from "../../utils/MockData";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Personality = () => {
  const [fact, setFact] = useState<{
    id: number;
    fact: string;
    image: string;
    imageAlt: string;
  }>({
    id: 0,
    fact: "",
    image: "",
    imageAlt: "",
  });

  useEffect(() => {
    setFact(funFacts[0]);
  }, []);

  const handleClick = () => {
    let next = fact.id + 1;
    setFact(funFacts[next] ? funFacts[next] : funFacts[0]);
  };

  return (
    <ScrollAnimation initiallyVisible animateOnce animateIn="fadeInDown">
      <div className="PersonalityContent">
        <h2 className="Fact">{fact.fact}</h2>
        <img
          className="FactGraphic"
          src={fact.image}
          alt={fact.imageAlt}
          onClick={handleClick}
        />
        <button className="NewFact" onClick={handleClick}>
          What Else?
        </button>
      </div>
    </ScrollAnimation>
  );
};
export default Personality;
