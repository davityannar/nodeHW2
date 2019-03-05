const app = require('./app');

const { log } = console;
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}!`));