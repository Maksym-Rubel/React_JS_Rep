export default function Stars({ rating }) {


    function returnStar(rating) {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<span className="YellowStar">★</span>)
        }
        return stars;
    }
    return (
        returnStar(rating)
    )

}