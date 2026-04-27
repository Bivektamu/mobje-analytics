//npx tsx -r dotenv/config scripts/fix-api-keys.ts
// runs the script with dotenv flag so that envirnoment variables correctly imported

import { db } from "../lib/db" // @alias import won't work outside next environment
import { randomBytes } from "crypto"

async function main() {
    const sites = await db.site.findMany({
        where: {
            apiKey: null
        }
    })
    for (const site of sites) {
        await db.site.update({
            where: {
                id: site.id
            },
            data: {
                apiKey: randomBytes(16).toString("hex")
            }
        })
    }

    console.log('API Keys generated')
}

main()
    .catch(console.error)
    .then(() => db.$disconnect())
    .finally(() => process.exit(0))