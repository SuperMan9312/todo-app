"use client";

import { useState } from "react";
import { createTask } from "../lib/api";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Image from "next/image";
import { toast } from "react-toastify";

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const router = useRouter();
  const colors = [
    "#FF3B30",
    "#FF9500",
    "#FFCC00",
    "#34C759",
    "#007AFF",
    "#5856D6",
    "#AF52DE",
    "#FF2D55",
    "#A2845E",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!color) {
      toast.error("Please choose the color", { autoClose: 1000 });
      return;
    }
    await createTask({ title, color });
    router.push("/");
  };

  const onBack = () => {
    router.push("/");
  };

  return (
    <div className="mx-auto min-h-screen text-white flex flex-col items-center">
      <Header />
      <div className="w-full md:w-3/4 lg:w-1/2 px-6">
        <div className="mt-10 sm:mt-[90px] cursor-pointer" onClick={onBack}>
          <Image
            src="/leftArrow.svg"
            alt="leftArrow"
            width={24}
            height={24}
            priority
          />
        </div>
        <form className="mt-8 sm:mt-12" onSubmit={handleSubmit}>
          <label className="text-sm text-primary font-bold mt-2">Title</label>
          <input
            type="text"
            placeholder="Ex. Brush your teeth"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border text-sm mt-2 p-4 mb-4 rounded-lg bg-blockBackground text-lightText border-outline focus:outline-none"
            required
          />
          <label className="text-sm text-primary font-bold">Color</label>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 mt-4 xl:flex xl:flex-wrap xl:gap-6">
            {colors.map((item) => (
              <div
                key={item}
                style={{ backgroundColor: item }}
                className={`w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full cursor-pointer ${color === item ? "border-4 border-white" : ""
                  }`}
                onClick={() => setColor(item)}
              ></div>
            ))}
          </div>
          <div className="w-full mt-10 sm:mt-12">
            <button className="bg-darkPrimary px-4 py-3 sm:px-6 sm:py-4 text-lg rounded w-full justify-center flex items-center">
              <span className="mr-2 text-sm text-lightText">Add Task</span>
              <Image
                src="/plus.svg"
                alt="Add Task"
                width={16}
                height={16}
                priority
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
