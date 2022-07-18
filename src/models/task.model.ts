export interface TaskModel {
    title: string;
    id: number;
    note?: string;
    tags?: string[];
    priority?: string;
    dueDate?: Date;
}