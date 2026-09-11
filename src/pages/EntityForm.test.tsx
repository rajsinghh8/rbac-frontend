import { test } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { EntityForm } from './EntityForm'

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <EntityForm kind="task" />
    </MemoryRouter>,
  )
})
