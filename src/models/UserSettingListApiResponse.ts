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
import type { UserSetting } from './UserSetting';
import {
    UserSettingFromJSON,
    UserSettingFromJSONTyped,
    UserSettingToJSON,
    UserSettingToJSONTyped,
} from './UserSetting';

/**
 * 
 * @export
 * @interface UserSettingListApiResponse
 */
export interface UserSettingListApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof UserSettingListApiResponse
     */
    code?: number;
    /**
     * 响应数据
     * @type {Array<UserSetting>}
     * @memberof UserSettingListApiResponse
     */
    data?: Array<UserSetting> | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof UserSettingListApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the UserSettingListApiResponse interface.
 */
export function instanceOfUserSettingListApiResponse(value: object): value is UserSettingListApiResponse {
    return true;
}

export function UserSettingListApiResponseFromJSON(json: any): UserSettingListApiResponse {
    return UserSettingListApiResponseFromJSONTyped(json, false);
}

export function UserSettingListApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSettingListApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(UserSettingFromJSON)),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function UserSettingListApiResponseToJSON(json: any): UserSettingListApiResponse {
    return UserSettingListApiResponseToJSONTyped(json, false);
}

export function UserSettingListApiResponseToJSONTyped(value?: UserSettingListApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(UserSettingToJSON)),
        'error': value['error'],
    };
}

