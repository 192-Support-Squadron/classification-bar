/*
 Copyright U.S. Federal Government (in countries where recognized). All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
*/
export interface ClassificationData {
    classification: string;
    classes: string;
    caveats?: string;
}

export interface ClassificationSettings {
    position: string;
    level?: string;
    caveats?: string;
}

export function ParseClassification(props: ClassificationSettings): ClassificationData {
    if(props.level == undefined){
        props.level = "unconfigured"
    }
    const color: string = `classify-${props.level.toLocaleLowerCase()}`;

    switch (props.level.toLocaleUpperCase()) {
        case "U":
            return {
                classification: "UNCLASSIFIED",
                caveats: props.caveats,
                classes: `classify-${props.position} ${color} classify-text`
            }
        case "CUI":
            return {
                classification: "CUI",
                caveats: props.caveats,
                classes: `classify-${props.position} ${color} classify-text`
            }
        case "C":
            return {
                classification: "CONFIDENTIAL",
                caveats: props.caveats,
                classes: `classify-${props.position} ${color} classify-text`
            }
        case "S":
            return {
                classification: "SECRET",
                caveats: props.caveats,
                classes: `classify-${props.position} ${color} classify-text`
            }
        case "TS":
            return {
                classification: "TOP SECRET",
                caveats: props.caveats,
                classes: `classify-${props.position} ${color} classify-text-black`
            }
        case "SCI":
            return {
                classification: "TOP SECRET",
                caveats: props.caveats,
                classes: `classify-${props.position} ${color} classify-text-black`
            }
        default:
            return {
                classification: "NOT CONFIGURED",
                caveats: props.caveats,
                classes: `classify-${props.position} classify-undefined classify-text-black`
            }
    }
}