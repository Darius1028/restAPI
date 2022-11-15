import app from './src/app.js'; 
import './src/db/connection.js'; 

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));