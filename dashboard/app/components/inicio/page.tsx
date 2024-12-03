import Geral from "../geral/page";
import Menu from "../menu/page";

export default function Inicio() {
    return (
        <>
            <div className="flex flex-row w-screen">
                <Menu />
                <Geral />
            </div>
        </>
    );
}