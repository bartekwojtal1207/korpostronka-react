import React, {Component} from "react";

class NumberItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes : [
                {
                    currentValue: 0,
                    value: '147',
                    title: 'instutycji finansowych'
                }, {
                    currentValue: 0,
                    value: '6.5',
                    title: 'mln realnych użytkowników portalu'
                }, {
                    currentValue: 0,
                    value: '968',
                    title: 'produktów finansowych'
                }
            ]
        }
    }

    setValue = (startValue, maxValue) => {
        setInterval(() => {
            let value = startValue < parseInt(maxValue) ? startValue + 1 : maxValue;
            return value;
        }, 555)
    };

    componentDidMount() {
        const {boxes} = {...this.state};
        const box1 = boxes[0];
        const box2 = boxes[1];
        const box3 = boxes[2];

        const animatedValue = setInterval(() => {
            if (box1['currentValue'] < parseInt(box1['value'])) box1['currentValue'] = box1['currentValue'] + 1;
            if (box2['currentValue'] < parseFloat(box2['value'])) box2['currentValue'] = box2['currentValue'] + 0.05;
            if (box3['currentValue'] < parseInt(box3['value'])) box3['currentValue'] = box3['currentValue'] + 5;
            this.setState({boxes: [box1, box2, box3]});
            if((box1['currentValue'] >= parseInt(box1['value'])) && (box2['currentValue'] >= parseFloat(box2['value'])) && (box3['currentValue'] >= parseInt(box3['value']))) clearInterval(animatedValue);
        }, 10);
    }

    render () {
        const items = this.state.boxes.map((el, key) => {
            return (
                <div key={key}>
                    <span>{el.currentValue.toFixed(1).toString().replace(".", ",")}</span>
                    <p>{el.title}</p>
                </div>
            )
        });

        return (
            <div>
                {items}
            </div>
        )
    }
};

export default NumberItems;