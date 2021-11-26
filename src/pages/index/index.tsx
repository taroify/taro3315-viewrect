import {View} from '@tarojs/components'
import {useEffect, useRef} from 'react';
import './index.scss'

export default function Index() {
  const viewRef = useRef<HTMLDivElement>()
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("view rect", viewRef.current?.getBoundingClientRect())
  }, [])

  useEffect(() => {
    console.log("div rect", divRef.current?.getBoundingClientRect())
  }, [])

  return (
    <>
      <View ref={viewRef}/>
      <div ref={divRef}/>
    </>
  )
}
