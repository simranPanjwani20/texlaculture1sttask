import React from 'react';
import PropTypes from 'prop-types';

import {Box, Card, Stack, Typography} from "@mui/material";
import Iconify from '../iconify';


TicketCard.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    fontColor: PropTypes.string,
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    Icon: PropTypes.element,
    Visual: PropTypes.element,
    isSelected: PropTypes.bool,
    handleClick: PropTypes.func,
};
export default function TicketCard({
                                       size,
                                       label,
                                       value,
                                       fontColor,
                                       bgColor,
                                       icon,
                                       Icon,
                                       Visual,
                                       isSelected,
                                       handleClick
                                   }) {
    const cardSize = size === 'small' ? 'small' : 'medium';

    if (cardSize === 'small') {
        return (
            <Card onClick={handleClick}
                  elevation={2}
                  sx={{
                      border: isSelected ? '5px solid' : 'none',
                      borderColor: bgColor || 'grey.300',
                      boxShadow: isSelected && '-1px 8px 13px -7px rgba(110,110,110,0.5)',
                      cursor: 'pointer',
                      height: "100%",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 2,
                      py: 1,
                  }}
            >
                <Box sx={{flexGrow: 1}}>
                    <Typography variant="subtitle2"
                                sx={{fontSize: '10px', color: 'text.secondary'}}>{label}</Typography>
                    {value && <Typography variant="h5" sx={{color: fontColor || 'text.secondary'}}>{value}</Typography>}
                </Box>

                {icon &&
                    <Stack direction="row" pt={0.5} justifyContent="center" alignItems="center" width="45px"
                           height="45px"
                           sx={{backgroundColor: bgColor || 'grey.300', borderRadius: 1}}>
                        <Iconify width="80%" icon={icon} sx={{color: fontColor || 'grey.500'}}/>
                    </Stack>
                }
                {Icon &&
                    <Stack direction="row" justifyContent="center" alignItems="center" width="35px" height="35px"
                           pt={0.5} sx={{backgroundColor: bgColor || 'grey.300', borderRadius: 1}}>
                        {Icon}
                    </Stack>
                }
                {Visual &&
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        {Visual}
                    </Stack>
                }
            </Card>
        )
    }

    return (
        <Card onClick={handleClick}
              elevation={2}
              sx={{
                  border: isSelected ? '5px solid' : 'none',
                  borderColor: bgColor || 'grey.300',
                  boxShadow: isSelected && '-1px 8px 13px -7px rgba(110,110,110,0.5)',
                  cursor: 'pointer',
                  height: "100%",
                  display: 'flex',
                  alignItems: 'center',
                  p: 1.5,
                  pb: 1
              }}
        >
            <Box sx={{flexGrow: 1}}>
                <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>{label}</Typography>
                {value && <Typography variant="h3" sx={{color: fontColor || 'text.secondary'}}>{value}</Typography>}
            </Box>

            {icon &&
                <Stack direction="row" justifyContent="center" alignItems="center" width="48px" height="48px"
                       sx={{backgroundColor: bgColor || 'grey.300', borderRadius: 1}}>
                    <Iconify width="26px" icon={icon} sx={{color: fontColor || 'grey.500'}}/>
                </Stack>
            }
            {Icon &&
                <Stack direction="row" justifyContent="center" alignItems="center" width="48px" height="48px" pt={0.5}
                       sx={{backgroundColor: bgColor || 'grey.300', borderRadius: 1}}>
                    <Icon sx={{width: '26px', color: fontColor || 'grey.500'}}/>
                </Stack>
            }
            {Visual &&
                <Stack direction="row" justifyContent="center" alignItems="center">
                    {Visual}
                </Stack>
            }
        </Card>
    )
}
