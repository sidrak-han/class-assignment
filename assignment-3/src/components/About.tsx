import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="mt-28 ml-40">
  <h1 className="text-5xl font-bold mb-8 text-blue-800 text-center">About Me</h1>
    
    <div className="flex items-start mt-28 ml-40">

    <Image
      src={"/girl.png"}
      alt="girl-image"
      width={600}
      height={600}
      className="mr-32"
    />
    
    
    <p className="flex-2 text-left mr-64 mb-16 text-gray-700">
      My name is Sidra, and I am from Karachi. I recently completed my intermediate education with dedication and hard work, and now I aspire to pursue higher studies in the field of arts. My goal is to secure admission to Karachi University, where I hope to explore my interests, deepen my knowledge, and develop the skills necessary to make a meaningful contribution to the arts. I am enthusiastic about this journey, as I believe Karachi University offers the resources and environment essential for achieving my academic and personal growth.
    </p>
  </div>
  </div>
  )
}

export default AboutPage
