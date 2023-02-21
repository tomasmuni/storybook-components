/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
    * Text to display
    */
    label: string;
    /**
    * Size of the label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Color of the label could be  'primary' |'secondary' |  'tertiary
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Cap or not
    */
    allCaps?: boolean;
    /**
    * Custom color
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
