const request = require('supertest');
const app = require('../app');

describe('Rankings routes', () => {
  it('Get the list ranking by word "Javascript" and limit 10 with status 200 code', async () => {
    const response = await request(app)
      .get('/rankings?q=10&l=Javascript')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
  it('Get an error because the parameter q or l are not exist in the query params', async () => {
    const response = await request(app)
      .get('/rankings')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(404);
  });
  it('Get an error because the parameter q need are only number', async () => {
    const response = await request(app)
      .get('/rankings?q=LETRA&l=Javascript')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(404);
  });
  it('Get an error because the parameter q need are number positive', async () => {
    const response = await request(app)
      .get('/rankings?q=0&l=Javascript')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(404);
  });
  it('Get an error because the route "noexistodemoruta" doesnt exist in the routes of the controller of rankings', async () => {
    const response = await request(app)
      .get('/rankings/noexistodemoruta')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(404);
  });
});

// describe('GET /pokemons/search', () => {
//   it('should response with a 200 status if name has value and only letters with json', async () => {
//     const response = await request(app)
//       .get('/pokemons/search/mew')
//       .set('Accept', 'application/json');
//     expect(response.headers['content-type']).toMatch(/json/);
//     expect(response.status).toEqual(200);
//   });
//   it('should response with a 404 status if has empty name', async () => {
//     const response = await request(app)
//       .get('/pokemons/search/')
//       .set('Accept', 'application/json');
//     expect(response.headers['content-type']).toMatch(/json/);
//     expect(response.status).toEqual(404);
//   });

//   it('should response with a 404 status if name no contains letters', async () => {
//     const response = await request(app)
//       .get('/pokemons/search/121313$("$)$"()$(')
//       .set('Accept', 'application/json');
//     expect(response.headers['content-type']).toMatch(/json/);
//     expect(response.status).toEqual(404);
//   });
// });
