"use client"
import Link from "next/link";
import Calendar from 'react-calendar';
import { AiOutlineArrowLeft } from "react-icons/ai";

import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

export default function SelecionarHorarios() {
const [date, setDate] = useState(null);

  const onChange = (selectedDate:any) => {
    setDate(selectedDate);
  };
    return(
        <>
            <section className="mx-5">
                <header className="flex justify-center items-center pt-5 text-3xl text-black w-full">
                    <div className="flex justify-end">
                        <Link href={'/agendamento'}><AiOutlineArrowLeft/></Link>
                    </div>
                    <h1 className="text-black text-lg font-bold w-full text-center">Selecionar Serviço</h1>
                </header>
            
                <main>
                    <div>
                        <ul className="steps w-full mt-5">
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
                <div className="tabs tabs-boxed flex justify-end items-center fixed bottom-0 w-full max-w-[425px] h-[80px] bg-white shadow-md rounded-t-2xl p-5">
                    <Link href={'/agendamento/selecionar-horarios'} className={date == null ? 'btn-disabled btn btn-active btn-neutral text-white' : 'btn btn-active btn-neutral text-white'}>Próximo</Link>
                </div>
            </footer>
        </>
    );
}