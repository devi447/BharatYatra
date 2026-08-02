import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const login = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/login",

                {
                    email,
                    password
                }

            );

            alert(response.data.message);

            localStorage.setItem("token", response.data.token);

            localStorage.setItem("user", JSON.stringify(response.data.user));

            window.location.href = "/";

        }

        catch (err) {

            console.log(err);

            alert("Login Failed");

        }

    }

    return (

        <div className="container mt-5" style={{ maxWidth: "500px" }}>

            <h2 className="text-center mb-4">

                Login

            </h2>

            <form onSubmit={login}>

                <div className="mb-3">

                    <label>Email</label>

                    <input

                        type="email"

                        className="form-control"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                        required

                    />

                </div>

                <div className="mb-3">

                    <label>Password</label>

                    <input

                        type="password"

                        className="form-control"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        required

                    />

                </div>

                <button

                    type="submit"

                    className="btn btn-primary w-100"

                >

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;