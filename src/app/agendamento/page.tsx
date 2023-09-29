import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import Categoria from '../components/categoria'

export default function Agendamento() {
  return (
    <section className="mx-5">
      <div className="flex justify-end pt-5 text-3xl text-black">
        <Link href={'/'}>
          <AiOutlineClose />
        </Link>
      </div>

      <div>
        <h1 className="mt-10 text-lg font-bold text-black">Categorias</h1>
        <div className="mt-5">
          <div className="carousel-center carousel rounded-box">
            <div className="carousel-item">
              <Categoria />
            </div>
            <div className="carousel-item">
              <Categoria />
            </div>
            <div className="carousel-item">
              <Categoria />
            </div>
            <div className="carousel-item">
              <Categoria />
            </div>
            <div className="carousel-item">
              <Categoria />
            </div>
            <div className="carousel-item">
              <Categoria />
            </div>
            <div className="carousel-item">
              <Categoria />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
