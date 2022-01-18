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
 
    web3.setProvider("http://dataFeed.dexit.network");
    console.log("blocknumber")
    let blockNumber = 3209;
    console.log("We process block: " + blockNumber);
    let block = await web3.eth.getBlock(blockNumber);
    console.log("new block :", block)
    let newdata= block.transactions.map(async (e)=>{
      console.log("eeeee",e)
      let transaction = await web3.eth.getTransaction(e).then((e)=>{
        console.log("Eeee",e)
       
        if(e.gas ||e.gasPrice ||e.input){
         console.log("Eeee",e.input)
         return null

       }

       else{
        return e

       }

      });
      console.log("transa",transaction)
        let transactionReceipt = await web3.eth.getTransactionReceipt(e);

        console.log("transactionreceipot",transactionReceipt)
    })
    
  }

 
   
 
  return (
    <div className="bg">
      <div id="mytitle"  ><h1 >Dexit Blockchain Explorer</h1></div>

    {console.log("ahghga",Object.keys(data) ,Object.values(data))}
      <Navbar />
      <Chart />
      
      <div id="newid">
       
        <Table data={data}/>
        {data.map((e,i)=>{
          return(
            <><td> {e.extraData} </td></>
          )
        })}
      </div>

      {data ===undefined?"":data} */

      <div></div>

      <footer className="">
       

        <span className="">

        </span>

      </footer>
    </div>
  )

}
