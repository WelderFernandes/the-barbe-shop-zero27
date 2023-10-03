import { ReactNode } from 'react'

export function dateNow(): ReactNode {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date())
}
