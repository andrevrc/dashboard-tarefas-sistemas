import FormNovoFiltro from "@/app/ui/filtro/form-filtro";
import Menu from "@/app/ui/geral/menu-lateral";

export default function Page() {
    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"filtros"} />
            <FormNovoFiltro />
        </main>
    );
}