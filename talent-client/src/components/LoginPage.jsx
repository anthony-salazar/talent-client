import React, {useState} from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const login = (user) => {
        setLoggedIn(true);
        setUsername(user.username);
        setUser(user);
        localStorage.setItem("user",JSON.stringify(user));
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!username || !password) {
            setError('Please enter a username and password.');
        }
        try {
            //let fullUrl = "http://localhost:8080/login";
            //let credentials = { "username": username, "password": password }
            //const response = await axios.post(fullUrl, credentials);
            // if(response.status == 200){
            //   let user = response.data;
            //   login(user);
            //   navigate("/");
            // }
          } catch (error) {
            setError(error.message);
          }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} required></input>
                <labe>Password: </labe>
                <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} required></input>
                <button type="submit">Login</button>
            </form>
        </div>
        
    )
}