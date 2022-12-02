import JWT from 'jsonwebtoken';
// const secret = process.env.TOKEN_SECRET as string;

export const signinAccessToken = (userId: any, payload: any) => {
    const secret = 'abc123';
    const options = {
        expiresIn: '24h'
    }
    const accessToken = JWT.sign(payload, secret, options);
    return accessToken;
}

export const signinRefreshToken = (userId: any, payload: any) => {
    const secret = 'bde456';
    const options = {
        expiresIn: '1y'
    }
    const RefreshToken = JWT.sign(payload, secret, options);
    return RefreshToken;
}