# 在 h5 环境上获得空标签的 View 组件的 rect width 为 0

```tsx
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
```

### 在 H5 上的效果

<img src="https://raw.githubusercontent.com/taroify/taro3315-viewrect/main/viewrect.png" width="800" />
