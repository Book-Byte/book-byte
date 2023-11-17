"use client"

import { Rating as ReactRating } from '@smastrom/react-rating'

const StaticRating = ({width, customClass, value}) => {
  const star = (
    <path stroke='2' d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  )
  const myStyles = {
    itemShapes: star,
    itemStrokeWidth: 2.5,
    activeFillColor: '#FFA500',
    activeStrokeColor: '#FFA500',
    inactiveFillColor: 'white',
    inactiveStrokeColor: 'gray'
  }
  

  return <ReactRating className={`flex flex-row mt-2 ${customClass}`} style={{ maxWidth: width }} value={value} readOnly itemStyles={myStyles}/>
}
export default StaticRating;