import { jwtControl } from "./security/userSecurity";

describe('Security Tests', () => {
  test('JWT Control - valid token', () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2pzb25idWx1dC5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3NTEyNzAwMzYsImV4cCI6MTc1MTI3MzYzNiwibmJmIjoxNzUxMjcwMDM2LCJqdGkiOiJnWUZ0UU1zaDZmcGxkM3NRIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Td5NsFaDpFT_HBz3nDmx6Co6Dwys5XI1aNjDyruRavM';
    localStorage.setItem('token', token);
    expect(jwtControl()).toBe(true);
  });

  test('JWT Control - invalid token', () => {
    const token = 'invalid.token.here';
    localStorage.setItem('token', token);
    expect(jwtControl()).toBe(false);
  });
});


describe('JWT Control', () => {
  test('JWT Control - no token in localStorage', () => {
    localStorage.removeItem('token');
    expect(jwtControl()).toBe(false);
  });
    test('JWT Control - empty token', () => {
        localStorage.setItem('token', '');
        expect(jwtControl()).toBe(false);
    });
});