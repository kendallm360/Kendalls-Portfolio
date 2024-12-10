import "../PersonalExperience/styles.scss";
import { personalExperiences } from "../../utils/MockData";
import { useEffect, useState } from "react";

const PersonalExperience = () => {
  const [experience, setExperience] = useState<{
    id: number;
    experience: string;
    image: string;
    awardLink: string;
    imageAlt: string;
  }>({
    id: 0,
    experience: "",
    image: "",
    awardLink: "",
    imageAlt: "",
  });

  useEffect(() => {
    setExperience(personalExperiences[0]);
  }, []);

  const handleClick = () => {
    let next = experience.id + 1;
    setExperience(
      personalExperiences[next]
        ? personalExperiences[next]
        : personalExperiences[0]
    );
  };

  let nimucInfo;

  if (experience.awardLink !== "") {
    nimucInfo = (
      <p className="PersonalExperiences">
        {" "}
        Click{" "}
        <a
          className="NimucLink"
          href={experience.awardLink}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        for more information about the NIMUC.
      </p>
    );
  }

  return (
    <div className="PersonalityContent">
      <h2 className="PersonalExperiences">{experience.experience}</h2>
      <h2>{nimucInfo}</h2>
      <img
        className="PersonalExperiencesGraphic"
        src={experience.image}
        alt={experience.imageAlt}
        onClick={handleClick}
      />
      <button className="NewFact" onClick={handleClick}>
        What Else?
      </button>
    </div>
  );
};

export default PersonalExperience;
