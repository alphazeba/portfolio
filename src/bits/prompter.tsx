import { Link } from 'react-router';
import { PropsWithChildren } from "react";

type Props = {
    destination: string,
}

export default function Prompter(props: PropsWithChildren<Props>) {
    const resetScroll = () => {
        window.scrollTo(0, 0);
    }

    return <>
        <div className="prompterSpacer">
            . . .
        </div>
        <div className="prompter">
            <Link to={props.destination} onClick={resetScroll}>
                {props.children}
            </Link>
        </div>
    </>
}