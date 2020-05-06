import React, { Suspense, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/branches")
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

    const generateTableRow = (data) => {
        let dataList = data.map((item, i) => 
            <tr key={i+item.name} style={{fontSize: '10px'}}>
                <td >{item.name}</td>
                <td>{item.pincode}</td>
                <td>{item.phone}</td>
                <td>{item.city}</td>
                <td><a href={`form/adduser`}>Add user</a></td>
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
                <th>Branch Code</th>
                <th>Phone</th>
                <th>City</th>
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
