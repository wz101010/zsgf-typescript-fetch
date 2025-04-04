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
 * @interface DirectoryItem
 */
export interface DirectoryItem {
    /**
     * 
     * @type {string}
     * @memberof DirectoryItem
     */
    name?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof DirectoryItem
     */
    createDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof DirectoryItem
     */
    lastUpdate?: Date;
    /**
     * 
     * @type {number}
     * @memberof DirectoryItem
     */
    fileSize?: number | null;
}

/**
 * Check if a given object implements the DirectoryItem interface.
 */
export function instanceOfDirectoryItem(value: object): value is DirectoryItem {
    return true;
}

export function DirectoryItemFromJSON(json: any): DirectoryItem {
    return DirectoryItemFromJSONTyped(json, false);
}

export function DirectoryItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectoryItem {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'createDate': json['createDate'] == null ? undefined : (new Date(json['createDate'])),
        'lastUpdate': json['lastUpdate'] == null ? undefined : (new Date(json['lastUpdate'])),
        'fileSize': json['fileSize'] == null ? undefined : json['fileSize'],
    };
}

export function DirectoryItemToJSON(json: any): DirectoryItem {
    return DirectoryItemToJSONTyped(json, false);
}

export function DirectoryItemToJSONTyped(value?: DirectoryItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'createDate': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'lastUpdate': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
        'fileSize': value['fileSize'],
    };
}

