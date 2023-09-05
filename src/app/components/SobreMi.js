import {Tab} from '@headlessui/react'
import Image from "next/image";
import {certificados, educacion, idiomas, tabs, tecnologias, experiencia} from "@/app/components/Constantes";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function SobreMi(){

    return(

        <div id={"sobreMi"} className={"py-10 max-w-7xl container mx-auto"}>
            <h2 className={"text-2xl leading-none font-extrabold text-white justify-items-center mb-5 text-center"}>Sobre Mí</h2>

            <Tab.Group>

                <Tab.List className={"flex flex-wrap items-center justify-center overflow-x-auto -mb-px text-sm font-medium text-center text-gray-400"}>
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.key}
                            className={({selected}) =>
                                classNames("inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group",
                                    selected ? "text-blue-500 border-blue-500 active" : "border-transparent hover:border-gray-300 hover:text-gray-300"
                            )}>
                            {tab.icono_path}
                            {tab.key}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels className={"flex flex-wrap overflow-x-auto p-3 mt-6 items-center justify-between"}>

                    <Tab.Panel className={"mx-auto shadow-md rounded-lg bg-gray-700"}>

                        <table className={"min-w-full text-sm whitespace-nowrap text-left text-gray-400 mb-2"}>

                            <thead className={"text-xs uppercase text-gray-400"}>
                            <tr>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Empresa
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Puesto
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Desde
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Hasta
                                </th>
                            </tr>
                            </thead>

                            <tbody>

                            {experiencia.map((exp) => (
                                <tr key={exp.key} className={"border-b bg-gray-800 border-gray-700 hover:bg-gray-600"}>
                                    <td scope="row" className={"flex items-center px-6 py-4 text-white whitespace-nowrap"}>
                                        <div className="flex h-8 w-8 mr-2 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-white">
                                            <Image className={"h-8 auto rounded-full"} src={exp.icono} alt={""}></Image>
                                        </div>

                                        {exp.empresa}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {exp.rol}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {exp.desde}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {exp.hasta}
                                    </td>
                                </tr>
                            ))}

                            </tbody>

                        </table>

                    </Tab.Panel>

                    <Tab.Panel className={"mx-auto shadow-md rounded-lg bg-gray-700"}>

                        <table className={"min-w-full text-sm whitespace-nowrap text-left text-gray-400 mb-2"}>

                            <thead className={"text-xs uppercase text-gray-400"}>
                            <tr>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Institución
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Título
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Año ingreso
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Año finalizado
                                </th>
                            </tr>
                            </thead>

                            <tbody>

                            {educacion.map((edu) => (
                                <tr key={edu.key} className={"border-b bg-gray-800 border-gray-700 hover:bg-gray-600"}>
                                    <td scope="row" className={"flex items-center px-6 py-4 text-white whitespace-nowrap"}>
                                        <div className="flex h-8 w-8 mr-2 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-white">
                                            <Image className={"h-6 auto rounded-full"} src={edu.icono} alt={""}></Image>
                                        </div>

                                        {edu.institucion}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {edu.titulo}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {edu.ingreso}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {edu.fin}
                                    </td>
                                </tr>
                            ))}

                            </tbody>

                        </table>

                    </Tab.Panel>

                    <Tab.Panel className={"mx-auto shadow-md overflow-x-auto rounded-lg bg-gray-700"}>

                        <table className={"min-w-full text-sm whitespace-nowrap text-left text-gray-400 mb-2"}>

                            <thead className={"text-xs uppercase text-gray-400"}>
                            <tr>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Emisor
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Nombre
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Expedición
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Credencial
                                </th>
                            </tr>
                            </thead>

                            <tbody>

                            {certificados.map((certificado) => (
                                <tr key={certificado.key} className={"border-b bg-gray-800 border-gray-700 hover:bg-gray-600"}>
                                    <td scope="row" className={"flex items-center px-6 py-4 text-white whitespace-nowrap"}>
                                        <Image className={"rounded-full mr-2"} width="30" height="30" src={certificado.icono} alt={""}></Image>
                                        {certificado.emisor}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {certificado.nombre}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {certificado.expedicion}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        <a href={certificado.url_credencial} target={"_blank"}>{certificado.id_credencial}</a>
                                    </td>
                                </tr>
                            ))}

                            </tbody>

                        </table>

                    </Tab.Panel>

                    <Tab.Panel className={"mx-auto shadow-md rounded-lg bg-gray-700 grid grid-cols-3 gap-x-6 gap-y-6 overflow-x-auto leading-6 py-3 px-5"}>

                        {tecnologias.map((tecnologia) => (
                            <div key={tecnologia.key} className={"group relative inline-flex items-center"}>
                                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <Image className={"h-8 auto"} src={tecnologia.icon} alt={""}></Image>
                                </div>
                                <h5 className={"ml-3 text-sm font-semibold text-white"}>{tecnologia.nombre}</h5>
                            </div>
                        ))}

                    </Tab.Panel>

                    <Tab.Panel className={"mx-auto shadow-md rounded-lg bg-gray-700 overflow-x-auto"}>

                        <table className={"min-w-full text-sm whitespace-nowrap text-left text-gray-400 mb-2"}>

                            <thead className={"text-xs uppercase text-gray-400"}>
                            <tr>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Idioma
                                </th>
                                <th scope={"col"} className={"px-6 py-3"}>
                                    Nivel
                                </th>
                            </tr>
                            </thead>

                            <tbody>

                            {idiomas.map((idioma) => (
                                <tr key={idioma.key} className={"border-b bg-gray-800 border-gray-700 hover:bg-gray-600"}>
                                    <td className={"px-6 py-4"}>
                                        {idioma.idioma}
                                    </td>
                                    <td className={"px-6 py-4"}>
                                        {idioma.nivel}
                                    </td>
                                </tr>
                            ))}

                            </tbody>

                        </table>

                    </Tab.Panel>

                </Tab.Panels>

            </Tab.Group>


        </div>


    )
}
