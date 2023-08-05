import React from "react"
import Image from "next/image"
const posts = [
    {
      id: 1,
      
      description:
        'Dynamic routing and Static generation',
      imageUrl:
        '/img1.jpg',
     
    },
    {
        id: 2,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img2.jpeg',
       
      },
      {
        id: 3,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img3.jpeg',
       
      },
      {
        id: 4,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img4.jpeg',
       
      },
      {
        id:5,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img5.jpeg',
       
      },
      {
        id: 6,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img6.jpg',
       
      },
      {
        id: 7,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img2.jpeg',
       
      },
      {
        id: 8,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img6.jpg',
       
      },
      {
        id: 9,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img4.jpeg',
       
      },
      {
        id: 10,
        
        description:
          'Dynamic routing and Static generation',
        imageUrl:
          '/img6.jpg',
       
      },
  ]
  
export default function Example() {
    return (

              <div className="bg-white py-16 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog.</h2>
                   
                    <div className="mt-6 space-y-20 lg:mt-20 lg:space-y-20">
                      {posts.map((post) => (
                        <article key={post.id} className="relative flex flex-col gap-8 ">
                          <div className="relative aspect-[2/1] sm:aspect-[2/1] sm:w-[40rem] lg:shrink-0">
                            <Image
                              src={post.imageUrl} 
                              alt=""
                              className="absolute inset-0 h-full w-full  bg-gray-50 object-fit"
                           height={500}
                           width={500}
                           />
                           
                          </div>
                          <div>
                           
                            <div className="group relative max-w-xl sm:grid-cols-2 sm:grid md:grid-cols-3 gap-2">
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                              <p className="mt-2 text-sm leading-6 font-semibold text-black">{post.description}</p>
                            </div>
                            
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          
