import { AiOutlineCalendar, AiOutlineHeart, AiOutlineHome, AiOutlineUser } from "react-icons/ai";

export default function Rodape() {
    return (
        <>
            <div className="tabs tabs-boxed flex justify-between items-center fixed bottom-0 max-w-[425px] w-full h-[80px] bg-white shadow-md rounded-t-2xl">
                <a className="tab text-black text-4xl"><AiOutlineHome/></a> 
                <a className="tab text-black text-4xl"><AiOutlineHeart/></a> 
                <a className="tab text-black text-4xl"><AiOutlineCalendar/></a>
                <a className="tab text-black text-4xl"><AiOutlineUser/></a>
            </div>
        </>
    );
}