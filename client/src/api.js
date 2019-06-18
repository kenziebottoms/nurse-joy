const BASE_URL =
  process.env.NODE_ENV == "development" ? "http://localhost:3001/api/v1" : "";

module.exports.getAuthenticatedUser = () =>
  fetch(`${BASE_URL}/auth`).then(user => user.json());
