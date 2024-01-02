import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import PropTypes from 'prop-types';
import './loading.css';

const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className={'preloader'}>
                <div className={'preloader-inner'}>
                    <div className={'preloader-icon'}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
    return children;
};

Loading.propTypes = {
    children: PropTypes.node,
}

export default Loading;