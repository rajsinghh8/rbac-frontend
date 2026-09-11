import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { ResourceList } from './Resources'

test('renders without crashing', () => { render(<MemoryRouter initialEntries={['/projects']}><Route path="/:kind" component={ResourceList} /></MemoryRouter>) })
