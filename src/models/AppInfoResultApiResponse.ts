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
import type { AppInfoResult } from './AppInfoResult';
import {
    AppInfoResultFromJSON,
    AppInfoResultFromJSONTyped,
    AppInfoResultToJSON,
    AppInfoResultToJSONTyped,
} from './AppInfoResult';

/**
 * 
 * @export
 * @interface AppInfoResultApiResponse
 */
export interface AppInfoResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof AppInfoResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {AppInfoResult}
     * @memberof AppInfoResultApiResponse
     */
    data?: AppInfoResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof AppInfoResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the AppInfoResultApiResponse interface.
 */
export function instanceOfAppInfoResultApiResponse(value: object): value is AppInfoResultApiResponse {
    return true;
}

export function AppInfoResultApiResponseFromJSON(json: any): AppInfoResultApiResponse {
    return AppInfoResultApiResponseFromJSONTyped(json, false);
}

export function AppInfoResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : AppInfoResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function AppInfoResultApiResponseToJSON(json: any): AppInfoResultApiResponse {
    return AppInfoResultApiResponseToJSONTyped(json, false);
}

export function AppInfoResultApiResponseToJSONTyped(value?: AppInfoResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': AppInfoResultToJSON(value['data']),
        'error': value['error'],
    };
}

