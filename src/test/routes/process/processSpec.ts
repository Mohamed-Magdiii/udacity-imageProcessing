import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Testing Image Api endpoint', () => {
  it('get Api without providing the name parameter returns 404', async () => {
    await request.get('/api/v1/imageProcess').expect(404);
  });
//   it('Using the endpoint with a non-existent image returns 404', async () => {
//     await request.get('/api/v1/imageProcessing?name=fjord').expect(404);
//   });
  it('get Api with valid path image, but with invalid width and height returns 404', async () => {
    await request.get('/api/v1/imageProcess?name=Desert').expect(404);
  });
  it('Using the endpoint with a valid img and width and height returns 200', async () => {
    await request.get('/api/v1/imageProcess?name=Desert&w=500&h=200').expect(200);
  });
});