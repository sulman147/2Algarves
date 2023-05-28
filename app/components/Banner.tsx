

function Banner(parameter :{title:string,imageURL:string } ) {
  return (
    <div className={`flex flex-col rounded-md relative h-[55vh] justify-end mb-3 bg-cover gap-4	pl-8 pr-8`} style={{ backgroundImage: `url(${parameter.imageURL})` }}>
      <div className="absolute align-middle  flex justify-center rounded-md h-[55vh] inset-0 bg-gradient-to-b from-[#fff0] to-black bg-opacity-50">
      <h1 className=" items-center flex justify-center text-white font-bold md:text-2xl lg:text-4xl">{parameter.title}</h1>
      </div>
    </div>
  )
}

export default Banner