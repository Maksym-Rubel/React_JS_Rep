import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";



const IMAGES = [
    {
        id: 1,
        src: "https://images.prom.ua/6552777201_w600_h600_6552777201.jpg",
        title: "MyTitle",
        year:2025
    },
    {
        id: 2,
        src: "https://images.prom.ua/6552777201_w600_h600_6552777201.jpg",
        title: "MyTitle",
        year:2025
    },
    {
        id: 3,
        src: "https://images.prom.ua/6552777201_w600_h600_6552777201.jpg",
        title: "MyTitle",
        year:2025
    },
    {
        id: 4,
        src: "https://images.prom.ua/6552777201_w600_h600_6552777201.jpg",
        title: "MyTitle",
        year:2025
    },
    {
        id: 4,
        src: "https://images.prom.ua/6552777201_w600_h600_6552777201.jpg",
        title: "MyTitle",
        year:2025
    },
    




]


export default function AllPage() {
    return (
        <>
            <div className="AllPages">
                <div className="FirstRow">
                    <FirstRow
                        img="https://images.prom.ua/2987667453_w600_h600_2987667453.jpg"
                        firstName="Ivan"
                        lastName="Ivanov"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    />


                </div>
                <div className="SecondRow">
                    <SecondRow imgs={IMAGES}

                    />
                </div>
            </div>

        </>
    );
}
