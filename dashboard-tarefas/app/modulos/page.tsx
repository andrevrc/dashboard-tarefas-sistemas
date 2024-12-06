import Menu from "@/app/ui/geral/menu-lateral";
import { infoTelaInicial } from "../lib/tipos-dados";
import { getTarefas, getTarefasByModulos, getTarefasFinalizadas, getTarefasFinalizadasByModulos } from "@/app/lib/acesso-redmine";
import InfoGeralProjetos from "@/app/ui/projetos/infoProjetosGeral";
import { getModulos } from "@/app/lib/conexao-firebase";
import QuadroModulos from "../ui/modulos/quadro-modulos";

export default async function Page() {
    let modulos = await getModulos();
    let qtdModulos = modulos.length;

    console.log(modulos);

    let qtdTarefasAbertas: number = 0;
    let qtdTarefasFechadas: number = 0;

    for(let i = 0; i < modulos.length; i++) {
        let tarefaAbertas = await getTarefasByModulos(modulos[i]["idRedmine"]);
        let tarefasFinalizadas = await getTarefasFinalizadasByModulos(modulos[i]["idRedmine"]);

        modulos[i].qtdTarefasAbertas = tarefaAbertas["total_count"];
        modulos[i].qtdTarefasFechadas = tarefasFinalizadas["total_count"];

        qtdTarefasAbertas += tarefaAbertas["total_count"];
        qtdTarefasFechadas += tarefasFinalizadas["total_count"];
    }
    
    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: qtdTarefasAbertas,
        qtdTarefasFinalizadas: qtdTarefasFechadas,
        qtdModulos: qtdModulos,
        qtdProjetosCadastrados: 0
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"modulos"} />
            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeralProjetos opcao="Módulos" dados={info} />
                <QuadroModulos modulos={modulos} />
            </div>
        </main>
    );
}