import React, { Suspense, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/employers")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
        (error) => {
          console.log('Fetch error')
        }
      )
    }, []);

    const dataFiles = (list) => {
      let arr = [];
      arr = list.map((item) => item.type.split('_').join(' '));
      return arr;
    }

    const generateTableRow = (data) => {
        let dataList = data.map((item, i) => 
            <tr key={i+item.name} style={{fontSize: '10px'}}>
                <td >{item.name}</td>
                <td>{item.corporateCode}</td>
                <td>{item.companyType}</td>
                <td>{item.isActive ? 'Active' : 'Inactive'}</td>
                <td style={{fontSize: '8px'}}>{dataFiles(item.documents).join(', ')}</td>
                <td><a href={`form/addbranch`}>Add branch</a></td>
            </tr>
        );
       return dataList 
    } 
  return (
    <Suspense fallback={<p>Loading ...</p>}>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Corporate Code</th>
                <th>Company Type</th>
                <th>Status</th>
                <th>Documents</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {data.length > 0 && generateTableRow(data)}
            </tbody>
        </Table>
    </Suspense>
    
  );
}

export default Home;
