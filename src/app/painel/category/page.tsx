'use client'
import Image from 'next/image'
import { ChangeEvent, useMemo, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { HiOutlineArrowCircleDown } from 'react-icons/hi'
import useSWR from 'swr'
import { Categories } from '../../../../types'

const columns: TableColumn<Categories>[] = [
  {
    name: 'Imagem',
    selector: (row) => row.image,
    cell: (row) => (
      <Image src={row.image} alt={row.image} width={100} height={100} />
    ),
    sortable: true,
  },
  {
    name: 'Nome',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'descrição',
    selector: (row) => row.description,
    sortable: true,
  },
]

// data provides access to your row data

export default function Category() {
  const [selectedRows, setSelectedRows] = useState(false)
  // const [toggledClearRows, setToggleClearRows] = useState(false)
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const URL = 'http://localhost:3002/category'

  const fetcher = async (url: string) => {
    const res = await fetch(url)
    return await res.json()
  }
  const { data } = useSWR<Categories[]>(URL, fetcher)

  const filteredItems = data?.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  )

  const FilterComponent = ({ filterText, onFilter, onClear }: any) => (
    <>
      <input
        id="buscar"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
        className="w-full max-w-xs rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-left shadow-sm sm:text-sm"
      />
      <div className="btn btn-primary" onClick={onClear}>
        X
      </div>
    </>
  )
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e: ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  function handleChange(selectedRows: boolean) {
    setSelectedRows(selectedRows)
  }

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered

  // function handleClearRows() {
  //   setToggleClearRows(!toggledClearRows)
  // }

  const tableStyles = {
    headRow: {
      style: {
        backgroundColor: '#f1f1f1',
      },
    },
    headCells: {
      style: {
        color: '#000',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '16px',
      },
    },
  }

  return (
    <>
      {subHeaderComponentMemo}
      <DataTable
        paginationResetDefaultPage={resetPaginationToggle}
        columns={columns}
        // data={data || []}
        data={filteredItems || []}
        title="Categorias"
        selectableRows
        customStyles={tableStyles}
        pagination
        sortIcon={
          <div className="ml-2">
            <HiOutlineArrowCircleDown />
          </div>
        }
        paginationComponentOptions={{
          rowsPerPageText: 'Linhas por página',
          rangeSeparatorText: 'de',
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: 'Todos',
        }}
        selectableRowsHighlight
        onSelectedRowsChange={() => handleChange(selectedRows)}
        // clearSelectedRows={toggledClearRows}
        contextMessage={{
          singular: 'linha selecionada',
          plural: 'linhas selecionadas',
        }}
        subHeaderComponent={
          <div className="flex gap-2">
            <div className="btn btn-primary">Adicionar</div>
            <div className="btn btn-primary">Editar</div>
            <div className="btn btn-primary">Excluir</div>
          </div>
        }
        subHeaderWrap
        noDataComponent="Nenhum registro encontrado"

        // contextActions={{
        //   // eslint-disable-next-line react/display-name
        //   // eslint-disable-next-line react/display-name
        //   // eslint-disable-next-line react/display-name
        //   component: (props: any) => (
        //     <button onClick={handleClearRows}>Clear</button>
        //   ),
        // }}
      />
    </>
  )
}
