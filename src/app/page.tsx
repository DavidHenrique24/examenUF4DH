import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-black min-h-screen p-5 pb-60 gap-20 flex flex-col items-center justify-center mt-20 font-[family-name:var(--font-geist-sans)]">
      
      <section className="max-w-4xl text-center">
        <h2 className="text-white text-6xl font-bold mb-4">
          Information you need during <br />
          on-call emergencies
        </h2>
        <p className="text-white text-lg mb-8">
          Quickly link new on-call tickets to similar past incidents and their
          solutions. All <br />
          directly in Slack the moment an incident happens.
        </p>
       
        <Link href="/Docs" className="p-5">
          <Button className="bg-white text-black hover:bg-gray-400 px-10 py-6">
            Get Started &gt;
          </Button>
        </Link>
        
         <br />
        <br />
        <img
          src="/imagen.png"
          alt=""
          className="rounded mx-auto"
          style={{ width: 1000, height: 600 }}
        />
      </section>
      <br />
      <br />
      <section className="max-w-3xl text-center">
        <h2 className="text-white text-5xl font-bold mb-4">
          Instant setup, no custom <br />
          code
        </h2>
        <p className="text-white text-lg mb-8">
          {/* para que no de error */}
          Invite the bot, pick a channel, and you&apos;re set&mdash;no custom code needed, and no <br /> vendor lock-in.
        </p>
        <img
          src="/imagen.png"
          alt=""
          className="rounded mx-auto"
          style={{ width: 700, height: 400 }}
        />
      </section>
      <br />
      <br />

      <section className="max-w-4xl text-center">
        <h2 className="text-white text-6xl font-bold mb-4">
          Get in touch
        </h2>
        <p className="text-white text-lg mb-8">
          Request a demo, or hop on a call
        </p>
         <Link href="/Pricing" className="p-5">
          <Button className="bg-white text-black hover:bg-gray-400 px-10 py-6">
            Get Started &gt;
          </Button>
        </Link>
      </section>
      <br />
      <br />

    </div>
  );
}
