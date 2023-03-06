import React, { useState } from "react"
import Container from "@mui/material/Container";
import { TagModel } from "../../models/tag.model";
import { v4 } from 'uuid'
import Tag from "../tag/tag";
import './tags.css';

interface Props {
    onSelect: (tag: TagModel) => void,
    onDeselect: (tag: TagModel) => void,
}

const Tags = ({onSelect, onDeselect}: Props) => {

    const [ tags, setTags ] = useState<TagModel[]>([
        { id: 'tag1' , title:'House duties', selected: false },
        { id: 'tag2' , title:'Job', selected: false },
        { id: 'tag3' , title:'Urgent', selected: false },
    ])

    return(
            <Container className="tags__container">
                    {tags.map(tag => <Tag key={tag.id} data={tag} onSelect={onSelect} onDeselect={onDeselect} />)}
            </Container>
    )
}

export default Tags;