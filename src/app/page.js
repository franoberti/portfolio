'use client';

import {Header} from "@/app/components/Header";
import {Presentacion} from "@/app/components/Presentacion";
import {SobreMi} from "@/app/components/SobreMi";
import {Proyectos} from "@/app/components/Proyectos";
import {Contacto} from "@/app/components/Contacto";

export default function Home() {
  return (
      <div className={"mx-auto bg-gray-900"}>
          <Header />
          <Presentacion />
          <SobreMi />
          <Proyectos />
          <Contacto />
      </div>
  )
}
