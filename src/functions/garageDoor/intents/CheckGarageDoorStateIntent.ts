import { RequestHandler } from "ask-sdk-core";

import { MyQService } from '../../../services/MyQService';
import { utils } from '../../../utils/utils';
import * as constants from '../../../constants';

export const CheckGarageDoorStateIntent: RequestHandler =  {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === constants.INTENT_REQUEST_TYPE && 
                request.intent.name === constants.CHECK_GARAGE_DOOR_STATE;
    },
    async handle (handlerInput) {
        let speakString = '';
        const door = utils.getDoorSlotValue(handlerInput);
        
        if (door) {
            const myQService = new MyQService();
            if (door.toLowerCase() === constants.ALL_DOORS || door.toLowerCase() === constants.ALL_GARAGE) {
                speakString = await myQService.checkAll();
            }
            else {
                const status = await myQService.getStatus(door);
                speakString = `${door} is ${status}`;
            }
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