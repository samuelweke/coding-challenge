import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import successIcon from '../../assets/icons/checkmark.png'

const ModalExample = ({className, planTitle, toggle, modal }) => {


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody className="text-center">
                    <img src={successIcon} alt="" />
                    <h2 className="mt-4"> Congrats !</h2>
                    <p> Check blasdaodnisdjins fsdf{planTitle}</p>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ModalExample;
