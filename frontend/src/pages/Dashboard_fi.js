import Header from "../components/Header";
import Stats from "../components/Stats";
import List from '../components/List_customer'
import Add from "../components/Add_customer";
import SearchBar from "../components/SearchBar";
import React , {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai'
import Pagination from '../components/Pagination'

export default function Dashboard({contract,currAddress,currUser}) {
    const open = useSelector(state => state.open);
    const [isLoading,setLoading] = useState(true);
    const [issLoading,setsLoading] = useState(true)
    const [searching,setsearching] = useState(false);
    const [searchresult,setsearchresult] = useState();
    const [regsitered,setregistered] = useState(0);
    const [active,setactive] = useState(0);
    const [inactive,setinactive] = useState(0);
    const FI = ['fi','Registered Cases','Approved Cases', 'Rejected Cases']
    const [customers,setcustomers] = useState();
    const [page,setpage] = useState('8');
    const [totalpage,settotalpage] = useState('0');
    useEffect(() => {
        contract.methods.getCustomersOfBank('1').call({from : currAddress}).
        then(res=>{
            // console.log(res[1])
            setcustomers(res)
            settotalpage(res.totalPages)
            setLoading(false)
            console.log(customers)
            let c = 0;
            let r = 0;
            for(let i = 0; i< res[1].length; i++){
                // console.log(res[1][i])
                if(res[1][i].status == "1")
                    c++;
                else if(res[1][i].status == '2')
                    r++
            }
            setactive(c)
            setinactive(r)
            setregistered(r+c)
            console.log(active)
            // setbanklist(res)
            // setLoading(false)
            // let c = 0;
            // banksList[1].forEach(element => {
            //     if(element.status == '0')
            //         c++;
            // });
            // setactivebank(c)
            // settotalbank(banksList[1].length)
        })
    }, [isLoading])
    function closeSearch(){
        setsearching(false)
    }
  return (
    <div >
        <Header where={"dashboard"} currUser={currUser}/>
        {console.log(open)}
        {open?<Add contract={contract} currAddress={currAddress} isLoading={isLoading} setLoading={setLoading}/>:
        <div className="flex w-screen justify-between gap-2">
            <div className="w-1/5 ">
                {!isLoading? <Stats props={FI} active={active} total={regsitered}/> : "Please wait ....."}
            </div>
            <div className=" w-4/5 bg-white ">
                <div className="w-2/4 p-2 ">
                    <SearchBar contract={contract} setsearchresult={setsearchresult} currAddress={currAddress} setsearching={setsearching} setLoading={setsLoading} where={'fi'} />
                </div>
                <h1 className="text-2xl text-bold p-4">Customers</h1>
                {searching? <div className="border-2 rounded-md p-2 text-primary ">Search Result <AiOutlineClose size={"1.2rem"} className="inline cursor-pointer" onClick={closeSearch}/>{!issLoading?<List element={searchresult[2]}></List>:""}</div>:""}
                {!isLoading ? customers[1].map(element =>
                    <List element={element} key={element.userId_} contract={contract} currAddress={currAddress} setLoading={setLoading}/>)
                :"None"}
            </div>
            <div className="fixed-bottm flex justify-center fixed-bottom fixed bottom-8 w-screen">
                {!isLoading? 
                <Pagination page={page} totalpage={totalpage} setpage={setpage}/>:""}

            </div>
        </div>}
        
    </div>
  )
}
