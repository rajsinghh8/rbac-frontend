import { test } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Users } from './Users'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>,
  )
})
