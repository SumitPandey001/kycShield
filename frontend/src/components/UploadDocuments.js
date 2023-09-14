import React,{useState} from 'react'

import { NFTStorage, File } from 'nft.storage'
import './BoxStyle.css'

// const { NFT_STORE_API_KEY } = process.env;
const NFT_STORE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE2QTFFNjZEOUIwMTQzOUQxYThhOWZCNEVjRWYyN0ZGRUE0NjBFNTMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODc2NTUxNDE2MSwibmFtZSI6Imt5Y2FwcCJ9.JFPEdGvBKmZgQCq60w37j8N6SyE9kMP2EjAOeqI2YZY'
function js_time_to_epoch(d){ 
    return Math.floor( d / 1000 ); 
}

export default function UploadDocuments({setopen,isopen,contract,currAddress,bankId_}) {
    const [file,setfile] = useState();
    const [fileUrl,setFileUrl] = useState('');
    const [hash,sethash] = useState('');
    const [message,setmessage] = useState('');
    const [kycAction,setkycAction] = useState();
    // nft storage function 
    // https://cloudflare-ipfs.com/ipfs/{id}/file
    const storeAsset = async () => {
        const client = new NFTStorage({ token: NFT_STORE_API_KEY });
        const metaData = await client.store({
          name: "document",
          description: "Upload Document",
          image: new File([file], "document", {
            type: file.type,
          }),
        });
        console.log(metaData)
        let hashString = metaData.data.image.pathname 
        hashString = hashString.replace("//","");
        sethash(hashString)
        console.log("hash " +hash)
        return metaData.url;
      };
    // input change handler
    function changeHandler(event) {
        setfile(event.target.files[0])
        console.log(event.target.files)
    }

    // from submit handler
    async function submithandler(event){
        event.preventDefault()
        console.log(file)
        const client = new NFTStorage({ token: NFT_STORE_API_KEY });
        const metaData = await client.store({
          name: "document",
          description: "Upload Document",
          image: new File([file], "document", {
            type: file.type,
          }),
        });
        console.log(metaData)
        let hashString = metaData.data.image.pathname 
        hashString = hashString.replace("//","");
        console.log("hash " +hashString)
        // contract.methods.updateDatahash(response.data.hash,js_time_to_epoch(new Date())).send({from : currAddress}).then((res)=>{
        //     console.log(res)
        //     setopen(false)
        // }).catch(err=>{
        //     console.log(err)
        // })
        // const form = new FormData()
        // form.append('image',file,file.name)
        // let url = ''
        // if(window.location.hostname == 'localhost')
        //     url = 'http://localhost:3002/api/image-upload'
        // else url = 'http://192.168.43.85:3002/api/image-upload'
        // const response = await axios.post(url,form)
        // console.log(response)
        // sethash(response.data.hash)
        // setmessage(response.message)
        alert("Uploaded with hash : "+hashString)
        contract.methods.updateDatahash(hashString,js_time_to_epoch(new Date())).send({from : currAddress}).then((res)=>{
            console.log(res)
            setopen(false)
        }).catch(err=>{
            console.log(err)
        })
    }
    // button handler reject
    function KycrequestHandler_reject() {
        let op = window.confirm("Are You sure that, you are Rejeecting the Request.\nThe bank will be not be able to read your data and documents..\nAnd your KYC request will be dumbed.\nTalk to the bank for more info.")
        if(op)
            contract.methods.actionOnKycRequest(bankId_,false,"Kyc Request Accepted").send({from : currAddress}).
            then(res=>{
                console.log(res)
                setopen(false)
            }).catch(err=>{
                console.log(err)
            })
    }
    // button handler accept
    function KycrequestHandler_accept() {
        let op = window.confirm("Are You sure that, that you are accepting the Request.\nThe bank will be able to read your data and documents.")
        if(op)
            contract.methods.actionOnKycRequest(bankId_,true,"Kyc Request Accepted").send({from : currAddress}).
            then(res=>{
                console.log(res)
                setopen(false)
            }).catch(err=>{
                console.log(err)
            })
    }
    // return of jsx
    return (
        <div className='absolute top-0 h-screen w-screen right-0' style={{background : "rgba(255,255,255,0.5)"}}>
            <div class="callout">
                <div class="callout-header bg-primary ">Action: Upload Documents</div>
                <span class="closebtn" onClick={()=>{setopen(false)}}>&times;</span>
                <div class="callout-container bg-white">
                    <form onSubmit={submithandler}>
                    <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Update/Upload Documents</label>
                        <input  type="file" id='img' accept='image/jpg' name='image' onChange={changeHandler} className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        <button type="submit" className='text-white px-2 py-1 bg-primary rounded-lg'>Upload/Update</button>

                    </form>
                    <span>{message}</span>

                    {/* <div className='mt-8'>
                        Grant Permission <span className='bg-white rounded-full px-2 cursor-pointer' title='Provide Your Response for wheather you would like to allow bank to use for document'>i</span> : <button className='text-white border-0 rounded-md bg-green-600 px-2 py-1'>YES</button> <button className='text-white border-0 rounded-md bg-red-600 px-2 py-1'>NO</button> 
                    </div> */}
                    <div className='mt-8'>
                        KYC Response <span className='bg-white rounded-full px-2 cursor-pointer' title='Provide Your Response for wheather you would like to allow bank to use for document/KYC'>i</span> : <button className='text-white border-0 rounded-md bg-green-600 px-2 py-1' onClick={KycrequestHandler_accept}>Accept</button> <button className='text-white border-0 rounded-md bg-red-600 px-2 py-1' onClick={KycrequestHandler_reject}>Reject</button> 
                    </div>
                </div>
                {/* <div className='' >
                        {typeof fileString != 'undefined' ? <img src={fileString} alt="Uploaded Image"/> : ""}
                </div> */}
            </div>
        </div>
    )
}
