import { ReactNode } from 'react'
import MeuContextoProvider from '../context/agendamentoContext'

interface AgendamentoLayoutProps {
  children: ReactNode
}
export default function AgendamentoLayout({
  children,
}: AgendamentoLayoutProps) {
  return (
    <MeuContextoProvider>
      <section className="m-auto h-auto min-h-screen w-full max-w-[425px] bg-[#F1F1F1]">
        {children}
      </section>
    </MeuContextoProvider>
  )
}
