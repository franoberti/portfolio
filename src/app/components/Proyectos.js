import Image from "next/image";
import { proyectos } from "@/app/components/Constantes";

export function Proyectos() {

    return (
        <div id={"proyectos"} className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-5"}>

            <h2 className={"col-span-full text-2xl mb-5 leading-none font-extrabold text-white justify-items-center text-center"}>Proyectos</h2>

            {proyectos.map((proyecto) => (
                <div key={proyecto.key} className={"flex flex-col bg-gray-800 border-gray-700 border rounded-lg shadow"}>
                    <img className={"rounded-t-lg m-0.5"} style={{ height: 250 }} src={proyecto.imagen} alt={""}></img>

                    <div className={"p-5"}>
                        <div className={"inline-flex items-center justify-center mb-2"}>

                            {
                                proyecto.imagen_herramienta.map((imagen) => (
                                    <div key={imagen} className="flex h-8 w-8 mb-1 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <Image className={"h-6 auto"} title={proyecto.herramienta} src={imagen} alt={""}></Image>
                                    </div>
                                ))
                            }

                            <h5 className={"ml-3 text-2xl font-bold text-white"}>{proyecto.key}</h5>
                        </div>
                        <p className={"font-normal text-gray-400"}>{proyecto.descripcion}</p>
                    </div>

                    <div className={"mt-auto inline-flex justify-center"}>
                        {proyecto.url_ver ?
                            <a href={proyecto.url_ver} target={"_blank"}>
                                <button type="button" title={"Ver"} className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 mr-5 mb-3 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={"h-6 mr-2"} width="30" height="30" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#ffffff" /></svg>
                                    Ver
                                </button>
                            </a>

                            :
                            <></>
                        }

                        <a href={proyecto.url_repo} target={"_blank"}>
                            <button type="button" title={"Ingresar a repositorio"} className="inline-flex justifty-center items-center text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-3 bg-[#050708] focus:ring-[#050708]/50 hover:bg-[#050708]/30 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className={"h-6 mr-2"} width="35" height="35" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="#ffffff" /></svg>
                                Repositorio
                            </button>
                        </a>
                    </div>

                </div>
            ))}
        </div>
    )
}