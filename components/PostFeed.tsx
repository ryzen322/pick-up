export const PostFeed = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" w-full  flex items-center justify-center sm:flex-1  sm:px-[5.2rem] sm:mt-[0.5rem] pt-14 ">
      <div className=" w-full  rounded-t-2xl border sm:border-t-stone-300 sm:border-l-stone-300 sm:border-r-stone-300 md:w-[638px]">
        {children}
      </div>
    </section>
  );
};
