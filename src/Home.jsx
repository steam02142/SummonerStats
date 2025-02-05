import InputForm from './components/input'

function Home() {
    return (
        <div>
            <h1 className="text-5xl font-bold text-gray-200 text-center">SummonerStats</h1>
            <div className="mt-8 mb-14">
                <span className="block text-4xl font-bold text-teal-500">
                    Welcome
                </span>
                <span>Please enter your username and tagline</span>
            </div>

            <InputForm></InputForm>

        </div>
    )
}

export default Home