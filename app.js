import 'dotenv/config'
import express from 'express'
import db from './models/index.js'
import { sequelize } from './database/database.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola! La API de la biblioteca está funcionando con Sequelize.')
});
// Rutas
app.use('/api', userRoutes)

// Sincronizar modelos y luego iniciar servidor
sequelize.query('PRAGMA foreign_keys = OFF')
  .then(() => sequelize.sync({ alter: false
   }))
  .then(() => sequelize.query('PRAGMA foreign_keys = ON'))
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.')
    const server = app.listen(PORT, HOST, () => {
      console.log(`Servidor escuchando en http://${HOST}:${PORT}`)
    });
    
    server.on('error', (error) => {
      console.error('Error a nivel de servidor de red:', error);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err)
  });
