import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TagsCard = ({blog}) => {
    const [tags, setTags] = useState(blog.tags)

  return (
    <div className="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
                <div className="flex items-center flex-wrap gap-2">
                   {
                    tags.map((tag)=>(
                        <Link key={tag}  to={{ pathname: '/blogs', search: `?tag=${tag}` }}
                        className="px-3 py-1 capitalize text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">{tag}</Link>

                    ))
                   }
                   
                </div>
            </div>
  )
}

export default TagsCard