const core = require('@actions/core')
const github = require('@actions/github')

const labels = core.getInput('ISSUE_LABELS').split(',')
const template = core.getInput('ISSUE_TEMPLATE')
const token = process.env['GITHUB_TOKEN']
const [owner,repo] = (process.env['GITHUB_REPOSITORY'] || '/' ).split('/')

const octokit = new github.GitHub(token)

const Runner = require('./runner')
const runner = new Runner({
    core: core,
    github: github,
    octokit: octokit,
    labels: labels,
    template: template,
    token: token,
    owner: owner,
    repo: repo
})

run = runner.run
run()

module.export = { run }
