import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import PropTypes from 'prop-types';

const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext);

    if(loading){
        return <div className="text-center mt-[45vh]">
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }
    return children;
};

Loading.propTypes = {
    children: PropTypes.node,
}

export default Loading;