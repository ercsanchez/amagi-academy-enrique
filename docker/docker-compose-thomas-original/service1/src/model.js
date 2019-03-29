

export const schema = {
    create: [`CREATE TABLE users(
                userId BIGSERIAL PRIMARY KEY, 
                email TEXT, 
                password TEXT
            )`
    ],
    drop: [
        `DROP TABLE IF EXISTS users`
    ]
}
export async function insert(pg, data) {
    const values = JSON.stringify(data);
    return pg.rows(
        `INSERT INTO users(email, password) VALUES ($1, $2) returning id`, values.email, values.password
    );
}
