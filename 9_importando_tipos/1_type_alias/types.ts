export type AuthTypes = {
    EmailCode: {
        email: string,
        code: number
    },
    Request:{
        email: string
        password: string
    }
}