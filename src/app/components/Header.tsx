import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-darkBackground h-[200px] flex justify-center items-center">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={15}
                height={24}
                priority
                className="ml-[20px] sm:ml-[50px] md:ml-[70px] lg:ml-[90px] sm:w-[15px] sm:h-[24px] md:w-[18px] md:h-[28px] lg:w-[22px] lg:h-[36px]"
            />

            <h1 className="text-[24px] sm:text-[24px] lg:text-[40px] font-bold text-primary ml-2 sm:ml-2 md:ml-4">
                <span className="mr-2 sm:mr-1">Todo</span>
                <span className="text-secondary">App</span>
            </h1>
        </header>
    );
}
