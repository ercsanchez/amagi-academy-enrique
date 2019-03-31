

export const schema = {
    create: [`CREATE TABLE users(
                id BIGSERIAL PRIMARY KEY, 
                name TEXT,
                address TEXT,
                password TEXT,
                email TEXT
            )`
    ],
    drop: [
        `DROP TABLE IF EXISTS users`
    ]
}
export async function insert(pg, data) {
    const values = data;
    console.log(`schema values: ${JSON.stringify(values)}`);
    return pg.rows(
        `INSERT INTO users(name, address, password, email) VALUES ($1, $2, $3, $4) returning id`, values.name, values.address, values.password, values.email
    );
}
