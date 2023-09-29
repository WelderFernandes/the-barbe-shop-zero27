'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Categoria from '../components/categoria'
import Servicos from '../components/servicos'

export default function Agendamento() {
  const [checkCount, setCheckCount] = useState(0)

  return (
    <div className="overflow-hidden">
      <section className="mx-5">
        <header className="flex w-full items-center justify-center pt-5 text-3xl text-black">
          <div className="flex justify-end">
            <Link href={'/'}>
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <h1 className="w-full text-center text-lg font-bold text-black">Selecionar Data</h1>
        </header>

        <main>
          <div>
            <ul className="steps mt-5 w-full">
              <li className="step step-primary"></li>
              <li className="step"></li>
              <li className="step"></li>
              <li className="step"></li>
            </ul>
          </div>

          <div>
            <h1 className="mt-5 text-lg font-bold text-black">Categorias</h1>
            <div className="mt-5">
              <div className="carousel rounded-box w-[390px]">
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

          <div>
            <h1 className="mt-5 text-lg font-bold text-black">Serviços</h1>
            <div className="form-control mt-5 w-full">
              <div className="input-group w-full">
                <input
                  type="text"
                  placeholder="Procurar"
                  className="input input-bordered w-full bg-white text-black"
                />
                <button className="btn btn-square bg-primary text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5 pb-[100px]">
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
              <Servicos setCheckCount={setCheckCount} />
            </div>
          </div>
        </main>
      </section>

      <footer>
        <div className="tabs-boxed tabs fixed bottom-0 flex h-[80px] w-full max-w-[425px] items-center justify-between rounded-t-2xl bg-white p-5 shadow-md">
          <div>
            <div className="flex flex-row items-center gap-3">
              <p>
                <span className="rounded-full bg-primary p-2 text-xs text-secondary">
                  {checkCount}
                </span>
              </p>
              <h2 className="text-xs">
                Produtos
                <br /> Selecionados
              </h2>
            </div>
          </div>
          <Link
            href={'/agendamento/selecionar-horarios'}
            className="btn btn-neutral btn-active text-white"
          >
            Próximo
          </Link>
        </div>
      </footer>
    </div>
  )
}
