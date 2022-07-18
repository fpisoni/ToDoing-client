import React from "react";
import TaskForm from "../taskForm";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

interface Props {
    show: boolean,
    isEdit: boolean,
    action: (title: string, id: number) => void, 
    onHide: () => void,
}

const FormModal = ({ show, isEdit, action, onHide }: Props) => {
    return(
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>{isEdit ? 'Edit' : 'Create'} Task</Modal.Title>
                <CloseButton onClick={onHide}/>
            </Modal.Header>
            <Modal.Body>
                <TaskForm isEdit={isEdit} onAction={action} hideModal={onHide}/>
            </Modal.Body>
        </Modal>
    )
}

export default FormModal;