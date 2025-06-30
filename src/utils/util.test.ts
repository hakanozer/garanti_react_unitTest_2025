import { emailValid } from "./util"


test('Email Valid Status', () => {
    const email = 'ali@mail.com'
    expect(emailValid(email)).toBe(true)
})
