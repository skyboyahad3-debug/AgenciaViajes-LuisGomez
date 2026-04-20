import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('agencia.db');

export const initDB = async () => {
  try {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS reservaciones (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente TEXT, destino TEXT, fecha TEXT);`);
    console.log("Base de datos lista ✅");
  } catch (e) { console.log(e); }
};

export const agregarReservacion = async (cliente, destino, fecha) => {
  const result = await db.runAsync('INSERT INTO reservaciones (cliente, destino, fecha) VALUES (?, ?, ?)', [cliente, destino, fecha]);
  return result.lastInsertRowId;
};

export const obtenerReservaciones = async () => {
  return await db.getAllAsync('SELECT * FROM reservaciones');
};