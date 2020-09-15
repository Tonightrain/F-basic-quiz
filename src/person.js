function getPerson(id) {
  const url = `http://localhost:8080/users/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => err);
}

function getPersonalEducation(id) {
  const url = `http://localhost:8080/users/${id}/educations`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => err);
}

export { getPerson, getPersonalEducation };
