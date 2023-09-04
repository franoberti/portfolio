import Image from "next/image";
import {redes_encabezado} from "@/app/components/Constantes";

export function Header() {

    const handleClickSobreMi = () => {
        const seccion = document.getElementById('sobreMi');
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const handleClickProyectos = () => {
        const seccion = document.getElementById('proyectos');
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const handleClickContacto = () => {
        const seccion = document.getElementById('contacto');
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-6" aria-label="Global">

            <div className="flex">
                <a href="#" className="flex">
                    <svg className={"h-8 auto stroke-white"} width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h512v-96c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm384 232H320v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V288z"/></svg>
                    <span className="text-2xl font-semibold whitespace-nowrap text-white">Mi Portafolios</span>
                </a>
            </div>

            <div className={"hidden md:flex gap-x-12 justify-center"}>

                <button className="leading-6 text-white hover:text-blue-500" onClick={handleClickSobreMi}>
                    Sobre mí
                </button>

                <button className="leading-6 text-white hover:text-blue-500" onClick={handleClickProyectos}>
                    Proyectos
                </button>

                <button className="leading-6 text-white hover:text-blue-500" onClick={handleClickContacto}>
                    Contacto
                </button>
            </div>

            <div className={"flex justify-end"}>
                {redes_encabezado.map((item) => (
                    <a key={item.key} href={item.href} title={item.key} target={"_blank"} className={"flex items-center"}>
                        {item.icon}
                    </a>
                ))}
            </div>

        </nav>
    )
}