import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] h-[400px] px-6 flex flex-col justify-center items-center ">

        {/* bg header ////////// */}
               <h1 className="z-0 text-centre text-[#e8e8e8] text-[300px] font-bold">NexaWorks</h1>

         {/* Footer links //////////// */} 

        <div className="z-50 mt-[-350px] mb-36 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Website development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  iOS app development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Android app development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Digital marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  ReactJS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  NodeJS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  UI / UX design
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-800">
                  Progressive web app development
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="text-[#31312F] hover:text-orange-600">
                  More...
                </a>
              </li> */}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Healthcare apps
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-800">
                  On demand apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-gray-800">
                  Finance apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-gray-800">
                  Entertainment apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-gray-800">
                  Social networking apps
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-gray-800">
                  Education apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Restaurant apps
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-800">
                  Real estate apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="text-[#31312F] hover:text-orange-600">
                  More...
                </a>
              </li> */}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">Portfolio</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  AI Resume Analyzer and Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Custom Class Management System
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

    </footer>
  )
}
