/***
serves anything in the build folder. Expects a compiled
reactjs app. 
***/ 


const handler = require('serve-handler');

module.exports = async (request, response) => {
  await handler(request, response, {
    "public": "build"
  });
};