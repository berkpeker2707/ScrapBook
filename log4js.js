const log4js = require("log4js");

log4js.configure({
  appenders: {
    email: {
      type: "@log4js-node/smtp",
      SMTP: {
        host: "smtp.gmail.com",
        port: 465,
        auth: { user: "sampleMail@gmail.com", pass: "samplePassOfMail" },
      },
      recipients: "recipientMail@gmail.com",
    },
  },
  categories: {
    default: { appenders: ["email"], level: "error", level: "info" },
  },
});

const logger = log4js.getLogger("email");
// logger.error('Error Summary: ', message);
logger.info("Error Explanation: ", message, "|||||", detail);

dialog.showMessageBox(options);
