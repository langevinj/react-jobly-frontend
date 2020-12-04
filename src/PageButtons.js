import React from 'react'

function PageButtons({setPageNum, numPages, pageNum}){

    const prevPage = () => {
        setPageNum(pageNum => pageNum - 1)
    }

    const nextPage = () => {
        setPageNum(pageNum => pageNum + 1)
    }

    return(
        <div className="container buttons">
            {!pageNum > 0 ? <button className="btn-secondary disabled" onClick={prevPage} disabled>&#8592;</button> : <button className="btn-primary" onClick={prevPage}>&#8592;</button>}
            {pageNum === numPages - 1 ? <button onClick={nextPage} className="btn-secondary" disabled>&#8594;</button> : <button onClick={nextPage} className="btn-primary">&#8594;</button>}
        </div>
    )
}

export default PageButtons;