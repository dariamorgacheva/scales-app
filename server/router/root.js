const routes = [ 
  {
    name: '/scales',
    middleware: './scale-routes',
  },
]

  module.exports = (app) => {
  routes.forEach((route) => {
    app.use(route.name, require(route.middleware)) 
  })
}