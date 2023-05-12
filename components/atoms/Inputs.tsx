type tag = 'input' | 'textarea';
type type = 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'tel' | 'url';

interface Props {
  placeholder?: string;
  tag: tag;
  type: type;
  color?: string;
  style?: string;
  class?: string;
  value?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Inputs = (props: Props) => {
  return (
    <props.tag
      className='p-2 border border-sky-500 rounded-md my-2'
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  )
}
