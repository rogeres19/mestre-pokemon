import supertest from "supertest";

// describe('Users functional tests', () => {
//     it('should return a user with just a few times', async () => {
//         const { body, status } = await supertest(app).get('/users');
//         expect(status).toBe(200);
//         expect(body).toBe([{
//             "time": "2020-04-26T00:00:00+00:00",
//             "user": {
//                 "name": "Usuario RR",
//                 "username": "Id do usuario",
//                 "password": "criptPass",
//                 "company": "Correios",
//                 "agency": "2",
//                 "rule": "Manager",
//                 "vehicle": "codigo moto"
//             }
//         }
//         ]);
//     });
// });