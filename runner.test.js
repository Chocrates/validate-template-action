const core = require('@actions/core')
const github = require('@actions/github')
const nock = require('nock')

const Runner = require('./runner')

beforeEach(() => {
    jest.resetModules()
   const editedPayload =  {
   action: 'edited',
   changes: { body: { from: 'Edit 4' } },
   issue: {
     assignee: null,
     assignees: [],
     author_association: 'OWNER',
     body: 'Edit 5',
     closed_at: null,
     comments: 0,
     comments_url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues/4/comments',
     events_url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues/4/events',
     html_url: 'https://github.com/Chocrates/validate-template-action/issues/4',
     id: 533586221,
     labels: [],
     labels_url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues/4/labels{/name}',
     locked: false,
     milestone: null,
     node_id: 'MDU6SXNzdWU1MzM1ODYyMjE=',
     number: 4,
     repository_url: 'https://api.github.com/repos/Chocrates/validate-template-action',
     state: 'open',
     title: 'Test Issue 4',
     url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues/4',
     user: {
       avatar_url: 'https://avatars1.githubusercontent.com/u/1758164?v=4',
       events_url: 'https://api.github.com/users/Chocrates/events{/privacy}',
       followers_url: 'https://api.github.com/users/Chocrates/followers',
       following_url: 'https://api.github.com/users/Chocrates/following{/other_user}',
       gists_url: 'https://api.github.com/users/Chocrates/gists{/gist_id}',
       gravatar_id: '',
       html_url: 'https://github.com/Chocrates',
       id: 1758164,
       login: 'Chocrates',
       node_id: 'MDQ6VXNlcjE3NTgxNjQ=',
       organizations_url: 'https://api.github.com/users/Chocrates/orgs',
       received_events_url: 'https://api.github.com/users/Chocrates/received_events',
       repos_url: 'https://api.github.com/users/Chocrates/repos',
       site_admin: true,
       starred_url: 'https://api.github.com/users/Chocrates/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/Chocrates/subscriptions',
       type: 'User',
       url: 'https://api.github.com/users/Chocrates'
     }
   },
   repository: {
     archive_url: 'https://api.github.com/repos/Chocrates/validate-template-action/{archive_format}{/ref}',
     archived: false,
     assignees_url: 'https://api.github.com/repos/Chocrates/validate-template-action/assignees{/user}',
     blobs_url: 'https://api.github.com/repos/Chocrates/validate-template-action/git/blobs{/sha}',
     branches_url: 'https://api.github.com/repos/Chocrates/validate-template-action/branches{/branch}',
     clone_url: 'https://github.com/Chocrates/validate-template-action.git',
     collaborators_url: 'https://api.github.com/repos/Chocrates/validate-template-action/collaborators{/collaborator}',
     comments_url: 'https://api.github.com/repos/Chocrates/validate-template-action/comments{/number}',
     commits_url: 'https://api.github.com/repos/Chocrates/validate-template-action/commits{/sha}',
     compare_url: 'https://api.github.com/repos/Chocrates/validate-template-action/compare/{base}...{head}',
     contents_url: 'https://api.github.com/repos/Chocrates/validate-template-action/contents/{+path}',
     contributors_url: 'https://api.github.com/repos/Chocrates/validate-template-action/contributors',
     default_branch: 'master',
     deployments_url: 'https://api.github.com/repos/Chocrates/validate-template-action/deployments',
     description: 'An action that validates issues based on arbitrary markdown templates',
     disabled: false,
     downloads_url: 'https://api.github.com/repos/Chocrates/validate-template-action/downloads',
     events_url: 'https://api.github.com/repos/Chocrates/validate-template-action/events',
     fork: false,
     forks: 0,
     forks_count: 0,
     forks_url: 'https://api.github.com/repos/Chocrates/validate-template-action/forks',
     full_name: 'Chocrates/validate-template-action',
     git_commits_url: 'https://api.github.com/repos/Chocrates/validate-template-action/git/commits{/sha}',
     git_refs_url: 'https://api.github.com/repos/Chocrates/validate-template-action/git/refs{/sha}',
     git_tags_url: 'https://api.github.com/repos/Chocrates/validate-template-action/git/tags{/sha}',
     git_url: 'git://github.com/Chocrates/validate-template-action.git',
     has_downloads: true,
     has_issues: true,
     has_pages: false,
     has_projects: true,
     has_wiki: true,
     homepage: null,
     hooks_url: 'https://api.github.com/repos/Chocrates/validate-template-action/hooks',
     html_url: 'https://github.com/Chocrates/validate-template-action',
     id: 226176544,
     issue_comment_url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues/comments{/number}',
     issue_events_url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues/events{/number}',
     issues_url: 'https://api.github.com/repos/Chocrates/validate-template-action/issues{/number}',
     keys_url: 'https://api.github.com/repos/Chocrates/validate-template-action/keys{/key_id}',
     labels_url: 'https://api.github.com/repos/Chocrates/validate-template-action/labels{/name}',
     language: 'JavaScript',
     languages_url: 'https://api.github.com/repos/Chocrates/validate-template-action/languages',
     license: {
       key: 'mit',
       name: 'MIT License',
       spdx_id: 'MIT',
       url: 'https://api.github.com/licenses/mit'
     },
     merges_url: 'https://api.github.com/repos/Chocrates/validate-template-action/merges',
     milestones_url: 'https://api.github.com/repos/Chocrates/validate-template-action/milestones{/number}',
     mirror_url: null,
     name: 'validate-template-action',
     node_id: 'MDEwOlJlcG9zaXRvcnkyMjYxNzY1NDQ=',
     notifications_url: 'https://api.github.com/repos/Chocrates/validate-template-action/notifications{?since,all,participating}',
     open_issues: 1,
     open_issues_count: 1,
     owner: {
       avatar_url: 'https://avatars1.githubusercontent.com/u/1758164?v=4',
       events_url: 'https://api.github.com/users/Chocrates/events{/privacy}',
       followers_url: 'https://api.github.com/users/Chocrates/followers',
       following_url: 'https://api.github.com/users/Chocrates/following{/other_user}',
       gists_url: 'https://api.github.com/users/Chocrates/gists{/gist_id}',
       gravatar_id: '',
       html_url: 'https://github.com/Chocrates',
       id: 1758164,
       login: 'Chocrates',
       node_id: 'MDQ6VXNlcjE3NTgxNjQ=',
       organizations_url: 'https://api.github.com/users/Chocrates/orgs',
       received_events_url: 'https://api.github.com/users/Chocrates/received_events',
       repos_url: 'https://api.github.com/users/Chocrates/repos',
       site_admin: true,
       starred_url: 'https://api.github.com/users/Chocrates/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/Chocrates/subscriptions',
       type: 'User',
       url: 'https://api.github.com/users/Chocrates'
     },
     private: false,
     pulls_url: 'https://api.github.com/repos/Chocrates/validate-template-action/pulls{/number}',
     releases_url: 'https://api.github.com/repos/Chocrates/validate-template-action/releases{/id}',
     size: 50,
     ssh_url: 'git@github.com:Chocrates/validate-template-action.git',
     stargazers_count: 0,
     stargazers_url: 'https://api.github.com/repos/Chocrates/validate-template-action/stargazers',
     statuses_url: 'https://api.github.com/repos/Chocrates/validate-template-action/statuses/{sha}',
     subscribers_url: 'https://api.github.com/repos/Chocrates/validate-template-action/subscribers',
     subscription_url: 'https://api.github.com/repos/Chocrates/validate-template-action/subscription',
     svn_url: 'https://github.com/Chocrates/validate-template-action',
     tags_url: 'https://api.github.com/repos/Chocrates/validate-template-action/tags',
     teams_url: 'https://api.github.com/repos/Chocrates/validate-template-action/teams',
     trees_url: 'https://api.github.com/repos/Chocrates/validate-template-action/git/trees{/sha}',
     url: 'https://api.github.com/repos/Chocrates/validate-template-action',
     watchers: 0,
     watchers_count: 0
   },
   sender: {
     avatar_url: 'https://avatars1.githubusercontent.com/u/1758164?v=4',
     events_url: 'https://api.github.com/users/Chocrates/events{/privacy}',
     followers_url: 'https://api.github.com/users/Chocrates/followers',
     following_url: 'https://api.github.com/users/Chocrates/following{/other_user}',
     gists_url: 'https://api.github.com/users/Chocrates/gists{/gist_id}',
     gravatar_id: '',
     html_url: 'https://github.com/Chocrates',
     id: 1758164,
     login: 'Chocrates',
     node_id: 'MDQ6VXNlcjE3NTgxNjQ=',
     organizations_url: 'https://api.github.com/users/Chocrates/orgs',
     received_events_url: 'https://api.github.com/users/Chocrates/received_events',
     repos_url: 'https://api.github.com/users/Chocrates/repos',
     site_admin: true,
     starred_url: 'https://api.github.com/users/Chocrates/starred{/owner}{/repo}',
     subscriptions_url: 'https://api.github.com/users/Chocrates/subscriptions',
     type: 'User',
     url: 'https://api.github.com/users/Chocrates'
   }
   }
    github.context.payload = editedPayload
    nock.disableNetConnect()
})

describe('Runner Tests', () => {
    it('Runs Runner with our sample payload', async () => {
        const debugMock = jest.spyOn(core,'debug')
        const setFailedMock = jest.spyOn(core, 'setFailed')
        jest.genMockFromModule('@actions/github')
        jest.mock('@actions/github')

        const octokit = new github.GitHub('123')
        nock("https://api.github.com").
            post(`/repos/testuser/testrepo/issues/4/comments`).
            reply(200)

        const runner = new Runner({
            core: core,
            github: github,
            octokit: octokit,
            labels: ['bug'],
            template: './README.md',
            token: '123',
            owner: "testuser",
            repo: "testrepo"
        })
        await runner.run()

        expect(setFailedMock).toHaveBeenCalledTimes(0)
    })
})
