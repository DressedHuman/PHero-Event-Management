import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Root = () => {
    return (
        <div className='relative w-[90%] mx-auto mt-1'>
            <Loading>
                <div className="sticky top-0 z-50">
                    <Header />
                    <hr className="border-2 rounded opacity-25 border-black dark:border-white mb-3" />
                </div>
                <Outlet />
            </Loading>
        </div>
    );
};

export default Root;