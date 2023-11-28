require('dotenv').config();
// const config = require('./config');

const greeting = process.env.GREETING || 'Hello';
const name = process.env.NAME || 'ChatBot';

// const greeting = config.GREETING || 'Hello';
// const name = config.NAME || 'ChatBot';

console.log(`${greeting}, its ${name} here`);


// console.log(process.env);
// console.log(config);

