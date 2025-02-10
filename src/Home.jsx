import InputForm from './components/input'

function Home() {
    return (
        <div className="min-h-screen w-full flex justify-center bg-cover bg-[url('/garen-background.webp')] relative">
            <div className="content max-w-4xl absolute top-1/3">
                <h1 className="text-5xl font-bold text-gray-200 text-center mb-16">SummonerStats</h1>
                <InputForm></InputForm>
            </div>
        </div>
    )
}

export default Home