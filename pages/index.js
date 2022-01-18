import Head from 'next/head'
import Image from 'next/image'
import Web3 from "web3"
import Hedr from '../comps/Hedr'
import { useEffect, useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Navbar from '../comps/Navbar'
import Chart from '../comps/Chartnew'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import Card2 from './Card2'
import Table from './Table'

export default function Home() {

  const [data, setData] = useState([])
  console.log(data.extraData,"data called")
  
  useEffect(() => {
    sample();
  }, [])
  const sample = async () => {
   
    const web3 = new Web3();
 
    web3.setProvider("https://testnet.dexit.network");
   
    console.log("web3: ", web3);

    let ab = await web3.eth.getBlock("latest");
    
    setData(JSON.stringify(ab));
  }

 
   
 
  return (
    <div className="bg">
      <div id="mytitle"  ><h1 >Dexit Blockchain Explorer</h1></div>

    {console.log("block data",Object.keys(data) ,Object.values(data))}
      <Navbar />
      <Chart />
      
      <div id="newid">
       
        <Table data={data}/>
    
      </div>

    
    </div>
  )

}
