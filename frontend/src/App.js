import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css';
import Dashboard_admin from "./pages/Dashboard_admin";
import Dashboard_fi from "./pages/Dashboard_fi";
import Dashboard_customer from "./pages/Dashboard_customer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import {abi} from './abi'
import Web3 from "web3";
import Profile from "./pages/Profile";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const address = '0x65Af70a6Ca0Db5F7FD3fb96051DDC360E0fdbBa7'
  const address = '0xA9597d601A0De7701650B93A1738985c057AF01A'
  const [isLoading,setLoading] = React.useState(true);
  const [role,setrole] = React.useState();
  const [contract, setcontract] = React.useState(null);
  const [isConnected, setconnected] = React.useState(false);
  const [currAddress, setCurrAddress] = React.useState('');
  const [currUser,setcurrUser] = React.useState();
  const [error ,seterror] = React.useState('');
  if(typeof window.ethereum === 'undefined')
    console.log("MetaMask is not installed.")
  const web3 = new Web3(window.ethereum);

  async function getaccount() {
    try{
      let response = await web3.eth.getAccounts()
      let account = response[0];
      console.log("account" +account)
      if(account === undefined)
        alert("Unable to fetch address")
      setCurrAddress(account);
      setLoading(false)
    }
    catch(err){
      console.log("Error")
    }
    
  }
  window.ethereum.on('accountsChanged',(accounts)=>{
    setCurrAddress(accounts[0])
  })
  // web3.eth.getAccounts().then(res=>{
  //   setCurrAddress(res[0])
  //   setcontract(new web3.eth.Contract(abi,address))
  //   setLoading(false)
  // })
  
  React.useEffect(()=>{
    setcontract(new web3.eth.Contract(abi,address))
    getaccount()
  },[])
  React.useEffect(()=>{
    if(error !== '')
      alert(error)
  },[error])
  if(!isLoading){

    contract.events.BankActivated((err,res)=>{
      toast(res.returnValues.name + " "+res.event)
    })
    contract.events.BankDeactivated((err,res)=>{
      toast(res.returnValues.name + " "+res.event)
    })
    contract.events.KycStatusChanged((err,res)=>{
      toast("Kyc Status Changed")
    })
    // console.log(contract)
    // console.log(contract)
    contract.methods.whoAmI().call({from : currAddress})
    .then(res=>{
      console.log(res.name)
      setcurrUser(res.name)
      setrole(res.role)
    }).catch(err=>{
      if(err.message.substring(20,35) === 'Sender Id Empty'){
          seterror('Please connect to the MetaMask')
      }

      else{
        seterror("Somthing went wrong.Please see logs.")
        console.log(err.message)
      }
    })
    
  }
  function switchCase(case_) {
    if(currAddress == 'undefined')
      return "Please select valid account"
    if(case_ == "0")
      return <Dashboard_admin setconnected={setconnected} currAddress={currAddress} contract={contract} currUser={currUser} />
    else if(case_ == "1")
      return <Dashboard_fi setconnected={setconnected} currAddress={currAddress} contract={contract} currUser={currUser}/>
    else if(case_ == "2")
      return <Dashboard_customer setconnected={setconnected} currAddress={currAddress} contract={contract} currUser={currUser}/>
    else 
      return <Loading/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home setconnected={setconnected} currAddress={currAddress}/>} contract={contract} currUser={currUser} />
          <Route path="/dashboard" element={switchCase(role)}/>
          <Route path="/dashboard/profile" element={role == '2' ? <Profile contract={contract} currAddress={currAddress}/>: "404"}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
