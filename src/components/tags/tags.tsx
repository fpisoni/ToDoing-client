import React, { useContext } from "react"
import Container from "@mui/material/Container";
import { TagModel } from "../../models/tag.model";
import Tag from "../tag/tag";
import './tags.css';
import { TagsContext } from "../../utils/contexts/tagsContext";

interface Props {
    onSelect: (tag: TagModel) => void,
    onDeselect: (tag: TagModel) => void,
}

const Tags = ({onSelect, onDeselect}: Props) => {

    const { tags, setTags } = useContext(TagsContext)

    return(
            <Container className="tags__container">
                {tags.map(tag => <Tag key={tag.id} data={tag} onSelect={onSelect} onDeselect={onDeselect} />)}
            </Container>
    )
}

export default Tags;