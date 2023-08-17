// core modules -> events
const events = require('events');

const eventEmitter = new events.EventEmitter();

// creating an event handler

const myEventHandler = () => {
    console.log('pip pip');
};

// assginging event handler to an event
eventEmitter.on('scream', myEventHandler);

// firing an event
eventEmitter.emit('scream');
