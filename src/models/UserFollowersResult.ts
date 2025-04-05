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
import type { FollowerModel } from './FollowerModel';
import {
    FollowerModelFromJSON,
    FollowerModelFromJSONTyped,
    FollowerModelToJSON,
    FollowerModelToJSONTyped,
} from './FollowerModel';

/**
 * 
 * @export
 * @interface UserFollowersResult
 */
export interface UserFollowersResult {
    /**
     * 
     * @type {number}
     * @memberof UserFollowersResult
     */
    totalFollowers?: number;
    /**
     * 
     * @type {Array<FollowerModel>}
     * @memberof UserFollowersResult
     */
    data?: Array<FollowerModel> | null;
}

/**
 * Check if a given object implements the UserFollowersResult interface.
 */
export function instanceOfUserFollowersResult(value: object): value is UserFollowersResult {
    return true;
}

export function UserFollowersResultFromJSON(json: any): UserFollowersResult {
    return UserFollowersResultFromJSONTyped(json, false);
}

export function UserFollowersResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFollowersResult {
    if (json == null) {
        return json;
    }
    return {
        
        'totalFollowers': json['totalFollowers'] == null ? undefined : json['totalFollowers'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(FollowerModelFromJSON)),
    };
}

export function UserFollowersResultToJSON(json: any): UserFollowersResult {
    return UserFollowersResultToJSONTyped(json, false);
}

export function UserFollowersResultToJSONTyped(value?: UserFollowersResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalFollowers': value['totalFollowers'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(FollowerModelToJSON)),
    };
}

