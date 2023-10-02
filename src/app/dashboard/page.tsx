import { Header } from './components/header'
import { LeftMenu } from './components/leftMenu'
import { RightMenu } from './components/rightMenu'

export default function Agendamento() {
  return (
    <div className="flex flex-1 ">
      <LeftMenu />
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />
        <div className="mx-6 my-3">
          <h1>Contant</h1>
        </div>
      </div>
      <RightMenu />
    </div>
  )
}
