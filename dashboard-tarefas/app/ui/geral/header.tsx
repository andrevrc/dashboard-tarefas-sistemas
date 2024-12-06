import { infoTelaInicial } from "@/app/lib/tipos-dados";
import { CheckCircleIcon, CircleStackIcon, ListBulletIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, FolderPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header({dados}:{ dados: infoTelaInicial}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center p-10 text-2xl">
                <span className="font-bold">Bem vindo!</span>
                <div className="flex flex-row gap-6">
                    <BellAlertIcon className="w-10" />
                    <span className="rounded-full border-2 p-6 bg-gray-400"></span>
                </div>
            </div>

            <div className="relative">
                <div className="relative bg-background-purple pt-16 pl-10 p-24 text-3xl text-gray-200 font-bold flex flex-row justify-between p-10">
                    {/* Cor original - 624BFF */}
                    {/* Opções */}
                    <p>Dados Gerais</p><br/>

                    <div className="text-xs p-3 bg-white font-normal text-background-purple rounded-lg hover:bg-[#F4F6F8]">
                        <Link href={"/observarProjeto"}>
                                Observar Novo Projeto
                        </Link>
                    </div>
                </div>

                {/* Opções */}
                <div className="absolute top-32 flex flex-row justify-evenly p-4 w-full text-lg">
                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/6">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Projetos</span>
                            <CircleStackIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdProjetos}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/6">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Tarefas Abertas</span>
                            <ListBulletIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdTarefasAbertas}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/6">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Tarefas Finalizadas</span>
                            <CheckCircleIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdTarefasFinalizadas}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/6">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Projetos Observados</span>
                            <ClipboardDocumentListIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdProjetosCadastrados}</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6 bg-white rounded-lg py-10 px-6 w-1/6">
                        <div className="flex flex-row gap-4 justify-between">
                            <span>Módulos Observados</span>
                            <FolderPlusIcon className="w-6" />
                        </div>
                        <div>
                            <span className="text-4xl">{dados.qtdModulos}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}