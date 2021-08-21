import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useHistory } from 'react-router-dom'
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/add')
        }

    }, [])
    async function login() {
        let item = { email, password }
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add")
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Hello Login</h1>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" className="form-control" />
                <br />
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" className="form-control" />
                <br />

                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}
export default Login