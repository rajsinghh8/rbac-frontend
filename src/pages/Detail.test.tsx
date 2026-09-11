import { test } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Detail } from './Detail'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Detail kind="project" />
    </MemoryRouter>,
  )
})
