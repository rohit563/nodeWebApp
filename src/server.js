'use strict';
const Hapi = require('hapi');
const HapiReactViews = require('hapi-react-views');
const Vision = require('vision');
const config = require('../config/config.js');

require('babel-core/register')({
    presets: ['react', 'env']
});

const main = async function () {
  const server = Hapi.Server({
    host: config.host,
    port: config.port
  });

    await server.register(Vision);

    server.views({
        engines: {
            jsx: HapiReactViews
        },
        compileOptions: {}, // optional
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return h.view('home');
      }
    });

    await server.start();

    console.log(`Server is listening at ${server.info.uri}`);
};

main();
