import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {MdKeyboardBackspace} from "react-icons/md"

export default function Profile({contract,currAddress}) {
  const [state,setState] = useState();
  const [isLoading,setLoading] = useState(true);
  const [drawerOpen,setdrawer] = useState(false);

  useEffect(() => {
    contract.methods.getCustomerDetails(currAddress).call()
    .then(res=>{
        setState(res)
        console.log(state)
        setLoading(false)
    }).catch(err=>{
        console.log(err)
    })
  }, [isLoading]);  
  return (
    //#256D85
    <div className='flex flex-col items-center h-screen'>
        <div className="flex bg-primary text-white w-full md:justify-between justify-center">
            <Link to="/dashboard" className=''><MdKeyboardBackspace color='white' size={"2.5rem"}/></Link>
        </div>
        <main className="profile-page ">
            {!isLoading && !drawerOpen?
            <section className="relative p-8 bg-blueGray-200 text-primary rounded-lg">
                <div className="flex flex-col items-center justify-center h p-8 bg-gray-200">
                    <h1 className="text-3xl font-bold">{state.name}</h1>
                    <p className="text-gray-600">{state.id_}</p>
                    <p className="text-gray-600">{state.dataHash}</p>
                    <p className="text-gray-600">{state.email}</p>
                    <a href='https://addr-key.netlify.app/' target='_blank' className='m-4 rounded bg-primary text-white p-2'>Address-Key site</a>
                </div>
            </section>: "" }
        </main>
        {!drawerOpen ? 
        <div className='p-8' id='#docs'>
            <span className='text-primary'>Uploaded Documents : </span>
            <div className='flex justify-between items-start gap-8 my-2'>
                {/* <div className='p-4 border-2 border-primary transition-all rounded-lg hover:p-8' onClick={()=>{setdrawer(true)}}>
                        <img src={!isLoading && typeof state != 'undefined' ?`https://cloudflare-ipfs.com/ipfs/${state.dataHash}`: "#"} alt="document not loading" className='w-36'></img>
                </div> */}
                <object className='border-2 border-primary'
                data={!isLoading && typeof state != 'undefined' ?`https://cloudflare-ipfs.com/ipfs/${state.dataHash}`: "#"}
                type="application/pdf"
                width="550px"
                height="600px" >
                    <p>
                        This browser does not support PDFs. Please download the PDF to view it:
                        <a href={``}>Download PDF</a>.
                    </p>
                </object>
            </div>
           <div className='p-4'>
           
            File : <a href={!isLoading ?`https://cloudflare-ipfs.com/ipfs/${state.dataHash}`:""} target='_blank' className='cursor-pointer rounded text-primary hover:bg-primary hover:text-white border-2 border-primary p-2'>Click to open file</a>
           </div>
        </div>:""}
        {drawerOpen ?
        <div className='absolute top-0 left-0 heigth-screen px-4 py-8'>
            <div className='text-primary text-2xl p-2 cursor-pointer' onClick={()=>{setdrawer(false)}}>X</div>
            <img src={!isLoading ?`https://cloudflare-ipfs.com/ipfs/${state.dataHash}`: "#"} alt="document not loading"  ></img>
        </div> : ""}
    </div>
  )
}
