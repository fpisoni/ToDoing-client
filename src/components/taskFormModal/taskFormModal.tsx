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
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title role={'term'}>{taskData ? 'Edit' : 'Create'} Task</Modal.Title>
                <CloseButton onClick={onHide}/>
            </Modal.Header>
            <Modal.Body>
                <TaskForm isEdit={taskData ? true : false} onAction={action} hideModal={onHide} taskData={taskData} nextTaskId={nextTaskId} />
            </Modal.Body>
        </Modal>
    )
}

export default TaskFormModal;