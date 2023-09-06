import type { MainProps } from "./main.types";

export function Main({ title = "Nextjs boilerplate" }: MainProps): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-300 p-24 font-sans">
      <h1 className="text-5xl	font-bold">{title}</h1>
    </main>
  );
}
