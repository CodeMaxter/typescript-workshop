import UsersController from './UsersController'

export default (server) => {
  const controller: UsersController = new UsersController(server);
}