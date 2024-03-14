

import LayoutHeader from './LayoutHeader'
import Siderbar from './Siderbar'

const MainLayout = ({children}) => {
  return (
    <>
    <div className="flex h-screen">
  <aside className="hidden md:flex md:flex-shrink-0 w-60 bg-gray-800 text-white">
   <Siderbar/>
  </aside>


  <div className="flex-1 flex flex-col overflow-hidden">

    <header className="bg-gray-900 p-4 bg-gray-800">
    <LayoutHeader/>
    </header>

  
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
    {children}
    </main>

  </div>
</div>
    </>
    
  )
}

export default MainLayout
