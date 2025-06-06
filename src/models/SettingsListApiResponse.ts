/* tslint:disable */
/* eslint-disable */
/**
 * 全部  API 文档
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Settings } from './Settings';
import {
    SettingsFromJSON,
    SettingsFromJSONTyped,
    SettingsToJSON,
    SettingsToJSONTyped,
} from './Settings';

/**
 * 
 * @export
 * @interface SettingsListApiResponse
 */
export interface SettingsListApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof SettingsListApiResponse
     */
    code?: number;
    /**
     * 响应数据
     * @type {Array<Settings>}
     * @memberof SettingsListApiResponse
     */
    data?: Array<Settings> | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof SettingsListApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the SettingsListApiResponse interface.
 */
export function instanceOfSettingsListApiResponse(value: object): value is SettingsListApiResponse {
    return true;
}

export function SettingsListApiResponseFromJSON(json: any): SettingsListApiResponse {
    return SettingsListApiResponseFromJSONTyped(json, false);
}

export function SettingsListApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsListApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SettingsFromJSON)),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function SettingsListApiResponseToJSON(json: any): SettingsListApiResponse {
    return SettingsListApiResponseToJSONTyped(json, false);
}

export function SettingsListApiResponseToJSONTyped(value?: SettingsListApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SettingsToJSON)),
        'error': value['error'],
    };
}

