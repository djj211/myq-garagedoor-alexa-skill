const MyQ = require('myq-api');
import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

export const NotFound: ErrorHandler = {
    canHandle(_, error) {
        // @ts-ignore
        return error.name === constants.NOT_FOUND_ERROR || error.code === MyQ.constants.codes.DEVICE_NOT_FOUND;
    },
    handle(handlerInput, error) {
        const speakString = constants.NOT_FOUND;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
