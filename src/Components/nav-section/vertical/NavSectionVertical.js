import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

import {List, Stack} from '@mui/material';
// locales
import {useLocales} from '../../../locales';
//
import {StyledSubheader} from './styles';
import NavList from './NavList';

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
    sx: PropTypes.object,
    data: PropTypes.array,
};

export default function NavSectionVertical({data, sx, ...other}) {
    const {translate} = useLocales();

    // const companyRoles = useSelector(state => state.companiesReducer.companyRoles);

    const companyAccess = useSelector(state => state.companiesReducer.companyAccess);

    return (
        <Stack sx={sx} {...other}>
            {data.map((group) => {
                const key = group.subheader || group.items[0].title;
                let showSubheader = false;
                group.items.forEach((item) => {
                    /* if(!showSubheader && (item.roles == null || item.roles?.filter(role => companyRoles.includes(role)).length > 0) || item.roles?.length === 0) {
                      showSubheader = true;
                    } */
                    if (!showSubheader && (item.roles == null || item.roles?.filter(role => companyAccess?.mods?.filter(mod => mod?.id === role).length > 0).length > 0 || item.roles?.length === 0)) {
                        showSubheader = true;
                    }
                })

                return (
                    <List key={key} disablePadding sx={{px: 2}}>
                        {group.subheader && showSubheader && (
                            <StyledSubheader disableSticky>{`${translate(group.subheader)}`}</StyledSubheader>
                        )}

                        {group.items.map((list) => (
                            <NavList
                                key={list.title + list.path}
                                data={list}
                                depth={1}
                                hasChild={!!list.children}
                            />
                        ))}
                    </List>
                );
            })}
        </Stack>
    );
}
