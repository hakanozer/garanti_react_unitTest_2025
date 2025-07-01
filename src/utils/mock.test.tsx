import '@testing-library/jest-dom';
import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import CustomButton from "../components/CustomButton";

// api service call
import * as commentService from '../services/commentsService';
import { commentMockData } from "./mockData";
import { Axios, AxiosResponse } from "axios";
import { IComment } from "../models/IComment";
import Login from "../pages/users/Login";

jest.useFakeTimers()
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

  it('load api comment test', async () => {

    jest.spyOn(commentService, "getOneComment").mockResolvedValue({ data: commentMockData } as AxiosResponse<IComment, any>);
    const { getByText, getByTestId } = render(<Login />)
    fireEvent.click(getByText('Load Comment'))

    await waitFor(() => {
      expect(getByTestId('comment')).toHaveTextContent(commentMockData.data.name)
    })
    expect(commentService.getOneComment).toHaveBeenCalledWith(1) // getOneComment fonksiyonu 1 parametresi ile çağrıldı mı?
    expect(commentService.getOneComment).toHaveBeenCalledTimes(1) // getOneComment fonksiyonu kaç kere çağrıldı?
  })

  it('useEffect message test', async () => {
    /*
    render(<Login />)
    jest.advanceTimersByTime(3000)
    const message = await screen.findByText("Hello, message from useEffect!")
    expect(message).toBeInTheDocument()
    */
   const {getByTestId} = render(<Login />)
   jest.advanceTimersByTime(3000)
   await waitFor(() => {
    expect(getByTestId('message')).toHaveTextContent("Hello, message from useEffect!")
   })
  })

  it('form valid control', () => {
    render(<Login />)
    const emailObj = screen.getByPlaceholderText('E-Mail')
    fireEvent.change( emailObj, {target: {value: 'ali@mail'}} )
    const buttonObj = screen.getByTestId('loginBtn')
    fireEvent.click(buttonObj)
    const errorObj = screen.getByRole('alert')

    expect(errorObj).toHaveTextContent('E-mail not valid')
  })

})