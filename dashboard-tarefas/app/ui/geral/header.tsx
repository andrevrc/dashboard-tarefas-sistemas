import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function Header() {
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
                <div className="relative bg-background-purple pt-16 pl-10 p-24 text-3xl text-gray-200 font-bold">
                    {/* Cor original - 624BFF */}
                    {/* Opções */}
                    <p>Dados Gerais</p><br/>
                </div>

                {/* Opções */}
                <div className="absolute top-40 flex flex-row justify-evenly p-4 w-full text-xl">
                    <div className="bg-white rounded-lg py-10 p-4">Quantidade de Projetos</div>
                    <div className="bg-white rounded-lg py-10 p-4">Tarefas Totais</div>
                    <div className="bg-white rounded-lg py-10 p-4">Tarefas Finalizadas</div>
                    <div className="bg-white rounded-lg py-10 p-4">Projetos Visualizados</div>
                    <div className="bg-white rounded-lg py-10 p-4">Quantidade de Unidades</div>
                </div>
            </div>
        </div>
    );
}