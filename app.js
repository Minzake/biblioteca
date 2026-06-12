import 'dotenv/config'
import express from 'express'
import db from './models/index.js'
import { sequelize } from './database/database.js'

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola! La API de la biblioteca está funcionando con Sequelize.')
});

// Sincronizar modelos y luego iniciar servidor
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.')
    app.listen(PORT, HOST, () => {
      console.log(`Servidor escuchando en http://${HOST}:${PORT}`)
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err)
  });
