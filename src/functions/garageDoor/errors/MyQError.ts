const MyQ = require('myq-api');
import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

export const MyQError: ErrorHandler = {
    canHandle(_, error) {
        // @ts-ignore
        return error.code === MyQ.constants.codes.SERVICE_REQUEST_FAILED ||
        // @ts-ignore 
                error.code === MyQ.constants.codes.SERVICE_UNREACHABLE || 
        // @ts-ignore
                error.code === MyQ.constants.codes.INVALID_SERVICE_RESPONSE ||
        // @ts-ignore
                error.code === MyQ.constants.codes.INVALID_ARGUMENT;
    },
    handle(handlerInput, error) {
        const speakString = constants.MYQ_ERROR;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
