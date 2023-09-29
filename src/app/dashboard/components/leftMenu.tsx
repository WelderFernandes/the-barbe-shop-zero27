import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'

export function LeftMenu() {
  return (
    <div className="lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side ">
        {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
        <div className="items-right menu flex  min-h-full border-2 border-gray-100 py-10 text-base-content">
          <div className="items-right drawer-content flex content-end items-end justify-end">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square border-none bg-white hover:border-solid hover:border-blue-100 hover:bg-white lg:hidden"
            >
              <AiOutlineClose className=" h-5 w-5 " />
            </label>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={'/img/logo/logo.png'}
              alt="Logo"
              width={100}
              height={100}
              className="mb-3"
            />
          </div>
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
