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
import type { AppUserListResponse } from './AppUserListResponse';
import {
    AppUserListResponseFromJSON,
    AppUserListResponseFromJSONTyped,
    AppUserListResponseToJSON,
    AppUserListResponseToJSONTyped,
} from './AppUserListResponse';

/**
 * 
 * @export
 * @interface UserListResult
 */
export interface UserListResult {
    /**
     * 
     * @type {number}
     * @memberof UserListResult
     */
    total?: number;
    /**
     * 
     * @type {Array<AppUserListResponse>}
     * @memberof UserListResult
     */
    data?: Array<AppUserListResponse> | null;
}

/**
 * Check if a given object implements the UserListResult interface.
 */
export function instanceOfUserListResult(value: object): value is UserListResult {
    return true;
}

export function UserListResultFromJSON(json: any): UserListResult {
    return UserListResultFromJSONTyped(json, false);
}

export function UserListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'] == null ? undefined : json['total'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppUserListResponseFromJSON)),
    };
}

export function UserListResultToJSON(json: any): UserListResult {
    return UserListResultToJSONTyped(json, false);
}

export function UserListResultToJSONTyped(value?: UserListResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppUserListResponseToJSON)),
    };
}

