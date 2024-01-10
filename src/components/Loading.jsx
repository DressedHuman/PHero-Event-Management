import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import PropTypes from 'prop-types';
import './loading.css';
import RocketIcon from '@mui/icons-material/Rocket';

const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext);

    window.onscroll = () => {
        const scrollBtn = document.getElementById('scrollBtn');
        if(window.scrollY>757){
            scrollBtn.classList.remove('hidden');
        }else{
            scrollBtn.classList.add('hidden');
        }
    }

    if (loading) {
        return (
            <div className={'preloader'}>
                <div className={'preloader-inner'}>
                    <div className={'preloader-icon'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
    return <>
        {children}
        <button id="scrollBtn" className="fixed hidden top-[93%] right-5" onClick={() => scrollTo(0, 0)}><RocketIcon /></button>
    </>;
};

Loading.propTypes = {
    children: PropTypes.node,
}

export default Loading;