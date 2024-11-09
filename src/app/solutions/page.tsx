export default function Solutions() {
    return (
        <div className="grid items-start justify-center">
            <div id="mainContent" className=" bg-gray-300 w-fit px-5 py-12 flex flex-row items-center justify-center m-20 rounded-3xl">
                <div id="left" className="max-w-[450px] text-6xl font-extrabold text-[#232323] mx-10">
                    Facing Serious problems explore the solutions and try fixing it
                </div>


                <div id="right" className="bg-[#909090] rounded-2xl p-5 mx-10 h-[50vh]">

                    <div className="flex flex-row items-center w-[300px] justify-between py-2 px-5 bg-[#d3d3d3] rounded-full">
                        <input type="text" placeholder="Search..." className="bg-transparent placeholder-[#252570] outline-none appearance-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                    </div>
                    <div className="text-center items-center justify-center text-[#232323] m-[6rem] text-2xl font-sans font-bold w-[120px]">
                        search for solutions
                    </div>

                </div>

                
            </div>
        </div>
    )
}