var exec = require("child_process").exec;

var githubhook = require('./node-github-hook/index'),
  servers = {
    'convention-2013':'https://github.com/stjudes/convention-2013'
  };

var hook = githubhook(8765, servers, function (err, payload) {
  if (!err) {
    //console.log(payload);
    exec("ls -lah", function (error, stdout, stderr) {
      content = stdout;
    });
  } else {
    console.log(err);
  }
})

