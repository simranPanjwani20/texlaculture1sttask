import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {TextField} from '@mui/material';

RHFDatePicker.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
    InputProps: PropTypes.object,
    min: PropTypes.any,
    max: PropTypes.any,
    size: PropTypes.string,
};

export default function RHFDatePicker({name, helperText, InputProps, min, max, size, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={max || ''}
            render={({field, fieldState: {error}}) => (
                <DatePicker
                    {...field}
                    renderInput={(params) => (
                        <TextField
                            size={size || 'small'}
                            fullWidth
                            error={!!error}
                            helperText={error ? error.message : helperText}
                            {...params}
                            {...other}
                        />
                    )}
                    minDate={min}
                    maxDate={max}
                    {...other}
                />
            )}
        />
    );
}
