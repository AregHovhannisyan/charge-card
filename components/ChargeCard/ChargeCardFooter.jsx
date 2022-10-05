/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {
    Button,
    CardActions,
    Divider
} from "@mui/material";

/* Component for charge card footer items */
const ChargeCardFooter = () => {
    // color variables for styling
    const originalValueColor = '#87aab3';

    return (
        <>
            <Divider sx={css`
                       opacity: 0.4;
                       margin-right: 15px;
                       margin-left: 15px;`}
            />
            <CardActions sx={css`
                  display: flex;
                  justify-content: space-around;
                `}>
                <Button
                    sx={css`
                        color:${originalValueColor}`
                    }
                    startIcon={<img src={'Reconciliation.svg'}></img>}>
                    RECOCILE
                </Button>
                <Button
                    sx={css`
                        color:${originalValueColor}`}
                    startIcon={<img src={'V.svg'}></img>}
                >APPROVE</Button>
            </CardActions>
        </>
    )
}

export default ChargeCardFooter;