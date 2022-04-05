import {ACTIONS_TYPE, CurrencyReducersTypes} from "./actions";
import {IGlobalState} from "./state";

export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.9475,
            sellRate: 2.9,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.24,
            sellRate: 3.18,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.036,
            sellRate: 0.022,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {...state, ...action.payload};
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {...state, ...action.payload, amountOfBYN: '', amountOfCurrency: ''}; // Зануляем поля при смене направления операции
        default:
            return state;
    }
};

export const selectAllCurrencyState = (state: IGlobalState) => state.currency;