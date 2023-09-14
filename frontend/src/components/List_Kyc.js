import React from 'react'
import './Toggle.css'
import {AiOutlineUpload,AiFillEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import UploadDocuments from './UploadDocuments';

export default function List ({element,contract,currAddress}) {
    const [isopen,setopen] = React.useState(false);
    
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
          return <div className='px-6 rounded rounded-12 py-1 text-white bg-green-600'>
          Approved
      </div>
        else if(case_ == "2")
          return <div className='px-6 rounded rounded-12 py-1 text-white bg-red-600'>
          Rejected
      </div>
        else 
          return "Somthing went wrong ..."
      }
  return (
    <div className=' mx-2 my-4 flex justify-around  py-3 text-extrabold rounded-32 rounded border-2 border-primary text-primary'>
        <div className=' text-bold basis-8' >
            {element.bankName}
        </div>
            {}
        <div className='basis-32' >
            {switchCase(element.status)}
        </div>
        <div className='w-1/4'>
            {element.additionalNotes}
        </div>   
        <div className='flex justify-between items-center'>
            <button className=' text-primary px-2 mt-2 py-1' title="Upload" onClick={()=>{setopen(true)}}><AiOutlineUpload size={"1.7rem"}/></button>
            <Link to={`/dashboard/profile#docs?hash=${element.dataHash}`}><AiFillEye size={"1.5rem"}/></Link>
            <button className='border-2 bg-primary rounded-lg ml-2 text-white px-2 py-1' onClick={()=>{setopen(true)}}>Action</button>
        </div>
        {isopen !=false ? <UploadDocuments setopen={setopen} isopen={isopen} contract={contract} currAddress={currAddress} bankId_={element.bankId_}/> : ""}
    </div>
  )
}
