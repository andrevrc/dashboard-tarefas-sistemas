import { infoTelaInicial } from "@/app/lib/tipos-dados";
import { CheckCircleIcon, CircleStackIcon, ListBulletIcon } from "@heroicons/react/20/solid";
import { ArrowLeftIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function InfoGeral({dados, opcao}:{ dados: infoTelaInicial, opcao?: "Projetos"|"Módulos"|"Tipo"}) {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="relative bg-background-purple pt-16 pl-10 p-24 text-3xl text-gray-200 font-bold flex flex-row justify-between p-10">
                    <p>
                        {opcao === "Projetos" && `Visão Geral - Projetos` }
                        {opcao === "Módulos" && `Módulo de ${dados.desc} - Visão Geral` }
                        {opcao === "Tipo" && `Visão Geral - Tipo: ${dados.desc}` }
                    </p>

                    <div className="p-3 bg-white font-normal text-background-purple rounded-lg hover:bg-[#F4F6F8]">
                        {opcao === "Projetos" && 
                            <Link href={"/projetos"}>  
                                <ArrowLeftIcon className="w-6" />             
                            </Link>
                        }

                        {opcao === "Módulos" && 
                            <Link href={"/modulos"}>    
                                <ArrowLeftIcon className="w-6" /> 
                            </Link>
                        }

                        {opcao === "Tipo" && 
                            <Link href={"/tipos-chamados"}>  
                                <ArrowLeftIcon className="w-6" />             
                            </Link>
                        }
                    </div>
                </div>

                {/* Opções */}
                <div className="absolute top-32 flex flex-row justify-evenly p-4 w-full text-lg">
                    {/* <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/4">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>{opcao}</span>
                            <CircleStackIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">
                                {opcao === "Projetos" && dados.qtdProjetos}
                                {opcao === "Módulos" && dados.qtdModulos}
                            </span>
                        </div>
                    </div> */}

                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/4">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Tarefas Abertas</span>
                            <ListBulletIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdTarefasAbertas}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/4">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Tarefas Finalizadas</span>
                            <CheckCircleIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdTarefasFinalizadas}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}