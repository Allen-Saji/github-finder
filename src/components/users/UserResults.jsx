import {useEffect, useState} from 'react'
const GITHUB_URL = "https://api.github.com"
const GITHUB_TOKEN = "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"

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        const response = await  fetch(`${GITHUB_URL}/users`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()
        console.log(data)

        setUsers(data)
        setLoading(false)
    }

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {users.map((user) => (
               <h3>{user.login}</h3>
              ))}
            </div>
          )
    }else {
        
    }
 
}

export default UserResults
