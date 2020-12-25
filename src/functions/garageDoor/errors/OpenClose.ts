import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

export const OpenClose: ErrorHandler = {
    canHandle(_, error) {
        return error.name === constants.OPEN_CLOSE_ERROR;
    },
    handle(handlerInput, error) {
        const speakString = constants.OPEN_CLOSE;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
