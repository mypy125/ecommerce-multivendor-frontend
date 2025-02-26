import React from "react";

const ProductDateils = () => {
    return(
        <div  className="px-5 lg:px-20 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                        {
                            [...Array(4)].map((item)=> 
                            <img className="lg:w-full w-[50px] cursor-pointer rounded-md"
                             src="https://images.unsplash.com/photo-1579175548263-85b7adfc5566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" 
                             alt=""
                             />)
                        }
                    </div>
                    <div className="w-full lg:w-[85%]">
                        <img className="w-full rounded-md"
                        src="https://images.unsplash.com/photo-1523537590773-17506913706b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob3J0fGVufDB8fDB8fHww"
                         alt="" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductDateils;