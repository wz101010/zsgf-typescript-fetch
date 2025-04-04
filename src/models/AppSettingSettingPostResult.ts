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
 * @interface AppSettingSettingPostResult
 */
export interface AppSettingSettingPostResult {
    /**
     * 
     * @type {number}
     * @memberof AppSettingSettingPostResult
     */
    id?: number;
}

/**
 * Check if a given object implements the AppSettingSettingPostResult interface.
 */
export function instanceOfAppSettingSettingPostResult(value: object): value is AppSettingSettingPostResult {
    return true;
}

export function AppSettingSettingPostResultFromJSON(json: any): AppSettingSettingPostResult {
    return AppSettingSettingPostResultFromJSONTyped(json, false);
}

export function AppSettingSettingPostResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSettingSettingPostResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function AppSettingSettingPostResultToJSON(json: any): AppSettingSettingPostResult {
    return AppSettingSettingPostResultToJSONTyped(json, false);
}

export function AppSettingSettingPostResultToJSONTyped(value?: AppSettingSettingPostResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

