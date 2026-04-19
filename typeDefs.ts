export interface CreateUser {
    email:string,
    password:string,
    orgName:string
}

export interface LoginUser {
    email:string,
    password: string
}

export interface SiteInput {
    domain: string,
    orgId: string
}