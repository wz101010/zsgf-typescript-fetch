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
import type { UserProfileResult } from './UserProfileResult';
import {
    UserProfileResultFromJSON,
    UserProfileResultFromJSONTyped,
    UserProfileResultToJSON,
    UserProfileResultToJSONTyped,
} from './UserProfileResult';

/**
 * 
 * @export
 * @interface UserProfileResultApiResponse
 */
export interface UserProfileResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof UserProfileResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {UserProfileResult}
     * @memberof UserProfileResultApiResponse
     */
    data?: UserProfileResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof UserProfileResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the UserProfileResultApiResponse interface.
 */
export function instanceOfUserProfileResultApiResponse(value: object): value is UserProfileResultApiResponse {
    return true;
}

export function UserProfileResultApiResponseFromJSON(json: any): UserProfileResultApiResponse {
    return UserProfileResultApiResponseFromJSONTyped(json, false);
}

export function UserProfileResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfileResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : UserProfileResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function UserProfileResultApiResponseToJSON(json: any): UserProfileResultApiResponse {
    return UserProfileResultApiResponseToJSONTyped(json, false);
}

export function UserProfileResultApiResponseToJSONTyped(value?: UserProfileResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': UserProfileResultToJSON(value['data']),
        'error': value['error'],
    };
}

