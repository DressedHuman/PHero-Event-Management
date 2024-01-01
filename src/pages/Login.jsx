import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, setUser, Login, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const loginForm = new FormData(e.currentTarget);
        const email = loginForm.get('email');
        const password = loginForm.get('password');

        Login(email, password)
            .then(response => {
                setUser(response.user);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }

    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user]);

    return (
        <div className="text-center">
            <h2 className="text-2xl font-medium text-primary">Login Here</h2>
            
            {/* login form */}
            <form className="card-body md:w-2/3 mx-auto" onSubmit={handleLogin}>
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
                    <label className="label">
                        <a href="/reset_my_pass" className="label-text-alt no-underline text-white">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white font-medium text-xl">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;