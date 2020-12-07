import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { u1 } from './_testCommon'
import Home from './Home'

it('renders without crashing', function () {
    render(<MemoryRouter>
        <Home user={u1} />
    </MemoryRouter>)
});

it('matches the snapshot', function () {
    const { asFragment } = render(<MemoryRouter>
        <Home user={u1} />
    </MemoryRouter>)

    expect(asFragment).toMatchSnapshot();
});

it('shows the correct view when a user is logged in', function () {
    const { getByText, queryByText } = render(<MemoryRouter>
        <Home user={u1} />
    </MemoryRouter>)

    expect(getByText("Explore all the job postings we have to offer.")).toBeInTheDocument();
    expect(queryByText("Login")).not.toBeInTheDocument();
});

it('shows the correct view when no user is logged in', function () {
    const { getByText, queryByText } = render(<MemoryRouter>
        <Home />
    </MemoryRouter>);

    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Start the hunt for your next position with us.")).toBeInTheDocument();
    expect(queryByText("Welcome Back!")).not.toBeInTheDocument();
});