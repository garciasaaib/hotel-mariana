import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import Carousel from '../common/Carousel/Carousel'
import RoomList from '../containers/RoomList'
export default function Room() {
  const { id } = useParams()
  const room = useSelector((state) => state.roomTypes.details);

  return (
    <>
      {id
      ? <Carousel data={room}/>
      : <RoomList/>
    }
    </>
  )
}
