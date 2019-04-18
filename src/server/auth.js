function authentication(options) {
  const {
    passwordFile,
    pathToProtect,
    registerView,
    successRegisterView,
    errorRegisterView,
    loginView,
    successLoginView,
    errorLoginView,
    logoutView,
    unauthorizedView,
  } = options;

  router.use('/content', auth, express.static(pathToProtect));

  router.get('/login', (req, res) => {
    
  });
  router.post('/login', (req, res) => {
    ...
  });

  router.get('/register', (req, res) => {
    ...
  });

  router.post('/register', (req, res) => {
    ...
  });

  // Route to logout
  router.get('/logout', (req, res) => {
    ...
  });

  return router;
}

module.exports = authentication;

