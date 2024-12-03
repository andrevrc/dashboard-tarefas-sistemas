import Link from "next/link";
import { HomeIcon, 
        ChartBarIcon, 
        CircleStackIcon, 
        FolderPlusIcon } from "@heroicons/react/24/outline";

export default function Menu() {
    return (
        <nav className="h-screen flex flex-col bg-background-menu gap-6 p-6">
            <div className="px-4 py-6">
                <span className="place-content-center text-3xl text-gray-100 font-bold">
                    Tarefas GAS
                </span>
            </div>

            <ul className="">
                <li>
                    <Link
                        href="/"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 flex h-[48px] grow items-center gap-2 rounded-md"
                        >
                            <HomeIcon className="w-6" />
                            <span>Inicio</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className="flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <CircleStackIcon className="w-6" />
                            <span>Projetos</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className="flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <FolderPlusIcon className="w-6" />
                            <span>Unidades</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className="flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <ChartBarIcon className="w-6" />
                            <span>Visualizações Gerais</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}