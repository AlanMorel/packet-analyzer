import { MouseEvent, RefObject } from "react";

interface ISortable {
    onDragStart: (e: MouseEvent<HTMLLIElement>) => void;
    onDragOver: (e: MouseEvent<HTMLLIElement>) => void;
}

function useSortable(list: RefObject<HTMLUListElement>, swap: (index1: number, index2: number) => void): ISortable {
    let currentIndex: number = -1;

    function getSwapPoints(): number[] {
        const children = list.current?.children || [];
        const points = Array.from(children).map(child => child.getBoundingClientRect().y);

        return points;
    }

    function onDragStart(e: MouseEvent<HTMLLIElement>): void {
        currentIndex = getHoverIndex(e.clientY);
    }

    function getHoverIndex(y: number): number {
        const points = getSwapPoints();
        if (y < points[0]) {
            return 0;
        }

        const index = points.findIndex(point => y < point);
        if (index < 0) {
            return points.length - 1;
        }

        return index - 1;
    }

    function onDragOver(e: MouseEvent<HTMLLIElement>): void {
        e.preventDefault();

        const newIndex = getHoverIndex(e.clientY);
        if (currentIndex < 0) {
            currentIndex = newIndex;
            return;
        }

        const points = getSwapPoints();
        if (currentIndex >= points.length) {
            return;
        }

        if (newIndex !== currentIndex) {
            swap(currentIndex, newIndex);
        }

        currentIndex = newIndex;
    }

    return {
        onDragStart,
        onDragOver
    };
}

export default useSortable;
