import React from 'react'
import './Toggle.css'
import {AiFillDelete} from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify';

export default function List ({element,contract,currAddress,setLoading}) {
    const [isactive,setactive] = React.useState(element.status);
    const mapping = {
        'on' : '0',
        'off' : '1'
    }
    function handleChange(event) {
        
        let option = event.target.value
        let address = event.target.id;
        console.log(address)
        if(element.status == mapping[option])
            alert("Option already selected")
        else {
            
            if(isactive == "0"){
                console.log("hrtr")
                contract.methods.activateDeactivateBank(address,false).send({from : currAddress}).
                then(res=>{console.log(res);
                    setLoading(true)
                }).
                catch(err=>console.log(err))
                
            }
            else contract.methods.activateDeactivateBank(address,true).
                send({
                    from : currAddress
                }).
                then(res=>{console.log(res);setLoading(true)}).
                catch(err=>console.log(err))
           
        }
    }
  return (
    <div className=' mx-2 my-4 flex justify-around  py-3 text-extrabold rounded-32 rounded border-2 border-primary text-primary'>
        <div className=' text-bold basis-8 max-h-fit ' title={element.name}>
            {element.name}
        </div>
        {element.status == "0" ? <div className='px-6 rounded h-8 rounded-12 py-1 text-white bg-green-600'>
            Active
        </div>: <div className='px-6 rounded rounded-12 py-1 text-white bg-red-600'>
            Not Active
        </div> }
        <div className='  basis-32' >
            {element.id_}
        </div>
        <div className='border-2 h-8'>
            <select name="cars" id={element.id_} className='outline-none' onChange={handleChange}>
                {element.status == "0" ? <><option value={"on"} >Activate</option> <option value={"off"} >Deactivate</option></>:<><option value={"off"} >Deactivate</option> <option value={"on"} >Activate</option></>}
                
            </select>
        </div>   
        {/* <div>
            <AiFillDelete size={"1.5rem"} className="cursor-pointer"/>
        </div> */}
    </div>
  )
}
