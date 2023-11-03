export interface CreateUserService {
  email: string
  name: string
  password: string
}

export interface CreateUserServiceResponse {
  id: string
  email: string
  name: string
}
