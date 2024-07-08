import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="offer"  width={773} height={687} className="
        object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
         
          <span className="text-coral-red"> Special </span> Offer 

        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">Dive into a shopping odyssey that will revolutionize your experience with unbeatable deals. Discover a curated selection of top-tier products paired with mind-blowing savings. Our exceptional value and unique offerings ensure an extraordinary journey that sets us apart from the rest.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Step into a shopping adventure like no other, where unmatched deals and curated treasures collide. Experience unbeatable value and extraordinary savings that make us truly unique.
          ensures your satisfaction</p>
          <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer