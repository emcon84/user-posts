
type ButtonType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light' | 'dark' | 'link';

interface StyleButton {
  bgButton: string;
  colorButton: string;
  style: string;
}

const styleButton = (type: ButtonType): StyleButton => {
  let bgButton = '';
  let colorButton = '';
  let style = '';

  if (type === 'primary') {
    bgButton = 'bg-blue-400';
    colorButton = 'text-white';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'secondary') {
    bgButton = 'bg-gray-400';
    colorButton = 'text-white';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'danger') {
    bgButton = 'bg-red-400';
    colorButton = 'text-white';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'warning') {
    bgButton = 'bg-yellow-400';
    colorButton = 'text-black';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'success') {
    bgButton = 'bg-green-400';
    colorButton = 'text-white';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'info') {
    bgButton = 'bg-blue-200';
    colorButton = 'text-black';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'light') {
    bgButton = 'bg-gray-200';
    colorButton = 'text-black';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'dark') {
    bgButton = 'bg-gray-800';
    colorButton = 'text-white';
    style = 'p-2 m-1 rounded-md';
  }
  if (type === 'link') {
    bgButton = 'bg-transparent';
    colorButton = 'text-blue-400';
    style = 'p-2 m-1 rounded-md';
  }

  return { bgButton, colorButton, style };
};

interface Props {
  text: string;
  type: ButtonType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, type, className, onClick }: Props) => {
  const { bgButton, colorButton, style } = styleButton(type);
  const buttonStyle = `${bgButton} ${colorButton} ${style}`;

  return (
    <button className={className ? `${buttonStyle} ${className}` : buttonStyle} onClick={onClick} type='submit'>
      {text}
    </button>
  );
};