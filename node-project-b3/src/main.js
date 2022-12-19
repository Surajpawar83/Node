import { createConnection } from "mysql";

function main() {
  console.log("MYSQL DEMO");

  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "Suraj@8383",
    database: "cdac1",
  };

  let connection = createConnection(connectionUri);

  connection.connect();

  console.log("Connection DONE!");

  connection.end();
}

main();
