import Link from "next/link";
import { HomeIcon, 
        ChartBarIcon, 
        CircleStackIcon, 
        FolderPlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Menu(
    { opcaoMenu }: 
    { opcaoMenu: null | "projetos" | "modulos" | "visualizacoes" }
) {
    return (
        <nav className="h-vw w-1/6 flex flex-col bg-background-menu gap-6 p-6">
            <div className="px-4 py-6">
                <span className="place-content-center text-3xl text-gray-100 font-bold">
                    Tarefas GAS
                </span>
            </div>

            <ul>
                <li>
                    <Link
                        href="/"
                        className={clsx("block rounded-lg px-4 py-2 text-sm font-medium  flex h-[48px] grow items-center gap-2 rounded-md", {
                            "bg-gray-100 text-gray-700" : opcaoMenu === null,
                            "text-gray-300 hover:bg-gray-100 hover:text-gray-700" : opcaoMenu !== null
                        })}
                        >
                            <HomeIcon className="w-6" />
                            <span>Inicio</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/projetos"
                        className={clsx("flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700",{
                            "bg-gray-100 text-gray-700" : opcaoMenu === "projetos",
                            "text-gray-300 hover:bg-gray-100 hover:text-gray-700" : opcaoMenu !== "projetos"
                        })}
                        >
                            <CircleStackIcon className="w-6" />
                            <span>Projetos Observados</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/modulos"
                        className={clsx("flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700",{
                            "bg-gray-100 text-gray-700" : opcaoMenu === "modulos",
                            "text-gray-300 hover:bg-gray-100 hover:text-gray-700" : opcaoMenu !== "modulos"
                        })}
                        >
                            <FolderPlusIcon className="w-6" />
                            <span>Módulos Observados</span>
                    </Link>
                </li>
                
                <li>
                    <Link
                        href="/"
                        className={clsx("flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700",{
                            "bg-gray-100 text-gray-700" : opcaoMenu === "visualizacoes",
                            "text-gray-300 hover:bg-gray-100 hover:text-gray-700" : opcaoMenu !== "visualizacoes"
                        })}
                        >
                            <ChartBarIcon className="w-6" />
                            <span>Tipos de Chamados</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className={clsx("flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700",{
                            "bg-gray-100 text-gray-700" : opcaoMenu === "visualizacoes",
                            "text-gray-300 hover:bg-gray-100 hover:text-gray-700" : opcaoMenu !== "visualizacoes"
                        })}
                        >
                            <ChartBarIcon className="w-6" />
                            <span>Status</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className={clsx("flex grow items-center gap-2 block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700",{
                            "bg-gray-100 text-gray-700" : opcaoMenu === "visualizacoes",
                            "text-gray-300 hover:bg-gray-100 hover:text-gray-700" : opcaoMenu !== "visualizacoes"
                        })}
                        >
                            <ChartBarIcon className="w-6" />
                            <span>Filtros</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}