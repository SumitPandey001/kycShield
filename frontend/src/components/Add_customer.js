import React, {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { togleAddMenu } from '../actions'
import {abi} from "../abi"

export default function Add({contract, currAddress,isLoading,setLoading}) {
    const dispatch = useDispatch();
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [mobile,setmobile] = useState('');
    const [metaMaskAddress,setmetaMaskAddress] = useState('');
    const [message,setmessage] = useState('');
    const [DataHash, setDatahash] = useState('');
    // function upload() {
    //     const reader = new FileReader();
    //     reader.onloadend = function() {
    //       const ipfs = window.IpfsApi('localhost', 5001) // Connect to IPFS
    //       const buf = buffer.Buffer(reader.result) // Convert data into buffer
    //       ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
    //         if(err) {
    //           console.error(err)
    //           return
    //         }
    //         let url = `https://ipfs.io/ipfs/${result[0].hash}`
    //         console.log(`Url --> ${url}`)
    //         document.getElementById("url").innerHTML= url
    //         document.getElementById("url").href= url
    //         document.getElementById("output").src = url
    //       })
    //     }
    //     const photo = document.getElementById("photo");
    //     reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
    //   }
    function js_time_to_epoch(d){ 
        return Math.floor( d / 1000 ); 
    }
    
    async function handleAdd(){
        let iskycdone = false
        const reqid = metaMaskAddress+currAddress
        setLoading(false)
        contract.methods.kycRequestExists(reqid).
        call({from : currAddress}).
        then(res=>{
            console.log(res)
            iskycdone = res;
        }).
        catch(err=>{
            alert("Something went wrong.See console for more info.")
            console.log(err)
        })
        console.log("clicked")
        console.log(currAddress)
        setLoading(true)
        console.log(name,email, mobile, metaMaskAddress)

        const customer = {
            name: name,
            email : email,
            id_ : metaMaskAddress,
            mobileNumber: 7894612310,
            kycVerifiedBy: "0x0000000000000000000000000000000000000000",
            dataHash: "QmahBFWv89M28e3qkMp8deSD2u4ihHntUHAURWBH1QiCB6",
            dataUpdatedOn: 0, // time when data hash updates
        }
        if(iskycdone)
            setmessage("Your KYC is done.\nPlease accept/reject request.")
        contract.methods.addKycRequest(customer,js_time_to_epoch(new Date()),message).send({from : currAddress}).
        then(res=>{
            console.log(res)
            setLoading(false)
        }).catch(err=>{
            console.log(err)
        })
        dispatch(togleAddMenu())
    }
  return (
    <div>
        
        <div className="w-3/4 " style={{position : "absolute",top:"20%" , left : "30%"}}>
            <span className='text-2xl text-primary p-1'>Add KYC Request</span>
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
                    Mobile No.
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc" type="number" onChange={event=>setmobile(parseInt(event.target.value,10))}/>
                </div>
                <div className='mb-6'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="ifsc">
                    MetaMask Address 
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="metaMaskAddress" type="text" onChange={event=>setmetaMaskAddress(event.target.value)}/>
                </div>
                <div className='mb-6'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="ifsc">
                    Notes / Message for customer  
                </label>
                <textarea className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="metaMaskAddress" type="text" onChange={event=>setmessage(event.target.value)}/>
                </div>

                {/* <div className='mb-6'>
                <label className="block text-gray-700 text-sm  font-bold mb-2" for="ifsc">
                    Upload Files
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc" type="file" multiple />
                </div> */}
                 
                <div className="flex items-center justify-between">
                    
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleAdd} >
                    {isLoading ? "Please Wait": "Add"}
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
