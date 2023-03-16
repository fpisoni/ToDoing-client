import { createContext, Dispatch, SetStateAction } from "react";
import { TagModel } from "../../models/tag.model";

const tags: TagModel[] = [
    { id: 'tag1' , title:'House duties', selected: false },
    { id: 'tag2' , title:'Job', selected: false },
    { id: 'tag3' , title:'Urgent', selected: false },
];
  
interface TemplateContextProps {
  tags: TagModel[]
  setTags: Dispatch<SetStateAction<TagModel[]>>
}

export const TagsContext = createContext<TemplateContextProps>({
    tags,
    setTags: () => {}
});