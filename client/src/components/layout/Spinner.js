import React, { Fragment } from 'react';
import spinner from './spinner.gif'

export default () => {
  return (
    <Fragment>
      <img scr={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
    </Fragment>
  )
}