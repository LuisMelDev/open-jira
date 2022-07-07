import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("<Layout />", () => {
    it("render component", () => {
        const { baseElement } = render(
            <Layout>
                <div>Hello</div>
            </Layout>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
