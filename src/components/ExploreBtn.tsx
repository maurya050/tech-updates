'use client'
import Image from "next/image";
const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("button")}>
        <a href="#events" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="Arrow Down" width={16} height={16}  />
        </a>    
    </button>
  )
}   

export default ExploreBtn
