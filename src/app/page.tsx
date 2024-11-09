
export default function Home() {
  return (
    <main>
      <div id="content" className="text-white">

        {/* 1st Row */}
        <div className="bg-[#252570] h-auto flex flex-row gap-20 items-center justify-center p-10">

          <div id="leftSide" className="w-[35%] py-10">
            <h1 className="text-3xl font-bold my-5">Get to know more about responsive Web Developing</h1>
            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, atque. Lorem ipsum dolor sit amet. Lorem ipsum amet.</p>
            <div className="flex items-center justify-between bg-blue-500 w-[150px] my-5 px-5 py-2 font-bold">
            <button className="">Free Trial</button>
            <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
              </div>
            </div>
          </div>

          <div id="rightSide" className="w-auto">
            <img src="/boy2.jfif" alt="man picture" className="h-72 w-80 object-cover rounded-lg" />
          </div>

        </div>

        {/* 2nd Row */}
        <div id="Container" className="flex flex-col items-center justify-center py-20 text-black">
          <div>
          <div className="flex flex-row items-center justify-center p-5">
              <div id="left" className="mx-20 max-w-[40%]">
                <div>
                <h2 className="text-3xl w-auto font-bold ">
                  Project
                </h2>
                <h2 className="text-3xl w-fit mb-3 font-bold border-b-4 border-yellow-400">
                  Management
                </h2>
                </div>
                <div className="font-semibold text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed harum distinctio libero aut aperiam quos modi saepe, magni temporibus reprehenderit!
                </div>
                <div className="my-3 px-5 py-2 w-[130px] bg-blue-500 inline-block text-white font-bold">
                  <button>Get Started</button>
                </div>
              </div>

              <div id="right" className="mx-20">
                <img src="/pic2.jfif" alt="Picture 2" className="h-60 w-96 object-cover" />
              </div>
            </div>
          </div>
        </div>

          {/* 3rd Row */}
        <div id="Container" className="flex flex-col items-center justify-center py-20 text-black">
          <div>
          <div className="flex flex-row items-center justify-center p-5">
              <div id="right" className="mr-20">
                <img src="/boy pic.jfif" alt="Picture 2" className="h-60 w-96 object-cover" />
              </div>
              
              <div id="right" className="ml-20 max-w-[40%]">
                <div>
                <h2 className="text-3xl w-auto font-bold ">
                  Basics of
                </h2>
                <h2 className="text-3xl w-fit mb-3 font-bold border-b-4 border-yellow-400">
                  Web Development
                </h2>
                </div>
                <div className="font-semibold text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed harum distinctio libero aut aperiam quos modi saepe, magni temporibus reprehenderit! Lorem ipsum dolor sit amet.
                </div>
                <div className="my-3 px-5 py-2 w-[130px] bg-blue-500 inline-block text-white font-bold">
                  <button>Learn More</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  )
}