import { test } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Projects } from './Projects'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  )
})
