var App = require('./app');

App.Router.map(function() {
  this.route("signup", { path: "/signup" });
  this.route("login", { path: "/login" });
});