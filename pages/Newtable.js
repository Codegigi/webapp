import React, { useEffect, useState } from 'react'
import ReportTableBodyRow from './ReportTableBodyRow';
import ReportTableBodyRowMobile from './ReportTableBodyRowMobile';
import ReactPaginate from 'react-paginate'

function NewTable() {

    async function abc() {

        const web3 = new Web3();
        web3.setProvider("http://dexit.imentus.com");
        console.log("web3: ", web3);

        let ab = await web3.eth.getBlock("latest");
        console.log("tttttttttttttthefjherfef", ab)
        setData(ab)
        setProducts(ab.data)

    }
    // const data = [{
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Active"
    // },
    // {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "Draft"
    // }, {
    //     "reportName": "Daily Disbursement Report",
    //     "creatorImg": "https://www.w3schools.com/howto/img_avatar.png",
    //     "createdBy": "Yuktha Veera",
    //     "latestReport": "3 Sep, 2021",
    //     "reportFrequency": "Weekly",
    //     "dataSource": "LMS",
    //     "status": "InActive"
    // }]
    const [currentItems, setCurrentItems] = useState(data);
    const [data, setData] = useState([])
    // const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState([]);
    // const [itemsPerPage, setItemsPerPage] = useState(12);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
            abc()       
    
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        //setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);



    return (
        <div className='reportTable'>
            <div className='reportTable__header'>
                <span>Report Name</span>
                <span>Created By</span>
                <span>Latest Report</span>
                <span>Report Frequency</span>
                <span>Data Source</span>
                <span>Status</span>
            </div>  
            <div className='reportTable__body'>
                {currentItems.map((row, i) => {
                    return <ReportTableBodyRow key={i} data={row} />
                })}
            </div>
            <div className='reportTable__bodyMobile'>
                {currentItems.map((row, i) => {
                    return <ReportTableBodyRowMobile key={i} data={row} />
                })}
            </div>
            <div className='reportTable__footer'>
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                /> */}
            </div>
        </div>
    )
}

export default NewTable
