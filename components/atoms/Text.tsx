
type Etiqueta = 'p' | 'strong' | 'span' | 'label';

interface Props {
    content: string;
    type: Etiqueta;
    color?: string;
    style?: string   
  }
  
  export const Text = (props: Props) => {  
    
    return (
        <props.type className={props.color ? props.color + ' ' + props.style : `${props.style}`}>
            {props.content}
        </props.type>
    )  

}

