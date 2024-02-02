import React from 'react'

function WidthLimit({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='max-w-[1000px] mx-auto'>
      {children}
    </div>
  )
}

export default WidthLimit