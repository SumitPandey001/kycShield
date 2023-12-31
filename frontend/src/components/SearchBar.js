import React from 'react'

export default function SearchBar({contract,currAddress,setsearchresult,setsearching,setLoading,where}) {
  const [inputValue,setinputValue] = React.useState();
  function searchHandler(event) {
    setsearching(true)
    setLoading(true)
    console.log(currAddress)
    event.preventDefault();
    if(where === 'fi')
    contract.methods.searchCustomers(inputValue).call({from : currAddress })
    .then(res=>{
      console.log(res)
      setsearchresult(res)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
    else if(where === 'customer')
    contract.methods.searchBanks(inputValue).call({from : currAddress })
    .then(res=>{
      console.log(res)
      setsearchresult(res)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
    else if(where === 'admin')
     console.log('admin')
      
    else console.log('nothing')
  }
  return (
    <div>
        <form onSubmit={searchHandler}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search address..." required onChange={(event)=>{setinputValue(event.target.value)}}/>
                
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-primary hover:bg-accent dark:focus:ring-blue-800" >Search</button>
            </div>
        </form>
    </div>
  )
}
