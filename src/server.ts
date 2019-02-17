import app from './app';

// Start server (http)
const server = app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

// If you want to use http or https with options, use method below.
/*
const httpsOptions = {};
https.createServer(httpsOptions, app).listen(app.get('port'), () => {
  console.log('App is running at https://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});
*/

// Export server
export default server;
