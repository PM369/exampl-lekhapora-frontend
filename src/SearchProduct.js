import Header from './Header'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
function SearchProduct() {
    const [data, setData] = useState([])
    async function search(key) {
        if (key.length > 1) {
            let result = await fetch("http://127.0.0.1:8000/api/search/" + key)
            result = await result.json();
            console.log(result)
            setData(result)

        }

    }

    return (
        <div>
            <Header />

            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search Product" className="form-control" />
                {
                    data.length>0?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((res) =>
                                    <tr>
                                        <td>{res.id}</td>
                                        <td>{res.ProductName}</td>
                                        <td><img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + res.file_path} /></td>
                                        <td>{res.description}</td>
                                        <td>{res.price}</td>
                                    </tr>)
                            }
                        </tbody>
                    </Table>
                    :null
                }
            </div>

        </div>
    )
}
export default SearchProduct