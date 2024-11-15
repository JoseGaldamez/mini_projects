

export const PrincipalContent = () => {
    return (
        <div className="bg-[#17494c]">
            <main className="flex gap-20 justify-between items-center max-w-4xl mx-auto text-white py-20">

                { /* Elemento de la izquierda */}
                <div className="w-1/2">
                    <h2 className="text-7xl font-bold leading-[1.4]">
                        <span className="text-[#cc9fb6]">
                            Champions
                        </span>
                        <br />
                        <span className="text-[#fed6aa]">of </span>
                        <span className="text-[#00a655] border-b-4 border-white">customer</span>
                        <br />
                        <span className="text-[#31aabd] border-b-4 border-white">service</span>
                    </h2>
                </div>




                { /* Elemento de la derecha */}
                <div className="w-1/2">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos aliquam sequi. Reiciendis voluptate doloremque illum sapiente adipisci nam, animi, laudantium at dignissimos modi dolores.
                        </p>
                    </div>
                    <div className="flex mt-5 gap-10">
                        <button className="bg-[#e4f0d3] text-[#03363e] font-medium p-3">Free trial</button>
                        <button className="border-2 border-white p-3">View demo</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
