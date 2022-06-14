import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from '../../IMG/bug.svg'
import ideaImageUrl from '../../IMG/idea.svg'
import thoughtImageUrl from '../../IMG/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return( 
        <div className="bg-zinc-900 text-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 

            <header>
                <span className="text-xl leading-6">
                    Deixe seu feedback
                </span>

                <CloseButton />
            </header>

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                null
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline">Danilo</a>
            </footer>
        </div>
    )
}