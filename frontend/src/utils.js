import { useState, useEffect } from 'react';

export function useOnScreen(ref) {

    let options = {
        // root: document.querySelector('#scrollArea'),
        root: null,
        rootMargin: '-60px 0px 0px 0px',
        thresholds: 0,
    }

    const [isIntersecting, setIntersecting] = useState(false);
    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
    }, options);

    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}

export const limitString = (str = '', num = 35) => {
    const { length: len } = str;
    if(num < len){
        return str.slice(0, num) + '...';
    }else{
        return str;
    }
};