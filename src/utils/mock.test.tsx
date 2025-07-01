// test/utils/mock.test.tsx
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor, screen, act, renderHook } from "@testing-library/react";
import CustomButton from "../components/CustomButton";
import * as commentService from '../services/commentsService';
import { commentMockData, productMockData } from "./mockData";
import { AxiosResponse } from "axios";
import { IComment } from "../models/IComment";
import Login from "../pages/users/Login";
import { useCounter } from '../hooks/useCounter';
import { ThemeContext } from '../themeContext/ThemeContext';
//import { setupServer } from 'msw/node';
//import { rest } from 'msw';

/*
const server = setupServer(
  rest.get('https://jsonbulut.com/api/products?page=1&per_page=10', (req:any, res:any, ctx:any) => {
    return res(ctx.json(productMockData.data[0]))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
*/

jest.useFakeTimers();

describe('mock test', () => { 

  it('click event control', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<CustomButton onClick={mockOnClick} />);
    const button = getByText('Send') as HTMLButtonElement;

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(button.style.backgroundColor).toBe("");
  });

  it('load api comment test', async () => {
    jest.spyOn(commentService, "getOneComment").mockResolvedValue({ data: commentMockData } as AxiosResponse<IComment, any>);
    render(<Login />);
    fireEvent.click(screen.getByText('Load Comment'));

    await waitFor(() => {
      expect(screen.getByTestId('comment')).toHaveTextContent(commentMockData.data.name);
    });

    expect(commentService.getOneComment).toHaveBeenCalledWith(1);
    expect(commentService.getOneComment).toHaveBeenCalledTimes(1);
  });

  it('useEffect message test', async () => {
    render(<Login />);
    jest.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(screen.getByTestId('message')).toHaveTextContent("Hello, message from useEffect!");
    });
  });

  it('form valid control', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('E-Mail');
    fireEvent.change(emailInput, { target: { value: 'ali@mail' } });
    const loginBtn = screen.getByTestId('loginBtn');
    fireEvent.click(loginBtn);
    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('E-mail not valid');
  });

  it('mock api product test', async () => {
    render(<Login />);
    const loadingTexts = await screen.findAllByText('Yükleniyor...');
    expect(loadingTexts.length).toBeGreaterThan(0); 
  });

  it('custom hooks test', () => {
    const {result} = renderHook(() => useCounter())
    act(() => {
      result.current.plus()
    })
    expect(result.current.count).toBe(1)
  })

  it("context api test", () => {
    const renderObj = 
    <ThemeContext.Provider value='dark'>
      <Login />
    </ThemeContext.Provider>
    render(renderObj)
    expect(screen.getByText('dark')).toBeInTheDocument()
  })
  

});
