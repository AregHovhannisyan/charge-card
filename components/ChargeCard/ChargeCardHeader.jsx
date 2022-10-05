/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    CardHeader,
    Avatar,
    IconButton,
    Checkbox,
    Chip
} from "@mui/material";

/* Component for charge card header items */
const ChargeCardHeader = ({chargeStatus, readableId}) => {
    // color variables for styling
    const headerBgColor = '#48ae60';

    return (
            <>
                <Chip
                    sx={css`
                        position: absolute; 
                        top: 0px; 
                        background: white; 
                        border: 1px 
                        solid;`
                    }
                    color={chargeStatus === 'approved' ? 'success': 'error'}
                    label={chargeStatus}
                    variant="outlined"/>
                <CardHeader
                    sx={css`
                       background: ${headerBgColor};
                       border-radius: 5px;
                       color: white;`
                    }
                    avatar={<Avatar
                        sx={css`
                            border-radius: 5px`
                        }
                        alt="Charge icon"
                        src="626202.svg"/>}
                    action={<IconButton aria-label="checked">
                        <Checkbox
                            sx={css`
                                color: white`
                            }
                        />
                        </IconButton>}
                    title="Id"
                    titleTypographyProps={{
                        color: 'white'
                    }}
                    subheader={readableId}
                    subheaderTypographyProps={{
                        color: 'white'
                    }}
                >
                </CardHeader>
            </>)
}

export default ChargeCardHeader;