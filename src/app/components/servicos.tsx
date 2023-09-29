
export default function Servicos() {
  return (
    <>
      <div className="w-full bg-white rounded-3xl p-3 flex flex-row justify-between shadow-md mt-3">
        <p className="text-[#5F5F5F]">Corte Degradê</p>
        <p className="text-black font-bold">R$ 30,00</p>
      </div>
    </>
  )
}
=======
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
                <div className="w-full bg-white rounded-3xl p-2 flex flex-row justify-between shadow-md">
                    <p className="text-[#5F5F5F] text-sm flex items-center gap-2"><input type="checkbox" className="checkbox border-0 text-sm" onClick={handleCount} /> Corte Degradê</p>
                    <p className="text-black text-sm font-bold">R$ 30,00</p>
                </div>
            </label>
        </div>
        </>
    );
}

