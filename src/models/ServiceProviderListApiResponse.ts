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
import type { ServiceProvider } from './ServiceProvider';
import {
    ServiceProviderFromJSON,
    ServiceProviderFromJSONTyped,
    ServiceProviderToJSON,
    ServiceProviderToJSONTyped,
} from './ServiceProvider';

/**
 * 
 * @export
 * @interface ServiceProviderListApiResponse
 */
export interface ServiceProviderListApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof ServiceProviderListApiResponse
     */
    code?: number;
    /**
     * 响应数据
     * @type {Array<ServiceProvider>}
     * @memberof ServiceProviderListApiResponse
     */
    data?: Array<ServiceProvider> | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof ServiceProviderListApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the ServiceProviderListApiResponse interface.
 */
export function instanceOfServiceProviderListApiResponse(value: object): value is ServiceProviderListApiResponse {
    return true;
}

export function ServiceProviderListApiResponseFromJSON(json: any): ServiceProviderListApiResponse {
    return ServiceProviderListApiResponseFromJSONTyped(json, false);
}

export function ServiceProviderListApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceProviderListApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ServiceProviderFromJSON)),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function ServiceProviderListApiResponseToJSON(json: any): ServiceProviderListApiResponse {
    return ServiceProviderListApiResponseToJSONTyped(json, false);
}

export function ServiceProviderListApiResponseToJSONTyped(value?: ServiceProviderListApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(ServiceProviderToJSON)),
        'error': value['error'],
    };
}

