import Image from "next/image";
import {datos_presentacion} from "@/app/components/Constantes";

export function Presentacion(){

    const handleClickContacto = () => {
        const seccion = document.getElementById('contacto');
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    return(
        <div className={"grid grid-cols-3 gap-4 max-w-7xl flex-wrap mt-8 container mx-auto border-b border-gray-500"}>

            <div className={"grid ml-2 col-span-3 md:col-span-2 mb-4"}>
                <p className={"text-gray-400"}>Hola, soy</p>
                <h1 className={"mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white"}>
                    {datos_presentacion.nombre} <span className="text-blue-500">{datos_presentacion.apellido}</span>
                </h1>
                <p className={"mb-4 text-lg font-normal lg:text-xl text-gray-400"}>
                    {datos_presentacion.descripcion}
                </p>

                <div className={"inline-flex"}>

                    <div>
                        <button
                            type="button"
                            onClick={handleClickContacto}
                            className="inline-flex items-center mr-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className={"h-6 mr-2"} fill={"currentColor"} viewBox="0 0 109.22 122.88"><path d="M41.83 97.57v-.38a17 17 0 0 1 4.31-11.57L32.39 71.88a5.76 5.76 0 0 0-8.13 0 5.76 5.76 0 0 0 0 8.12l17.57 17.57Zm-8.13 11.5a4.08 4.08 0 1 1-2.27 7.84 47.87 47.87 0 0 1-19.92-11A44.75 44.75 0 0 1 .23 88.11a4.09 4.09 0 0 1 7.71-2.72 36.71 36.71 0 0 0 9.2 14.61 39.73 39.73 0 0 0 16.56 9.12Zm30.18-86.69A4.08 4.08 0 1 1 67.36 15a44.74 44.74 0 0 1 10.19 6.55 41.61 41.61 0 0 1 7.63 8.63 4.09 4.09 0 1 1-6.82 4.51 33.56 33.56 0 0 0-6.12-6.93 36.66 36.66 0 0 0-8.36-5.37ZM68.05 8A4.08 4.08 0 1 1 70.32.16a48 48 0 0 1 19.93 11A44.84 44.84 0 0 1 101.52 29a4.09 4.09 0 0 1-7.71 2.72 36.71 36.71 0 0 0-9.2-14.56A39.73 39.73 0 0 0 68.05 8Zm24.46 63.35A29.16 29.16 0 0 0 84 76.83a14.41 14.41 0 0 0-4.16 6.78 11 11 0 0 0 .56 7A16.51 16.51 0 0 0 84 95.8l-2 1.85C71.69 86.59 77.13 76 90.11 69.4l-3.85-3.66a12.25 12.25 0 0 0-1-.9 1.85 1.85 0 0 1-.56-.32 11.5 11.5 0 0 0-7.35-1.74 11.34 11.34 0 0 0-7 3.28l-.75.75h-.06L48.89 87.56a1.83 1.83 0 0 1-.54.38l-.37.38a11.37 11.37 0 0 0-3.28 6.89 12 12 0 0 0 .21 3.73 11.77 11.77 0 0 0 3 5.12l12.42 12.42a21.7 21.7 0 0 0 15.24 6.4 21.06 21.06 0 0 0 15.1-6.21l9.42-9.42a21.85 21.85 0 0 0 7.12-16.71v-.11l-.14-29.23a1.5 1.5 0 0 1 0-.3l2.13.13-2.12-.13c.28-4.55-1.33-7.49-3.47-8.8a5.16 5.16 0 0 0-2.47-.78 4.64 4.64 0 0 0-2.4.52c-1.89 1-3.32 3.33-3.32 7.16 0 .88 0 3.21-.06 5.42a27 27 0 0 1-.53 5.27 2.13 2.13 0 0 1-.58 1.08 2.1 2.1 0 0 1-1.76.62ZM47.89 83.61 56 75.48l-22-22a5.78 5.78 0 0 0-4-1.64 5.72 5.72 0 0 0-4.07 1.67 5.79 5.79 0 0 0 0 8.14l22 22Zm10.3-10.3 8.13-8.13-29-29a5.79 5.79 0 0 0-8.14 0 5.79 5.79 0 0 0 0 8.14l29 29Zm10.74-9.49a17.55 17.55 0 0 1 11.63-4.34h.28l-25.7-25.71a5.77 5.77 0 0 0-8.13 0 5.77 5.77 0 0 0 0 8.13l21.91 21.93Z"/></svg>
                            Contactame
                        </button>
                    </div>

                    <a href={datos_presentacion.cv}>
                        <button
                            type="button"
                            className="text-blue-600 inline-flex items-center focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-white hover:bg-gray-200 focus:outline-none focus:ring-blue-800"
                        >
                            <svg className={"h-6 mr-2"} xmlns="http://www.w3.org/2000/svg" fill={"currentColor"} viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                            Descargar CV
                        </button>
                    </a>

                </div>

            </div>

            {/*
            <div className={"mt-auto hidden md:flex"}>
                <Image className={"float-right"} width={"160"} height={"200"} src={datos_presentacion.imagen} alt={"me"}></Image>
            </div>
            */}
        </div>
    )
}