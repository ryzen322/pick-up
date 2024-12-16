export const PostFeed = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="  w-full sm:flex-1  sm:px-[5.2rem] ">
      <div className=" w-full  rounded-t-2xl border sm:border-stone-300 ">
        {children}
      </div>
    </section>
  );
};
