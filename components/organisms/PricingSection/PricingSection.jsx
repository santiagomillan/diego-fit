import { Title } from "app/components/atoms/Title/Title";

export const PricingSection = () => {
    return (
    <section className=" py-6">
        <Title title={"Planes y Precios"} subtitle={"Elige el plan que mejor se adapte a tus necesidades y objetivos."}/>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">


    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white">Free</h3>
          <p className="mt-4 text-gray-400">Get started with our basic features.</p>
        </div>
        <div className="mb-8">
          <span className="text-5xl font-extrabold text-white">$0</span>
          <span className="text-xl font-medium text-gray-400">/mo</span>
        </div>
        <ul className="mb-8 space-y-4 text-gray-400">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>1 user account</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>10 transactions per month</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Basic support</span>
          </li>
        </ul>
        <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Sign Up
        </a>
      </div>


      <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white">Starter</h3>
          <p className="mt-4 text-gray-400">Perfect for small businesses and startups.</p>
        </div>
        <div className="mb-8">
          <span className="text-5xl font-extrabold text-white">$49</span>
          <span className="text-xl font-medium text-gray-400">/mo</span>
        </div>
        <ul className="mb-8 space-y-4 text-gray-400">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>5 user accounts</span>
          </li>
           <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>100 transactions per month</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Standard support</span>
          </li>
        </ul>
        <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Get Started
        </a>
      </div>


      <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white">Pro</h3>
          <p className="mt-4 text-gray-400">Ideal for growing businesses and enterprises.</p>
        </div>
        <div className="mb-8">
          <span className="text-5xl font-extrabold text-white">$99</span>
          <span className="text-xl font-medium text-gray-400">/mo</span>
        </div>
        <ul className="mb-8 space-y-4 text-gray-400">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited user accounts</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited transactions</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Priority support</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Advanced analytics</span>
          </li>
        </ul>
        <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Get Started
        </a>
      </div>


      <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white">Enterprise</h3>
          <p className="mt-4 text-gray-400">Tailored for large-scale deployments and custom needs.</p>
        </div>
        <div className="mb-8">
          <span className="text-5xl font-extrabold text-white">Custom</span>
        </div>
        <ul className="mb-8 space-y-4 text-gray-400">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Dedicated infrastructure</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Custom integrations</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Dedicated support team</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Premium SLAs</span>
          </li>
        </ul>
        <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>
    );
};