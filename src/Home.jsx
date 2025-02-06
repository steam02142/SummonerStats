import InputForm from './components/input'

function Home() {
    return (
        <div className="min-h-screen w-full flex justify-center bg-cover bg-[url('/garen-background.webp')]">
            <div className="content max-w-4xl">
                <h1 className="text-5xl mt-4 font-bold text-gray-200 text-center">SummonerStats</h1>
                <div className="mt-44 mb-14 text-[#f1f1f1] align-middle">
                    <span className="block text-4xl font-bold text-[#f1f1f1]">
                        Welcome
                    </span>
                    <span className="font-medium text-lg">Please enter your </span>
                    <span className="font-medium text-lg bg-blue-600 rounded-md">username</span>
                    <span className="font-medium text-lg"> and </span>
                    <span className="font-medium text-lg bg-blue-600 rounded-md">tagline</span>

                </div>

                <InputForm></InputForm>

            </div>
        </div>
    )
}

export default Home