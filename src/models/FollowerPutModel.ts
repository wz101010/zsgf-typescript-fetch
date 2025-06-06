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
 * @interface FollowerPutModel
 */
export interface FollowerPutModel {
    /**
     * 别名
     * @type {string}
     * @memberof FollowerPutModel
     */
    alias?: string | null;
    /**
     * 亲密度分数
     * @type {number}
     * @memberof FollowerPutModel
     */
    closenessScore?: number;
    /**
     * 关注度分数
     * @type {number}
     * @memberof FollowerPutModel
     */
    attentionScore?: number;
    /**
     * 标签
     * @type {string}
     * @memberof FollowerPutModel
     */
    tags?: string | null;
    /**
     * 状态
     * @type {string}
     * @memberof FollowerPutModel
     */
    status?: string | null;
    /**
     * 备注
     * @type {string}
     * @memberof FollowerPutModel
     */
    remark?: string | null;
}

/**
 * Check if a given object implements the FollowerPutModel interface.
 */
export function instanceOfFollowerPutModel(value: object): value is FollowerPutModel {
    return true;
}

export function FollowerPutModelFromJSON(json: any): FollowerPutModel {
    return FollowerPutModelFromJSONTyped(json, false);
}

export function FollowerPutModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowerPutModel {
    if (json == null) {
        return json;
    }
    return {
        
        'alias': json['alias'] == null ? undefined : json['alias'],
        'closenessScore': json['closenessScore'] == null ? undefined : json['closenessScore'],
        'attentionScore': json['attentionScore'] == null ? undefined : json['attentionScore'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'status': json['status'] == null ? undefined : json['status'],
        'remark': json['remark'] == null ? undefined : json['remark'],
    };
}

export function FollowerPutModelToJSON(json: any): FollowerPutModel {
    return FollowerPutModelToJSONTyped(json, false);
}

export function FollowerPutModelToJSONTyped(value?: FollowerPutModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alias': value['alias'],
        'closenessScore': value['closenessScore'],
        'attentionScore': value['attentionScore'],
        'tags': value['tags'],
        'status': value['status'],
        'remark': value['remark'],
    };
}

