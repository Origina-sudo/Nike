

const ShoeCard = ({imgURL,changeBigShoeimage,bigShoeImg}) => {

  return (
    <div className ={`border-2 rounded-xl
        ${bigShoeImage===imgURL
            ? 'border-coral-red' : 'border-transparent'
        } cursor-pointer max-sm:flex-1

        `}
         ></div>
  )
}

export default ShoeCard