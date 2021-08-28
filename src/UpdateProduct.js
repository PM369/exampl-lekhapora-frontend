import Header from './Header'
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
function UpdateProduct(props) {
    // console.log("props", props.match.params.id)
    const [data, setData] = useState([])
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/item/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.ProductName);
        setPrice(result.price);
        setDescription(result.description);
        setFile(result.file);
    }, [])
    async function editProduct(id) {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);

        let result = await fetch("http://127.0.0.1:8000/api/itemupdate/"+id+"?_method=PUT", {
            method: "POST",
            body: formData
        });
        alert("Data has been Updated!!")

    }
    return (
        <div>
            <Header />
            <h1>Hello UpdateProduct</h1>
            <input type="text" onChange={event => setName(event.target.value)}
                defaultValue={data.ProductName} /> <br />
            <input type="text" onChange={event => setPrice(event.target.value)} 
            defaultValue={data.price} /> <br />
            <input type="text" onChange={event => setDescription(event.target.value)} 
            defaultValue={data.description} /> <br /><br />
            <input type="file" onChange={event => setFile(event.target.files[0])}
            defaultValue={data.file_path} /> <br /><br />
            <img style={{ width: 50 }} src={"http://127.0.0.1:8000/" + data.file_path} /><br /><br />
            <button onClick={() => { editProduct(data.id)}}>Update</button>


        </div>
    )
}
export default withRouter(UpdateProduct)