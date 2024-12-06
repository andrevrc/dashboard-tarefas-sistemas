import Menu from "@/app/ui/geral/menu-lateral";
import FormNovoModulo from "@/app/ui/modulos/form";

export default function Page() {
    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"modulos"} />
            <FormNovoModulo />
        </main>
    );
}