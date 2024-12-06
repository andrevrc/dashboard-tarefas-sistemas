import Menu from "@/app/ui/geral/menu-lateral";
import FormObservarProjeto from "@/app/ui/projetos/form";

export default function Page() {
    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"projetos"} />
            <FormObservarProjeto />
        </main>
    );
}