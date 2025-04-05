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
 * @interface GeoLocationModel
 */
export interface GeoLocationModel {
    /**
     * 纬度
     * @type {number}
     * @memberof GeoLocationModel
     */
    latitude?: number;
    /**
     * 经度
     * @type {number}
     * @memberof GeoLocationModel
     */
    longitude?: number;
    /**
     * 地点的名称
     * @type {string}
     * @memberof GeoLocationModel
     */
    locationName?: string | null;
    /**
     * 地点的类型，如家庭、工作、学校等
     * @type {string}
     * @memberof GeoLocationModel
     */
    locationType?: string | null;
    /**
     * 收货人姓名
     * @type {string}
     * @memberof GeoLocationModel
     */
    recipientName?: string | null;
    /**
     * 收货人联系电话
     * @type {string}
     * @memberof GeoLocationModel
     */
    phoneNumber?: string | null;
    /**
     * 收货人电子邮件
     * @type {string}
     * @memberof GeoLocationModel
     */
    email?: string | null;
    /**
     * 国家
     * @type {string}
     * @memberof GeoLocationModel
     */
    country?: string | null;
    /**
     * 州/省
     * @type {string}
     * @memberof GeoLocationModel
     */
    state?: string | null;
    /**
     * 城市
     * @type {string}
     * @memberof GeoLocationModel
     */
    city?: string | null;
    /**
     * 区/县
     * @type {string}
     * @memberof GeoLocationModel
     */
    district?: string | null;
    /**
     * 街道
     * @type {string}
     * @memberof GeoLocationModel
     */
    street?: string | null;
    /**
     * 邮政编码
     * @type {string}
     * @memberof GeoLocationModel
     */
    zipCode?: string | null;
    /**
     * 详细的地址信息
     * @type {string}
     * @memberof GeoLocationModel
     */
    address?: string | null;
    /**
     * 地址类型，百度、高德、谷歌
     * @type {string}
     * @memberof GeoLocationModel
     */
    mapType?: string | null;
    /**
     * 备注
     * @type {string}
     * @memberof GeoLocationModel
     */
    remark?: string | null;
    /**
     * 标签
     * @type {string}
     * @memberof GeoLocationModel
     */
    tags?: string | null;
    /**
     * 启用
     * @type {boolean}
     * @memberof GeoLocationModel
     */
    enable?: boolean;
    /**
     * 排序
     * @type {number}
     * @memberof GeoLocationModel
     */
    showIndex?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof GeoLocationModel
     */
    createDate?: Date;
    /**
     * 最后更新的时间
     * @type {Date}
     * @memberof GeoLocationModel
     */
    lastUpdate?: Date;
}

/**
 * Check if a given object implements the GeoLocationModel interface.
 */
export function instanceOfGeoLocationModel(value: object): value is GeoLocationModel {
    return true;
}

export function GeoLocationModelFromJSON(json: any): GeoLocationModel {
    return GeoLocationModelFromJSONTyped(json, false);
}

export function GeoLocationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoLocationModel {
    if (json == null) {
        return json;
    }
    return {
        
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'locationName': json['locationName'] == null ? undefined : json['locationName'],
        'locationType': json['locationType'] == null ? undefined : json['locationType'],
        'recipientName': json['recipientName'] == null ? undefined : json['recipientName'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
        'email': json['email'] == null ? undefined : json['email'],
        'country': json['country'] == null ? undefined : json['country'],
        'state': json['state'] == null ? undefined : json['state'],
        'city': json['city'] == null ? undefined : json['city'],
        'district': json['district'] == null ? undefined : json['district'],
        'street': json['street'] == null ? undefined : json['street'],
        'zipCode': json['zipCode'] == null ? undefined : json['zipCode'],
        'address': json['address'] == null ? undefined : json['address'],
        'mapType': json['mapType'] == null ? undefined : json['mapType'],
        'remark': json['remark'] == null ? undefined : json['remark'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'enable': json['enable'] == null ? undefined : json['enable'],
        'showIndex': json['showIndex'] == null ? undefined : json['showIndex'],
        'createDate': json['createDate'] == null ? undefined : (new Date(json['createDate'])),
        'lastUpdate': json['lastUpdate'] == null ? undefined : (new Date(json['lastUpdate'])),
    };
}

export function GeoLocationModelToJSON(json: any): GeoLocationModel {
    return GeoLocationModelToJSONTyped(json, false);
}

export function GeoLocationModelToJSONTyped(value?: GeoLocationModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'locationName': value['locationName'],
        'locationType': value['locationType'],
        'recipientName': value['recipientName'],
        'phoneNumber': value['phoneNumber'],
        'email': value['email'],
        'country': value['country'],
        'state': value['state'],
        'city': value['city'],
        'district': value['district'],
        'street': value['street'],
        'zipCode': value['zipCode'],
        'address': value['address'],
        'mapType': value['mapType'],
        'remark': value['remark'],
        'tags': value['tags'],
        'enable': value['enable'],
        'showIndex': value['showIndex'],
        'createDate': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'lastUpdate': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
    };
}

