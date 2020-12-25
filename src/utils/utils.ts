import { getRequest, HandlerInput } from "ask-sdk-core";
import { IntentRequest } from "ask-sdk-model";

import * as constants from '../constants';

export class utils {
    static getDoorSlotValue (handlerInput: HandlerInput): string | undefined {
        const request = getRequest<IntentRequest>(handlerInput.requestEnvelope);
        let door: string | undefined;
        if (request.intent.slots) {
            const doorSlot = request.intent.slots[constants.DOOR_SLOT];
            if (doorSlot) {
                if (doorSlot.value) {
                    door = doorSlot.value;
                }
            }
        }

        return door;
    }

    static cleanDoorString(inputDoorString: string): string {
        return inputDoorString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    }
}