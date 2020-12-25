export const CARD_HEADER = 'Garage Door';

// Custom Error Types
export const LOGIN_ERROR = 'Login';
export const UNEXPECTED_ERROR = 'UnexpectedError'
export const NOT_FOUND_ERROR = 'NotFound';
export const OPEN_CLOSE_ERROR = 'OpenClose';

// Error Messages
export const LOGIN_FAILURE_ONE_ATTEMPT = 'Login Failure. You Only Have One Try Left!';
export const LOGIN_FAILURE_LOCKED_OUT  = 'Login Failure. You Have Been Locked Out of your Account.';
export const LOIGN_FAILURE = 'Login Failure. You Only Have One Try Left!';
export const DEVICE_STATE_NOT_FOUND = 'Error. Could not find device state. Please try again or contact your administrator';
export const INVALID_DEVICE = 'Error. Attempted to interact with invalid device. Please try again or contact your administrator.';
export const MYQ_ERROR = 'Unknown MyQ Error. Perhaps unreachable. Please contact your administrator or try again later.';
export const NOT_FOUND = 'Sorry, could not find that garage door.';
export const OPEN_CLOSE = 'Sorry, I had trouble interacting with your garage door. Please try again.';
export const UNEXPECTED = 'Sorry, an unexpected error has occured. Please try again later.';
export const UNKNOWN = 'Sorry, I can\'t understand the command. Please say again.';

// Garage Door Keys
export const VIRTUAL_GARAGE_DOOR_OPENER = 'virtualgaragedooropener';
export const DOOR_STATE_OPENED = 'open';
export const DOOR_STATE_CLOSED = 'closed'

// Intents
export const CHECK_GARAGE_DOOR_STATE = 'CheckGarageDoorStateIntent'
export const CLOSE_GARAGE_DOOR = 'CloseGarageDoorIntent';
export const OPEN_GARAGE_DOOR = 'OpenGarageDoorIntent';

// AWS ALEXA
export const INTENT_REQUEST_TYPE = 'IntentRequest';
export const DOOR_SLOT = 'Door';

// ALL KEYS
export const ALL_DOORS = 'all';
export const ALL_GARAGE = 'garage';

// ALEXA RESPONSES
export const SORRY_RESPONSE = 'Sorry I did not get that';