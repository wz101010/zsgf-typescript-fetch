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
 * @interface UnionIDSignUpRequest
 */
export interface UnionIDSignUpRequest {
    /**
     * 登录账号，可空
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    userName?: string | null;
    /**
     * UnionID
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    unionID: string;
    /**
     * 平台标识
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    platform: string;
    /**
     * 密码，6~32位
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    pwd: string;
    /**
     * 昵称
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    nickName?: string | null;
    /**
     * 头像
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    avatar?: string | null;
    /**
     * 自定义数据
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    data?: string | null;
    /**
     * 邮箱
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    email?: string | null;
    /**
     * 邮箱验证码（只有启用的邮箱验证码功能时，才需要传入）
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    emailCode?: string | null;
    /**
     * 手机号
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    phone?: string | null;
    /**
     * 手机验证码（只有启用的手机验证码功能时，才需要传入）
     * @type {string}
     * @memberof UnionIDSignUpRequest
     */
    phoneCode?: string | null;
}

/**
 * Check if a given object implements the UnionIDSignUpRequest interface.
 */
export function instanceOfUnionIDSignUpRequest(value: object): value is UnionIDSignUpRequest {
    if (!('unionID' in value) || value['unionID'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    if (!('pwd' in value) || value['pwd'] === undefined) return false;
    return true;
}

export function UnionIDSignUpRequestFromJSON(json: any): UnionIDSignUpRequest {
    return UnionIDSignUpRequestFromJSONTyped(json, false);
}

export function UnionIDSignUpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnionIDSignUpRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userName': json['userName'] == null ? undefined : json['userName'],
        'unionID': json['unionID'],
        'platform': json['platform'],
        'pwd': json['pwd'],
        'nickName': json['nickName'] == null ? undefined : json['nickName'],
        'avatar': json['avatar'] == null ? undefined : json['avatar'],
        'data': json['data'] == null ? undefined : json['data'],
        'email': json['email'] == null ? undefined : json['email'],
        'emailCode': json['emailCode'] == null ? undefined : json['emailCode'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'phoneCode': json['phoneCode'] == null ? undefined : json['phoneCode'],
    };
}

export function UnionIDSignUpRequestToJSON(json: any): UnionIDSignUpRequest {
    return UnionIDSignUpRequestToJSONTyped(json, false);
}

export function UnionIDSignUpRequestToJSONTyped(value?: UnionIDSignUpRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userName': value['userName'],
        'unionID': value['unionID'],
        'platform': value['platform'],
        'pwd': value['pwd'],
        'nickName': value['nickName'],
        'avatar': value['avatar'],
        'data': value['data'],
        'email': value['email'],
        'emailCode': value['emailCode'],
        'phone': value['phone'],
        'phoneCode': value['phoneCode'],
    };
}

