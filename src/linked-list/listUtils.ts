import ListNode from './ListNode';

/*
 * creates a linked list based on an array input
 */
export const arrayToLinkedList = (array: number[]): ListNode => {
    if (!array.length) {
        throw Error('empty array not supported');
    }
    const head = new ListNode();
    let current = head;
    for (let i = 0; i < array.length; i += 1) {
        current.val = array[i];
        if (i + 1 < array.length) {
            const next = new ListNode();
            current.next = next;
            current = next;
        }
    }
    return head;
};

/*
 * parses a linked list back to an array
 */
export const linkedListToArray = (current: ListNode | null, array: number[] = []): number[] => {
    if (!current) {
        return array;
    }
    array.push(current.val);
    return linkedListToArray(current.next, array);
};

export const strigifyNodeList = (current: ListNode | null, str: string = ''): string => {
    if (!current) {
        return 'null';
    }
    str += `${current.val} => `;
    if (!current.next) {
        return str + 'null';
    }
    return strigifyNodeList(current.next, str);
};
