module.exports = function(mailer) {
  return function(data, cb) {
    mailer.sendWelcomeEmail({
      fullName: data.username,
      locale: data.locale,
      to: data.email
    }, cb);
  };
};
