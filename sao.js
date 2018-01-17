module.exports = {
  prompts: {
    name: {
      message: 'Plugin name?',
      default: ':folderName:',
    },
    description: {
      message: 'Description:',
      default: '',
    },
    author: {
      message: 'Your name:',
      default: ':gitUser:',
      store: true,
    },
    email: {
      message: 'Your email:',
      default: ':gitEmail:',
      store: true,
    },
    github: {
      message: 'Repository (owner/project) on GitHub:',
      default: ':gitUser:/:folderName:',
    },
    githubOwner: {
      message: 'Repository owner on GitHub:',
      default: ':gitUser:',
      store: true,
    },
    npm: {
      message: 'Package name (@owner/pkg) on NPM:',
      default: '@:gitUser:/:folderName:',
    },
  },
  move: {
    'gitignore': '.gitignore',
  },
  gitInit: true,
  installDependencies: true,
  forceNpm: true,
  showTip: true,
  post({ log, isNewFolder, folderName, chalk }) {
    console.log()
    log.success(`Successfully generated into ${chalk.cyan(folderName)}`)
    console.log()
    console.log(chalk.bold('To get started:\n'))
    if (isNewFolder) {
      console.log(`  cd ${folderName}`)
    }
    console.log('  npm start')
    console.log()
  },
}
