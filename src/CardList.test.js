import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { jobPages } from './_testCommon'
import CardList from './CardList'

it("renders without crashing", function() {
    render(<CardList />);
})