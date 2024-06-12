import ListComponent from './components/ListComponent'

function App() {
    const languages = ['Ruby', 'Javascript', 'Python', 'Java']
    const movies = ['Frozen', 'Fast and furious', 'Moolan', 'KungFu Panda 3']

    const handleSelectItem = (item: string) => {
      alert(item)
    }
    return (
        <>
            <div className="flex flex-col">
                <ListComponent
                    title="Programming Languages"
                    options={languages}
                    onSelectItem={handleSelectItem}
                >
                  <p>Select one</p>
                </ListComponent>
                <ListComponent title="Movies" options={movies} onSelectItem={handleSelectItem}>
                  <p>Select one</p>
                </ListComponent>
            </div>
        </>
    )
}

export default App
