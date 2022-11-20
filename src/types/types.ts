export interface Todo {
    title: string;
    description: string;
    fileUrl: string;
    endDate: number;
    createdAt?: {
        seconds: number;
        nanoseconds: number;
    };
}