import React from 'react'
import Header from '../components/Header_';
import Landing from '../components/Landing';
import Footer from '../components/Footer'

export default function Home({setconnected,currAddress,contract,currUser}) {
  return (
    <div>
        <Header setconnected={setconnected} currAddress={currAddress} contract={contract} currUser={currUser}  />
        <Landing/>
        <Footer/>
    </div>
  )
}
