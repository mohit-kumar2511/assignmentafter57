import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-orange-600 font-bold text-white rounded-md hover:bg-orange-700 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  )
}

export default PageNotFound
