import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {FormControl, FormControlLabel, FormHelperText, FormLabel} from '@mui/material';
import Button from '@mui/material/Button';

RHFOutlinedButton.propTypes = {
    row: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    spacing: PropTypes.number,
    helperText: PropTypes.node,
};

export default function RHFOutlinedButton({
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

                    {options.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={
                                <OutlinedButton
                                    onClick={() => field.onChange(option.value)}
                                    disabled={field.value !== option.value}
                                    {...other}
                                >
                                    {option.label}
                                </OutlinedButton>
                            }
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

OutlinedButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

function OutlinedButton({children, onClick, disabled}) {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            disabled={disabled}
            sx={{
                ...(disabled && {
                    borderColor: 'grey.400', // Customize the border color when the button is disabled
                }),
            }}
        >
            {children}
        </Button>
    );
}
