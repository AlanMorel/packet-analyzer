"use client";

import useModalState from "@/src/atoms/ModalAtom";
import { tw } from "@/src/utils/ClassNamesHelper";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { ReactElement } from "react";

export default function Modal(): ReactElement {
    const { modal, setOpenState } = useModalState();

    return (
        <Root open={modal.open} onOpenChange={setOpenState}>
            <Portal>
                <Overlay className="fixed inset-0 z-20 bg-black/25 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
                <Content
                    className={tw(
                        "fixed left-[50%] top-[50%] z-50 box-content w-[95vw] max-w-lg -translate-x-[50%] -translate-y-[50%] rounded-xl bg-white px-8 py-6 shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 data-[state=closed]:animate-leave-centered data-[state=open]:animate-enter-centered md:w-full"
                    )}
                >
                    <div>{modal.content}</div>
                    <Close
                        className={tw(
                            "group absolute right-6 top-5 inline-flex h-8 w-8 items-center justify-center rounded-md p-1 font-bold text-slate-400 hover:bg-slate-200 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                        )}
                    >
                        <XMarkIcon className="h-5 w-5 text-slate-400 group-hover:text-black" />
                        <span className="sr-only">Close</span>
                    </Close>
                </Content>
            </Portal>
        </Root>
    );
}
