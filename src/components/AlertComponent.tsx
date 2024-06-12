import { ReactNode } from "react"

interface Props {
    title: string
    children: ReactNode
}

const AlertComponent = ({title, children}: Props) => {    

    return (
        <>
            <div className="flex flex-col bg-white p-8 gap-4 rounded-xl shadow-xl ">
                <span className="font-medium text-xl">{title}</span>
                <div className="flex">{children}</div>
            </div>
        </>
    )
}

export default AlertComponent
