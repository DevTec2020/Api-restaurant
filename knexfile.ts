export default { 
    Client: "sqlite3", 

    connection: { 
        filename: "./src/database/database.db", 
    }, 

    // Protege as chaves do banco e faz com que só possa ser criado produtos que tenham relação com as keys das tabelas.
    pool: {
        afterCreate: (connection: any, done: any) => {
        done()
        },
    },
    useNullAsDefault: true, 

    migrations: { 
        extensions: "ts", 
        directory: "./src/database/migrations", 
    }, 

    seeds: {
        extensions: "ts",
        directory: "./src/database/seeds",
    },
} 