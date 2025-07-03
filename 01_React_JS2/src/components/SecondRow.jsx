import Card from "./Card.jsx";  

export default function SecondRow({imgs}) {
  return (
    <div className="ImagesCards">
        {imgs.map(i => <Card {...i}></Card>)}
      
    </div>
  );
}