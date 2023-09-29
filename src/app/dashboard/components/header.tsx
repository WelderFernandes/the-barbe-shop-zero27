import { HiMenuAlt1 } from 'react-icons/hi'

export function Header() {
  return (
    <div className="navbar flex justify-between ">
      <div className="items-left drawer-content flex flex-col justify-center p-2">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square border-none bg-transparent lg:hidden"
        >
          <HiMenuAlt1 className=" h-5 w-5 " />
        </label>
      </div>
      <div className="prose navbar-start">
        <h2>Dashboard</h2>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge indicator-item badge-primary badge-xs"></span>
          </div>
        </button>
        <div className="items-left drawer-content flex flex-col justify-center p-2">
          <label
            htmlFor="my-drawer-1"
            className="btn btn-square border-none bg-transparent lg:hidden"
          >
            <HiMenuAlt1 className=" h-5 w-5 " />
          </label>
        </div>
      </div>
    </div>
  )
}
