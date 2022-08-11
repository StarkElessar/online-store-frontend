import React, { memo } from 'react'

const Footer = () => {
  const year = new Date().getFullYear() === 2022
    ? new Date().getFullYear()
    : `2022 - ${new Date().getFullYear()}`

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className="footer__copyright">
          <span>StarkElessar {year}</span>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)