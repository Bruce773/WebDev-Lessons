const fs = require('fs');
// tslint:disable-next-line: no-unsafe-any
fs.writeFileSync(
  './.env',
  `DATABASE_USER=${process.env.database_user}\nDATABASE_PASSWORD=${
    process.env.database_password
  }\n`
);
