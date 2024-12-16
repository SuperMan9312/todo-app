"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask, Task } from "./lib/api";
import Image from "next/image";
import Swal from "sweetalert2";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleToggle = async (task: Task) => {
    try {
      await updateTask(task.id, { completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (id: number) => {
    Swal.fire({
      title: "Are you sure to delete this task?",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      background: "#1A202C",
      color: "#F7FAFC",
      customClass: {
        title: "text-xl font-bold",
        confirmButton: "px-4 py-2 text-sm rounded bg-blue-500 text-white hover:bg-blue-600",
        cancelButton: "px-4 py-2 text-sm rounded bg-gray-300 text-black hover:bg-gray-400",
      },
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await deleteTask(id);
            fetchTasks();
          } catch (error) {
            console.log("Error!", "Failed to delete the task.", "error");
          }
        }
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <Header />
      <div className="flex justify-center w-full md:w-2/3 lg:w-1/2 relative -top-6 px-6">
        <Link href="/create" className="w-full">
          <button className="bg-darkPrimary px-6 py-3 md:px-10 md:py-4 text-lg rounded w-full flex items-center justify-center">
            <span className="mr-2 text-sm text-lightText">Create Task</span>
            <Image
              src="/plus.svg"
              alt="Add Task"
              width={16}
              height={16}
              priority
            />
          </button>
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 rounded-md mt-10 px-6">
        <div className="flex justify-between mb-6 text-xs sm:text-sm">
          <div className="flex items-center">
            <span className="text-primary font-bold">Tasks</span>
            <span className="bg-softBackground rounded-full px-2 ml-2">
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-secondary font-bold">Completed</span>
            <span className="bg-softBackground rounded-full px-2 ml-2">
              {tasks.filter((task) => task.completed).length}
            </span>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                color={task.color}
                completed={task.completed}
                onToggle={() => handleToggle(task)}
                onDelete={() => handleDelete(task.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-4">
            <div className="p-4 border-t-2 border-outline">
              <div className="flex justify-center mt-10 mb-2">
                <Image
                  src="/doc.svg"
                  alt="No Tasks"
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <p className="text-softText font-bold p-2">
                You don’t have any tasks registered yet.
              </p>
              <p className="text-softText p-2 mt-1">
                Create tasks and organize your to-do items.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
