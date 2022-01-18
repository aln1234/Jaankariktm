import Link from "next/link"






function Hero() {
    return (
        <div className=" grid md:grid-cols-2 grid-cols-1 mt-24">
            <div className="relative bg-white shadow-lg w-[650px] h-[350px] z-50 mt-12 md:ml-[200px]">
                <h1 className="text-5xl font-body px-12 py-8 capitalize">
                    Helping you find <br/>Your way 
                </h1>
                <h1 className="px-12 font-body text-lg">I think  we get lost while doing our work. The city is so big that we have to roam around places to do tiny things. 
                <br/> Let's Change This
                </h1>
                <Link
                href="/blog">
                <div className=" cursor-pointer hover:bg-[#EFE9DB] hover:text-black shadow-lg w-[150px] text-center pt-3 ml-12 mt-6 text-white font-body uppercase h-12 bg-[#354449]"> 
                    Yes, I Need This
                </div></Link>
               
               
            </div>
            <div className="absolute  bg-red-400  h-[400px] md: ml-[800px] md:w-[600px] md:h-[450px]">
           <img src="/images/banner1.png" className="w-full h-full"/>
            </div>
        </div>
    )
}

export default Hero
