import React from 'react'

export default function RequestKYC() {
  return (
    <div>
        <div>
        <div className="w-3/4 " style={{position : "absolute",top:"20%" , left : "30%"}}>
            <form className=" shadow-2xl bg-white border-2 border-primary shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Name
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" onChange={event=>setname(event.target.value)}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Email
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={event=>setemail(event.target.value)}/>
                </div>
                <div className='mb-6'>
                <label className="block text-gray-700 text-sm  font-bold mb-2" for="ifsc">
                   IFSC
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc" type="text" onChange={event=>setifsc(event.target.value)}/>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="ifsc">
                    MetaMask Address 
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="metaMaskAddress" type="text" onChange={event=>setmetaMaskAddress(event.target.value)}/>
                 
                <div className="flex items-center justify-between">
                    
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleAdd} >
                    Add
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline " type="button" onClick={()=>dispatch(togleAddMenu())}>
                    Cancel
                </button>
                </div>
                
            </form>
        </div>
    </div>
    </div>
  )
}
