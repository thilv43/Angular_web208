export type TypeLoginRequest = {
  email: string,
  password: string
}
export type TypeLoginResponse = {
  accessToken: string,
  user: {
    id: number,
    email: string,
  }
}

export type TypeSignupRequest = {
  username: string,
  email: string,
  password: string
}
export type TypeSignupRespone = {
  id: number,
  email: string
}
