import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button/Button'

test("render Button", () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeInTheDocument()
})