import { TagModel } from "./tag.model";

export interface TaskModel {
    title: string;
    id: string;
    note?: string;
    tags?: TagModel[];
    priority?: string;
    dueDate?: Date;
}