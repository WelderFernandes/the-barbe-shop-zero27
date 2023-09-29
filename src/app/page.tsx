import Image from "next/image";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import Rodape from "./components/rodape";
import ServicosHome from "./components/servicos_home";

export default function Home() {
  return (
    <section className="min-h-screen h-auto m-auto w-full max-w-[425px] bg-[#F1F1F1]">
      <header className="bg-[url('/img/banner/banner.png')] w-full h-[186px] bg-no-repeat bg-cover">
        <div className="text-3xl text-white flex w-full justify-end p-5">
          <IoNotificationsSharp />
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <Image src={'/img/logo/logo.png'} alt="Logo" width={150} height={150}/>
          <h1 className="text-black mt-3 text-xl font-bold">Tam Cortes</h1>
        </div>
      </header>
      <main className="mt-36 mx-5">
        <Link href="/agendamento" className="btn btn-active w-full text-white bg-[#202020] shadow-xl">AGENDAR CORTE</Link>

        <div>
          <div>
              <h1 className="text-black text-lg font-bold mt-10">DESCRIÇÃO</h1>
              <p className="text-black text-xs mt-4">Nossa barbearia é o lugar onde a arte do corte de cabelo se encontra
                 com um atendimento de excelência. Com um ambiente acolhedor e 
                 descontraído,  oferecemos serviços personalizados, desde cortes 
                 clássicos até estilos modernos e  tendências. Venha nos visitar e descubra 
                 o  que é ter um visual impecável com um toque de sofisticação.
              </p>
          </div>
          <div>
              <h1 className="text-black text-lg font-bold mt-10 mb-5">TOP 5 SERVIÇOS</h1>
              <ServicosHome/>
              <ServicosHome/>
              <ServicosHome/>
              <ServicosHome/>
              <ServicosHome/>
          </div>
          <div>
              <h1 className="text-black text-lg font-bold mt-10">REDES SOCIAIS</h1>
              <p className="text-black text-2xl mt-4 flex gap-4">
                <a href="https://www.instagram.com.br/"><BsInstagram/></a>
                <a href="https://www.instagram.com.br/"><BsFacebook/></a>
                <a href="https://www.instagram.com.br/"><BsTwitter/></a>
              </p>
          </div>
          <div className="pb-[105px]">
              <h1 className="text-black text-lg font-bold mt-10">LOCALIZAÇÃO</h1>
              <p className="text-black text-xs mt-4 flex flex-col gap-4">
                Rua Nova, 167<br/>
                São Toquato - CEP 29115-828<br/>
                Vila Velha - ES
              </p>
              <a href="https://www.google.com.br/maps/place/R.+Nova,+167+-+S%C3%A3o+Torquato,+Vila+Velha+-+ES,+29114-280/@-20.3317713,-40.3506332,21z/data=!4m6!3m5!1s0xb83c335ae25365:0xa080f788eeba5be!8m2!3d-20.3318188!4d-40.3504796!16s%2Fg%2F11hbgrjp5s?entry=ttu" className="flex gap-1 text-black text-xs mt-2"><BiMap/> Abrir mapa</a>
          </div>
        </div>
      </main>
      <footer>
        <Rodape/>
      </footer>
    </section>
  )
}
