import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

// Mock de fetch para que no haga la petición real a la API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: "Argentina" },
        { name: "Brazil" },
        { name: "Canada" },
        { name: "Costa Rica" },
        { name: "Estados Unidos" },
        { name: "Mexico" },
      ]),
  })
) as jest.Mock;

const Providers = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
