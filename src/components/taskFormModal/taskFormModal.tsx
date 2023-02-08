import React from "react";
import TaskForm from "../taskForm/taskForm";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import { TaskModel } from "../../models/task.model";

interface Props {
    show: boolean,
    action: (task: TaskModel) => void, 
    onHide: () => void,
    taskData?: TaskModel,
    nextTaskId: string,
}

const TaskFormModal = ({ show, action, onHide, taskData, nextTaskId }: Props) => {
    return(
        <Modal className={"modal" + (show ? 'modal-hidden' : '')} show={show}>
            <Modal.Header className="modal__header">
                <Modal.Title  className="modal__title"role={'term'}>{taskData ? 'Edit' : 'Create'} Task</Modal.Title>
                <CloseButton onClick={onHide}/>
            </Modal.Header>
            <Modal.Body className="modal__body">
                <TaskForm isEdit={taskData ? true : false} onAction={action} hideModal={onHide} taskData={taskData} nextTaskId={nextTaskId} />
            </Modal.Body>
        </Modal>
    )
}

export default TaskFormModal;