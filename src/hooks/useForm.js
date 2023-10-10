import { useState } from "react"
import { validate } from "../utils/validate";

/**
 * This hook use to validate form
 * @param {object} rules
 * @return values, error, register, validate
 */
export const useForm = (rules) => {
    const [valuesForm, setValuesForm] = useState({});
    const [errors, setError] = useState({});

    const register = (name) => {
        return {
            value: valuesForm[name] || '',
            onChange: (ev) => {
                setValuesForm({ ...valuesForm, [name]: ev.target.value })
                // setError(validate(rules,{ ...valuesForm, [name]: ev.target.value }))
                setError(
                    validate(
                        {
                            [name]: rules[name]
                        },
                        {
                            [name]: ev.target.value
                        }
                    )
                )
            },
            error: errors[name]
        }
    }

    const setValueSelectInForm = (name, valueOfSelect) => {
        setValuesForm({ ...valuesForm, [name]: valueOfSelect })
    }

    const _validate = () => {
        const errObject = validate(rules, valuesForm)
        setError(errObject)
        return Object.keys(errObject).length === 0
    }

    const resetValue = () => {
        setValuesForm({})
    }

    return { values: valuesForm, errors, register, validate: _validate, resetValue, setValuesForm, setValueSelectInForm }
}