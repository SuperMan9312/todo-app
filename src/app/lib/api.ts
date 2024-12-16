import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;

export interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt?: string;
}

export const getTasks = async () => axios.get<Task[]>(API_URL);

export const getTaskById = async (id: number) =>
  axios.get<Task>(`${API_URL}/${id}`);

export const createTask = async (data: Partial<Task>) =>
  axios.post<Task>(API_URL, data);

export const updateTask = async (id: number, data: Partial<Task>) =>
  axios.put<Task>(`${API_URL}/${id}`, data);

export const deleteTask = async (id: number) =>
  axios.delete(`${API_URL}/${id}`);
