import React from "react"
import { Menubar } from 'primereact/menubar';
import Link from "next/link";

const Navbar = () =>{
    // const myStyle = {
    //     color: "white";
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Sans-Serif"
    //   };

const items = [
    {
       label:'Blockchain',
       //icon:'pi pi-fw pi-file',
       items:[
        {
            label:'View Transactions',
        },
        {
           label:'View Pending Transactions',
           
        },
        {
            seperator:true
        },
        {
            label:'View Blocks'
        },
        {
            label:'View Uncles'
        },
        {
            seperator:true
        },
        {
            label:'Top Accounts'
        },
        {
            label:'Verified Contracts'
        }
    
    ]
       
        //   {
        //      separator:true
        //   },
         
    },
    //-----------------------------------
    {
       label:'Tokens',
       
       items:[
          {
             label:<Link href="" ><a>ERC20 Tokens</a></Link>,
             
          },
          {
             label:'View ERC20 Transfers',
             
          },
          {
            seperator: true
          },
          {
             label:'ERC721 Top Tokens',
             
          },
          {
             label:'View ERC721 Transfers',
            
          },
          {
              seperator:true
          },
          {
              label:'ERC1155 Top Tokens'
          },
          {
              label:'View ERC155 Transfers'
          }

       ]
    },
    {
       label:'Resources',
       
       items:[
          {
             label:'Charts and Stats'
             
          },
          {
             label:'Top Statistics'
          },

       ]
    },
     {
        label:<Link href="/Signin"><a>Sign in</a></Link>
       
    //    items:[
    //       {
    //          label:'Edit',
    //          icon:'pi pi-fw pi-pencil',
    //          items:[
    //             {
    //                label:'Save',
    //                icon:'pi pi-fw pi-calendar-plus'
    //             },
    //             {
    //                label:'Delete',
    //                icon:'pi pi-fw pi-calendar-minus'
    //             },

    //          ]
    //       },
    //       {
    //          label:'Archieve',
    //          //icon:'pi pi-fw pi-calendar-times',
    //          items:[
    //             {
    //                label:'Remove',
    //                icon:'pi pi-fw pi-calendar-minus'
    //             }
    //          ]
    //       }
    //    ]
    },
    //--------------------------------------
    // {
    //    label:'Sign In,
    //    icon:'pi pi-fw pi-power-off'
    // }
 ];
 


    return(   
           
       <Menubar model={items} className="myStyle" /> 
        
        //     <Menubar
        //     model={items}
        //     start={<InputText placeholder="Search" type="text"/>}
        //     end={<Button label="Logout" icon="pi pi-power-off"/>}
        // />

        
    )
}

export default Navbar;