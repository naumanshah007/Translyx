/** Simple readable layout for policy pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#F4F7FA] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-[2.4rem] font-semibold leading-tight tracking-[-0.03em] text-[#0B1117] sm:text-[3rem]">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated {updated}</p>
        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0B1117] [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_a]:font-medium [&_a]:text-cyan-800 [&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  );
}
