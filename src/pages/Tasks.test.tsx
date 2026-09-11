import { test } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Tasks } from './Tasks'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Tasks />
    </MemoryRouter>,
  )
})
