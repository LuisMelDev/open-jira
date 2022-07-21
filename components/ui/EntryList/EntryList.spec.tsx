import { render } from "@testing-library/react";
import { EntriesProvider } from "context";
import { EntryList } from "./EntryList";

describe("<EntryList />", () => {
    it("should render", () => {
        const { baseElement } = render(
            <EntriesProvider>
                <EntryList status="finished" />
            </EntriesProvider>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
