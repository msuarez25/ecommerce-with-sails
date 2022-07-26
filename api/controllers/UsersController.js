/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res) {
    if (!req.param("email") || !req.param("password")) {
      return res.serverError("You must enter both username and password");
    }

    try {
      //get the user with the specified email
      var user = await Users.findOne({
        where: { email: req.param("email") },
      });

      if (!user) {
        //user does not exists. Journey ends here
        return res.serverError("This username does not exist");
      }

      //check if users password is correct
      require("bcrypt").compare(
        req.param("password"),
        user.password,
        function (error, resp) {
          if (resp) {
            // Passwords match
            return res.ok({
              status: "success",
              message: "login_successful",
              data: user,
            });
          } else {
            // Passwords don't match
            return res.serverError("The username and password do not match");
          }
        }
      );
    } catch (err) {
      return res.serverError(err.message);
    }
  },
};
