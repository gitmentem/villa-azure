import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-villa-bg flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="text-villa-accent text-[12px] tracking-[3px] uppercase">
        404
      </p>
      <h1 className="font-heading text-villa-primary text-[36px] font-semibold">
        Page Not Found
      </h1>
      <p className="max-w-md text-[14px] font-light text-[#5c6975]">
        The page you&apos;re looking for doesn&apos;t exist or hasn&apos;t
        been built yet.
      </p>
      <Link
        href="/accommodations"
        className="bg-villa-primary mt-2 inline-block rounded-[2px] px-8 py-3 text-[12px] font-medium tracking-[1.6px] text-white uppercase"
      >
        Back to Accommodations
      </Link>
    </div>
  );
}
