import { test } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Organizations } from './Organizations'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Organizations />
    </MemoryRouter>,
  )
})
