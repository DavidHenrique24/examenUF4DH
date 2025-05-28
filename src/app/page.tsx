import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-black min-h-screen p-5 pb-60 gap-10 flex flex-col items-center justify-center ">
      <h1 className="text-white text-center text-6xl font-bold "> 
        Information you need during <br />on-call emergencies
      </h1>
      <p className="text-white text-center text-lg">
        Quickly link new on-call tickets to similar past incidents and their solutions. All <br />directly in Slack the moment an incident happens.
      </p>
      <Link href="/Docs" className="p-5">
        <Button className="bg-white text-black hover:bg-gray-400 px-10 py-6">
          Get Started &gt;
        </Button>
      </Link>
      <br />
           <img src="/imagen.png" alt="" className="rounded" style={{ width: 1000, height: 600 }} />
<br />
<br />
      <h1 className="text-white text-center text-5xl font-bold "> 
        Instant setup, no custom <br />code
      </h1>
       <p className="text-white text-center text-lg">
        Quickly link new on-call tickets to similar past incidents and their solutions. All <br />directly in Slack the moment an incident happens.
      </p>


    </div>


  );
}
