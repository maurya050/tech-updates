import React from 'react'
import ExploreBtn from '@/components/ExploreBtn';

const Home = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for every Tech <br/> Event that you can't miss.</h1>
      <p className='text-center mt-5'>Hackathons, Conferences, Meetups, and More, All in One Place.</p>
      <ExploreBtn />

      <div className='mt-20 space-y-7'>

        <h3>Featured Events</h3>

        <ul className='events'>
          {[1,2,3,4].map((event) => (
            <li key={event} className="event-card">
              <h4>Event Title {event}</h4>
              <p>Date: 2024-07-0{event} | Location: City {event}</p>
              <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
              <a href="#" className='text-sm mt-5 inline-block underline'>Learn More</a>
            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}

export default Home
 