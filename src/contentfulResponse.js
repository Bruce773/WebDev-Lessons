import client from "../src/config/contentfulConfig.js";

var response;

client.getEntries({ order: 'sys.createdAt' }).then((returnedData) => {
  response = returnedData;
});


export default response;