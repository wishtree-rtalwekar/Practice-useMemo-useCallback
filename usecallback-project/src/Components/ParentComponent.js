import React, { useCallback, useState } from 'react'
import TitleComponent from './TitleComponent';
import CountComponent from './CountComponent';
import ButtonComponent from './ButtonComponent';

const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);
    const incrementAge = useCallback(() => { setAge(age + 1) }, [age]);
    const incrementSalary = useCallback(() => { setSalary(salary + 1000) }, [salary]);


    return (
        <div>
            <TitleComponent />
            <CountComponent text="age" count={age} />
            <ButtonComponent handleClick={incrementAge}>Increment Age</ButtonComponent>
            <CountComponent text="salary" count={salary} />
            <ButtonComponent handleClick={incrementSalary}>Increment Salary</ButtonComponent>
        </div>
    )
}

export default ParentComponent