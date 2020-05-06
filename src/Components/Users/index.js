import React, { Suspense, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        },
        (error) => {
          console.log('Fetch error')
        }
      )
    }, []);

    const dataFiles = (list) => {
      let arr = [];
      // arr = list.map((item) => item.type.split('_').join(' '));
      return arr;
    }

    const generateTableRow = (data) => {
        let dataList = data.map((item, i) => 
            <tr key={i+item.name} style={{fontSize: '10px'}}>
                <td >{item.name}</td>
                <td>{item.roles.join(', ')}</td>
                <td>{item.mobile}</td>
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
                <th>Roles</th>
                <th>Phone</th>
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
