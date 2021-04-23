import App from './src/App';

const port = process.env.PORT || 3000;
console.log('here');

App.listen(port, (err) => {
  console.log('here too');
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${port}`);
});
