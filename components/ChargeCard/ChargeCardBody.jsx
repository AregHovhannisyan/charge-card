/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

/* Component for charge card body items */
const ChargeCardBody = ({chargeEventTitle, buyerReference, sellerReference, chargeValue, chargeOriginalValue }) => {
    // colors variables for styling
    const orderValueBgColor = '#f6f9fa';
    const subHeadingBgColor = '#c9cbcc';
    const infoSubHeadingColor = '#b7babb';
    const originalValueColor = '#87aab3';
    const fairValueColor = '#243539';
    const referenceColor = '#515a5d';

    return (
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div css={css`
                        background: ${orderValueBgColor};
                        height: 80px;
                        display: flex;
                        justify-content: space-between;
                        padding: 20px;
                        border-radius: 5px;`
                    }>
                        <div>
                            <Typography
                                sx={css`
                                    color: ${originalValueColor};
                                    font-weight: bold;`
                                }
                                variant="body1">
                                {chargeOriginalValue.toFixed(2)}
                            </Typography>
                            <Typography
                                sx={css`
                                    color: ${subHeadingBgColor}`
                                }
                                variant="subtitle2">
                                Original Value
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                sx={css`
                                    color: ${fairValueColor};
                                    font-weight: bold;`
                                }
                                variant="body1">
                                {chargeValue.toFixed(2)}
                            </Typography>
                            <Typography
                                sx={css`color: ${subHeadingBgColor}`}
                                variant="subtitle2">
                                Fair Value
                            </Typography>
                        </div>
                        <div>
                            <img src="626206.svg" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        sx={
                            css`color: ${infoSubHeadingColor}`
                        }
                        variant="body2">
                        Seller Reference
                    </Typography>
                    <Typography
                        sx={css`color: ${referenceColor}`}
                        variant="h6">
                        {sellerReference}
                    </Typography>

                </Grid>
                <Grid item xs={6}>
                    <Typography
                        sx={
                            css`color: ${infoSubHeadingColor}`
                        }
                        variant="body2">
                        Seller Reference
                    </Typography>
                    <Typography
                        sx={css`color: ${referenceColor}`}
                        variant="h6">
                        {buyerReference}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={css`
                            color: ${infoSubHeadingColor}`
                        }
                        variant="body2">
                        Event
                    </Typography>
                    <Typography
                        sx={css`
                            color: ${originalValueColor};
                            font-style: italic !important;`
                        }
                        variant="subtitle1">
                        {chargeEventTitle}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default ChargeCardBody;