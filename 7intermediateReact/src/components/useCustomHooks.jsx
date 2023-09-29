import { useState,useEffect } from "react";



const useCustomHooks = (url) => {
    const [data,setData] = useState(null)
useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((d) => setData(d))
},[url])
  return [data]
}

export default useCustomHooks