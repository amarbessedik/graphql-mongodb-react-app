const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
//Add a schema which represents how our graph looks
// schema: schema //using ES6 becomes simply schema
schema,
graphiql:true
}));

app.listen(4000, ()=>{
    console.log('Now listening for requests on port 4000');
});