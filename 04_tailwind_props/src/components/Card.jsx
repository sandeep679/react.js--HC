import React from 'react'

const Card = ({username,one,someobj,btn="visit it"}) => {         // we pass like (props) and we can do destructing  too
                                                   // we can set default value  
 console.log(username);                       // we can write like props.username if we dont do destructing
 console.log(one);                            // we can write like props.one if we dont do destructing
 console.log(someobj);                        // we can write like props.someobj if we dont do destructing

    
    
  return (
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://media.istockphoto.com/id/467378618/photo/heritage-of-craftsmanship.jpg?s=1024x1024&w=is&k=20&c=DbH-DroCGGHcbQE6Blc9jxLIOPxs8EGeN0rnpt4i1uY=" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>
          {username}                     {/*props.username if we dont do destructing */}
        </div>
        <div>
          {btn || "visit it"}                     {/*for hard coding */}
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default Card