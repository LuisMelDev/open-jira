import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("<Navbar />", () => {
    it("should render", () => {
        const { getByText } = render(<Navbar />);
        expect(getByText("Open Jira")).toBeInTheDocument();
    });
});
