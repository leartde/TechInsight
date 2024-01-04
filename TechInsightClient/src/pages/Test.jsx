import React from 'react'

const Test = () => {
  return (

<div class="font-poppins text-gray-600">
  
    <nav class="shadow-sm">
        <div class="container px-4 mx-auto flex items-center py-3">
            
            <div class="lg:w-44 w-40">
                <a href="index.html">
                    <img src="src/images/logo.png" alt="logo" class="w-full"/>
                </a>
            </div>
           

            
            <div class="ml-12 lg:flex space-x-5  hidden">
                <a href="index.html"
                    class="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="fas fa-home"></i>
                    </span>
                    Home
                </a>
                <a href="#"
                    class="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="far fa-file-alt"></i>
                    </span>
                  
                </a>
                <a href="#"
                    class="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span class="mr-2">
                        <i class="fas fa-phone"></i>
                    </span>
                  
                </a>
            </div>
          
           
            <div class="relative lg:ml-auto hidden lg:block">
                <span class="absolute left-3 top-2 text-sm text-gray-500">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text"
                    class="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                    placeholder="Search"/>
            </div>
            <div class="lg:ml-5 ml-auto">
                <a href="#"
                    class=" text-sm  font-semibold hover:text-blue-500 transition flex items-center">
                    <span class="mr-2">
                        <i class="far fa-user"></i>
                    </span>
                    Login/Register</a>
            </div>
            <div class="text-xl text-gray-700 cursor-pointer ml-4 lg:hidden block hover:text-blue-500 transition"
                id="open_sidebar">
                <i class="fas fa-bars"></i>
            </div>
          

        </div>
    </nav>

   
    <main class="pt-12 bg-gray-100 pb-12">
        <div class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
           
            <div class="w-3/12 hidden xl:block">
               
                <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                    <div class="space-y-2">
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Beauti</span>
                            <p class="ml-auto font-normal">(12)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Business</span>
                            <p class="ml-auto font-normal">(15)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Fashion</span>
                            <p class="ml-auto font-normal">(5)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Food</span>
                            <p class="ml-auto font-normal">(10)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Learn</span>
                            <p class="ml-auto font-normal">(3)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Music</span>
                            <p class="ml-auto font-normal">(7)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Nature</span>
                            <p class="ml-auto font-normal">(0)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>People</span>
                            <p class="ml-auto font-normal">(13)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Sports</span>
                            <p class="ml-auto font-normal">(7)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Technology</span>
                            <p class="ml-auto font-normal">(17)</p>
                        </a>
                    </div>
                </div>

              
                <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Random Posts</h3>
                    <div class="space-y-4">
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-1.jpg" class="h-14 w-20 rounded object-cover"/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    Team Bitbose geared up to attend Blockchain
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    June 11, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-2.jpg" class="h-14 w-20 rounded object-cover"/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    After a Caribbean Hurricane, the Battle
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    March 27, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-3.jpg" class="h-14 w-20 rounded object-cover"/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    California sheriff’s deputy shot during ‘ambush’
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    Aprile 17, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            
            <div class="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

               
                <div class="rounded-sm overflow-hidden bg-white shadow-sm">
                    <div class="">
                        <img src="src/images/img-12.jpg" class="w-full h-96 object-cover"/>
                    </div>
                    <div class="p-4 pb-5">
                        <h2 class="block text-2xl font-semibold text-gray-700 font-roboto">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo loremque, totam
                            architecto odit pariatur Lorem ips dolor.
                        </h2>
                        <div class="mt-2 flex space-x-4">
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-2 text-xs">
                                    <i class="far fa-user"></i>
                                </span>
                                Blogging Tips
                            </div>
                            <div class="flex text-gray-400 text-sm items-center">
                                <span class="mr-2 text-xs">
                                    <i class="far fa-clock"></i>
                                </span>
                                June 11, 2021
                            </div>
                        </div>

                        <p class="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>

                        <p class="bg-green-50 border border-green-500 p-3 text-sm  mt-5">
                            <span class="text-xl mr-1 text-gray-400"><i class="fas fa-quote-left"></i></span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus blanditiis earum nam,
                            quisquam magnam aut odio aliquam inventore quibusdam mollitia! Alias, mollitia eveniet iure
                            quidem natus quis assumenda consectetur beatae.
                            Lorem, ipsum dolor quibusdam.
                            <span class="text-xl ml-1 text-gray-400"><i class="fas fa-quote-right"></i></span>
                        </p>

                        <p class="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>

                        <ul class="mt-6 pl-5  space-y-2">
                            <li class="text-sm">
                                <span class="mr-1"><i class="fas fa-angle-right"></i></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                            <li class="text-sm">
                                <span class="mr-1"><i class="fas fa-angle-right"></i></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                            <li class="text-sm">
                                <span class="mr-1"><i class="fas fa-angle-right"></i></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                            <li class="text-sm">
                                <span class="mr-1"><i class="fas fa-angle-right"></i></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                        </ul>

                        <p class="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>

                        <p class="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>

                        <div class="flex items-center flex-wrap gap-2 mt-5">
                            <a href="#"
                                class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Beauti</a>
                            <a href="#"
                                class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Sports</a>
                            <a href="#"
                                class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Business</a>
                        </div>

                        <div class="mt-5 pt-5 border-t border-gray-200 flex gap-2">
                            <a href="#"
                                class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#"
                                class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#"
                                class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#"
                                class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#"
                                class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

             
                <div class="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
                    <h5 class="text-base uppercase font-semibold font-roboto">Related post</h5>
                    <a href="#"
                        class="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                        see more
                    </a>
                </div>

             
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                    <div class="rounded-sm bg-white p-3 pb-5 shadow-sm">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-7.jpg/"
                                class="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor amet sit consec tetur elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-xs items-center">
                                    <span class="mr-1 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-xs items-center">
                                    <span class="mr-1 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-sm bg-white p-3 pb-5 shadow-sm">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-5.jpg/"
                                class="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor amet sit consec tetur elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-xs items-center">
                                    <span class="mr-1 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-xs items-center">
                                    <span class="mr-1 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-sm bg-white p-3 pb-5 shadow-sm hidden md:block">
                        <a href="#" class="block rounded-md overflow-hidden">
                            <img src="src/images/img-6.jpg/"
                                class="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
                        </a>
                        <div class="mt-3">
                            <a href="#">
                                <h2
                                    class="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor amet sit consec tetur elit.
                                </h2>
                            </a>
                            <div class="mt-2 flex space-x-3">
                                <div class="flex text-gray-400 text-xs items-center">
                                    <span class="mr-1 text-xs">
                                        <i class="far fa-user"></i>
                                    </span>
                                    Blogging Tips
                                </div>
                                <div class="flex text-gray-400 text-xs items-center">
                                    <span class="mr-1 text-xs">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div class="p-4 bg-white rounded-sm shadow-sm mt-8">
                    <h4 class="text-base uppercase  font-semibold mb-4 font-roboto">Post a comment</h4>
                    <p class="text-sm text-gray-500 mb-4">12 comments</p>

                    <div class="space-y-5">
                        <div class="flex items-start border-b  pb-5 border-gray-200">
                            <div class="w-12 h-12 flex-shrink-0">
                                <img src="src/images/avatar.png" class="w-full"/>
                            </div>
                            <div class="flex-grow pl-4">
                                <h4 class="text-base  font-roboto">Rasel Ahmed</h4>
                                <p class="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                                <p class="text-sm font-600 mt-2">Great article. Thanks</p>
                                <div class="flex gap-2 mt-2">
                                    <button
                                        class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                    <button
                                        class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start border-b  pb-5 border-gray-200">
                            <div class="w-12 h-12 flex-shrink-0">
                                <img src="src/images/avatar-2.png" class="w-full"/>
                            </div>
                            <div class="flex-grow pl-4">
                                <h4 class="text-base  font-roboto">John Doe</h4>
                                <p class="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                                <p class="text-sm font-600 mt-2">Great article. Thanks</p>
                                <div class="flex gap-2 mt-2">
                                    <button
                                        class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                    <button
                                        class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 flex-shrink-0">
                                <img src="src/images/avatar.png" class="w-full"/>
                            </div>
                            <div class="flex-grow pl-4">
                                <h4 class="text-base  font-roboto">Rasel Ahmed</h4>
                                <p class="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                                <p class="text-sm font-600 mt-2">Great article. Thanks</p>
                                <div class="flex gap-2 mt-2">
                                    <button
                                        class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                    <button
                                        class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form action="#" class="mt-8">
                        <h5 class="text-base  mb-1">Comment:</h5>
                        <textarea type="text"
                            class="w-full border border-gray-200 py-3 px-5 text-sm  rounded-sm h-20 focus:outline-none focus:border-gray-400"
                            placeholder="type your comment"></textarea>
                        <div class="mt-2">
                            <butotn type="submit"
                            class="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                            Submit
                        </butotn>
                        </div>
                    </form>
                </div>

            </div>

           
            <div class="lg:w-3/12 w-full mt-8 lg:mt-0">
              
                <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                    <div class="flex gap-2">
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#"
                            class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

              
                <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                    <div class="space-y-4">
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-5.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    Team Bitbose geared up to attend Blockchain
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    June 11, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-9.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    After a Caribbean Hurricane, the Battle
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    March 27, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-8.jpg" class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    California sheriff’s deputy shot during ‘ambush’
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    Aprile 17, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

             
                <div class="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
                    <div class="flex items-center flex-wrap gap-2">
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Beauti</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Sports</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Business</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Politics</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Computer</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Coding</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Web
                            Design</a>
                        <a href="#"
                            class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Web
                            App</a>
                    </div>
                </div>
            </div>

        </div>
    </main>

   
    <div class="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden"
        id="sidebar_wrapper">
        <div class="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 -left-80"
            id="sidebar">

           
            <div class="relative mx-3 mt-3 shadow-sm">
                <span class="absolute left-3 top-2 text-sm text-gray-500">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text"
                    class="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                    placeholder="Search"/>
            </div>

            
            <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">Menu</h3>
            <div class="">
                <a href="#"
                    class="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span class="w-6">
                        <i class="fas fa-home"></i>
                    </span>
                    Home
                </a>
                <a href="#"
                    class="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span class="w-6">
                        <i class="far fa-file-alt"></i>
                    </span>
                    About
                </a>
                <a href="#"
                    class="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span class="w-6">
                        <i class="fas fa-phone"></i>
                    </span>
                    Contact
                </a>
            </div>
         
            <div class="w-full mt-3 px-4 ">
                <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                <div class="space-y-2">
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Beauti</span>
                        <p class="ml-auto font-normal">(12)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Business</span>
                        <p class="ml-auto font-normal">(15)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Fashion</span>
                        <p class="ml-auto font-normal">(5)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Food</span>
                        <p class="ml-auto font-normal">(10)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Learn</span>
                        <p class="ml-auto font-normal">(3)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Music</span>
                        <p class="ml-auto font-normal">(7)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Nature</span>
                        <p class="ml-auto font-normal">(0)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>People</span>
                        <p class="ml-auto font-normal">(13)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Sports</span>
                        <p class="ml-auto font-normal">(7)</p>
                    </a>
                    <a href="#"
                        class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span class="mr-2">
                            <i class="far fa-folder-open"></i>
                        </span>
                        <span>Technology</span>
                        <p class="ml-auto font-normal">(17)</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

    
    <footer class="border-t py-4">
        <p class=" text-sm text-center">Copyright © 2021 <span class="font-semibold">Programming Kit</span>
            All Rights Reserved</p>
    </footer>
    </div>

    



  )
};

export default Test