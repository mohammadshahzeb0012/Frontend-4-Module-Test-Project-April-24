import './table-Wrraper.scss'

const MovieList = ({ movies }) => {
    return (
        <div className="table-Wrraper">
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Year</td>
                    </tr>
                </thead>
                <tbody>
                    {movies?.map(movie => {
                        return <tr key={movie.title}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.year}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MovieList
