'use client'
import Image from 'next/image'
import DataTable, {
  ExpanderComponentProps,
  TableColumn,
} from 'react-data-table-component'
import useSWR from 'swr'
import { Categories } from '../../../../types'

const columns: TableColumn<Categories>[] = [
  {
    name: 'Imagem',
    selector: (row) => row.image,
  },
  {
    name: 'Nome',
    selector: (row) => row.name,
  },
  {
    name: 'descrição',
    selector: (row) => row.description,
  },
]

// data provides access to your row data
const ExpandedComponent: React.FC<ExpanderComponentProps<Categories>> = ({
  data,
}) => {
  return <Image src={data.image} alt={data.name} width={200} height={200} />
}

export default function Category() {
  const URL = 'http://localhost:3002/category'

  const fetcher = async (url: string) => {
    const res = await fetch(url)
    return await res.json()
  }

  const { data } = useSWR<Categories[]>(URL, fetcher)

  return (
    <DataTable
      columns={columns}
      data={data || []}
      title="Categorias"
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
  )
}
