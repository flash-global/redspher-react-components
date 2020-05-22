import React, { useState } from "react";
import RubiwinCheckbox from "../../../components/RubiwinCheckbox";
import RubiwinFormLabel from "../../../components/RubiwinFormLabel";

/** This is a Rubiwin checkbox in a form label */
const ExampleCheckboxWithLabel = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <RubiwinFormLabel
            control={<RubiwinCheckbox />}
            onChange={handleChange}
            checked={checked}
            name={"rubiwin"}
            label={"Rubiwin"}
            labelPlacement={"top"}
        />
    );
};

export default ExampleCheckboxWithLabel;
