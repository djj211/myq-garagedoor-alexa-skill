import * as Alexa from "ask-sdk-core";

import * as Intents from "./intents";
import * as Errors from "./errors";

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        Intents.CheckGarageDoorStateIntent,
        Intents.CloseGarageDoorIntent,
        Intents.OpenGarageDoorIntent,
    ).addErrorHandlers(
        Errors.Auth,
        Errors.OpenClose,
        Errors.NotFound,
        Errors.MyQError,
        Errors.InvalidDevice,
        Errors.DeviceStateNotFound,
        Errors.Unexpected,
        Errors.Unknown,
    ).lambda();