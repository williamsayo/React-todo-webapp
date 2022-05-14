import React from 'react'

const Pagination = ({tasksPerPage,totalTasks,paginate}) => {
    const pagesList = []

    for (let i = 1; i <= Math.ceil(totalTasks/tasksPerPage); i++) {
        pagesList.push(i)
    }
  return (
    <div className='pagination-container'>
        <ul className='pagination'>
            {pagesList.map(page => (
                <li key={page} className='page-item'>
                    <button onClick={() => paginate(page)} className='page-link'>{page}</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination
