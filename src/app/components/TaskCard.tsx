import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface TaskCardProps {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  color,
  completed,
  onToggle,
  onDelete,
}) => {
  const router = useRouter();
  const onEditDetail = () => {
    router.push(`edit/${id}`)
  }

  return (
    <div
      className={`flex justify-between items-center p-4 mb-4 border rounded-lg bg-blockBackground border-outline cursor-pointer`}
      onClick={onEditDetail}
    >
      <div className="flex w-[97%]">
        <div className="mr-2"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          <Image
            src={completed ? "/check.svg" : "uncheck.svg"}
            alt="Add Task"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className={`text-sm pr-10 ${completed ? 'text-softText line-through' : 'text-lightText'} hover:text-primary`} onClick={onEditDetail}>
          {title}
        </div>
      </div>
      <div className="flex gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={onDelete}>
          <Image
            src="/trash.svg"
            alt="Add Task"
            width={14}
            height={14}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
