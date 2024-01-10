import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { user, setUser, SignUp, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const registerForm = new FormData(e.currentTarget);
        const email = registerForm.get('email');
        const password = registerForm.get('password');

        SignUp(email, password)
            .then(response => {
                setError('');
                setUser(response.user);
                console.log("User creation successful");
            })
            .catch(error => {
                console.error(error.message);
                setLoading(false);
                setError(error.message);
            });
    }

    useEffect(() => {
        if(user){
            navigate('/');
        }
    },[user])

    return (
        <div className="text-center">
            <h2 className="text-2xl font-medium text-primary">Register Here</h2>
            
            {/* registration form */}
            <form className="card-body md:w-2/3 mx-auto" onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white font-medium text-xl">Register</button>
                </div>
            </form>
            <p className="text-error">{error}</p>
        </div>
    );
};

export default Register;