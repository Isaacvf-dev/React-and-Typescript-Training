import { ReactNode, useState } from 'react'

interface Props {
    title: string
    options: string[]
    onSelectItem: (item: string) => void
    children: ReactNode
}

const ListComponent = ({title, options, onSelectItem, children}: Props) => {
    const [selectedItem, setSelectedItem] = useState(0)

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                {children}
                <ul className="w-1/2 border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
                    {options.map((item, index) => (
                        <li
                            className={
                                selectedItem === index
                                    ? 'py-2 px-3 cursor-pointer bg-gray-800 text-white'
                                    : 'py-2 px-3 cursor-pointer'
                            }
                            key={index}
                            onClick={() => {
                              setSelectedItem(index)
                              onSelectItem(item)
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <hr />

                {options.length === 0 && (
                    <p>There are no items in the list</p>
                )}
            </div>
        </>
    )
}

export default ListComponent
