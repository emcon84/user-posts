type Etiqueta = 'h1' | 'h2' | 'h3' | 'h4';

interface Props {
    text: string;
    type: Etiqueta;
    color?: string;
    style?: string      
  }
  
  export const Title = (props: Props) => {  
    
    return (
        <props.type className={props.color ? props.color + ' ' + props.style : `${props.style} text-black` }>
            {props.text}
        </props.type>
    )  

}
