import Comments from "./Comments"
import { Suspense } from "react"


const fetchDescription = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve('Product information ready for SEO'), 100)
    )



const App = async () => {

    const description = (await fetchDescription()) as string

    return (
        <main>
            <h2 className='text-2xl'>Product description</h2>
            <div>{description}</div>

            <Suspense fallback={<div className={`font-bold text-2xl`}>Loading...</div>}>
                {/* @ts-expect-error */}
                <Comments />
            </Suspense>
        </main>
    )
}

export default App