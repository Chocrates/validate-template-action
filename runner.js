module.exports =  class Runner {
    constructor(_options) {
        this.options = _options
    }

    async run(){
        try {
            console.log('Testing...')
            console.log(this.options)
            console.log('Testing...')
            const octokit = new this.options.github.GitHub(this.options.token)

            this.options.core.debug(`Starting Parsing on labels ${this.options.labels.join(',')}`)

            this.options.core.debug({payload: JSON.stringify(this.options.github.context.payload)})
            console.log(this.options.github.context.payload)

        } catch ( error ) {
            this.options.core.setFailed(`Failure ${error}`) 
        }
    }

}
