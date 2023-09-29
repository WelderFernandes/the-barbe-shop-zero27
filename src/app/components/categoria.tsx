import Image from "next/image";

export default function Categoria() {
    return (
        <div>
            <div className="w-[77px] h-[77px] flex justify-center items-center bg-white rounded-2xl shadow-md">
                <Image src={'/img/icon/cabelo.png'} alt="icon corte cabelo" width={50} height={50}/>
            </div>
        </div>
        
    );
}