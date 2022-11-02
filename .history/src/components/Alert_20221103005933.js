import React from 'react'

export const Alert = (props) => {
  return (
      <div>
          <div class="alert alert-success" role="alert">
            {props.message}
</div>
    </div>
  )
}
