import React, { useState, useEffect } from "react";
import './tasks.css'
import { TaskModel } from '../../models/task.model';
import { TagModel } from '../../models/tag.model';
import Container from "@mui/material/Container";
import Task from "../../components/task/task";
import Tags from '../../components/tags/tags';

interface Props {
    tasks: TaskModel[],
    onDelete: (id: string) => void,
}

const Tasks = ({tasks, onDelete }: Props) => {
    const [appliedTags, setAppliedTags] = useState<TagModel[]>([]);
    
    const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>(tasks);
    
    const handleSelectTag = (tag: TagModel) => {
        setAppliedTags(prevAppliedTags => [...prevAppliedTags, tag]);
    }
    const handleDeselectTag = (tag: TagModel) => {
        setAppliedTags(appliedTags.filter(appliedTag => appliedTag.id !== tag.id));
    }
    const updateFilteredTags = () => {
        setFilteredTasks(
          appliedTags.length > 0 ? 
            tasks.filter(task => task.tags?.some(tag => appliedTags.some(appliedTag => appliedTag.id === tag.id))) :
            tasks
        );
    }

    useEffect(() => updateFilteredTags(), [tasks, appliedTags]);

    return(
        <div>
            <div className="tags__container">
                <Tags onSelect={handleSelectTag} onDeselect={handleDeselectTag}/>
            </div>
            <Container className="tasks">
                { filteredTasks.map((task) => 
                    <Task key={task.id} data={task} onDelete={onDelete} onSelect={handleSelectTag} onDeselect={handleDeselectTag}/> )
                }
            </Container>
        </div>
   ) 
}

export default Tasks;