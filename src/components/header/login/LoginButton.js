import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import ModalLogin from "@components/modals/modalLogin/ModalLogin";

const LoginButton = () => {
    const modalPortal = document.getElementById('modals');
    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
    return (
        <>
            <button className="btn login" onClick={() => setIsModalLoginOpen(!isModalLoginOpen)}>Вход</button>
            {isModalLoginOpen && createPortal(<ModalLogin/>, modalPortal)}
        </>

    );
};

export default LoginButton;
