const dataStore = {};

export function saveComplaint(id, data) {
  dataStore[id] = data;
}

export function getComplaint(id) {
  return dataStore[id];
}
