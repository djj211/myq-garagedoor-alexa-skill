import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
export const Unexpected: ErrorHandler = {
    canHandle(_, error) {
        return error.name === constants.UNEXPECTED_ERROR;
    },
    handle(handlerInput, error) {
        const speakString = constants.UNEXPECTED;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
