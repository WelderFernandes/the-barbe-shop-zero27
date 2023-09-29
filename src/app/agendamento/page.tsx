"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Categoria from "../components/categoria";
import Servicos from "../components/servicos";

export default function Agendamento() {

    const [checkCount, setCheckCount] = useState(0);

    return (
        <div className="overflow-hidden">
            <section className="mx-5">
                <header className="flex justify-center items-center pt-5 text-3xl text-black w-full">
                    <h1 className="text-black text-lg font-bold w-full text-center">Selecionar Serviço</h1>
                    <div className="flex justify-end">
                        <Link href={'/'}><AiOutlineClose/></Link>
                    </div>
                </header>
                
                <main>
                    <div>
                        <ul className="steps w-full mt-10">
                            <li className="step step-primary"></li>
                            <li className="step"></li>
                            <li className="step"></li>
                            <li className="step"></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-black text-lg font-bold mt-5">Categorias</h1>
                        <div className="mt-5">
                            <div className="carousel carousel-center rounded-box w-[390px]">
                                <div className="carousel-item">
                                    <Categoria/>
                                </div> 
                                <div className="carousel-item">
                                    <Categoria/>
                                </div> 
                                <div className="carousel-item">
                                    <Categoria/>
                                </div> 
                                <div className="carousel-item">
                                    <Categoria/>
                                </div> 
                                <div className="carousel-item">
                                    <Categoria/>
                                </div> 
                                <div className="carousel-item">
                                    <Categoria/>
                                </div> 
                                <div className="carousel-item">
                                    <Categoria/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-black text-lg font-bold mt-8">Serviços</h1>
                        <div className="form-control w-full mt-5">
                            <div className="input-group w-full">
                                <input type="text" placeholder="Procurar" className="input input-bordered bg-white text-black w-full" />
                                <button className="btn btn-square bg-primary text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-5 overflow-y-scroll overflow-visible scroll-hidden h-[440px]">
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                            <Servicos setCheckCount={setCheckCount}/>
                        </div>
                    </div>
                </main>
            </section>

            <footer>
                <div className="tabs tabs-boxed flex justify-between items-center fixed bottom-0 w-full max-w-[425px] h-[80px] bg-white shadow-md rounded-t-2xl p-5">
                    <div>
                        <div className="flex flex-row items-center gap-3">
                            <p><span className="bg-primary text-secondary p-2 rounded-full text-xs">{checkCount}</span></p>
                            <h2 className="text-xs">Produtos<br/> Selecionados</h2>
                        </div>
                    </div>
                    <button className="btn btn-active btn-neutral text-white">Próximo</button>
                </div>
            </footer>
        </div>
    );
}