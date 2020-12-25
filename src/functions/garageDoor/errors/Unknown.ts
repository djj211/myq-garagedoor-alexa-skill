import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

/**
 * Handles unknown errors. Should be placed at the end, as it will catch
 * all errors.
 */
export const Unknown: ErrorHandler = {
    canHandle(_, error) {
        return true;
    },
    handle(handlerInput, error) {
        const speakString = constants.UNKNOWN;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};