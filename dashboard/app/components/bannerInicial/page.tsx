export default function BannerInicial() {
    return (
        <>
            <div className="relative">
                <div className="relative bg-background-purple pt-8 pl-10 p-16">
                    {/* Cor original - 624BFF */}
                    {/* Opções */}
                    <p>VISÃO GERAL - TAREFAS DO GAS</p><br/>
                    <p className="font-bold">INFORMAÇÕES GERAIS</p>
                </div>

                {/* Opções */}
                <div className="absolute top-28 flex flex-row justify-evenly p-4 w-full">
                    <div className="bg-white rounded-lg py-10 p-4">Quantidade de Projetos</div>
                    <div className="bg-white rounded-lg py-10 p-4">Tarefas Totais</div>
                    <div className="bg-white rounded-lg py-10 p-4">Tarefas Finalizadas</div>
                    <div className="bg-white rounded-lg py-10 p-4">Projetos Visualizados</div>
                    <div className="bg-white rounded-lg py-10 p-4">Quantidade de Unidades</div>
                </div>
            </div>
        </>
    );
}