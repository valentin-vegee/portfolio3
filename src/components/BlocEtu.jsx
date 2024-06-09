export default function BlocEtude({
  titel,
  Img,
  contente,
  SubTitel,
  contente1,
  contente2,
  contente3,
}) {
  return (
    <div className="BlocEtude">
      <div className="EtudeTitel">
        <h2>{titel}</h2>
      </div>
      <div className="EtudeFulContent">
        <img className="ImgEtude" src={Img} alt="" />
        <div className="EtudeContent">
          <h3>{SubTitel}</h3>
          <p>{contente}</p>
          <p>{contente1}</p>
          <p>{contente2}</p>
          <p>{contente3}</p>
        </div>
      </div>
    </div>
  );
}
