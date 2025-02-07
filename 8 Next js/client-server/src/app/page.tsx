import Link from "next/link";

export default function Home() {
  // console.log("this is server component");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      This is Home
      <Link href="/dashboard">Go to DashBoard</Link>
      <Link href="/product">Go to Product</Link>
      <Link href="/users">Go to Users</Link>
    </div>
  );
}
