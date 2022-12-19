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

  let sql = `SELECT * FROM message`;

  connection.query(sql, (error, results) => {
    console.log(results);
  });

  connection.query(sql);

  connection.end();
}

main();
