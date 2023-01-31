import React from 'react'
import "./style.css";

const Contact = () => {
  return (
    <section id="contact" className="flex p-32 max-lg:flex-col max-lg:px-4 ">
      <div className="w-1/2 flex flex-col items-center max-lg:items-center max-lg:w-full">
        <h2 className="title -mb-10 max-lg:text-6xl max-lg:text-center">Contact</h2>
        <h4 className="sub-title z-10 max-lg:text-3xl max-lg:mt-1 max-lg:text-center">Lets Chat</h4>

        {/* <span className="text-lg mt-14 mb-4 text-gray-400">* * *</span> */}

        <p className="text-center text-gray-400 text-sm px-20 leading-relaxed max-lg:px-2">
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>
      </div>
      <div className="w-1/2 px-10 max-lg:w-full max-lg:mt-5">
        <form>
            <div className="flex flex-col my-3">
                <label>Yu Nem</label>
               <input type="text" className='rounded-md border-gray-300 border-yellow-600'/> 
            </div>

            <div className="flex flex-col my-3">
                <label>Yu Mel</label>
               <input type="text" className='rounded-md border-gray-300'/> 
            </div>

            <div className="flex flex-col my-3">
                <label>Yu Meseg</label>
               <textarea cols="50" rows="10" className='rounded-md border-gray-300'/> 
            </div>
        </form>
      
      <div className="btn-about py-6 flex justify-center">
      <button className='py-2 px-5 bg-orange-400 text-white rounded-full w-full '>Send</button>
        </div>
        </div>
        
    </section>
  )
}

export default Contact