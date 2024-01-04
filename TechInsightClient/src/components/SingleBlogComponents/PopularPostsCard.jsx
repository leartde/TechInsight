import React from 'react'

const PopularPostsCard = () => {
  return (
    <div className="w-full  bg-white shadow-sm rounded-sm p-4 ">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                <div className="space-y-4">
                    <a href="#" className="flex group">
                        <div className="flex-shrink-0">
                            <img src="src/images/img-5.jpg" className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div className="flex-grow pl-3">
                            <h5
                                className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                Team Bitbose geared up to attend Blockchain
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                                June 11, 2021
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex group">
                        <div className="flex-shrink-0">
                            <img src="src/images/img-9.jpg" className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div className="flex-grow pl-3">
                            <h5
                                className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                After a Caribbean Hurricane, the Battle
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                                March 27, 2021
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex group">
                        <div className="flex-shrink-0">
                            <img src="src/images/img-8.jpg" className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                        </div>
                        <div className="flex-grow pl-3">
                            <h5
                                className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                California sheriff’s deputy shot during ‘ambush’
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                                Aprile 17, 2021
                            </div>
                        </div>
                    </a>
                </div>
            </div>
  )
}

export default PopularPostsCard