import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png'
import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                console.log("Successfully Logged Out");
            })
            .catch(error => console.log(error));
    }

    const navlinks = <>
        <NavLink className={({ isActive, isPending }) => isActive ? 'text-[goldenrod]' : isPending ? "text-primary" : ''} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive, isPending }) => isActive ? 'text-[goldenrod]' : isPending ? "text-primary" : ''} to={'/about'}>About</NavLink>
        <NavLink className={({ isActive, isPending }) => isActive ? 'text-[goldenrod]' : isPending ? "text-primary" : ''} to={'/contact'}>Contact</NavLink>
    </>

    const authLinks = <>
        <NavLink className={({ isActive, isPending }) => isActive ? 'text-[goldenrod]' : isPending ? "text-primary" : ''} to={'/login'}>Login</NavLink>
        <NavLink className={({ isActive, isPending }) => isActive ? 'text-[goldenrod]' : isPending ? "text-primary" : ''} to={'/register'}>Register</NavLink>
    </>

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mb-7'>
            <img src={logo} className='w-[175px] md:w-[200px] lg:w-[175px] mx-auto lg:mx-0 invert dark:invert-0' alt="" />
            <div className='col-span-2 flex justify-between items-center'>
                <div className='hidden md:flex gap-3 font-medium md:text-lg lg:text-xl hover-effect'>
                    {navlinks}
                </div>
                <div>
                    <details className="md:hidden">
                        <summary className='list-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </summary>
                        <div className="absolute bg-[green] bg-opacity-10 backdrop-blur-lg menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow shadow-green-950 rounded-box w-52">
                            {navlinks}
                        </div>
                    </details>
                </div>
                {
                    user ? <div className='flex gap-3 items-center font-medium text-base md:text-lg lg:text-xl'>
                        <h2 className='font-normal'>Hello, <span className='capitalize text-[green]'>{user.displayName || user.email.split('@')[0]}</span>!</h2>
                        <button onClick={handleLogOut} className='hover:text-[goldenrod]'>
                            <RiLogoutCircleRLine />
                        </button>
                    </div> : <div className='flex gap-3 font-medium text-base md:text-lg lg:text-xl hover-effect'>
                        {authLinks}
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;