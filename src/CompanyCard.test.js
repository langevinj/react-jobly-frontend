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
})