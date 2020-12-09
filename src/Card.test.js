import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'
import { MemoryRouter } from "react-router"

it('renders without crashing', function () {
    render(
    <MemoryRouter>
            <Card />
        </MemoryRouter>);
});

it("matches the snapshot for a company", function() {
    let item = {
        handle: "test-company",
        name: "Test Company",
        description: "a test company"
    };

    const { asFragment } = render(
        <MemoryRouter>
            <Card item={item}/>
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot();
});

it("matches the snapshot for a job", function() {
    let item = {
        title: "test job",
        salary: 50000,
        equity: 0.4
    }

    const { asFragment } = render(
        <MemoryRouter>
            <Card item={item} />
        </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot();
});