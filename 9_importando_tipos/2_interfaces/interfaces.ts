export interface AuthInterfaces{
    RequestDTO: {
        email: string
        code: number
    },
    ResponseDTO: {
        email: string
        password: string
    }
}