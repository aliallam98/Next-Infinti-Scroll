import Image from "next/image";
import {MotionDiv} from './MotionDev'

export interface IAnimeCardProps {
  id: number
  name: string
  russian?: string
  image?: image;
  url?: string
  kind?: string
  score?: string
  status?: string
  episodes?: number
  episodes_aired?: number
  aired_on?: Date
  released_on?: Date
}
interface image {
  original: string
  preview: string
  x96: string
  x48: string
}

export interface Prop {
  anime: IAnimeCardProps;
  index: number;
}

const variants = {
  hidden :{opacity : 0},
  visible :{opacity : 1}
}

function AnimeCard({ anime , index }: Prop) {
  return (
    <MotionDiv
    variants = {variants}
    initial = "hidden"
    animate = "visible"
    transition={{
      delay:index * 0.25,
      duration:0.5,
      ease:"easeInOut"
    }}
    viewport={{ amount: 0 }}
    className=" w-fit mx-auto rounded relative">
      <div className="relative w-full ">
        <Image
          src={`https://shikimori.one${anime.image?.original}`}
          alt={anime.name}
          width={300}
          height={380}
          className="rounded-xl h-[380px]"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
