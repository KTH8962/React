import { selector } from "recoil";
import { counterState } from "../atoms/atoms";

const doubledState = selector({
    key: 'doubledState',
    get: ({get}) => {
        const count = get(counterState);
        return count * 2;
    }
});

const doubledStateSet = selector({
    key: 'doubledStateSet',
    get: ({get}) => {
        return get(counterState);
    },
    set: ({set}, newValue) => {
        set(counterState, newValue);
    }
});

export { doubledState, doubledStateSet }