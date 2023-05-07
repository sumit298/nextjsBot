import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./UI/accordion";
import React from "react";
import ChatBotHeader from "./ChatbotHeader";
import ChatBotInput from "./ChatbotInput";

// interface ChatBotProps {

// }

const ChatBot: React.FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              <ChatBotHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                messages
                <ChatBotInput className="px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ChatBot;
