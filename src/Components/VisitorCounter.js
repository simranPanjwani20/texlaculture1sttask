import {useEffect, useState} from "react";

export default function VisitorCounter() {
    const [count, setCount] = useState(
        parseInt(localStorage.getItem("visitors"), 10) || 0
    );

    useEffect(() => {
        const visitors = parseInt(localStorage.getItem("visitors"), 10) || 0;
        localStorage.setItem("visitors", visitors + 1);
        setCount(visitors + 1);
    }, []);

    return <div style={{color: 'red'}}>You are visitor number {count}</div>;
}

