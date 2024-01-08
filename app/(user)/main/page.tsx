import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import UserContents from "@/app/components/UserContents"

const Main = () => {
  const user = 'admin'
  return (
    <div className="bg-slate-50">
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