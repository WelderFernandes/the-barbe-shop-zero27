import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'

export function LeftMenu() {
  return (
    <div className="drawer-overlay  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side rounded-3xl">
        <div className="items-right menu flex min-h-full w-60 bg-slate-100 text-base-content">
          <div className="items-right drawer-content flex content-end items-end justify-end">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square border-none bg-white hover:border-solid hover:border-blue-100 hover:bg-white lg:hidden"
            >
              <AiOutlineClose className=" h-5 w-5 " />
            </label>
          </div>
          <div className="drawer-end mb-8 flex flex-col items-center">
            <Image
              src="/img/logo/logo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <ul className="items-left mx-4 flex flex-col">
            <li>
              <Link href="/painel" className="active">
                <RxDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/painel/services">
                <RxDashboard className="h-5 w-5" />
                <span>Serviçõs</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
