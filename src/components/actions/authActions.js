export const signinAction = (jwt) => {
    return {
        type: 'SIGNIN',
        jwt
    }
}

export const signoutAction = () => {
    return {
        type: 'SIGNOUT'
    }
}