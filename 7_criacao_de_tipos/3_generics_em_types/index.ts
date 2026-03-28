type ApiResponse<T extends {id: number | null}> = {success: true, data: T} | {success: false, error: string}

interface UserDTORequest{
    email: string
    code: number
}

interface UserDTOResponse{
    id: number
    name: string
}

function confirmEmail(data: UserDTORequest): ApiResponse<UserDTOResponse>{
    if(!data.email || !data.code){
        return {
            success: false,
            error: 'preencha os dados'
        }
    }
    console.log(data.email)
    console.log(data.code)
    return {
        success: true,
        data: {
            id: 1,
            name: 'Emanuel'
        }
    }
}