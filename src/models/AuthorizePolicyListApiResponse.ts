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
import type { AuthorizePolicy } from './AuthorizePolicy';
import {
    AuthorizePolicyFromJSON,
    AuthorizePolicyFromJSONTyped,
    AuthorizePolicyToJSON,
    AuthorizePolicyToJSONTyped,
} from './AuthorizePolicy';

/**
 * 
 * @export
 * @interface AuthorizePolicyListApiResponse
 */
export interface AuthorizePolicyListApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof AuthorizePolicyListApiResponse
     */
    code?: number;
    /**
     * 响应数据
     * @type {Array<AuthorizePolicy>}
     * @memberof AuthorizePolicyListApiResponse
     */
    data?: Array<AuthorizePolicy> | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AuthorizePolicyListApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the AuthorizePolicyListApiResponse interface.
 */
export function instanceOfAuthorizePolicyListApiResponse(value: object): value is AuthorizePolicyListApiResponse {
    return true;
}

export function AuthorizePolicyListApiResponseFromJSON(json: any): AuthorizePolicyListApiResponse {
    return AuthorizePolicyListApiResponseFromJSONTyped(json, false);
}

export function AuthorizePolicyListApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizePolicyListApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AuthorizePolicyFromJSON)),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function AuthorizePolicyListApiResponseToJSON(json: any): AuthorizePolicyListApiResponse {
    return AuthorizePolicyListApiResponseToJSONTyped(json, false);
}

export function AuthorizePolicyListApiResponseToJSONTyped(value?: AuthorizePolicyListApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AuthorizePolicyToJSON)),
        'error': value['error'],
    };
}

