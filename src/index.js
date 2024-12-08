const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    // Start the server
    await server.start();
    
    // Apply middleware
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

// Call the function to start the server
startServer();