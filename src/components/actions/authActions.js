export const signinAction = (jwt) => {
    return {
        type: 'SIGNIN',
        jwt
    }
}