type TSkill = {
    name: string;
    logo: string;
    alt: string;
}


const MySkills = ({name, logo, alt }: TSkill): JSX.Element=> {
    return(<>
        <img className="SkillLogo" src={logo} alt={alt} />
        <h3>{name}</h3>
    </>)

}
export default MySkills