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
            <p>
                If you have a role or project you think I would be interested in, feel free to connect/message me on <a href="https://www.linkedin.com/in/aronhommas/">linkedin</a>.
                If you are interested in contributing or have feedback on my projects open a PR or issue on my <a href="https://github.com/alphazeba">github</a>.
            </p>
        </Boring>
        <Prompter destination={ROUTE_WORK}>
            see my work
        </Prompter>
    </>;
}