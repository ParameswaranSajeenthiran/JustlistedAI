import React from 'react'
import WhyChooseCard from './WhyChooseCard'

function WhyChoose() {
  return (
    <div className='whychoose'>
       <div className="container">
        <h2>
        Our Values
        </h2>
        <div className="contant">
            <WhyChooseCard
            title={"Innovation"}
            contant={
              "At the core of JustListed AI is our commitment to innovation. We believe in continuously advancing our technology to not only meet but anticipate market trends. Our team is dedicated to exploring new frontiers in AI and real estate, ensuring that our platform remains at the forefront of the industry. This relentless pursuit of innovation drives us to constantly improve, evolve, and redefine what's possible in real estate technology."
            }
          />
          <WhyChooseCard
            title={"Simplicity"}
            contant={
              "We understand that the true power of technology lies in its accessibility. That's why one of our key values is simplicity – making complex technology user-friendly and approachable for all real estate professionals. We strive to demystify AI and make it a practical, easy-to-use tool that enhances the everyday work of our users. Our platform is designed with a focus on intuitive interfaces and straightforward functionalities, ensuring that even those with minimal technical expertise can leverage the full potential of AI-driven content creation."
            }
          />
          <WhyChooseCard
            title={"Excellence"}
            contant={
              "Excellence is the benchmark for everything we do at JustListed AI. From the quality of our AI-generated content to the level of customer service we provide, our commitment to excellence is unwavering. We understand that our platform is a reflection of our users' professionalism and standards, which is why we are dedicated to delivering solutions that drive real results. Whether it's in the accuracy of our market insights, the creativity of our content, or the responsiveness of our support team, excellence is our promise to our users."
            }
          />
        </div>
        <p>
        In embodying these values, JustListed AI not only provides a service but also fosters a community of real estate professionals who are equipped, empowered, and inspired to excel in their field. Our mission and values are the guiding principles that shape our actions, our platform, and our commitment to revolutionizing the real estate industry.

        </p>
      </div>
    </div>
  )
}

export default WhyChoose
