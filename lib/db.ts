import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"


declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
    var pgPool: Pool | undefined
}

const getPool = () => {
  if(!globalThis.pgPool) {
globalThis.pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
  })
  }
return globalThis.pgPool
}

const prismaClientSingleton = () =>  {
  const pool = getPool()
  const adapter = new PrismaPg(pool)
  return new PrismaClient({adapter})
}
export const db = globalThis.prisma ?? prismaClientSingleton()

if(process.env.NODE_ENV !== 'production')   globalThis.prisma = db
