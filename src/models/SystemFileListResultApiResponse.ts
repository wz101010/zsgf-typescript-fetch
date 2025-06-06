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
import type { SystemFileListResult } from './SystemFileListResult';
import {
    SystemFileListResultFromJSON,
    SystemFileListResultFromJSONTyped,
    SystemFileListResultToJSON,
    SystemFileListResultToJSONTyped,
} from './SystemFileListResult';

/**
 * 
 * @export
 * @interface SystemFileListResultApiResponse
 */
export interface SystemFileListResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof SystemFileListResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {SystemFileListResult}
     * @memberof SystemFileListResultApiResponse
     */
    data?: SystemFileListResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof SystemFileListResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the SystemFileListResultApiResponse interface.
 */
export function instanceOfSystemFileListResultApiResponse(value: object): value is SystemFileListResultApiResponse {
    return true;
}

export function SystemFileListResultApiResponseFromJSON(json: any): SystemFileListResultApiResponse {
    return SystemFileListResultApiResponseFromJSONTyped(json, false);
}

export function SystemFileListResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemFileListResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : SystemFileListResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function SystemFileListResultApiResponseToJSON(json: any): SystemFileListResultApiResponse {
    return SystemFileListResultApiResponseToJSONTyped(json, false);
}

export function SystemFileListResultApiResponseToJSONTyped(value?: SystemFileListResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': SystemFileListResultToJSON(value['data']),
        'error': value['error'],
    };
}

