import Header from './Header'
import { useState } from 'react'
function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
   async function addProduct() {
        console.warn(name, file, price, description)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description',description);

       let result = await fetch("http://127.0.0.1:8000/api/addproduct",{
           method:"POST",
           body:formData
       });
       alert("Data saved!!")

    }
    return (
        <div>
            <Header />

            <div className="col-sm-6 offset-sm-3">
                <h1>Hello Regiiter</h1>
                <input type="text" onChange={event => setName(event.target.value)} placeholder="
                    Product Name" className="form-control" />
                <br />
                <input type="file" onChange={event => setFile(event.target.files[0])} className="form-control" />
                <br />
                <input type="text" onChange={event => setPrice(event.target.value)} placeholder="Price" className="form-control" />
                <br />
                <input type="text" onChange={event => setDescription(event.target.value)} placeholder="Descripton" className="form-control" />
                <br />
                <button onClick={addProduct} className="btn btn-primary">Save</button>
            </div>

        </div>
    )
}
export default AddProduct