import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h3 className="text-center">
        SWR vs fetch: Exploring Data Fetching in Next.js
      </h3>

      <div className="text-center">
        <Link className="px-2" href="/regular">
          Regular
        </Link>

        <Link className="px-2" href="/swr">
          SWR
        </Link>

        <Link className="px-2" href="/real_time">
          Real-Time
        </Link>
      </div>
    </main>
  );
}
