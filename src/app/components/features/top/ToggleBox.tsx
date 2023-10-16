'use client'

import { FC, useState } from "react"
import { FaChevronUp } from "react-icons/fa"
import { ToggleList } from "./ToggleList"


export const ToggleBox: FC = () => {
  const [isOpened, setIsOpened] = useState(true)

  return (
    <div>
      <div
        className={
          "flex items-center bg-white mb-5 py-4 px-10 shadow-2xl text-blue-700 font-bold justify-between border border-blue-900 cursor-pointer"
        }
        onClick={() => setIsOpened(!isOpened)}
      >
        <p>
          現在のHarbors
          <span className="ml-1 text-orange-500">5</span>
          人
        </p>
        <div>
          <FaChevronUp className={isOpened ? "fill-blue-600 text-xl" : "fill-blue-600 text-xl transform rotate-180"} />
        </div>
      </div>
      {isOpened && <ToggleList />}
    </div>
  )
}