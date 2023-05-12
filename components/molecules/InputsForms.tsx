import React from 'react'
import { Inputs } from '../atoms/Inputs'
import { Text } from '../atoms/Text'

type type = 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'tel' | 'url';

interface Props {
  type: type;
  placeholder: string;
  content: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


export const InputsForms = (props: Props) => {
  return (
    <div className='m-2'>
      <div>
        <Text
          content={props.content}
          type='label'
          style='text-gray-500'
        />
      </div>
      <div>
        <Inputs
          tag='input'
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}
