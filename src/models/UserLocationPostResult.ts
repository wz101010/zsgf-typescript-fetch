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
/**
 * 
 * @export
 * @interface UserLocationPostResult
 */
export interface UserLocationPostResult {
    /**
     * 
     * @type {number}
     * @memberof UserLocationPostResult
     */
    id?: number;
}

/**
 * Check if a given object implements the UserLocationPostResult interface.
 */
export function instanceOfUserLocationPostResult(value: object): value is UserLocationPostResult {
    return true;
}

export function UserLocationPostResultFromJSON(json: any): UserLocationPostResult {
    return UserLocationPostResultFromJSONTyped(json, false);
}

export function UserLocationPostResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLocationPostResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function UserLocationPostResultToJSON(json: any): UserLocationPostResult {
    return UserLocationPostResultToJSONTyped(json, false);
}

export function UserLocationPostResultToJSONTyped(value?: UserLocationPostResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

