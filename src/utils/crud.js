import { db } from "./firebase";

/**
 * Crea un registro nuevo en la referencia ingresada
 * @param {String} ref Referencia a archivo de registros
 * @param {Object} data Información a almacenar
 */
export const create = (ref, data) => {
  return db.ref(ref).push(data);
};

/**
 * Busca un registro por su id o devuelve todos los registros
 * @param {String} ref Referencia a archivo de registros
 * @param {String} key Identificador del registro
 */
export const read = (ref, key = 0) => {
  if (key != 0) {
    return db.ref(ref).child(key);
  } else {
    return db.ref(ref);
  }
};

/**
 * Elimina un registro por su identificador
 * @param {String} ref Referencia a archivo de registros
 * @param {String} key Identificador del registro
 */
export const deleteRow = (ref, key) => {
  return db
    .ref(ref)
    .child(key)
    .remove();
};

/**
 * Actualiza un registro por su identificador
 * @param {String} ref Referencia a archivo de registros
 * @param {String} key Identificador del registro
 * @param {Object} data Información a actualizar
 */
export const update = (ref, key, data) => {
  return db
    .ref(ref)
    .child(key)
    .set(data);
};
