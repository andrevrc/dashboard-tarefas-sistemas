import Menu from "@/app/ui/geral/menu-lateral";
import Header from "@/app/ui/geral/header";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";
import { infoTelaInicial, Tarefa } from "@/app/lib/tipos-dados";

export default function Inicio({ dados, tarefas }:{ dados: infoTelaInicial, tarefas?: Array<Tarefa>}) {
    return(
        <main className="flex flex-row w-screen">
            <Menu opcaoMenu={null} />
            <div className="flex-grow flex flex-col w-5/6">
                <Header dados={dados} />
                <QuadroTarefas tarefas={tarefas} />
            </div>
        </main>
    );
}