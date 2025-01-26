import InputForm from './components/input'

function Home() {
    return (
        <div>
            <h2 className="mt-3 mb-14">
            <span className="block text-4xl font-bold text-cyan-500">
                Welcome
            </span>
            <span className="block mt-2 text-lg font-medium text-gray-700">
                <span className="bg-yellow-100 px-2 py-1 rounded-lg">Please enter</span> 
                 your 
                <span className="bg-pink-100 px-2 py-1 rounded-lg">username</span> 
                and 
                <span className="bg-green-100 px-2 py-1 rounded-lg">tagline</span>.
            </span>
            </h2>

            <InputForm></InputForm>

        </div>
    )
}

export default Home