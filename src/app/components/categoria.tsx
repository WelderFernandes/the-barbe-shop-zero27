import Image from "next/image";

export default function Categoria() {
    return (
        <div className="mr-3">
            <div className="w-[65px] h-[65px] flex justify-center items-center bg-white rounded-2xl shadow-md">
                <Image src={'/img/icon/cabelo.png'} alt="icon corte cabelo" width={42} height={42}/>
            </div>
            <p className="text-center mt-2 text-sm font-semibold">Cabelo</p>
        </div>
        
    );
}