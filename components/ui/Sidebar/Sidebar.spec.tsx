import { render } from "@testing-library/react";
import { UIContext } from "context";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    it("should render", () => {
        const { getByText } = render(
            <UIContext.Provider
                value={{
                    sideMenuOpen: true,
                    onToggleSideMenu: jest.fn(),
                }}
            >
                <Sidebar />
            </UIContext.Provider>
        );
        expect(getByText("Menu")).toBeInTheDocument();
    });
});
