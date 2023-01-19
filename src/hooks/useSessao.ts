export function useSessao<T = unknown>() 
{
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return{token, email, authorization}
}