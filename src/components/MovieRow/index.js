import react from "react"
import './styles.css'

export default ({ title, items }) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((movie, key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}