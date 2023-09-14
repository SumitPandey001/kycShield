import React,{useEffect,useState} from 'react';
import Header from "../components/Header";
import List from '../components/List_Kyc';
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import { useSelector } from 'react-redux';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai'

export default function Dashboard({contract, currAddress,currUser}) {
    const open = useSelector(state => state.open);
    const [isLoading,setLoding] = useState(true);
    const [kycRequests,setKycRequests] = useState();
    const [issLoading,setsLoading] = useState(true);
    const [searching,setsearching] = useState(false);
    const [searchresult,setsearchresult] = useState({});
    const [page,setpage] = useState('8');

    useEffect(() => {
        contract.methods.getBankRequests("1").call({from : currAddress}).then(res=>{
            console.log(res[1])
            setKycRequests(res[1])
        }).then(()=>{setLoding(false)}).catch(err=>{
            console.log("err in fetching kyc requests")
        })
    }, []);
    function closeSearch(){
        setsearching(false)
    }
  return (
    <div >
        <Header where={"dashboard"} currUser={currUser} />
        {console.log(open)}
        {isLoading == true?"":
        <div className="flex w-screen justify-between gap-2 px-4 ">
            
            <div className=" w-full ">
                <div className='flex items-center justify-between'>
                    <div className="w-2/4 p-2 ">
                        <SearchBar where={"customer"} contract={contract} setsearchresult={setsearchresult} currAddress={currAddress} setsearching={setsearching} setLoading={setsLoading}/>
                    </div>
                    <div className='p-2'>
                        <Link to="/dashboard/profile" ><CgProfile color='#256D85' size={"2.1rem"} className="ml-1 rounded-full border-0 hover:shadow-lg text-primary"/><span className='text-primary'>Profile</span></Link>
                        
                    </div>
                </div>
                
                <h1 className="text-2xl text-bold p-4 text-primary">KYC Requests </h1>
                {searching? <div className="border-2 rounded-md p-2 text-primary ">Search Result <AiOutlineClose size={"1.2rem"} className="inline cursor-pointer" onClick={closeSearch}/>{!issLoading?<List element={searchresult[2]}></List>:""}</div>:""}
                {!isLoading ? kycRequests.map(element=>{
                   return <List element={element} contract={contract} currAddress={currAddress} key={element.bankId_}/>
                })  : "Loding Please wait...."}
                
            </div>
        </div>}
    </div>
  )
}
