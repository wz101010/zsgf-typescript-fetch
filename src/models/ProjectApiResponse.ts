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
import type { Project } from './Project';
import {
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
    ProjectToJSONTyped,
} from './Project';

/**
 * 
 * @export
 * @interface ProjectApiResponse
 */
export interface ProjectApiResponse {
    /**
     * 状态码
     * @type {number}
     * @memberof ProjectApiResponse
     */
    code?: number;
    /**
     * 
     * @type {Project}
     * @memberof ProjectApiResponse
     */
    data?: Project;
    /**
     * 错误信息
     * @type {string}
     * @memberof ProjectApiResponse
     */
    error?: string | null;
}

/**
 * Check if a given object implements the ProjectApiResponse interface.
 */
export function instanceOfProjectApiResponse(value: object): value is ProjectApiResponse {
    return true;
}

export function ProjectApiResponseFromJSON(json: any): ProjectApiResponse {
    return ProjectApiResponseFromJSONTyped(json, false);
}

export function ProjectApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectApiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : ProjectFromJSON(json['data']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function ProjectApiResponseToJSON(json: any): ProjectApiResponse {
    return ProjectApiResponseToJSONTyped(json, false);
}

export function ProjectApiResponseToJSONTyped(value?: ProjectApiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'data': ProjectToJSON(value['data']),
        'error': value['error'],
    };
}

