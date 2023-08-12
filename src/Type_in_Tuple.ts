type HttpStatusCode = [number, string];

const goodStatusss: HttpStatusCode = [200, "ok"];
const notFoundd: HttpStatusCode = [404, "Data is't Found"];
const badRequestt: HttpStatusCode = [400, "Request is't correct"];
const serverErrr: HttpStatusCode = [500, "Internal Server Error"];

console.log(goodStatusss);
