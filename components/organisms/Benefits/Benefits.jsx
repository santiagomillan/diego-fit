import {Title} from "../../atoms/Title/Title"

export default function Benefits() {
    return (
        // <div className="relative items-center w-full  mx-auto  max-w-7xl">
        <>
        
        <div className="relative items-center w-full px-5 py-6 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <Title title={"Beneficios de Entrenar Conmigo"} subtitle={"Mejora tu salud física y mental, aumenta tu energía y alcanza tus objetivos de forma efectiva."}/>
            <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://via.placeholder.com/150" alt="blog"/>

                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                    <p className="mx-auto text-base leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-4">
                        <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                    </div>
                </div>
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://via.placeholder.com/150" alt="blog"/>

                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                    <p className="mx-auto text-base leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-4">
                        <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                    </div>
                </div>
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://via.placeholder.com/150" alt="blog"/>

                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                    <p className="mx-auto text-base leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-4">
                        <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}