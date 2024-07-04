import Button from "../components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section className="flex justify-between 
    items-center max-lg:flex-col
     gap-10 w-full max-container" >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes

        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">Elevate Your Experience with Popoi's Footwear
          Step into a world of premium comfort
          and style with our meticulously
          crafted footwear. Enjoy unmatched
          quality, innovative design, and a
          touch of elegance in every step.

        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to
          detail and excellence
          ensures your satisfaction</p>
          <div className="mt-11">
          <Button label="View details" />
          </div>
      </div>
      <div className="felx-1 flex justify-center items-center">
        <img src={shoe8} alt="Shoe8"
        width={570}
        height={522}
        className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality