export default function BlocExperience({
  titel,
  Img,
  contente,
  SubTitel,
  contente1,
  contente2,
  contente3,
}) {
  return (
    <div className="BlocExperience">
      <div className="ExperienceTitel">
        <h2>{titel}</h2>
      </div>
      <div className="ExperienceFulContent">
        <div className="ExperienceContent">
          <h3>{SubTitel}</h3>
          <p>{contente}</p>
          <p>{contente1}</p>
          <p>{contente2}</p>
          <p>{contente3}</p>
        </div>
        <img className="ImgExperience" src={Img} alt="" />
      </div>
    </div>
  );
}
