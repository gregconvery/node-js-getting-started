const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/Table4'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('PlayerSit', (msg) => {
    io.emit('PlayerSit', msg);
  });
});