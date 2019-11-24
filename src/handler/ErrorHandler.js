const messages = require('../voice/messages');

module.exports = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);

        return handlerInput.responseBuilder
            .speak(messages.error)
            .reprompt(messages.error)
            .getResponse();
    }
}
