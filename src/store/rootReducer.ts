import { Reducer, ActionCreator } from 'redux';

export type Chart = {
    chatId: string,
    number: string,
}
export type Message = {
    chatId: string,
    chatName: string,
    typeWebhook: string,
    idMessage: string,
    message: string,
    createDate: string,
}

export interface RootState {
    id: string;
    token: string;
    activeChart: Chart;
    listChart: Chart[];
    listMessages: Message[];
}

const initialState: RootState = {
    id: JSON.parse(`${localStorage.getItem('IdInstance')}` || ""),
    token: JSON.parse(`${localStorage.getItem('ApiTokenInstance')}` || ""),
    listChart: [],
    activeChart: {
        chatId: '',
        number: ''
    },
    listMessages: [],
}

const SET_ID = 'SET_ID';
export type SetIdAction = {
    type: typeof SET_ID;
    id: string;
}

export const setId: ActionCreator<SetIdAction> = (id) => ({
    type: SET_ID,
    id,
});

const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
    type: SET_TOKEN,
    token,
});

const SET_CHART = 'SET_CHART';
export type SetChartAction = {
    type: typeof SET_CHART;
    chart: Chart;
}

export const setChart: ActionCreator<SetChartAction> = (chart) => ({
    type: SET_CHART,
    chart,
});

const SET_ACTIVE_CHART = 'SET_ACTIVE_CHART';
export type SetActiveChartAction = {
    type: typeof SET_ACTIVE_CHART;
    chart: Chart;
}

export const setActiveChart: ActionCreator<SetActiveChartAction> = (chart) => ({
    type: SET_ACTIVE_CHART,
    chart,
});

const SET_LIST_MESSAGES = 'SET_LIST_MESSAGES';
export type SetListMessagesAction = {
    type: typeof SET_LIST_MESSAGES;
    message: Message;
}

export const setListMessages: ActionCreator<SetListMessagesAction> = (message) => ({
    type: SET_LIST_MESSAGES,
    message,
});

type MyAction =
    | SetIdAction
    | SetTokenAction
    | SetChartAction
    | SetActiveChartAction
    | SetListMessagesAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.id,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case SET_CHART:
            return {
                ...state,
                listChart: [...state.listChart, action.chart]
            };
        case SET_ACTIVE_CHART:
            return {
                ...state,
                activeChart: action.chart
            };
        case SET_LIST_MESSAGES:
            return {
                ...state,
                listMessages: [...state.listMessages, action.message]
            };
        default:
            return state;
    }
}