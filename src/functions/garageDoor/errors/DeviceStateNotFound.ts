const MyQ = require('myq-api');
import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
export const DeviceStateNotFound: ErrorHandler = {
    canHandle(_, error) {
        // @ts-ignore
        return error.code === MyQ.constants.codes.DEVICE_STATE_NOT_FOUND;
    },
    handle(handlerInput, error) {
        const speakString = constants.DEVICE_STATE_NOT_FOUND;
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
