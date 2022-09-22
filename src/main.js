import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var fs = require('graceful-fs');

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('test.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");     
});