import React from 'react'
import { render } from '@testing-library/react'
import CompanyCard from './CompanyCard'
import { MemoryRouter } from 'react-router-dom'

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <CompanyCard />
        </MemoryRouter>
    )
});

it("matches snapshot for default logo", function() {
    let company = {handle: "test-company", name: "Test Company", description: "Just a test company"}
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard company={company} />
        </MemoryRouter>
    )
});