import React from 'react';
import { Link } from 'react-router-dom';


export default function DocumentViewer({contract,currAddress}) {
    const [state,setState] = React.useState();
    const [isLoading,setLoading] = React.useState(true);
   
    React.useEffect(() => {
        contract.methods.getCustomerDetails(currAddress).call({from : currAddress})
        .then(res=>{
            setState(res)
            console.log(state)
            setLoading(false)
        }).catch(err=>{
            console.log(err)
        })
      }, [isLoading]); 
  return (
    <div>
        <div className='absolute top-0 left-0 heigth-screen px-4 py-8'>
            <div className='text-primary text-2xl p-2 cursor-pointer'><Link to="/">X</Link></div>
            <img src={!isLoading ?`https://cloudflare-ipfs.com/ipfs/${state.dataHash}`: "#"} alt="document not loading" className='w-8' ></img>
        </div>
        
    </div>
  )
}
