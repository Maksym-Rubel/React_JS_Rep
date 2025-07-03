export default function FirstRow({ img, firstName, lastName, description }) {
  return (
    <div className="RowCard">
      <img className="ImageSrc" src={img} alt={firstName}/>
      <div className="collumnCard">
        <h2 className="Text">{firstName} {lastName}</h2>
        <p className="Desctiption">{description}</p>
      </div>
      
    </div>
  );
}