define([
  './helpers/helpers',
  './router',
  './controllers/post_controller',
  './routes/post_route',
  './routes/posts_route'
], function(
  helpers,
  Router,
  PostController,
  PostRoute,
  PostsRoute
) {

  var modules = {
    Router: Router['default'],
    PostController: PostController['default'],
    PostRoute: PostRoute['default'],
    PostsRoute: PostsRoute['default']
  };

  return modules;
});
