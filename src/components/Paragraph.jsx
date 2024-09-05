import React from 'react'

export default function Paragraph(props) {
    const {paragraph} = props;
  return (
    <p className='paragraph'>
      {paragraph}
    </p>
  )
}
