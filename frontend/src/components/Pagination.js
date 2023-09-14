import React from 'react'
import { Page } from 'react-pdf';
import PageNo from './PageNo'

export default function Pagination({page,totalpage,setpage}) {
    let pages = [];
    for (let index = 1; index <= parseInt(totalpage); index++) {
        pages.push(index)
    }
 
  return (
    <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
            <li>
            <span
                value={page}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" onClick={(e)=>{let p = parseInt(page); if(page<=totalpage)setpage(p.toString())}}>
                {"<"}
            </span>
            </li>
                {pages.map(element=>{
                    return <PageNo page={element} totalpage={totalpage} setpage={setpage}/>
                })}
                
            <li>
                {parseInt(totalpage)>5 ? 
                <select className="form-select form-select-sm ml-2 mr-4
                appearance-none
                block
                w-full
                px-2
                py-1
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label=".form-select-sm example">
                    <option value={""}>Select Page</option>
                    {pages.map(element=>{
                        
                        return <option value={element}>{element}</option>
                    })}
                </select>:""}
            </li>   
            <li>
            <span 
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                {">"}
            </span>
            </li>
        </ul>
</nav>

  )
}
