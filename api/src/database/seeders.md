npx sequelize-cli model:generate --name User --attributes firstName:string

npx sequelize-cli seed:generate --name demo-user

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo:all

