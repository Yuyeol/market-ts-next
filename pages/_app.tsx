import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-100 max-w-lg min-h-screen mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
