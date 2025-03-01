import Boring from "../bits/boring";
import { ROUTE_WORK } from "../bits/header";
import Prompter from "../bits/prompter";

export default function About() {
    return <>
        <h1>About</h1>
        <Boring>
            <p>
                Software engineer from pacific northwest.
                Interested in space, networks, abstract strategy games, trees, cats, & teaching.
            </p>
        </Boring>
        <Prompter destination={ROUTE_WORK}>
            see my work
        </Prompter>
    </>;
}