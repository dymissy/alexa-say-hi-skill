const Alexa = require('ask-sdk-core');
const messages = require('../voice/messages');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(messages.welcome)
            .reprompt(messages.welcome)
            .getResponse();
    }
}
