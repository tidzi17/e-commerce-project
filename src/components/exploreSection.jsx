import image from '../assets/firstslide.webp';



export default function ExploreSection(){
    return(
        <section className="">
            <div className="w-full h-[80vh] bg-secondaryBeige flex ">
                <div className='w-1/2 h-full'>
                    <img src={image} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className='w-1/2 flex justify-center items-center px-10 h-full text-left'>
                   <div className=''>
                   <h3 className='text-5xl font-light pb-2 text-zinc-700'>We Believe in Sustainable Production</h3>
                    <p className='pb-3 text-lg text-primaryBrown tracking-wider'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem in ducimus repellat aspernatur quas sit dolore perspiciatis, vel quo laboriosam placeat error quis aperiam, officia a quibusdam excepturi! Minus, veritatis.</p>
                    <button disabled
                    className='tracking-wider border-[1px] border-black py-2 px-3 text-base'
                    >Explore More</button>
                   </div>
                </div>
            </div>

        </section>
    )
}