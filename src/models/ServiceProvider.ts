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
 * @interface ServiceProvider
 */
export interface ServiceProvider {
    /**
     * 
     * @type {number}
     * @memberof ServiceProvider
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ServiceProvider
     */
    bizCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceProvider
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceProvider
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceProvider
     */
    icon?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceProvider
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceProvider
     */
    tags?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceProvider
     */
    show?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ServiceProvider
     */
    showIndex?: number;
    /**
     * 
     * @type {Date}
     * @memberof ServiceProvider
     */
    createDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ServiceProvider
     */
    lastUpdate?: Date;
}

/**
 * Check if a given object implements the ServiceProvider interface.
 */
export function instanceOfServiceProvider(value: object): value is ServiceProvider {
    return true;
}

export function ServiceProviderFromJSON(json: any): ServiceProvider {
    return ServiceProviderFromJSONTyped(json, false);
}

export function ServiceProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'bizCode': json['bizCode'] == null ? undefined : json['bizCode'],
        'name': json['name'] == null ? undefined : json['name'],
        'code': json['code'] == null ? undefined : json['code'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'description': json['description'] == null ? undefined : json['description'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'show': json['show'] == null ? undefined : json['show'],
        'showIndex': json['showIndex'] == null ? undefined : json['showIndex'],
        'createDate': json['createDate'] == null ? undefined : (new Date(json['createDate'])),
        'lastUpdate': json['lastUpdate'] == null ? undefined : (new Date(json['lastUpdate'])),
    };
}

export function ServiceProviderToJSON(json: any): ServiceProvider {
    return ServiceProviderToJSONTyped(json, false);
}

export function ServiceProviderToJSONTyped(value?: ServiceProvider | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'bizCode': value['bizCode'],
        'name': value['name'],
        'code': value['code'],
        'icon': value['icon'],
        'description': value['description'],
        'tags': value['tags'],
        'show': value['show'],
        'showIndex': value['showIndex'],
        'createDate': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'lastUpdate': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
    };
}

