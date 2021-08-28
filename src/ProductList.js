import Header from './Header'
import React,{useState,useEffect} from 'react'
import { NavItem, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function ProuctList ()
{
    const [data,setData]=useState([]);
    useEffect( ()=>{
        getData();
    },[])
    // console.log("data",data)
    async function deleteOperation(id){
     let result=  await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:"DELETE"

        })
        result=  await result.json();
        getData();
        console.warn(result);
    }
   async function getData(){
        let result = await fetch('http://127.0.0.1:8000/api/productlist');
        result = await result.json();
        setData(result)
    }
    return(
        <div>
        <Header />
        <h1>Product List</h1>
            <div className="col-sm-6 offset-sm-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th colSpan="2">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           data.map((res)=>
                               <tr>
                                   <td>{res.id}</td>
                                   <td>{res.ProductName}</td>
                                   <td><img style={{ width:100}} src={"http://127.0.0.1:8000/"+res.file_path} /></td>
                                   <td>{res.description}</td>
                                   <td>{res.price}</td>
                                   <td><span onClick={() => { deleteOperation(res.id) }} className="delete">Delete</span></td>
                                   <td><Link to={"update/"+res.id}><span className="update">Update</span></Link></td>
                               </tr>)
                       }
                    </tbody>
                </Table>
        </div>

        </div>
    )
}
export default ProuctList 