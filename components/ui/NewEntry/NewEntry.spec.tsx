import { render } from "@testing-library/react";
import { EntriesProvider } from "context";
import { NewEntry } from "./NewEntry";

describe("<EntryList />", () => {
    it("should render", () => {
        const { baseElement } = render(
            <EntriesProvider>
                <NewEntry />
            </EntriesProvider>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
