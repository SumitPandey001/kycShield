import React from 'react'
import './Toggle.css'
import {AiFillEye} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import {GiCancel} from 'react-icons/gi'

export default function List ({element,currAddress,contract,setLoading}) {
   
    // function handleChange(event) {
    //     let option = event.target.value
    //     let address = event.target.id;
    //     console.log(address)
    //     if(element.status == mapping[option])
    //         alert("Option already selected")
    //     else {
        
    //         if(isactive == "0"){
    //             console.log("hrtr")
    //             contract.methods.activateDeactivateBank(address,false).
    //             send({
    //                 from : currAddress
    //             }).
    //             then(res=>{console.log(res); window.location.reload();}).
    //             catch(err=>console.log(err))
                
    //         }
    //         else contract.methods.activateDeactivateBank(address,true).
    //             send({
    //                 from : currAddress
    //             }).
    //             then(res=>{console.log(res); window.location.reload();}).
    //             catch(err=>console.log(err))
           
    //     }
    // }
    function switchCase(case_) {
        if(case_ == "0")
          return <div className='px-6 rounded rounded-12 max-h-8 py-1 text-white bg-orange-600'>
          Pending
      </div>
        else if(case_ == "1")
          return <div className='px-6 h-8 rounded rounded-12 py-1 text-white bg-green-600'>
          Approved
      </div>
        else if(case_ == "2")
          return <div className='px-6 h-8 rounded rounded-12 py-1 text-white bg-red-600'>
          Rejected
      </div>
        else 
          return "Somthing went wrong ..."
    }
    function verifyHandler() {
      setLoading(false)
      if(element.status != "1")
      contract.methods.updateKycVerification(element.userId_,true,"Your KYC has been verified").send({from : currAddress}).
      then(res=>{
        console.log(res);
        setLoading(true)
      }).catch(err=>{
        console.log(err)
      })
      else alert("Already Verified")
    }
    function verifyHandler_() {
      let message = prompt("Enter the reason for the rejection.")
      setLoading(true)
      if(element.status != "2")
      contract.methods.updateKycVerification(element.userId_,false,"Your KYC has been rejected.\n"+message).send({from : currAddress}).
      then(res=>{
        console.log(res)
        setLoading(false)
      }).catch(err=>{
        console.log(err)
      })
      else alert("Already Cancelled")
    }
  return (
    <div className=' mx-2 my-4 flex  justify-around  py-3 text-extrabold rounded-32 rounded border-2 border-primary text-primary'>
        <div className=' text-bold basis-8 px-4' >
            {element.customerName}
        </div>
        {switchCase(element.status)}
        <div className='  basis-32 h-8 px-2 ' >
            {element.userId_}
        </div>
        <div className=''>
            {element.additionalNotes}
        </div>
        <div className='flex justify-arround items-center'>
          <button className=' text-primary px-2 py-1 hover:bg-primary hover:text-white' onClick={verifyHandler} title="Verify Reqeuest"><MdDone size={'1.5rem'}/></button>
          <button className=' text-primary px-2 py-1 hover:bg-primary hover:text-white' onClick={verifyHandler_} title="Cancel KYC"><GiCancel size={"1.5rem"}/></button>
        <div className='text-primary px-2 py-1 hover:bg-primary hover:text-white'>
            <AiFillEye onClick={()=>{element.dataHash != 'QmahBFWv89M28e3qkMp8deSD2u4ihHntUHAURWBH1QiCB6' ? window.open("https://cloudflare-ipfs.com/ipfs/"+element.dataHash,'_blank'):alert("No document available")}} size={"1.5rem"} className="cursor-pointer mt-1"/>
        </div>
        </div>   
    </div>
  )
}
