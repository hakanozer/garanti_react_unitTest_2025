import { jwtControl } from "./userSecurity";

test('JWT Control - valid token', () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2pzb25idWx1dC5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3NTEyNzAwMzYsImV4cCI6MTc1MTI3MzYzNiwibmJmIjoxNzUxMjcwMDM2LCJqdGkiOiJnWUZ0UU1zaDZmcGxkM3NRIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Td5NsFaDpFT_HBz3nDmx6Co6Dwys5XI1aNjDyruRavM';
  localStorage.setItem('token', token);
  expect(jwtControl()).toBe(true);
});
