'use strict';

const cp = require('child_process');

// fork agent
cp.fork('./agent', [], {
  execArgv: process.execArgv.concat([ '--debug-port=5800' ]),
});

