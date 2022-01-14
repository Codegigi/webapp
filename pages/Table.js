
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Web3 from "web3"


const Table = () => {
    const [data, setData] = useState([])

    const [products, setProducts] = useState([]);

    useEffect(() => {
        abc()
    }, [products]);


    async function abc() {

        const web3 = new Web3();
        web3.setProvider("http://dataFeed.dexit.network");
        console.log("web3: ", web3);

        let ab = await web3.eth.getBlock("latest");
        console.log('latest block data', ab)
        setData(ab)
        setProducts(ab.data)
    }


    return (
        <>



            <div className='tableMain'>



                <center> <h2 >Transactions</h2></center>

                <table>
                    {data ? Object.keys(data).map((key, i) => {
                        return (

                            <>
                                <tr>

                                    <td colSpan={0}>{key}</td>
                                    {console.log("length",data[key].length)}
                                    {data[key].length <40 ? <td className=''> {data[key]}  </td> :<td className='td_newClass'><span className=''> {data[key]}</span> </td>} 
                                </tr>


                                {/* <p key={i}>
               <span>key Name: {key}</span>
               <span>Value: {data[key]} </span> </p> */}
                            </>
                        )
                    }) : ''}
                </table>


            </div>


            <button onClick={abc}>click</button>

        </>




    );
}

export default Table