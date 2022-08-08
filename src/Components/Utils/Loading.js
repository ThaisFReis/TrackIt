import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
    return (
        <ThreeDots
            type="Puff"
            width="50px"
            height="30px"
            margin="auto"
            color="#F4DDC8"
        />
    );
}