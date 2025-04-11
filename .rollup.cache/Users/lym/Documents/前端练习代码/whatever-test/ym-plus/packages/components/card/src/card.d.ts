import type { ExtractPropTypes } from "vue";
export declare const cardProps: {
    width: {
        type: NumberConstructor;
        default: number;
    };
    imgSrc: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    imgHeight: {
        type: NumberConstructor;
        default: number;
    };
    summary: {
        type: StringConstructor;
        default: string;
    };
};
export type CardProps = ExtractPropTypes<typeof cardProps>;
