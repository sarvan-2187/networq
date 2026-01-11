import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
  return (
      <div>
        <footer className="bg-black text-white py-6 mt-10">
          <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Networq. All rights reserved.
                  </p>
            <p className='text-sm'>
                Built with ❤️ by <Link href="https://sarvankumar.tech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Sarvan Kumar</Link>.
            </p>
          </div>
        </footer>
    </div>
  )
}

export default FooterSection