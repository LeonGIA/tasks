import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Independence Day"
    | "New Year"
    | "Thanksgiving"
    | "Memorial Day";

const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    "Independence Day": "🗽",
    "New Year": "🎇",
    Thanksgiving: "🦃",
    "Memorial Day": "🦅"
};

const holidayAlphabet: Record<Holiday, Holiday> = {
    Christmas: "Independence Day",
    "Independence Day": "Memorial Day",
    "Memorial Day": "New Year",
    "New Year": "Thanksgiving",
    Thanksgiving: "Christmas"
};

const holidayYear: Record<Holiday, Holiday> = {
    "New Year": "Memorial Day",
    "Memorial Day": "Independence Day",
    "Independence Day": "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New Year"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Year");

    function changeHolidayAlphabet(): void {
        const nextHoliday = holidayAlphabet[holiday];
        setHoliday(nextHoliday);
    }

    function changeHolidayYear(): void {
        const nextHoliday = holidayYear[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <span>Holiday: {holidayEmojis[holiday]}</span>
            <Button onClick={changeHolidayAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeHolidayYear}>Advance by Year</Button>
        </div>
    );
}
