import { ActionsLayout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActionsLayout title={""} pageDescription={""}>
      <Component {...pageProps} />
    </ActionsLayout>
  );
}
