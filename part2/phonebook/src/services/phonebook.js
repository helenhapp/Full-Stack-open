import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const updatePerson = (id, newInfo) => {
  const personUrl = `${baseUrl}/${id}`;
  const request = axios.put(personUrl, newInfo);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const personUrl = `${baseUrl}/${id}`;
  return axios.delete(personUrl);
};

export default { getAll, addPerson, updatePerson, deletePerson };
