const MyQ = require('myq-api');
import { ErrorHandler } from "ask-sdk-core";

import * as constants from '../../../constants';

/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
export const Auth: ErrorHandler = {
    canHandle(_, error) {
        // @ts-ignore
        return error.code === MyQ.constants.codes.LOGIN_REQUIRED || error.code === MyQ.constants.codes.AUTHENTICATION_FAILED ||
        // @ts-ignore
                error.code === MyQ.constants.codes.AUTHENTICATION_FAILED_ONE_TRY_LEFT || 
        // @ts-ignore
                error.code === MyQ.constants.codes.AUTHENTICATION_FAILED_LOCKED_OUT || 
                error.name === constants.LOGIN_ERROR;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        let speakString  = '';

        // @ts-ignore
        switch (error.code) {
            case MyQ.constants.codes.AUTHENTICATION_FAILED_ONE_TRY_LEFT:
                speakString = constants.LOGIN_FAILURE_ONE_ATTEMPT;
                break;
            case MyQ.constants.codes.AUTHENTICATION_FAILED_LOCKED_OUT:
                speakString = constants.LOGIN_FAILURE_LOCKED_OUT;
                break;
            default:
                speakString = constants.LOIGN_FAILURE;
                break;
        }

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    },
};
