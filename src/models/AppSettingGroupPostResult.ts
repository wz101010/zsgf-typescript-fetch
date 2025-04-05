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
 * @interface AppSettingGroupPostResult
 */
export interface AppSettingGroupPostResult {
    /**
     * 
     * @type {number}
     * @memberof AppSettingGroupPostResult
     */
    id?: number;
}

/**
 * Check if a given object implements the AppSettingGroupPostResult interface.
 */
export function instanceOfAppSettingGroupPostResult(value: object): value is AppSettingGroupPostResult {
    return true;
}

export function AppSettingGroupPostResultFromJSON(json: any): AppSettingGroupPostResult {
    return AppSettingGroupPostResultFromJSONTyped(json, false);
}

export function AppSettingGroupPostResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSettingGroupPostResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function AppSettingGroupPostResultToJSON(json: any): AppSettingGroupPostResult {
    return AppSettingGroupPostResultToJSONTyped(json, false);
}

export function AppSettingGroupPostResultToJSONTyped(value?: AppSettingGroupPostResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

