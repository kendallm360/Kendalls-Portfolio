import scootin from "../../images/ScootingKendall.gif";
import "../Load/styles.scss";
const Load = () => {
  return (
    <div className="Load">
      <div className="WaveAnimation">
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
      </div>
      <img
        className="KendallScootin"
        src={scootin}
        alt="Kendall Scooting through Denver"
      />
      <div className="WaveAnimation">
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
        <div className="Wave"></div>
      </div>
    </div>
  );
};
export default Load;
