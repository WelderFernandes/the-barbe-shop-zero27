'use client'
import Link from 'next/link'
import Calendar from 'react-calendar'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

export default function SelecionarHorarios() {
  const [date, setDate] = useState(null)

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
          <h1 className="w-full text-center text-lg font-bold text-black">Selecionar Serviço</h1>
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
            <Calendar onChange={onChange} value={date} locale="pt-BR" />
          </div>
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
