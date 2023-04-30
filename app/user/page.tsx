import { FaCalendarAlt, FaCheck, FaEye, FaTimesCircle } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

let animeStatus = [
    {
        name: 'All Anime',
        icon: null
    },
    {
        name: 'Currently Watching',
        icon: <FaEye />
    },
    {
        name: 'Completed',
        icon: <FaCheck />
    },
    {
        name: 'Dropped',
        icon: <FaTimesCircle />
    },
    {
        name: 'Plan to Watch',
        icon: <FaCalendarAlt />
    }
]

const App = ({ searchParams }: any) => {



    /**
     * const authorizationCode = searchParams.code
    fetch('https://myanimelist.net/v1/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
            'client_id': '575b2a3fd469526afa38c3a45792cde8',
            'client_secret': 'cf893b8609e40206da64a4613ce4dd447407d6bb706b2607e3e7d8d8c4bc9789',
            'grant_type': 'authorization_code',
            'code': authorizationCode,
            'code_verifier': 'udt8TeC4xv9E46Zx5zUm9xJPICnputPfQzBsE-_djzobOQD_W5-9oSL_1M8Mh-BtSvcizFIZXq3PGFwGeVAFiqIV2hRcAe6-PY6JkWUsuLiuIiKQt4xR0d24i0P9cnAh'
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token)
        })
     */

        



    return (
        <div>
            <div className='text-3xl' >
                anime list:
            </div>
        </div>
    )
}





export default App