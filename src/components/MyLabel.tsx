import "./mylabel.css";

export interface MyLabelProps {
    /**
    * Text to display
    */
    label: string;
    /**
    * Size of the label
    */
    size: 'normal' |'h1' |  'h2' | 'h3';
    /**
    * Color of the label could be  'primary' |'secondary' |  'tertiary
    */
    color?: 'primary' |'secondary' |  'tertiary';
    /**
    * Cap or not
    */
    allCaps?: boolean;

    /**
    * Custom color
    */
    fontColor?: string;
}
export const MyLabel = ({   label = 'No Label', 
                            size = 'normal', 
                            allCaps = false, 
                            color = 'primary',
                            fontColor
                        } :MyLabelProps) => {
  return (
    <span   style={{color: fontColor}}
            className={ `label ${size} text-${color}`}>
        {allCaps ? label.toLocaleUpperCase(): label}
    </span>
  )
}
