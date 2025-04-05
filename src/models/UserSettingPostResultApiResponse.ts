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
import type { UserSettingPostResult } from './UserSettingPostResult';
import {
    UserSettingPostResultFromJSON,
    UserSettingPostResultFromJSONTyped,
    UserSettingPostResultToJSON,
    UserSettingPostResultToJSONTyped,
} from './UserSettingPostResult';

/**
 * 
 * @export
 * @interface UserSettingPostResultApiResponse
 */
export interface UserSettingPostResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof UserSettingPostResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {UserSettingPostResult}
     * @memberof UserSettingPostResultApiResponse
     */
    data?: UserSettingPostResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof UserSettingPostResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the UserSettingPostResultApiResponse interface.
 */
export function instanceOfUserSettingPostResultApiResponse(value: object): value is UserSettingPostResultApiResponse {
    return true;
}

export function UserSettingPostResultApiResponseFromJSON(json: any): UserSettingPostResultApiResponse {
    return UserSettingPostResultApiResponseFromJSONTyped(json, false);
}

export function UserSettingPostResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSettingPostResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : UserSettingPostResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function UserSettingPostResultApiResponseToJSON(json: any): UserSettingPostResultApiResponse {
    return UserSettingPostResultApiResponseToJSONTyped(json, false);
}

export function UserSettingPostResultApiResponseToJSONTyped(value?: UserSettingPostResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': UserSettingPostResultToJSON(value['data']),
        'error': value['error'],
    };
}

