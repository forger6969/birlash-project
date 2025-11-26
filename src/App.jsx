import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Loading from './Pages/Loading'

const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])
  return (
    <div>

      {loader ? <Loading /> :
        <Home />
      }

    </div>
  )
}

export default App