import { useRef, useState } from "react"
import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        { title: "Ultimate List App" },
        { name: "Manage your projects and ideas", content: "Start your journey!" },
    ]
}

export default function Index() {

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)

    const togglePlay = () => {
        videoRef.current?.paused
            ? videoRef.current.play()
            : videoRef.current?.pause()
        setIsPlaying(prevState => !prevState)
    }
    
    return (
        <div className="grid place-items-center min-h-screen h-screen w-full overflow-hidden bg-[#161616]">
            
            <div className="grid grid-cols-2 h-4/5 w-4/5 rounded-2xl bg-black">
                <div className="col-span-1 relative group">

                   <div className="grid place-items-center w-full h-full">
                        <video ref={videoRef} width='280' autoPlay loop muted>
                            <source src="/home-video.mp4" type="video/mp4" />
                            <track kind="captions" srcLang="en" label="English" />
                            Your browser does not sopport the video tag.
                        </video>
                   </div>

                   <div className="absolute top-5 left-1/2 -translate-x-1/2">
                        <button 
                            type="button" 
                            onClick={() => togglePlay()}
                            className="flex items-center justify-center h-2 w-56 py-5 px-4 rounded-xl backdrop-blur-lg text-white border-2 border-zinc-900 bg-transparent transition-all duration-500 opacity-0 group-hover:opacity-100"
                        >
                            <p className="text-lg font-semibold tracking-wider">
                                {isPlaying ? 'Pause Video' : 'Play Video'}
                            </p>
                        </button>
                   </div>

                </div>
                <div className="col-span-1 bg-green-900">
                    <form action="">

                    </form>
                </div>
            </div>

        </div>
    )
}
