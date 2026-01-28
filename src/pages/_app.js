import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { sequelSans, anybody } from "@/lib/fonts";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <main className={`${sequelSans.variable} ${anybody.variable}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
