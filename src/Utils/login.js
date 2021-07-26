export default function saveInfoLocalStorage(res){
    const {data} = res

    const token = data.token

    localStorage.setItem('token', token)

}