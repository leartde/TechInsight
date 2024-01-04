import React from 'react'

const TagsCard = () => {
  return (
    <div className="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
                <div className="flex items-center flex-wrap gap-2">
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Tag</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Sports</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Business</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Politics</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Computer</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Coding</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Web
                        Design</a>
                    <a href="#"
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Web
                        App</a>
                </div>
            </div>
  )
}

export default TagsCard