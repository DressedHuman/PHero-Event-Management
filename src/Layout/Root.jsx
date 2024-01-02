import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Root = () => {
    return (
        <div className='w-[90%] mx-auto mt-7'>
            <Loading>
                <Header />
                <hr className="border-2 rounded opacity-25 border-black dark:border-white mb-3" />
                <Outlet />
            </Loading>
        </div>
    );
};

export default Root;