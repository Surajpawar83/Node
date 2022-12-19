import { createConnection } from "mysql";

function main() {
  console.log("MYSQL QUERY DEMO");

  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "Suraj@8383",
    database: "cdac1",
  };

  let connection = createConnection(connectionUri);

  connection.connect();

  let sql = `INSERT INTO message (message, reply) VALUES ('Hello World', 0)`;

  connection.query(sql);

  connection.end();
}

main();
