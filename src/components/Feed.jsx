import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utilis/feedSlice'
import { URL } from '../utilis/constants'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch = useDispatch()
  const feedData = useSelector((store) => store.feed)

  const getFeed = async () => {
    if (feedData && feedData.length > 0) return

    try {
      const res = await axios.get(URL + '/feed', {
        withCredentials: true,
      })

      dispatch(addFeed(res?.data?.data))
    } catch (e) {
      console.error('Error fetching feed:', e)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    feedData?.length > 0 && (
      <div className="flex flex-col items-center gap-4 mt-5">
        <UserCard user={feedData[0]} />
      </div>
    )
  )
}

export default Feed