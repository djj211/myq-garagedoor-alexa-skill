import { RequestHandler } from "ask-sdk-core";

import { MyQService } from '../../../services/MyQService';
import { utils } from "../../../utils/utils";
import * as constants from '../../../constants';

export const CloseGarageDoorIntent: RequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === constants.INTENT_REQUEST_TYPE && 
            request.intent.name === constants.CLOSE_GARAGE_DOOR;
    },
    async handle(handlerInput) {
        let speakString = '';
        const door = utils.getDoorSlotValue(handlerInput);
        
        if (door) {
            const myQService = new MyQService();
            await myQService.closeDoor(door);
            speakString = `Closing ${door}`;
        }
        else {
            speakString = constants.SORRY_RESPONSE;
        }

        return handlerInput.responseBuilder
            .speak(speakString)
            .withSimpleCard(constants.CARD_HEADER, speakString)
            .getResponse();
    }
};