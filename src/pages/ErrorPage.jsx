import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

const ErrorPage = () => {
    return (
        <div className="w-[90%] mx-auto mt-7">
            <Loading>
                <Header />
                <div className="flex flex-col items-center justify-center h-[50vh]">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-2">Oops! Page not found.</p>
                    <p className="text-gray-500 mb-8">
                        The page you are looking for might be in another castle.
                    </p>
                    <Link
                        to="/"
                        className="text-blue-500 hover:underline text-lg cursor-pointer"
                    >
                        Go back home
                    </Link>
                </div>
            </Loading>
        </div>
    );
};

export default ErrorPage;