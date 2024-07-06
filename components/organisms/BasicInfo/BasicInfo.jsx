export const BasicInfo = () => {
    return (
        // <div class="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex  items-center justify-center bg-hero  overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center ">
            <div className="w-full md:w-1/2 lg:pr-32 mx-20 lg:mx-0">
                <h2 className="text-4xl lg:text-5xl text-center md:text-left text-sky-500 leading-tight font-medium">Sobre Mí</h2>
                <h3
                    className="mt-6 md:mt-10 mx-20 md:mx-0 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
                    Soy Diego Aguilera, un entrenador personal certificado con [años de experiencia]. Mi enfoque se centra en proporcionar planes de entrenamiento personalizados que se adapten a tus necesidades.
                </h3>
                <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                    <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-sky-500 text-black border-2 border-sky-500">Get started</button>
                    {/* <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button> */}
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
        </div>
    </div>
    );
};