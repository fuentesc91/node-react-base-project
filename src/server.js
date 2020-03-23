import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// Initialazing packages
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  res.json({ api: 'works' });
});

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
