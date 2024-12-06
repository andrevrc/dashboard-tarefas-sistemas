import Menu from "@/app/ui/geral/menu-lateral";
import { infoTelaInicial } from "../lib/tipos-dados";
import { getTarefasByTipos, getTarefasFinalizadasByTipos } from "@/app/lib/acesso-redmine";
import InfoGeralProjetos from "@/app/ui/projetos/infoProjetosGeral";
import { getTiposChamados } from "@/app/lib/conexao-firebase";
import Quadro from "../ui/geral/quadro";

export default async function Page() {
    let tipos = await getTiposChamados();
    let qtdTipos = tipos.length;

    //console.log(tipos);

    let qtdTarefasAbertas: number = 0;
    let qtdTarefasFechadas: number = 0;

    for(let i = 0; i < tipos.length; i++) {
        let tarefaAbertas = await getTarefasByTipos(tipos[i]["idRedmine"]);
        let tarefasFinalizadas = await getTarefasFinalizadasByTipos(tipos[i]["idRedmine"]);

        tipos[i].qTarefasAbertas = tarefaAbertas["total_count"];
        tipos[i].qTarefasFechadas = tarefasFinalizadas["total_count"];

        qtdTarefasAbertas += tarefaAbertas["total_count"];
        qtdTarefasFechadas += tarefasFinalizadas["total_count"];
    }
    
    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: qtdTarefasAbertas,
        qtdTarefasFinalizadas: qtdTarefasFechadas,
        qtdModulos: 0,
        qtdTipos: qtdTipos,
        qtdProjetosCadastrados: 0
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"tipos-chamados"} />
            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeralProjetos opcao="Tipos" dados={info} />
                <Quadro tipo="Tipo" entidades={tipos} />
            </div>
        </main>
    );
}