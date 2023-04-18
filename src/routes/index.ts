import { html, render } from "iares";
import { TRoute } from "iares";

import { AppDefault } from "@/components/AppDefault";
import { AppHello } from "@/components/AppHello";
import { AppSignin } from "@/components/AppSignin";
import { AppLogin } from "@/components/AppLogin";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${AppDefault} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${AppHello} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/signin$/,
    mount: ({ context }) => {
      render(html`<${AppSignin} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/login$/,
    mount: ({ context }) => {
      render(html`<${AppLogin} />`, context);
    },
  },
];
