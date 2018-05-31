module.exports = {
  "url": "https://livewildlives.herokuapp.com/",
  "server": {
    "port": process.env.PORT || 2379,
    "host": "0.0.0.0"
  },
  "database": {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  },
  "mail": {
    "transport": "Direct"
  }
}
