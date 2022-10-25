module.exports = {
  apps : [{
    name : 'event app',
    script: 'app.js',
    env_production: {
      NODE_ENV: "production"
   },
   env_development: {
      NODE_ENV: "development"
   }
  }],

  deploy : {
    production : {
      // SSH key path, default to $HOME/.ssh
      // Exemple ==> key: "/path/to/some.pem",
      // Steps to configure ssh
      // 1. genarate ssh pair in your computer & in the server
      // 2. save your public key (of your computer) in the "authorized_keys" of the server
      key: "C:\Users\Nitro/.ssh/id_rsa.pub",
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
