import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

RHFMobileDatePicker.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
    InputProps: PropTypes.object,
    min: PropTypes.any,
    max: PropTypes.any,
    onChange: PropTypes.func
};

export default function RHFMobileDatePicker({name, helperText, InputProps, min, max, ...other}) {
    const {control, setValue} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <DatePicker
                    {...field}
                    // views={['month', 'date', 'year']}
                    inputFormat="dd/MM/yyyy"
                    disableToolbar
                    minDate={min}
                    maxDate={max}
                    defaultValue={max || ''}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            error={!!error}
                            helperText={error ? error.message : helperText}
                            size="small"
                            InputProps={{
                                ...params.InputProps,
                                // startAdornment: null, // Remove the calendar icon
                                // endAdornment: null,
                            }}
                        />
                    )}
                    {...other}
                />
            )}
        />
    );
}
