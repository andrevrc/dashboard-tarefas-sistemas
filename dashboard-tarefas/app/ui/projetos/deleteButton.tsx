import { deleteProject } from "@/app/lib/conexao-firebase";
import { Projeto } from "@/app/lib/tipos-dados";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DeleteButton({ projeto }: { projeto: Projeto }) {
    const handleDeleteButton = deleteProject.bind(null, projeto);

    return (
        <form action={handleDeleteButton}>
            <button type="submit">
                <XMarkIcon className="w-6" />
            </button>
        </form>
    );
}