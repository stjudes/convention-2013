var exec = require("child_process").exec;

var githubhook = require('./node-github-hook/index'),
  servers = {
    'convention-2013':'https://github.com/stjudes/convention-2013'
  };

var hook = githubhook(8765, servers, function (err, payload) {
  if (!err) {
    //console.log(payload);
    exec("cd ../ && git checkout . && git pull", function (error, stdout, stderr) {
      console.log(stdout);
    });
  } else {
    console.log(err);
  }
})

