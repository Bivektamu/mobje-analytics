import bcrypt from 'bcrypt'
import {db} from '@/lib/db'
import { CreateUser, LoginUser } from '@/typeDefs'

export async function registerUser(createUser:CreateUser) {
    const user = await db.user.findUnique({
        where: {
            email: createUser.email
        }
    })
    if(user) throw new Error('User already Exists')
    const salt = await bcrypt.genSalt(8)
    const hashedPassword = await bcrypt.hash(createUser.password, salt)
    
    const result = await db.$transaction(async(tx)=>{
        const org = await tx.organization.create({
            data:{
                name: createUser.orgName
            }
        })

        const user = await tx.user.create({
            data: {
                email:createUser.email, 
                password:hashedPassword,
                organizationId:org.id
            }
        })

        return user
    },{
        maxWait: 5000,
        timeout: 10000
    })

    return result
}

export async function loginUser(loginUser: LoginUser) {
    const user = await db.user.findUnique({
        where: {
            email: loginUser.email
        }
    })

    if(!user) throw new Error('User not found!')

    const isValid = await bcrypt.compare(loginUser.password, user.password)
    if(!isValid) throw new Error('Invalid password')
    return user
}