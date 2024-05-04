import './GenreFilter.scss'
const GenreFilter = ({ genres, movies }) => {
    
    const filterByGenre = (genre) => {
        console.log("Filtering by", genre)
        const btnFilter = movies.filter(movie => movie.genre === genre)
        console.log(btnFilter)
    }

    return (
        <div className='GenreFilter'>
            <h2>Filter by Genre</h2>
            <div className="btn-wrapper">
            {
                genres?.map(genre => {
                    return <button
                        key={genre}
                        className='btn'
                        onClick={() => {
                            filterByGenre(genre)
                        }}
                    >{genre}</button>
                })
            }
            </div>
        </div>
    )
}

export default GenreFilter
