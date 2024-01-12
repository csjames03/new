import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import UserContents from "@/app/components/UserContents"

const Main = async() => {
  const user = 'user'
  return (
    <div className="bg-slate-50 overflow-x-hidden">
      <Navbar/>
      <Sidebar user={user}/>
      <UserContents/>
      {
        //Main Contents


      }
     
    </div>
  )
}

export default Main