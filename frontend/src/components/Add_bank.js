import React, {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { togleAddMenu } from '../actions'
import {abi} from "../abi"

export default function Add({contract, currAddress,setLoading,isLoading}) {
    const dispatch = useDispatch();
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [ifsc,setifsc] = useState('');
    const [metaMaskAddress,setmetaMaskAddress] = useState('');
    const [adding,setadding] = useState(false);
    function handleAdd(){
        console.log("clicked")
        setadding(true)
        console.log(currAddress)
        const bank = [
            name,
            email,
            metaMaskAddress,
            ifsc,
            "0",
            "0"
        ]
        setLoading(false)
        contract.methods.addBank(bank).send({from : currAddress}).
        then(res=>{
            console.log(res)
            setLoading(true)
            setadding(false)
            dispatch(togleAddMenu())

        }).catch(err=>{
            setLoading(true)
            setadding(false)
            console.log(err)
            alert("Somthing went wrong. Please Contact admin.")
        })
    }
  return (
    <div>
        <div className="w-3/4 " style={{position : "absolute",top:"20%" , left : "30%"}}>
            <form className=" shadow-2xl bg-white border-2 border-primary shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4">
                <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Name
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" onChange={event=>setname(event.target.value)}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Email
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={event=>setemail(event.target.value)}/>
                </div>
                <div className='mb-6'>
                <label className="block text-gray-700 text-sm  font-bold mb-2" htmlFor="ifsc">
                   IFSC
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc" type="text" onChange={event=>setifsc(event.target.value)}/>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ifsc">
                    MetaMask Address 
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="metaMaskAddress" type="text" onChange={event=>setmetaMaskAddress(event.target.value)}/>
                 
                <div className="flex items-center justify-between">
                    
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleAdd} >
                    {adding? "Adding, Please wait....":"Add"}
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline " type="button" onClick={()=>dispatch(togleAddMenu())}>
                    Cancel
                </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}
