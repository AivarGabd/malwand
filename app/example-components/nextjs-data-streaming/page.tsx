import Link from 'next/link'
import data from './pokemon.json'


const App = () => {

    return (
        <main>
            <div className='w-[1000px] bg-gray-300 flex flex-wrap'>
                {data.map((pokemon, index) => (
                    <Link href={`/example-components/nextjs-data-streaming/pokemon`} key={pokemon.name}>
                        <div className='m-[5px] p-[5px] bg-slate-100 grow shrink basis-[150px]'>
                            {pokemon.name}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default App