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
import type { FileItem } from './FileItem';
import {
    FileItemFromJSON,
    FileItemFromJSONTyped,
    FileItemToJSON,
    FileItemToJSONTyped,
} from './FileItem';
import type { DirectoryItem } from './DirectoryItem';
import {
    DirectoryItemFromJSON,
    DirectoryItemFromJSONTyped,
    DirectoryItemToJSON,
    DirectoryItemToJSONTyped,
} from './DirectoryItem';

/**
 * 
 * @export
 * @interface FileListResult
 */
export interface FileListResult {
    /**
     * 
     * @type {Array<DirectoryItem>}
     * @memberof FileListResult
     */
    directories?: Array<DirectoryItem> | null;
    /**
     * 
     * @type {Array<FileItem>}
     * @memberof FileListResult
     */
    files?: Array<FileItem> | null;
    /**
     * 
     * @type {number}
     * @memberof FileListResult
     */
    totalDirectories?: number;
    /**
     * 
     * @type {number}
     * @memberof FileListResult
     */
    totalFiles?: number;
    /**
     * 
     * @type {number}
     * @memberof FileListResult
     */
    size?: number;
}

/**
 * Check if a given object implements the FileListResult interface.
 */
export function instanceOfFileListResult(value: object): value is FileListResult {
    return true;
}

export function FileListResultFromJSON(json: any): FileListResult {
    return FileListResultFromJSONTyped(json, false);
}

export function FileListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'directories': json['directories'] == null ? undefined : ((json['directories'] as Array<any>).map(DirectoryItemFromJSON)),
        'files': json['files'] == null ? undefined : ((json['files'] as Array<any>).map(FileItemFromJSON)),
        'totalDirectories': json['totalDirectories'] == null ? undefined : json['totalDirectories'],
        'totalFiles': json['totalFiles'] == null ? undefined : json['totalFiles'],
        'size': json['size'] == null ? undefined : json['size'],
    };
}

export function FileListResultToJSON(json: any): FileListResult {
    return FileListResultToJSONTyped(json, false);
}

export function FileListResultToJSONTyped(value?: FileListResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'directories': value['directories'] == null ? undefined : ((value['directories'] as Array<any>).map(DirectoryItemToJSON)),
        'files': value['files'] == null ? undefined : ((value['files'] as Array<any>).map(FileItemToJSON)),
        'totalDirectories': value['totalDirectories'],
        'totalFiles': value['totalFiles'],
        'size': value['size'],
    };
}

