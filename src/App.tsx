import { useState } from 'react'
import AlertComponent from './components/AlertComponent'

function App() {
  const [alertBox, setAlertBox] = useState(false)

  const callAlert = () => {
    setAlertBox(!alertBox)
  }
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-200">
              {alertBox && 
                <AlertComponent title='Attention Please!'>
                  <p>React and Typescript is cool!</p>
                </AlertComponent>}
                <button 
                onClick={callAlert}
                className="bg-gray-700 text-white uppercase text-sm font-medium rounded-xl px-6 py-2 shadow-xl hover:bg-gray-900">
                    Show Alert
                </button>
            </div>
        </>
    )
}

export default App
