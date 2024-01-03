import React from 'react'

function Pagination({onPageChange, currentPage, blogs, pageSize}) {
    const totalPages = Math.ceil(blogs.length / pageSize);
    // console.log(totalPages)
    const renderPaginationLinks = () =>{

        return Array.from({length : totalPages},  (_, i)=> i+1).map((pageNumber)=>(
            <li className={pageNumber === currentPage? "activePagination": ""} key={pageNumber}>
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        
        ))
    } 
  return (
    <ul className='pagination  my-10 flex-wrap gap-4 '>
            <li>
                <button className={currentPage === 1 ? "hidden" : ""}  onClick={()=>onPageChange(currentPage - 1) }>Previous</button>

            </li>
            <div className='flex gap-1'>
                {renderPaginationLinks()}
            </div>
            <li> 
                <button className={currentPage === totalPages ? "hidden" : ""}  onClick={()=>onPageChange(currentPage + 1)}>Next</button>
            </li>
    </ul>

  )
}

export default Pagination