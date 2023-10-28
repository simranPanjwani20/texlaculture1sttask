import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup,} from '@mui/material';

// ----------------------------------------------------------------------

RHFRadioGroup.propTypes = {
    row: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    spacing: PropTypes.number,
    helperText: PropTypes.node,
};

export default function RHFRadioGroup({
                                          row,
                                          name,
                                          label,
                                          options,
                                          spacing,
                                          helperText,
                                          ...other
                                      }) {
    const {control} = useFormContext();

    const labelledby = label ? `${name}-${label}` : '';

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <FormControl component="fieldset">
                    {label && (
                        <FormLabel component="legend" id={labelledby} sx={{typography: 'body2'}}>
                            {label}
                        </FormLabel>
                    )}

                    <RadioGroup {...field} aria-labelledby={labelledby} row={row} {...other}>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio size="small"/>}
                                label={option.label}
                                sx={{
                                    '&:not(:last-of-type)': {
                                        mb: spacing || 0,
                                    },
                                    ...(row && {
                                        mr: 0,
                                        '&:not(:last-of-type)': {
                                            mr: spacing || 2,
                                        },

                                    }),
                                }}
                            />
                        ))}
                    </RadioGroup>

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error} sx={{mx: 0}}>
                            {error ? error?.message : helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
}
