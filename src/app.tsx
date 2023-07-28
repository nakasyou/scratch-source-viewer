import { useState, useEffect } from 'preact/hooks'
import './tailwind.css'

import Header from "./components/Header.tsx"

export function App() {
  const [viewerState, setViewerState] = useState("loding")
  
  const url = new URL(location.href)
  const params = url.searchParams
  const id = params.get('id') // Project ID
  if ((!id) || (!parseInt(id))) {
    // There isn't ID...
    alert('Error: Please specify ID')
    params.delete('id')
    params.append('id', '854461630')
    const newURL = new URL(location.href)
    newURL.search = params
    location.href = newURL.href
  }
  useEffect(() => {
    ;(async () => 
      const trampolineResult = await fetch(`https://trampoline.turbowarp.org/api/projects/${id}`).then(res=>res.json())
      if (trampolineResult.error === "Resource does not exist") {
        alert('Resource does not exist...')
      }
      const token = trampolineResult.project_token
      
    })()
  }, [])
  return (
    <>
      <div>
        <Header label={viewerState}/>
        
      </div>
    </>
  )
}
