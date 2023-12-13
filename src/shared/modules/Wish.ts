export interface Wish{
    id: number;
    wish:string;
    createdAt: Date;
    completedAt?: Date;
    completed: boolean;
}