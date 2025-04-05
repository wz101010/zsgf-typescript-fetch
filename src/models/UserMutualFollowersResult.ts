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
 * @interface UserMutualFollowersResult
 */
export interface UserMutualFollowersResult {
    /**
     * 
     * @type {number}
     * @memberof UserMutualFollowersResult
     */
    totalFollowers?: number;
    /**
     * 
     * @type {Array<CommonFriendModel>}
     * @memberof UserMutualFollowersResult
     */
    data?: Array<CommonFriendModel> | null;
}

/**
 * Check if a given object implements the UserMutualFollowersResult interface.
 */
export function instanceOfUserMutualFollowersResult(value: object): value is UserMutualFollowersResult {
    return true;
}

export function UserMutualFollowersResultFromJSON(json: any): UserMutualFollowersResult {
    return UserMutualFollowersResultFromJSONTyped(json, false);
}

export function UserMutualFollowersResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMutualFollowersResult {
    if (json == null) {
        return json;
    }
    return {
        
        'totalFollowers': json['totalFollowers'] == null ? undefined : json['totalFollowers'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CommonFriendModelFromJSON)),
    };
}

export function UserMutualFollowersResultToJSON(json: any): UserMutualFollowersResult {
    return UserMutualFollowersResultToJSONTyped(json, false);
}

export function UserMutualFollowersResultToJSONTyped(value?: UserMutualFollowersResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalFollowers': value['totalFollowers'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(CommonFriendModelToJSON)),
    };
}

