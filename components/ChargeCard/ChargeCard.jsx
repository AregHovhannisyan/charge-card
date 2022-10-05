/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {
    Card
} from "@mui/material";

import ChargeCardHeader from './ChargeCardHeader';
import ChargeCardBody from "./ChargeCardBody";
import ChargeCardFooter from "./ChargeCardFooter";

// Uncomment import to  use makeStyle hook
// import useStyles from './style/chargeCardStyle';

/* Charge Card main component */
const ChargeCard = ({ charge }) => {
    // this method can be uncommented to use makeStyle hook approach.
    // This is commented as the requirement was to create styles using emotion
    // const classes = useStyles();
    return (
        <div css={css`
            padding-top: 15px; 
            position: relative`}
        >
            <Card sx={css`
                    max-width: 350px; 
                    top: 0px`}
            >
                <ChargeCardHeader chargeStatus={charge.status} readableId={charge.readable_id}/>
                <ChargeCardBody
                    chargeEventTitle={charge.event.title}
                    buyerReference={charge.extended.buyer.reference}
                    sellerReference={charge.extended.seller.reference}
                    chargeValue={charge.value}
                    chargeOriginalValue={charge.extended.original_value}
                />
                <ChargeCardFooter />
            </Card>
        </div>)
}

export default ChargeCard;