'use client'
import Link from 'next/link'
import Calendar from 'react-calendar'
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

import ServicosHome from '@/app/components/servicos_home'
import { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'

export default function SelecionarHorarios() {
  const [date, setDate] = useState(null)
  const currentDate = new Date()

  const onChange = (selectedDate: any) => {
    setDate(selectedDate)
  }

  const [selectedOptions, setSelectedOptions] = useState<{
    [group: string]: string
  }>({
    group1: '',
    group2: '',
  })

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: value,
    }))
  }

  const [allSelected, setAllSelected] = useState(false)

  useEffect(() => {
    const groups = Object.keys(selectedOptions)
    const isAllSelected = groups.every((group) => selectedOptions[group] !== '')
    setAllSelected(isAllSelected)
    console.log(allSelected)
  }, [selectedOptions])

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
                <div className="mt-0 w-full">
                  <div>
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="w-full">
                        <ServicosHome />
                      </div>
                      <span className="mr-4 text-base text-error">
                        <BsTrash />
                      </span>
                    </div>
                    <div className="ml-4 mt-2 flex flex-row items-center justify-between gap-9 text-sm font-semibold text-gray-600">
                      <div className="flex flex-row items-center gap-0">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <p>10m</p>
                      </div>
                      <p className="w-full text-left text-xs">
                        SELECIONE UM HORÁRIO ABAIXO:
                      </p>
                    </div>
                    <div className="mt-3 flex justify-center gap-2">
                      <input
                        type="radio"
                        name="group1"
                        aria-label="16:00"
                        className="btn btn-xs"
                        onChange={handleOptionChange}
                      />
                      <input
                        type="radio"
                        name="group1"
                        aria-label="16:10"
                        className="btn btn-xs"
                        onChange={handleOptionChange}
                      />
                      <input
                        type="radio"
                        name="group1"
                        aria-label="16:20"
                        className="btn btn-xs"
                        onChange={handleOptionChange}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <div className="w-full">
                        <ServicosHome />
                      </div>
                      <span className="mr-4 text-base text-error">
                        <BsTrash />
                      </span>
                    </div>
                    <div className="ml-4 mt-2 flex flex-row items-center justify-between gap-9 text-sm font-semibold text-gray-600">
                      <div className="flex flex-row items-center gap-0">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <p>10m</p>
                      </div>
                      <p className="w-full text-left text-xs">
                        SELECIONE UM HORÁRIO ABAIXO:
                      </p>
                    </div>
                    <div className="mt-3 flex justify-center gap-2">
                      <input
                        type="radio"
                        name="group2"
                        aria-label="16:00"
                        className="btn btn-xs"
                        onChange={handleOptionChange}
                      />
                      <input
                        type="radio"
                        name="group2"
                        aria-label="16:10"
                        className="btn btn-xs"
                        onChange={handleOptionChange}
                      />
                      <input
                        type="radio"
                        name="group2"
                        aria-label="16:20"
                        className="btn btn-xs"
                        onChange={handleOptionChange}
                      />
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
            href={'/agendamento/checkout'}
            className={
              allSelected
                ? 'btn btn-neutral btn-active text-white'
                : 'btn btn-disabled btn-neutral btn-active text-white'
            }
          >
            Próximo
          </Link>
        </div>
      </footer>
    </>
  )
}
