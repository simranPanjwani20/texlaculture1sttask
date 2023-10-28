import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {TextField} from '@mui/material';
import {TimePicker} from "@mui/x-date-pickers";

// ----------------------------------------------------------------------

RHFTimePicker.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
    min: PropTypes.any,
    max: PropTypes.any,
};

export default function RHFTimePicker({name, helperText, min, max, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={max || ''}
            render={({field, fieldState: {error}}) => (
                <TimePicker
                    {...field}
                    defaultValue={null}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            size="small"
                            error={!!error}
                            helperText={error ? error?.message : helperText}
                        />
                    )}
                    minTime={min}
                    maxTime={max}
                    ampm
                    {...other}
                />
            )}
        />
    );
}
