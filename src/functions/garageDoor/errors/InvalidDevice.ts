const MyQ = require('myq-api');
import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

export const InvalidDevice: ErrorHandler = {
    canHandle(_, error) {
        // @ts-ignore
        return error.code === MyQ.constants.codes.ERR_MYQ_INVALID_DEVICE;
    },
    handle(handlerInput, error) {
        const speakString = constants.INVALID_DEVICE;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
