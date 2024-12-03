import Menu from "@/app/ui/geral/menu-lateral";
import Header from "@/app/ui/geral/header";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";

export default function Inicio() {
    return(
        <main className="flex flex-row w-screen">
            <Menu />
            <div className="flex-grow flex flex-col">
                <Header />
                <QuadroTarefas />
            </div>
        </main>
    );
}