import { PropsWithChildren } from "react";
type Props = {}
export default function Boring(props: PropsWithChildren<Props>) {
    return <>
        <div className="boringContainer">
            <div className="boring">
                {props.children}
            </div>
        </div>
    </>
}