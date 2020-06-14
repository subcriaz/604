const Port = process.env.Port || 4567;
//process.env.TEST = Port;
//console.log(process.env.TEST);

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
.connect(
  // `mongodb+srv://${process.env.MONGO_USER}:${
   //  process.env.MONGO_PASSWORD
   //}@cluster0-ntrwp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
   'mongodb+srv://riz604:Pasw0rd09@cluster-riaz-uuxpx.mongodb.net/events-react-dev?retryWrites=true&w=majority'

   )
  .then(() => {
	  
	  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

    //app.listen(PORT);
    //console.log('ok conn  localhost:Port/grapghql : {PORT} ' + process.env.PORT);
	//app.listen(PORT, () => { console.log(`Our app is running on port ' + PORT ); }
	//);
	
  })
  .catch(err => {
    console.log( 'errer in conn  ' +err);
  });
