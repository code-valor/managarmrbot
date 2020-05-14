module.exports = class test {
    constructor(){
        this.name = 'test',
        this.alias = ['t'],
        this.usage = '!test'
    }

    run(client, message, args){
        message.reply(this.name + " çalıştı!");
    }
}