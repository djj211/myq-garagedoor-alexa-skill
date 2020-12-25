export interface LoginResponse {
    code: string;
    securityToken: string;
}

export interface DoorActionResponse {
    code: string;
}

export interface GetDevicesResponse {
    code: string;
    devices: Device[];
}

export interface Device {
    href: string;
    serial_number: string;
    device_family: string;
    device_platform: string;
    device_type: string;
    name: string;
    parent_device: string;
    parent_device_id: string;
    created_date: string;
    state: DeviceState;
}

export interface DeviceState {
    dps_low_battery_mode: boolean;
    monitor_only_mode: boolean;
    number_of_learned_dps_devices: number;
    sensor_comm_error: boolean;
    door_state: string;
    open: string;
    close: string;
    last_update: string;
    passthrough_interval: string;
    door_ajar_interval: string;
    invalid_credential_window: string;
    invalid_shutout_period: string;
    is_unattended_open_allowed: boolean;
    is_unattended_close_allowed: boolean;
    aux_relay_delay: string;
    use_aux_relay: boolean;
    aux_relay_behavior: string;
    rex_fires_door: boolean;
    command_channel_report_status: boolean;
    control_from_browser: boolean;
    report_forced: boolean;
    report_ajar: boolean;
    max_invalid_attempts: number;
    online: boolean;
    last_status: string;
}