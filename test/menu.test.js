const request = require('supertest');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../src/schema');

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

// Function to start the server and apply middleware
const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
    return app; // Return the app only after middleware is applied
};

startServer();

describe('GraphQL Menu API', () => {
    it('fetches all appetizers', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ appetizers { name description price } }',
            })
            .expect(200);

        expect(response.body.data.appetizers).toBeDefined();
        expect(response.body.data.appetizers.length).toBeGreaterThan(0);
        expect(response.body.data.appetizers[0]).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(Number),
            })
        );
    });

    it('fetches all entrees', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ entrees { name description price } }',
            })
            .expect(200);

        expect(response.body.data.entrees).toBeDefined();
        expect(response.body.data.entrees.length).toBeGreaterThan(0);
    });

    it('fetches all sandwiches', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ sandwiches { cold { name price } hot { name price } } }',
            })
            .expect(200);

        expect(response.body.data.sandwiches).toBeDefined();
        expect(response.body.data.sandwiches.cold.length).toBeGreaterThan(0);
        expect(response.body.data.sandwiches.hot.length).toBeGreaterThan(0);
    });

    it('fetches all tacos', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ tacos { name description price } }',
            })
            .expect(200);

        expect(response.body.data.tacos).toBeDefined();
        expect(response.body.data.tacos.length).toBeGreaterThan(0);
    });

    it('fetches all fajitas', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ fajitas { name description price } }',
            })
            .expect(200);

        expect(response.body.data.fajitas).toBeDefined();
        expect(response.body.data.fajitas.length).toBeGreaterThan(0);
    });

    it('fetches all enchiladas', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ enchiladas { name description prices } }',
            })
            .expect(200);

        expect(response.body.data.enchiladas).toBeDefined();
        expect(response.body.data.enchiladas.length).toBeGreaterThan(0);
    });

    it('fetches all quiches', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ quiche { name description price } }',
            })
            .expect(200);

        expect(response.body.data.quiche).toBeDefined();
        expect(response.body.data.quiche.length).toBeGreaterThan(0);
    });

    it('fetches all green salads', async () => {
        const response = await request(app)
            .post('/graphql')
            .send({
                query: '{ greenSalads { name description price } }',
            })
            .expect(200);

        expect(response.body.data.greenSalads).toBeDefined();
        expect(response.body.data.greenSalads.length).toBeGreaterThan(0);
    });
});