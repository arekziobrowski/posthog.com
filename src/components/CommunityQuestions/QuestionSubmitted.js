import { Check } from 'components/Icons/Icons'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { serialize } from 'remark-slate'
import EmailSubmitted from './EmailSubmitted'
import SubmitEmail from './SubmitEmail'

export default function QuestionSubmitted({ values, emailSubmitted, isValid, loading }) {
    const question = values.question.map((n) => serialize(n)).join('\n')
    return (
        <div>
            <ReactMarkdown>{question}</ReactMarkdown>
            <p className="text-[14px] font-semibold opacity-50">by {values.name}</p>
            <p className="flex items-center space-x-1 font-semibold text-[#43AF79]">
                <span className=" w-[24px] h-[24px] bg-[#43AF79] rounded-full flex justify-center items-center">
                    <Check className="w-[12px] h-[12px] text-white" />
                </span>
                <span>Question sent. Answer will be posted here.</span>
            </p>
            <div className="p-6 bg-white dark:bg-gray-accent-dark rounded-[10px]">
                {emailSubmitted ? (
                    <EmailSubmitted email={values.email} />
                ) : (
                    <SubmitEmail loading={loading} isValid={isValid} />
                )}
            </div>
        </div>
    )
}
