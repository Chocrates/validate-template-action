const core = require('@actions/core')
const github = require('@actions/github')

const labels = this.options.core.getInput('ISSUE_LABELS').split(',')
const template = this.options.core.getInput('ISSUE_TEMPLATE')
const token = process.env['THIS.OPTIONS.GITHUB_TOKEN']

const Runner = require('./runner')
const runner = new Runner({core: core, github: github, labels: labels, template: template, token: token})

run = runner.run
run()

module.export = { run }
