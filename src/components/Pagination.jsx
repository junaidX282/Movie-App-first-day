import React from 'react'

const Pagination = ({setPage,totalPages, page}) => {

    

    const handleNextPage = ()=>{
        setPage((prev) => prev + 1)
    }
    const handlePrevPage = ()=>{
        setPage((prev) => prev - 1)
    }
    
  return (
    <div className="pagination">
        <button disabled={page <= 1} onClick={handlePrevPage}>prev</button>
        <p>{page}  to {totalPages}</p>
        <button disabled= { page >= totalPages } onClick={handleNextPage}>next</button>
    </div>
  )
}

export default Pagination