import React from 'react'
import { render } from '@testing-library/react'
import JobCard from './JobCard'

it("renders without crashing", function() {
    render(<JobCard />)
});

it("matches snapshot", function() {
    let item = {title: "Tester", salary: 50000, equity: 0.5};
    const { asFragment } = render(<JobCard item={item} />)
    expect(asFragment()).toMatchSnapshot();
});