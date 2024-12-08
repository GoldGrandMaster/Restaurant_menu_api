const { gql } = require('apollo-server-express');
const menuData = require('./menu');

const typeDefs = gql`
    type MenuItem {
        name: String
        description: String
        price: Float
        halfPrice: Float
        fullPrice: Float
    }
    type Sandwiches {
        cold: [MenuItem]
        hot: [MenuItem]
    }
    
    type SoupAndSaladCombo {
        name: String
        price: Float
    }

    type EnchiladaItem {
        name: String
        description: String
        prices: [Float]  # Prices per quantity like uno, dos, tres
    }

    type Query {
        appetizers: [MenuItem]
        entrees: [MenuItem]
        sandwiches: Sandwiches
        soupAndSaladCombos: [SoupAndSaladCombo]
        fajitas: [MenuItem]
        tacos: [MenuItem]
        enchiladas: [EnchiladaItem]
        quiche: [MenuItem]
        greenSalads: [MenuItem]
    }

`;

const resolvers = {
    Query: {
        appetizers: () => menuData.appetizers,
        entrees: () => menuData.entrees,
        sandwiches: () => menuData.sandwiches,
        soupAndSaladCombos: () => menuData.soupAndSaladCombos.soup,
        fajitas: () => menuData.fajitas,
        tacos: () => menuData.tacos,
        enchiladas: () => menuData.enchiladas,
        quiche: () => menuData.quiche,
        greenSalads: () => menuData.greenSalads,
    }
};

module.exports = { typeDefs, resolvers };