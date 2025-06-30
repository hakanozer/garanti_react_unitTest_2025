import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CustomButton from "../components/CustomButton";


describe('mock test', () => { 

  it('click event control', () => {
    const mockOnClick = jest.fn()
    const obj = render( <CustomButton onClick={mockOnClick} /> )
    const button = obj.getByText('Send') as HTMLButtonElement

    // Mock Click
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled() // Mock fonsiyon çağrıldı mı?
    expect(mockOnClick).toHaveBeenCalledTimes(1) // Kaç kere çağrıldı!

    const color = button.style.backgroundColor
    expect(color).toBe("")

  })

})