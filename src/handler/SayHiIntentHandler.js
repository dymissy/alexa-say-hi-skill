const Alexa = require('ask-sdk-core');
const messages = require('../voice/messages');

//more 'Ciao Name' to encrease probability of the sentence
const greetings = [
    `Ciao, NAME!`,
    `Hey, ciao, NAME!`,
    `<lang xml:lang="es-ES">Hola</lang>, NAME!`,
    `Ciao, NAME!`,
    `<lang xml:lang="en-EN">Hello</lang>, NAME!`,
    `<lang xml:lang="en-US">Hi</lang>, NAME!`,
    `Ciao, NAME!`,
    `<lang xml:lang="fr-FR">Bonjour</lang>, NAME!`,
    `<lang xml:lang="ja-JP">Kon'nichiwa</lang>, NAME!`,
];

const greeting = (name) => (greetings[Math.floor(Math.random() * greetings.length)]).replace('NAME', name);

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SayHiIntent';
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const nameProvided = Alexa.getSlotValue(handlerInput.requestEnvelope, 'name');

        return handlerInput.responseBuilder
            .speak(greeting(nameProvided))
            .getResponse();
    }
}
