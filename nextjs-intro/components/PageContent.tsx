type PageContentProps = {
  title: string;
  text: string;
};

export default function PageContent({ title, text }: PageContentProps) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 px-6 py-16">
      <section className="max-w-2xl rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-4 leading-7 text-slate-600">{text}</p>
      </section>
    </main>
  );
}
