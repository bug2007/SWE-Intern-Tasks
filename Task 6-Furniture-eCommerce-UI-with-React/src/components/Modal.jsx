import { useImperativeHandle, useRef } from "react";

export default function Modal({children, ref}) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return (
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>Okay</button>
            </form>
        </dialog>
    )
} 