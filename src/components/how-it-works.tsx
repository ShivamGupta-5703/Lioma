import Image from "next/image"
import ClickPhoto from "@/assets/click-photo.jpg"
import Processing from "@/assets/processing.jpg"
import Results from "@/assets/infected-lungs.jpg"
import Header from "@/components/header"

export default function HowItWorks() {
  return (
    <section className="container pt-24 px-8">
      <div>
        <Header heading={<>How <span style={{color: 'darkblue'}}>Lioma</span> Works?</>} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full mt-16">
        <div>
          <div className="h-72 relative">
            <Image
              src={ClickPhoto}
              alt="A person clicking photo of plant"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Start by uploading MRI Scan of lungs that might be
              showing signs of disease. Ensure that the image is sharp and
              well-lit. Easily upload the image to the Lioma platform using
              our user-friendly interface.
            </p>
          </div>
        </div>
        <div>
          <div className="h-72 relative">
            <Image
              src={Processing}
              alt="Computer Processing the instruction"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Lioma&apos;s advanced AI technology kicks into action. The
              uploaded image is processed by a sophisticated machine learning
              model to analyze the visual characteristics of the lungs in the
              image, comparing them to an extensive database.
            </p>
          </div>
        </div>
        <div>
          <div className="h-72 relative">
            <Image
              src={Results}
              alt="Happy and Green Plants"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Lioma provides you with comprehensive insights. It not only
              identifies the cancer affecting your lungs but also
              offers a detailed description of the lungs, the disease itself,
              and recommends effective measures to ensure faster recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
