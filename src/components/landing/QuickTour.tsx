import Image from "next/image"
import ImageTour from '@/assets/images/tour.png';

export const QuickTour = () => {

    return (
        <section className="bg-[#e4f0d3]">
            <div className="max-w-4xl mx-auto text-center py-10">
                <h3 className="text-[#03363e] text-4xl font-bold mb-5">
                    Take a quick tour
                </h3>
                <p className="text-[#03363e] text-sm max-w-2xl mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis impedit eum consequatur dolor sequi voluptas ullam ducimus error inventore.
                </p>
                <Image className="mx-auto my-16 " src={ImageTour} alt="Tour" width={500} height={500} />
            </div>

        </section>
    )

}