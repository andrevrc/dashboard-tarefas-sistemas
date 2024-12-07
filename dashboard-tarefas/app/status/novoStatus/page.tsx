import FormNovo from "@/app/ui/geral/form-geral";
import Menu from "@/app/ui/geral/menu-lateral";

export default function Page() {
    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"status"} />
            <FormNovo tipo={"Status"} />
        </main>
    );
}