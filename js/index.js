// This file is auto-generated by `ember build`.
// You should not modify it.

require('./vendor/jquery');
require('./vendor/handlebars');
require('./vendor/ember');
require('./vendor/ember-data');
require('./templates');

var App = window.App = require('./app');

App.Store = require('./store');

App.ApplicationController = require('./controllers/application_controller');
App.IndexController = require('./controllers/index_controller');
App.LoginController = require('./controllers/login_controller');
App.NewPlaceDialogController = require('./controllers/new_place_dialog_controller');
App.ResetPasswordController = require('./controllers/reset_password_controller');
App.SignupController = require('./controllers/signup_controller');
App.Place = require('./models/place');
App.ApplicationRoute = require('./routes/application_route');
App.IndexRoute = require('./routes/index_route');
App.LoginRoute = require('./routes/login_route');
App.ResetPasswordRoute = require('./routes/reset_password_route');
App.SignupRoute = require('./routes/signup_route');
App.LoginView = require('./views/login_view');
App.NewPlaceDialogView = require('./views/new_place_dialog_view');
App.ResetPasswordView = require('./views/reset_password_view');
App.SignupView = require('./views/signup_view');

require('./routes');

