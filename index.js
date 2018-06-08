const ghost = require('ghost')
const path = require('path')

ghost().then((ghostServer) => {
  ghostServer.start()
})
