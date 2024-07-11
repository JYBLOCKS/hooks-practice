import App from "./App";
import { act, render} from "./utils/CustomRender";
describe("App", () => {
  it("should render App component", async () => {
    await act(async () => {
      render(<App />);
    });
  });
});
