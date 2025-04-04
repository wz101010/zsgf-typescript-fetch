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
import type { UserFollowingResult } from './UserFollowingResult';
import {
    UserFollowingResultFromJSON,
    UserFollowingResultFromJSONTyped,
    UserFollowingResultToJSON,
    UserFollowingResultToJSONTyped,
} from './UserFollowingResult';

/**
 * 
 * @export
 * @interface UserFollowingResultApiResponse
 */
export interface UserFollowingResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof UserFollowingResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {UserFollowingResult}
     * @memberof UserFollowingResultApiResponse
     */
    data?: UserFollowingResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof UserFollowingResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the UserFollowingResultApiResponse interface.
 */
export function instanceOfUserFollowingResultApiResponse(value: object): value is UserFollowingResultApiResponse {
    return true;
}

export function UserFollowingResultApiResponseFromJSON(json: any): UserFollowingResultApiResponse {
    return UserFollowingResultApiResponseFromJSONTyped(json, false);
}

export function UserFollowingResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFollowingResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : UserFollowingResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function UserFollowingResultApiResponseToJSON(json: any): UserFollowingResultApiResponse {
    return UserFollowingResultApiResponseToJSONTyped(json, false);
}

export function UserFollowingResultApiResponseToJSONTyped(value?: UserFollowingResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': UserFollowingResultToJSON(value['data']),
        'error': value['error'],
    };
}

