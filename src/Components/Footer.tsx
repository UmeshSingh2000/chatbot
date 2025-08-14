import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import React from "react"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-[#FAFAFA] p-4 text-center sm:flex-row sm:text-left">

      <div className="font-bold text-lg">ChatBot</div>


      <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-black">Home</li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Services</li>
        <li className="cursor-pointer hover:text-black">Contact</li>
        <li className="cursor-pointer hover:text-black">Privacy Policy</li>
      </ul>

     
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-blue-600">
            <FacebookIcon size={18} />
          </li>
          <li className="cursor-pointer hover:text-sky-500">
            <TwitterIcon size={18} />
          </li>
          <li className="cursor-pointer hover:text-blue-700">
            <LinkedinIcon size={18} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
