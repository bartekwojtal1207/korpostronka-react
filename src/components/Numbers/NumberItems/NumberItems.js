import React from "react";

const NumberItems = () => {
    const numbersValue = [
        {
            value: '147',
            title: 'instutycji finansowych'
        }, {
            value: '6,5',
            title: 'mln realnych użytkowników portalu'
        }, {
            value: '968',
            title: 'produktów finansowych'
        }
    ];


    const setValue = (startValue, maxValue) => {
        let value = startValue < parseInt(maxValue) ? startValue + 1 : maxValue;
        return value;
    };

    const items = numbersValue.map((el, key) => {
        return (
            <div key={key}>

                <span>
                    {setValue(0, 1000000)}
                </span>

                <p>{el.title}</p>
            </div>
        )
    });

    return (
        <div>
            {items}
        </div>
    )
};

export default NumberItems;