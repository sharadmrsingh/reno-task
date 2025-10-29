import { openDB } from 'idb';

const DB_NAME = 'schoolDB';
const STORE_NAME = 'schools';

export async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function addSchool(school: any) {
  const db = await getDB();
  await db.add(STORE_NAME, school);
}

export async function getSchools() {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
}
