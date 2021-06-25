import React from 'react'

// components
import Form from './form';
import Todos from './todos';

export default function Container() {
  return (
    <div>
      <Form />
      <Todos />
    </div>
  )
}
