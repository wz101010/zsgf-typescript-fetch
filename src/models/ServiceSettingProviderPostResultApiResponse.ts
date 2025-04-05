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
import type { ServiceSettingProviderPostResult } from './ServiceSettingProviderPostResult';
import {
    ServiceSettingProviderPostResultFromJSON,
    ServiceSettingProviderPostResultFromJSONTyped,
    ServiceSettingProviderPostResultToJSON,
    ServiceSettingProviderPostResultToJSONTyped,
} from './ServiceSettingProviderPostResult';

/**
 * 
 * @export
 * @interface ServiceSettingProviderPostResultApiResponse
 */
export interface ServiceSettingProviderPostResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof ServiceSettingProviderPostResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {ServiceSettingProviderPostResult}
     * @memberof ServiceSettingProviderPostResultApiResponse
     */
    data?: ServiceSettingProviderPostResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof ServiceSettingProviderPostResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the ServiceSettingProviderPostResultApiResponse interface.
 */
export function instanceOfServiceSettingProviderPostResultApiResponse(value: object): value is ServiceSettingProviderPostResultApiResponse {
    return true;
}

export function ServiceSettingProviderPostResultApiResponseFromJSON(json: any): ServiceSettingProviderPostResultApiResponse {
    return ServiceSettingProviderPostResultApiResponseFromJSONTyped(json, false);
}

export function ServiceSettingProviderPostResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceSettingProviderPostResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : ServiceSettingProviderPostResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function ServiceSettingProviderPostResultApiResponseToJSON(json: any): ServiceSettingProviderPostResultApiResponse {
    return ServiceSettingProviderPostResultApiResponseToJSONTyped(json, false);
}

export function ServiceSettingProviderPostResultApiResponseToJSONTyped(value?: ServiceSettingProviderPostResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': ServiceSettingProviderPostResultToJSON(value['data']),
        'error': value['error'],
    };
}

