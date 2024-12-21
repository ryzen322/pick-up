import ActiveLink from "@/components/ActiveLink";
import PostDialog from "@/components/form/PostDialog";
import Post from "@/components/Post";

export default function Home() {
  return (
    <section className=" flex flex-col w-full">
      <PostDialog />
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
      {/* fyp post */}
      <Post />
      {/* end */}
    </section>
  );
}
