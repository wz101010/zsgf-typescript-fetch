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
import type { CommonFriendModel } from './CommonFriendModel';
import {
    CommonFriendModelFromJSON,
    CommonFriendModelFromJSONTyped,
    CommonFriendModelToJSON,
    CommonFriendModelToJSONTyped,
} from './CommonFriendModel';

/**
 * 
 * @export
 * @interface UserMutualFollowingsResult
 */
export interface UserMutualFollowingsResult {
    /**
     * 
     * @type {number}
     * @memberof UserMutualFollowingsResult
     */
    totalFollowers?: number;
    /**
     * 
     * @type {Array<CommonFriendModel>}
     * @memberof UserMutualFollowingsResult
     */
    data?: Array<CommonFriendModel> | null;
}

/**
 * Check if a given object implements the UserMutualFollowingsResult interface.
 */
export function instanceOfUserMutualFollowingsResult(value: object): value is UserMutualFollowingsResult {
    return true;
}

export function UserMutualFollowingsResultFromJSON(json: any): UserMutualFollowingsResult {
    return UserMutualFollowingsResultFromJSONTyped(json, false);
}

export function UserMutualFollowingsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMutualFollowingsResult {
    if (json == null) {
        return json;
    }
    return {
        
        'totalFollowers': json['totalFollowers'] == null ? undefined : json['totalFollowers'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CommonFriendModelFromJSON)),
    };
}

export function UserMutualFollowingsResultToJSON(json: any): UserMutualFollowingsResult {
    return UserMutualFollowingsResultToJSONTyped(json, false);
}

export function UserMutualFollowingsResultToJSONTyped(value?: UserMutualFollowingsResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalFollowers': value['totalFollowers'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(CommonFriendModelToJSON)),
    };
}

