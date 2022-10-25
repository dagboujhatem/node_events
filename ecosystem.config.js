module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.'
  }],

  deploy : {
    production : {
      // SSH user
      user : 'root',
      // SSH host
      host : '51.178.169.199',
      // GIT remote/branch
      // Exemple ==> ref: "origin/master",
      ref  : 'origin/lesson25',
      // GIT remote
      repo : 'https://github.com/dagboujhatem/node_events.git',
      // path in the server
      // Exemple ==> path: "/var/www/my-repository",
      path : '/root/nodeapp',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
