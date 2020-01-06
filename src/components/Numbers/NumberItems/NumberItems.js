import React, {Component} from "react";
import Style from './NumbersItems.module.scss';
import card from './card.svg';
import conference from './conference.svg';
import library from './library.svg';

class NumberItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes : [
                {
                    currentValue: 0,
                    value: '147',
                    title: 'instutycji finansowych',
                    logo: library
                }, {
                    currentValue: 0,
                    value: '6.5',
                    title: 'mln realnych użytkowników portalu',
                    logo: conference
                }, {
                    currentValue: 0,
                    value: '968',
                    title: 'produktów finansowych',
                    logo: card
                }
            ]
        }
    }

    componentDidMount() {
        const {boxes} = {...this.state};
        const box1 = boxes[0];
        const box2 = boxes[1];
        const box3 = boxes[2];

        const animatedValue = setInterval(() => {
            if (box1['currentValue'] < parseInt(box1['value'])) box1['currentValue'] = box1['currentValue'] + 1;
            if (box2['currentValue'] < parseFloat(box2['value'])) box2['currentValue'] = box2['currentValue'] + 0.05;
            if (box3['currentValue'] < parseInt(box3['value'])) box3['currentValue'] = box3['currentValue'] + 11;
            this.setState({boxes: [box1, box2, box3]});
            if((box1['currentValue'] >= parseInt(box1['value'])) && (box2['currentValue'] >= parseFloat(box2['value'])) && (box3['currentValue'] >= parseInt(box3['value']))) clearInterval(animatedValue);
        }, 10);
    }

    render () {
        const items = this.state.boxes.map((el, key) => {
            return (
                <div key={key} className={Style.item}>
                    <img src={el.logo} alt=""/>
                    <div>
                        <span>{ el.currentValue.toString().replace(".", ",")  % 1 === 0 ?
                            el.currentValue.toString().replace(".", ",") :
                            el.currentValue.toFixed(1).toString().replace(".", ",")}</span>
                        <p>{el.title}</p>
                    </div>

                </div>
            )
        });

        return (
            <div className={Style.NumbersItems}>{items}</div>
        )
    }
};

export default NumberItems;