import PropTypes from 'prop-types';

import {alpha, useTheme} from '@mui/material/styles';
import {Box, Card, Stack, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
//
import Label from '../../label/Label';
import {CustomAvatar} from '../../custom-avatar';

// ----------------------------------------------------------------------

GroupNode.propTypes = {
    sx: PropTypes.object,
    node: PropTypes.object,
    depth: PropTypes.number,
    length: PropTypes.number,
};

export default function GroupNode({node, depth, length, sx}) {
    const theme = useTheme();

    const isLight = theme.palette.mode === 'light';

    const styles = (color) => ({
        bgcolor: alpha(theme.palette[color].main, 0.08),
        border: `solid 1px ${alpha(theme.palette[color].main, 0.24)}`,
        color: isLight ? theme.palette[color].darker : theme.palette[color].lighter,
    });

    const isLabel = depth === 1;

    const isGrRoot = node.group === 'root';

    const isGrProduct = node.group === 'product design';

    const isGrDevelopment = node.group === 'development';

    const isGrMarketing = node.group === 'marketing';

    return (
        <Stack sx={{position: 'relative', display: 'inline-flex'}} alignItems="center">
            {!isLabel && (
                <CustomAvatar
                    name={node.name}
                    src={node.avatarUrl}
                    sx={{
                        mt: -3.5,
                        zIndex: 9,
                        width: 56,
                        height: 56,
                        position: 'absolute',
                        border: `solid 4px ${theme.palette.background.paper}`,
                    }}
                />
            )}

            {!isLabel && length > 0 && (
                <Card
                    sx={{
                        position: 'absolute',
                        zIndex: 9,
                        top: '80%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 1,
                        p: 1,
                        backgroundColor: '#F4F6F8',
                        color: 'text.secondary'
                    }}
                >
                    <PersonIcon fontSize='12px'/>
                    <Typography variant="subtitle1" fontSize='9px'>{length}</Typography>
                </Card>
            )}

            <Card
                sx={{
                    pt: 5,
                    pb: 3,
                    minWidth: 200,
                    borderRadius: 1.5,
                    textTransform: 'capitalize',
                    ...(isLabel && {py: 2}),
                    ...(isLabel && isGrProduct && styles('primary')),
                    ...(isLabel && isGrDevelopment && styles('info')),
                    ...(isLabel && isGrMarketing && styles('warning')),
                    ...sx,
                }}
            >
                {depth !== 1 && !isGrRoot && (
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            width: 1,
                            height: 4,
                            position: 'absolute',
                            borderRadius: 1.5,
                            ...(isGrProduct && {
                                bgcolor: 'primary.light',
                            }),
                            ...(isGrDevelopment && {
                                bgcolor: 'info.light',
                            }),
                            ...(isGrMarketing && {
                                bgcolor: 'warning.light',
                            }),
                        }}
                    />
                )}

                <Typography variant={isLabel ? 'subtitle1' : 'subtitle2'} noWrap>
                    {node.name}
                    {isLabel && (
                        <Label
                            color={(isGrDevelopment && 'info') || (isGrMarketing && 'warning') || 'primary'}
                            sx={{ml: 1}}
                        >
                            {length}
                        </Label>
                    )}
                </Typography>

                {!isLabel && (
                    <Typography variant="caption" component="div" noWrap sx={{color: 'text.secondary'}}>
                        {node.role}
                    </Typography>
                )}
            </Card>
        </Stack>
    );
}
