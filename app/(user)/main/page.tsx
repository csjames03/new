import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import UserContents from "@/app/components/UserContents"

const Main = () => {
  return (
    <div className="bg-slate-50">
      <Navbar/>
      <Sidebar/>
      <UserContents/>
      {
        //Main Contents


      }
    </div>
  )
}

export default Main