import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-gray-950 h-[100vh] w-[100vw] flex items-center justify-center">
      <button className=" text-slate-900 px-5 py-2 rounded-l hover:bg-white shadow-sm hover:scale-105 shadow-white bg-slate-100 font-bold">
        <Link href='/users'>Users List</Link>
      </button>
    </div>
  )
}
