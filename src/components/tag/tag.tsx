import React from "react";
import { TagModel } from "../../models/tag.model";
import './tag.css';

import { Chip } from "@mui/material";

interface Props {
    data: TagModel,
    onSelect: (tag: TagModel) => void,
    onDeselect: (tag: TagModel) => void,
}

const Tag = ({ data, onSelect, onDeselect }: Props) => {

    const selectTag = () => {
        onSelect(data);
        data.selected = true;
    }

    const deselectTag = () => {
        onDeselect(data);
        data.selected = false;
    }

    return(
        <Chip 
            className={data.selected ? 'tag--selected' : 'tag'}
            onClick={data.selected ? deselectTag : selectTag}
            label={data.title}
            variant='outlined'
            color={data.selected ? 'warning' : undefined}
        />
    )
};

export default Tag;