import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Web3 from "web3"
import Hedr from '../comps/Hedr'
import { useEffect, useState } from 'react'
// import "./Navbar.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Navbar from '../comps/Navbar'
import Chart from '../comps/Chartnew'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import Test from './Test/Test'
//import Link from 'next/link'
//import { MegaMenu } from 'primereact/megamenu';
//import styles from '../styles/Navbar.module.css'
import Mycard from './myCard'
import Card2 from './Card2'
//import ReactJson from 'react-json-view'
import Table from './Table'

export default function Home() {

  const [data, setData] = useState([])
  console.log(data.extraData,"data called")
  useEffect(() => {
    sample();
  }, [])
  const sample = async () => {
    //console.log("sample")
    const web3 = new Web3();
    // web3.setProvider("http://dexit.imentus.com");
    // console.log("web3: ", web3);

    // let ab = await web3.eth.getBlock("latest");
    // console.log("tttttttttttttthefjherfef", ab)
    // setData(ab)

    // let web3 = new Web3();
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
    // if (temp) {
    //   console.log("temp: ", temp);
    // }
    //var hash =await temp;

    //  var x=  
    // console.log('x is', x);

    // function temp1(props){
    //   return <div>props.number </div>
    // }

    // function demo(){
    //   let temp2 = JSON.parse(JSON.stringify(temp));

    //   return(
    //     <pre>{JSON.stringify(data, null, 2)}</pre>

    //   )
  }

  async function testing(){

    // let bc= data.map(e=>{
    //    return (<div>
    //      {e}
    //    </div>)
    //  })
    //  return bc;
     // Object.keys(ab).map(key =>{ return <div> {key}: {ab[key]} </div>})
   }
   
  //setData(data);

  // for (const [key, value] of Object.entries(temp)) {
  //     console.log(`${key}: ${value}`);
  //   }
  // }

  //       var array1= new Array();
  //       array1= Object.entries(temp);


  //       console.log("this is arr[]",array1);
  //       console.log("array.length",array1.length);
  // }
  // async function takejson(){
  //   const web3 = new Web3();
  //   web3.setProvider("http://dexit.imentus.com");
  //    await web3.eth.getBlock(349, "true").then(console.log("txns====>>", txn)) ;
  // }
  return (
    <div className="bg">
      <div id="mytitle"  ><h1 >Dexit Blockchain Explorer</h1></div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    {console.log("ahghga",Object.keys(data) ,Object.values(data))}
      <Navbar />
      <Chart />
      {/* <Test abc="abc"/> */}
      {/* <ReactJson src={temp} /> */}
      <div id="newid">
        {/* <Tempdata data= {data}/> */}
        <Table data={data}/>
        {data.map((e,i)=>{
          return(
            <><td> {e.extraData} </td></>
          )
        })}
      </div>
      {/* <Mycard className='bdr' /> <Card2 className='cardi' /> */}
      {/* <button onClick={() => }>
    Click me
  </button> */}
      {data ===undefined?"":data} */

      <div></div>

      <footer className="">
        {/* <Link href=/> <a> </a></Link> */}

        <span className="">

        </span>

      </footer>
    </div>
  )

}
