import { deleteModulo } from "@/app/lib/conexao-firebase";
import { Modulo } from "@/app/lib/tipos-dados";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DeleteButton({ modulo }: { modulo: Modulo }) {
    const handleDeleteButton = deleteModulo.bind(null, modulo);

    return (
        <form action={handleDeleteButton}>
            <button type="submit">
                <XMarkIcon className="w-6" />
            </button>
        </form>
    );
}