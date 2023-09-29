import { ReactNode } from "react";

interface AgendamentoLayoutProps {
    children: ReactNode
}

export default function AgendamentoLayout({ children }: AgendamentoLayoutProps) {
    return ( 
        <section className="min-h-screen max-h-screen h-auto m-auto w-full max-w-[425px] bg-[#F1F1F1]">
            {children}
        </section>
    );
}