import Menu from "@/app/ui/geral/menu-lateral";
import Header from "@/app/ui/geral/header";

export default function Inicio() {
    return(
        <main className="flex flex-row w-screen">
            <Menu />
            <Header />
        </main>
    );
}