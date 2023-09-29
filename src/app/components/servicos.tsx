"use client"


export default function Servicos({setCheckCount}: any) {
    

    function handleCount():void {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
        const count = checkboxes.length;
        setCheckCount(count);
    }

    return (
        <>
        <div className="form-control">
            <label className="label cursor-pointer">
                <div className="w-full bg-white rounded-3xl p-3 flex flex-row justify-between shadow-md">
                    <p className="text-[#5F5F5F] flex items-center gap-2"><input type="checkbox" className="checkbox border-0" onClick={handleCount} /> Corte Degradê</p>
                    <p className="text-black font-bold">R$ 30,00</p>
                </div>
            </label>
        </div>
        </>
    );
}