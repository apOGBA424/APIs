const {config} = require('dotenv');
const { performStudent_CRUD } = require('./studentsCRUD.js');



(async()=>{
    config();
    console.log(`process.env.DB_URI==> ${process.env.DB_URI}`);
    await performStudent_CRUD();
})();
