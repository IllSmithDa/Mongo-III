const userControllers = require('../controllers/userControllers');
const postControllers = require('../controllers/postControllers');
module.exports = (app) => {
  //add your new routes here
  app
    .route('/new-user')
    .post(userControllers.createUser);
  app
    .route('/login')
    .post(userControllers.findUser);
  app
    .route('/new-post')
    .post(postControllers.createPost);
  app
    .route('/posts')
    .get(postControllers.getPosts);
  app
    .route('/posts/:id')
    .get(postControllers.findPost)
    .put(postControllers.updatePost);
};
