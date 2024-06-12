
interface Props {
    textColor?: 'blue' | 'red' | 'orange'
}

const TitleComponent = ({textColor = 'red'}: Props) => {
    const colors = {
        blue: 'text-blue-700',
        red: 'text-red-700',
        orange: 'text-orange-600'
    }   

    return (
        <>
            <h1 className={`${colors[textColor]} font-bold text-4xl`}>React + Typescript</h1>
        </>
    )
}

export default TitleComponent
