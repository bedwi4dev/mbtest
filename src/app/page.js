
import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="flex flex-col bg-slate-300 text-gray-600 items-center justify-items-center h-screen p-8  gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <p>Welcome to Next.js!</p>
      <p>Learn about: <a className= "text-2xl text-blue-800 underline " href="https://nextjs.org/learn">building a site with Next.js</a></p>
    </div>
    </>
  );
}
