process.env.MAIL_URL = 'smtp://postmaster%40admin.lgatl.com:ddd20016b603b184a02cd2041281991e@smtp.mailgun.org:587';

// In your server code: define a method that the client can call
Meteor.methods({
  'sendEmail': function (to, from, subject, text) {
    // check([to, from, subject, text], [String]);
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
     html: text
    });
  }
});
