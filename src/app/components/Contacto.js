import Image from "next/image";
import {redes_contacto} from "@/app/components/Constantes";

export function Contacto(){

    return(

        <div id={"contacto"} className={"mx-auto bg-gray-800"}>
            <div className={"max-w-7xl container mx-auto py-5"}>
                <h2 className={"text-2xl leading-none font-extrabold text-white justify-items-center mb-7 text-center"}>Contacto</h2>
                <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                    {redes_contacto.map((red) => (
                        <div key={red.key} className={"mb-3"}>
                            <a href={red.href} target={"_blank"} className="inline-flex leading-6 text-white">
                                {red.icon}
                                {red.desc}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}