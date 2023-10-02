import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'

export function RightMenu() {
  return (
    <div className="drawer-end  lg:drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side rounded-3xl">
        <div className="items-right menu flex min-h-full w-60 bg-slate-100 text-base-content">
          <div className="items-right drawer-content flex content-end items-end justify-end">
            <label
              htmlFor="my-drawer-1"
              className="btn btn-square border-none bg-white hover:border-solid hover:border-blue-100 hover:bg-white lg:hidden"
            >
              <AiOutlineClose className=" h-5 w-5 " />
            </label>
          </div>
          <div className="drawer-end flex flex-col items-center "></div>
          <ul className="items-left mx-4 flex flex-col">
            <li>
              <Link href="/dashboard" className="active">
                <RxDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <RxDashboard className="h-5 w-5" />
                <span>Configurações</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
