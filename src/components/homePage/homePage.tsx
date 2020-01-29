import * as React from "react";
import './homePage.scss';

interface Interface {
    data: Array<{
        img: string
        title: string
        text: string
    }>
}

export const HomePage: React.FC<Interface> = (props: Interface) : JSX.Element => {

    function updateState(state: number, action:{type: string, amount: number}) {
        if (action.type === 'INCREMENT'){
            return state + action.amount;
        }
        if (action.type === 'DECREMENT'){
            return state - action.amount;
        }
        return state;
    }

    class Store {
        private _state: number;
        private readonly _updateState : (state: number, action: { type: string; amount: number }) => number;

        constructor(updateState: (state: number, action: { type: string; amount: number }) => (number), state: number) {
            this._updateState = updateState;
            this._state = state;
        }

        get state(){
            return this._state;
        }

        update(action:{type: string, amount: number}){
            this._state = this._updateState(this._state, action);
        }
    }

    const incrementAction = {type: 'INCREMENT', amount: 22};
    const decrementAction = {type: 'DECREMENT', amount: 5};

    const store = new Store(updateState, 0);

    store.update(incrementAction);
    console.log(store.state);

    store.update(decrementAction);
    console.log(store.state);



    return(
        <div className="main-content">
            {props.data.map((item:any, index) => (
                <div key={index} className="media">
                    <div className="media-body">
                        <h5 className="mt-0 media__title">{item.title}</h5>
                        <p className="media__text">{item.text}</p>
                        <img src={item.img} className="align-self-start media__img" alt="..."/>
                    </div>
                </div>
            ))}
        </div>
    )

};
