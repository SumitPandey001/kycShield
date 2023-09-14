import Header from "../components/Header";
import Stats from "../components/Stats";
import List from '../components/List'
import Add from "../components/Add_bank";
import { useState,useEffect } from "react"
import React from 'react';
import { useSelector } from 'react-redux';
import Loading from "../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import Pagination from "../components/Pagination";

export default function Dashboard({setconnected,currAddress,contract,currUser}) {
    console.log(currUser)
    const open = useSelector(state => state.open);
    const [banksList , setbanklist] = useState([]);
    const [activebank,setactivebank] = useState();
    const [totalbank,settotalbank] = useState();
    const [isLoading, setLoading]  = useState(true);
    const [searching,setsearching] = useState(false);
    const [searchresult,setsearchresult] = useState();
    const [page,setpage] = useState('8');
    const [totalpage,settotalpage] = useState('0');

    const FI = ['fi','Registered Cases','Approved Cases', 'Rejected Cases']
    const admin = ['admin','Total Institution/s','Active Institution/s', 'Inactive Instition/s']
    // const user = ['user','Registered Cases','Approved Cases', 'Rejected Cases']
    useEffect(() => {
        
        
        contract.methods.getAllBanks('1').call({from : currAddress})
        .then(res=>{
            console.log(res)
            setbanklist(res)
            setLoading(false)
            settotalpage(res.totalPages)
            console.log(totalpage)
            let c = 0;
            console.log(banksList)
            banksList[1].forEach(element => {
                if(element.status == '0')
                    c++;
                });
                setactivebank(c)
                
        }).then(()=>{
                settotalbank(banksList[1].length)
        }).catch(err=>{
                console.log(err)
        })
            
        }, [isLoading])
        // console.log(contract.events.BankActivated())
    function closeSearch(){
        setsearching(false)
    }
  return (
    <div>
        {isLoading ? <Loading/>: ""}
        <ToastContainer/>
        <Header where={"dashboard"} setconnected={setconnected} currAddress={currAddress} currUser={currUser} />
        {console.log(open)}
        {open?<Add contract={contract} currAddress={currAddress} setLoading={setLoading} isLoading={isLoading}/>:
        <div className="flex w-screen justify-between gap-2">
            <div className="w-1/5 ">
                <Stats props={admin} total={totalbank} active={activebank} />
            </div>
            <div className=" w-4/5 ">
                <div className="w-2/4 p-2 ">
              
                </div>
                <h1 className="text-2xl text-bold p-4">Financial Institutions </h1>
                {/* {searching && isLoading == false? <div className="border-2 rounded-md p-2 text-primary ">Search Result <AiOutlineClose size={"1.2rem"} className="inline cursor-pointer" onClick={closeSearch}/><List element={searchresult}></List></div>:""} */}
                    {!isLoading ? banksList[1].map(element => <List key={element.id_} element={element} contract={contract} currAddress={currAddress} setLoading={setLoading}/>):<Loading/>}
            </div>
            <div className="fixed-bottm flex justify-center fixed-bottom fixed bottom-8 w-screen">
                {/* <AiFillCaretLeft className="cursor-pointer"/>
                <AiFillCaretRight className="cursor-pointer"/> */}
                {!isLoading? 
                <Pagination page={page} totalpage={totalpage} setpage={setpage}/>:""}
            </div>
        </div>}
    </div>
  )
}
