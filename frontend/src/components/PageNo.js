import React from 'react'

export default function PageNo({page,totalpage,setpage}) {
    
  return (
    <li>
      <span
        to="/dashboard?page=1"
        value={page}
        className="px-3 cursor-pointer py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white bg-blue-100" onClick={(e)=>{setpage(e.target.value)}}
      >
        {totalpage}
      </span>
      
    </li>
  )
}
