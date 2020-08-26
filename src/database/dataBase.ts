import mysql from 'promise-mysql';
import keys  from './keys';


const pool = mysql.createPool(keys.dataBase);

pool.getConnection()
.then(connection => {
    pool.releaseConnection(connection);
    console.log('BD is conected')

})

export default pool;