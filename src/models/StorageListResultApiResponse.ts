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
import type { StorageListResult } from './StorageListResult';
import {
    StorageListResultFromJSON,
    StorageListResultFromJSONTyped,
    StorageListResultToJSON,
    StorageListResultToJSONTyped,
} from './StorageListResult';

/**
 * 
 * @export
 * @interface StorageListResultApiResponse
 */
export interface StorageListResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof StorageListResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {StorageListResult}
     * @memberof StorageListResultApiResponse
     */
    data?: StorageListResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof StorageListResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the StorageListResultApiResponse interface.
 */
export function instanceOfStorageListResultApiResponse(value: object): value is StorageListResultApiResponse {
    return true;
}

export function StorageListResultApiResponseFromJSON(json: any): StorageListResultApiResponse {
    return StorageListResultApiResponseFromJSONTyped(json, false);
}

export function StorageListResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageListResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : StorageListResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function StorageListResultApiResponseToJSON(json: any): StorageListResultApiResponse {
    return StorageListResultApiResponseToJSONTyped(json, false);
}

export function StorageListResultApiResponseToJSONTyped(value?: StorageListResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': StorageListResultToJSON(value['data']),
        'error': value['error'],
    };
}

