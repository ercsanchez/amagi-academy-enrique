import PgAsync from 'pg-async';
import once from 'once';

async function setup(pg, schema) {
    try {
        await pg.transaction(async (tx) => {
            const { drop, create } = schema;
            if (drop) {
                for (const q of drop) {
                    await tx.query(q);
                }
            }
            if (create) {
                for (const q of create) {
                    await tx.query(q);
                }
            }
        })
    } catch(err) {
        console.error(new Error(err));
    }
}
export function postgresMiddleware(schema) {
    // const pg = new PgAsync('postgres://user:secret-pword@host:port/database-name);
    // const pg = new PgAsync({ connectionString: 'postgres://postgres:node1337@128.199.227.243:5432/academy'})
    const pg = new PgAsync({ connectionString: 'postgres://postgres@localhost:5432/academy' })
    // const pg = new PgAsync({ connectionString: 'postgres://postgres@postgresdb:5432/academy' })
    const setupSchema = once(setup);
    return async (req, res, next) => {
        try {
            await setupSchema(pg, schema);
            req._postgres = pg;
            return await next();
        } catch(err) {
            console.error(new Error(err));
        }
    }
}
export function postgres(req, res) {
    return req._postgres;
}