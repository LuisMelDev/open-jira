import { render } from "@testing-library/react";
import { EntriesProvider } from "context";
import { EntryCard } from "./EntryCard";

describe("<EntryCard />", () => {
    it("should render", () => {
        const { baseElement } = render(
            <EntriesProvider>
                <EntryCard
                    entry={{
                        createdAt: Date.now(),
                        description: "Test",
                        status: "finished",
                        _id: "123",
                    }}
                />
            </EntriesProvider>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
