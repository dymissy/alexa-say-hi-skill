const Alexa = require('ask-sdk-core');
const messages = require('../voice/messages');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(messages.help)
            .reprompt(messages.help)
            .getResponse();
    }
}
