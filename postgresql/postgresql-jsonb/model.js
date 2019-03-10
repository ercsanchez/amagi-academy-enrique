export const schema = {
    create: [`CREATE TABLE cards(
                id BIGSERIAL PRIMARY KEY, 
                details JSONB
            )`
    ],
    drop: [
        `DROP TABLE IF EXISTS cards`
    ]
}
export async function insert(pg, data) {
    const values = JSON.stringify(data);
    return pg.rows(
        `INSERT INTO cards(details) VALUES ($1) returning id`, values
    );
}
export async function retrieveAll(pg) {
    return pg.rows( 
        `SELECT id, details from cards`
    )
}
export async function retrieve(pg, id) {
    return pg.rows( 
        `SELECT details->'name' as name from cards where id = $1`, id 
    )
}

export async function update(pg, data, id) {
    return pg.rows(`UPDATE cards SET details = $1 WHERE id = $2`, data, id );
}
export async function remove(pg, id) {
    return pg.rows(`DELETE FROM cards WHERE id = $1`, id);
}
export async function removeAll(pg) {
    return pg.rows(`DELETE FROM cards`);
}

