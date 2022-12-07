import "../Personality/styles.scss";
import { funFacts } from "../../utils/MockData";

const Personality = () => {
  return (
    <div className="PersonalityContent">
      <h2 className="Fact">{funFacts[0].fact}</h2>
      <img className="FactGraphic" src={funFacts[5].image} alt="" />
      <button className="NewFact">What Else?</button>
    </div>
  );
};
export default Personality;
