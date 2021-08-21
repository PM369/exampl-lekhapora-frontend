import React,{useState,useEffect} from 'react'
import Header from './Header'
import {useHistory} from 'react-router-dom'
function Register() {
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push('/add')
        }

    },[])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail]=useState("");
    const history=useHistory();
   async function signup()
    {
        let item ={name,password,email}
        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result = await result.json();
        console.warn("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add")
    }
    return (
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Hello Regiiter</h1>
            <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Enter Your Name" className="form-control"/>
            <br />
            <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" className="form-control" />
            <br />
            <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" className="form-control" />
            <br />
            <button onClick={signup} className="btn btn-primary">Signup</button>
        </div>
        </>
    )
}
export default Register