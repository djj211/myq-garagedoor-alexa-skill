const MyQ = require('myq-api');

import { Device, GetDevicesResponse, LoginResponse, DoorActionResponse } from "../interfaces";
import { utils } from "../utils/utils";
import { NotFound, Login, OpenClose } from '../error';
import * as constants from '../constants';

export class MyQService {
    private myQ: any;
    
    constructor() {
        this.myQ = new MyQ();
    }

    async login(): Promise<void> {
        const username = process.env.MYQ_USER;
        const password = process.env.MYQ_PASSWORD;

        const result: LoginResponse = await this.myQ.login(username, password);
        if (result.code !== MyQ.constants.codes.OK) {
            throw new Login("Unable to Login to MyQ");
        }
    }

    async checkAll(): Promise<string> {
        let statuses = '';

        await this.login();
        const response: GetDevicesResponse = await this.myQ.getDevices();
        response.devices.forEach((device) => {
            if (device.device_type === constants.VIRTUAL_GARAGE_DOOR_OPENER) {
                statuses += `${device.name} is ${device.state.door_state} `;
            }
        });
        
        return statuses.trim();
    }

    async openAll(): Promise<void> {
        await this.login();
        const response: GetDevicesResponse = await this.myQ.getDevices();
        const openPromises = response.devices.map(async (device) => {
            return this.openDevice(device);
        });
        await Promise.all(openPromises);
    }

    async closeAll(): Promise<void> {
        await this.login();
        const response: GetDevicesResponse = await this.myQ.getDevices();
        const closePromises = response.devices.map(async (device) => {
            return this.closeDevice(device);
        });
        await Promise.all(closePromises);
    }

    async openDoor(doorName: string): Promise<void> {
        await this.login();
        const device = await this.getByName(doorName);
        await this.openDevice(device);
    }

    async closeDoor(doorName: string): Promise<void> {
        await this.login();
        const device = await this.getByName(doorName);
        await this.closeDevice(device);
    }

    async getStatus(doorName: string): Promise<string> {
        await this.login();
        const device = await this.getByName(doorName);
        return device.state.door_state;
    }

    async getByName (doorName: string): Promise<Device> {
        const response: GetDevicesResponse = await this.myQ.getDevices();
        const device: Device | undefined = response.devices.find((device) => utils.cleanDoorString(device.name) === utils.cleanDoorString(doorName));
        
        if (!device) {
            throw new NotFound("Could not find device with that name");
        }

        return device;
    }

    private async closeDevice(device: Device): Promise<void> {
        if (device.state.door_state === constants.DOOR_STATE_OPENED && device.device_type === constants.VIRTUAL_GARAGE_DOOR_OPENER) {
            console.log('closing door...');
            const result: DoorActionResponse = await this.myQ.setDoorState(device.serial_number, MyQ.actions.door.CLOSE);
            if (result.code !== MyQ.constants.codes.OK) {
                throw new OpenClose("Error Closing Door");
            }
        }
    }

    private async openDevice(device: Device): Promise<void> {
        if (device.state.door_state === constants.DOOR_STATE_CLOSED && device.device_type === constants.VIRTUAL_GARAGE_DOOR_OPENER) {
            console.log('opening door...');
            const result: DoorActionResponse = await this.myQ.setDoorState(device.serial_number, MyQ.actions.door.OPEN);
            if (result.code !== MyQ.constants.codes.OK) {
                throw new OpenClose("Error Opening Door");
            }
        }
    }
}