'use client'
import Link from 'next/link'
import Calendar from 'react-calendar'
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

import ServicosHome from '@/app/components/servicos_home'
import Image from 'next/image'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

export default function SelecionarHorarios() {
  const [date, setDate] = useState(null)
  const currentDate = new Date()

  const onChange = (selectedDate: any) => {
    setDate(selectedDate)
  }
  return (
    <>
      <section className="mx-5">
        <header className="flex w-full items-center justify-center pt-5 text-3xl text-black">
          <div className="flex justify-end">
            <Link href={'/agendamento'}>
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <h1 className="w-full text-center text-lg font-bold text-black">
            Selecionar Serviço
          </h1>
        </header>

        <main>
          <div>
            <ul className="steps mt-5 w-full">
              <li className="step step-primary"></li>
              <li className="step step-primary"></li>
              <li className="step"></li>
              <li className="step"></li>
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <Calendar
              onChange={onChange}
              value={date}
              locale="pt-BR"
              minDate={currentDate}
            />
          </div>
          {date != null ? (
            <>
              <div className="divider"></div>

              <div className="flex flex-row items-start gap-3">
                <div className="flex w-[30%] flex-col items-center gap-2">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <Image
                        src={'/img/logo/logo.png'}
                        alt="Logo"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <h1 className="font-semibold">Tam Cortes</h1>
                </div>
                <div className="-mt-4 w-[70%]">
                  <div>
                    <ServicosHome />
                    <div className="ml-4 mt-2 flex flex-row items-center justify-between gap-0 text-sm font-semibold text-gray-600">
                      <div className="flex flex-row items-center gap-0">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <p>10m</p>
                      </div>
                      <span className="mr-4 text-error">
                        <BsTrash />
                      </span>
                    </div>
                    <div className="mt-3 flex justify-center gap-2">
                      <div className="badge badge-ghost">16:00</div>
                      <div className="badge badge-ghost">16:10</div>
                      <div className="badge badge-ghost">16:20</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <ServicosHome />
                    <div className="ml-4 mt-2 flex flex-row items-center justify-between gap-0 text-sm font-semibold text-gray-600">
                      <div className="flex flex-row items-center gap-0">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <p>10m</p>
                      </div>
                      <span className="mr-4 text-error">
                        <BsTrash />
                      </span>
                    </div>
                    <div className="mt-3 flex justify-center gap-2">
                      <div className="badge badge-ghost">16:00</div>
                      <div className="badge badge-ghost">16:10</div>
                      <div className="badge badge-ghost">16:20</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </main>
      </section>

      <footer>
        <div className="tabs-boxed tabs fixed bottom-0 flex h-[80px] w-full max-w-[425px] items-center justify-end rounded-t-2xl bg-white p-5 shadow-md">
          <Link
            href={'/agendamento/selecionar-horarios'}
            className={
              date == null
                ? 'btn btn-disabled btn-neutral btn-active text-white'
                : 'btn btn-neutral btn-active text-white'
            }
          >
            Próximo
          </Link>
        </div>
      </footer>
    </>
  )
}
