import React, { useRef } from 'react'

const ContactSummary = () => {
  const containerRef = useRef(null)
  return (
    <section
      ref={containerRef}
      className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16'
    >
      
    </section>
  )
}

export default ContactSummary