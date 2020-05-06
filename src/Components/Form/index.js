import React, { Suspense, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function FormInput(props) {
    const [name, setName] = useState('');
    const [corpCode, setCorpCode] = useState('');
    const [gstn, setGstn] = useState('');
    const [pan, setPan] = useState('');
    const [compType, setCompType] = useState('');
    const [logo, setLogo] = useState('');
    // useEffect(() => {
    //   fetch("http://localhost:3000/employers")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //     //   setData(result)
    //     },
    //     (error) => {
    //       console.log('Fetch error')
    //     }
    //   )
    // }, []);

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
                <td>Add branch</td>
            </tr>
        );
       return dataList 
    } 
console.log('vbhjgvk', window.location.pathname)
  return (
    <Suspense fallback={<p>Loading ...</p>}>
     <div style={{margin: '4%'}}>
       {window.location.pathname.split('/')[2].toUpperCase()}
       <Form>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Corporate Code</Form.Label>
            <Form.Control placeholder="Enter code" onChange={(e) => setCorpCode(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>GSTN</Form.Label>
            <Form.Control placeholder="Enter gstn" onChange={(e) => setGstn(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>PAN</Form.Label>
            <Form.Control placeholder="Enter pan" onChange={(e) => setPan(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1" onChange={(e) => setCompType(e.target.value)}>
            <Form.Label>Company Type</Form.Label>
            <Form.Control as="select">
                <option>Limited</option>
                <option>Pvt</option>
                <option>Inc</option>
            </Form.Control>
         </Form.Group>
        <Form.Group>
            <Form.Label>Logo</Form.Label>
            <Form.Control placeholder="Enter url" onChange={(e) => setLogo(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => {e.preventDefault(); console.log('hello', name, corpCode,compType, gstn, pan, logo)}}>
            Submit
        </Button>
      </Form>
     </div>
    </Suspense>
    
  );
}

export default FormInput;
