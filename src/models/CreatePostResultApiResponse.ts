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
import type { CreatePostResult } from './CreatePostResult';
import {
    CreatePostResultFromJSON,
    CreatePostResultFromJSONTyped,
    CreatePostResultToJSON,
    CreatePostResultToJSONTyped,
} from './CreatePostResult';

/**
 * 
 * @export
 * @interface CreatePostResultApiResponse
 */
export interface CreatePostResultApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof CreatePostResultApiResponse
     */
    code?: number;
    /**
     * 
     * @type {CreatePostResult}
     * @memberof CreatePostResultApiResponse
     */
    data?: CreatePostResult;
    /**
     * 错误信息
     * @type {string}
     * @memberof CreatePostResultApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the CreatePostResultApiResponse interface.
 */
export function instanceOfCreatePostResultApiResponse(value: object): value is CreatePostResultApiResponse {
    return true;
}

export function CreatePostResultApiResponseFromJSON(json: any): CreatePostResultApiResponse {
    return CreatePostResultApiResponseFromJSONTyped(json, false);
}

export function CreatePostResultApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePostResultApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : CreatePostResultFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function CreatePostResultApiResponseToJSON(json: any): CreatePostResultApiResponse {
    return CreatePostResultApiResponseToJSONTyped(json, false);
}

export function CreatePostResultApiResponseToJSONTyped(value?: CreatePostResultApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': CreatePostResultToJSON(value['data']),
        'error': value['error'],
    };
}

