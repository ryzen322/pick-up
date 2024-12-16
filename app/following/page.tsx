import ActiveLink from "@/components/ActiveLink";

export default function Home() {
  return (
    <section className=" flex flex-col w-full">
      <div className=" hidden sm:flex items-center gap-2 h-20 w-full  px-4 border-b border-stone-300">
        <div className=" h-10 w-10 bg-black/30 rounded-full"></div>
        <input
          type="text"
          placeholder="What's new?"
          className=" placeholder:text-sm placeholder:font-semibold placeholder:text-stone-400/85"
        />
        <button className=" text-black ml-auto py-1 px-4 border border-stone-300 rounded-lg">
          Post
        </button>
      </div>
      <div className=" w-full grid grid-cols-2">
        <ActiveLink
          href="/"
          className="h-12 flex items-center justify-center border-b  font-semibold"
        >
          For you
        </ActiveLink>

        <ActiveLink
          href={"/following"}
          className=" h-12 flex items-center justify-center border-b  font-semibold"
        >
          Following
        </ActiveLink>
      </div>
    </section>
  );
}
