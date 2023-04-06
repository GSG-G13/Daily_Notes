const app = require('../app');
const request = require('supertest');

test('Get /notes status 200 json get all notes', (done) => {
  request(app)
    .get('/notes')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      console.log(res.body.data);
      expect(res.body.data.length).toBe(110);
      return done();
    });
});

test('POST /create status 201 json get created note', (done) => {
  request(app)
    .post('/create')
    .send({
      title: "asd",
      content: "asd",
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.body.data.rows.length).toBe(1);
      return done();
    });
});