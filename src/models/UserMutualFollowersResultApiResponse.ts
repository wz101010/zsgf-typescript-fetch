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
import type { UserMutualFollowersResult } from './UserMutualFollowersResult';
import {
    UserMutualFollowersResultFromJSON,
    UserMutualFollowersResultFromJSONTyped,
    UserMutualFollowersResultToJSON,
    UserMutualFollowersResultToJSONTyped,
} from './UserMutualFollowersResult';

/**
 * 
 * @export
 * @interface UserMutualFollowersResultApiResponse
 */
export interface UserMutualFollowersResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof UserMutualFollowersResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {UserMutualFollowersResult}
     * @memberof UserMutualFollowersResultApiResponse
     */
    data?: UserMutualFollowersResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof UserMutualFollowersResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the UserMutualFollowersResultApiResponse interface.
 */
export function instanceOfUserMutualFollowersResultApiResponse(value: object): value is UserMutualFollowersResultApiResponse {
    return true;
}

export function UserMutualFollowersResultApiResponseFromJSON(json: any): UserMutualFollowersResultApiResponse {
    return UserMutualFollowersResultApiResponseFromJSONTyped(json, false);
}

export function UserMutualFollowersResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMutualFollowersResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : UserMutualFollowersResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function UserMutualFollowersResultApiResponseToJSON(json: any): UserMutualFollowersResultApiResponse {
    return UserMutualFollowersResultApiResponseToJSONTyped(json, false);
}

export function UserMutualFollowersResultApiResponseToJSONTyped(value?: UserMutualFollowersResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': UserMutualFollowersResultToJSON(value['data']),
        'error': value['error'],
    };
}

