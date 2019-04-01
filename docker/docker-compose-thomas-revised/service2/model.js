
// export const schema = {
//     create: [`CREATE TABLE users(
//                 id BIGSERIAL PRIMARY KEY, 
//                 name TEXT,
//                 address TEXT,
//                 password TEXT,
//                 email TEXT
//             )`
//     ],
//     drop: [
//         `DROP TABLE IF EXISTS users`
//     ]
// }
// export async function insert(pg, data) {
//     const { name, address, password, email } = data;
//     console.log(`schema values: ${JSON.stringify(data)}`);
//     return pg.rows(
//         `INSERT INTO users(name, address, password, email) VALUES ($1, $2, $3, $4) returning id`, name, address, password, email
//     );
// }
// export async function retrieve(pg, email) {
//     //const { email } = data;
//     console.log(`schema values: ${JSON.stringify(email)}`);
//     return pg.rows(
//         `SELECT name, address FROM users WHERE email = $1`, email
//     )
// }
