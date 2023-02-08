import React from "react";
import { TagModel } from "../../models/tag.model";

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
        <div className={'tag' + data.selected ? 'tag--selected' : ''} style={data.selected ? { backgroundColor: "orange" } : {}}>
            <p className='tag__title' onClick={data.selected ? deselectTag : selectTag}>
                {data.title}
            </p>
        </div>
    )
};

export default Tag;