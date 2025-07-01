import { useState } from "react"

export const useCounter = () => {
    const [count, setCount] = useState(0)
    const plus = () => setCount(count => count + 1)
    return { count, plus }
}