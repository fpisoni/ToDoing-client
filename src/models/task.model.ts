import { TagModel } from "./tag.model";

export interface TaskModel {
    title: string;
    id: string;
    note?: string;
    tags?: TagModel[];
    priority: Priority;
    dueDate?: Date;
}

export enum Priority {
    None = 'None',
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
    Urgent = 'Urgent',
}