import "./_pagination.scss"

const Pagination = ({ postsPerPage, totalPage, paginate, nextPage, prevPage, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= (totalPage / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="pagination">
            <div className="pagination__prev" onClick={prevPage}>Назад</div>
            <div className="pagination__number">
                {pageNumbers.map(i => (
                    <div
                        className={`pagination__number__item ${currentPage === i && 'active'}`}
                        key={i}
                        onClick={() => paginate(i)}
                    >{i}</div>
                ))}
            </div>
            <div className="pagination__next" onClick={nextPage}>Далее</div>
        </div>
    )
}

export default Pagination