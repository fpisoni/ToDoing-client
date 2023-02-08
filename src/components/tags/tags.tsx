import React, { useState } from "react"
import { Card, Container } from "react-bootstrap";
import { TagModel } from "../../models/tag.model";
import { v4 } from 'uuid'
import Tag from "../tag/tag";

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
        <Container>
            <div className="tags__container" style={{backgroundColor: "white"}}>
                <Card.Body className="tags">
                    {tags.map(tag => <Tag key={tag.id} data={tag} onSelect={onSelect} onDeselect={onDeselect} />)}
                </Card.Body>            
                <footer className='footer' style={{textAlign: "center"}}>
                    Filter by tags
                </footer>
            </div>
        </Container>
    )
}

export default Tags;