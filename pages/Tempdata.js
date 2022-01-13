import React,{useState,useEffect} from 'react';

const Tempdata=(props)=>{
   useEffect(() => {
       console.log("set",props.data)
       setabc(props.data)
       return () => {
       
       }
   }, [])
    const [abc, setabc] = useState(props.data)
    console.log("props",props.data)

    return(
        <>
        {/* {console.log("a11111111bcc",abc)} */}
            <h1>This is temp component</h1>
            <p> {abc.receiptsRoot}</p>

        </>
    )
}
export default Tempdata

