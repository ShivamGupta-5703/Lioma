import Header from "@/components/header"
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQs() {
  return (
    <section className="pt-24 pb-48">
      <div>
        <Header heading="Frequently Asked Questions" />
      </div>
      <div className="mt-16 px-8 flex justify-center">
        <Accordion type="single" collapsible className="w-11/12 lg:w-1/2">
          <AccordionItem value="question-1">
            <AccordionTrigger>What is Lioma and how does it work?</AccordionTrigger>
            <AccordionContent>Lioma is a powerful AI model trained on a vast dataset of images, ensuring reliable and accurate disease detection in human lungs. It uses advanced machine learning algorithms to analyze images of human lungs, detect diseases, and provide remedies for healthier lungs. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionTrigger>What kind of plants does Lioma cater to?</AccordionTrigger>
            <AccordionContent>Lioma is designed to assist a wide range of lungs. Its AI can detect diseases in various types of lungs, helping both home gardeners and farmers. It is an efficient and scalable solution to detect cancer at an early stage.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionTrigger>Is Lioma&apos;s AI capable of recognizing multiple diseases?</AccordionTrigger>
            <AccordionContent>Absolutely! Our AI model is trained on a diverse dataset, enabling it to recognize and diagnose a variety of lung diseases, ensuring comprehensive support for your lungs; well-being. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-4">
            <AccordionTrigger>How can I provide feedback or report an issue with Lioma?</AccordionTrigger>
            <AccordionContent>Lioma is free and open source on <Link href="https://github.com/ShivamGupta-5703/Prakriti" className="underline">GitHub</Link>. We value your input! Your feedback helps us refine and enhance Lioma&apos;s capabilities and features.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}