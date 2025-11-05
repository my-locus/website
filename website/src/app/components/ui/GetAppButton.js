import React from 'react'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

export default function GetAppButton() {
    const { isIOS, isAndroid } = useDeviceDetection();

    const openInStore = () => {
        if (isAndroid) {
            // Open Android beta form since app isn't released yet
            window.open("https://docs.google.com/forms/d/e/1FAIpQLScaCrWWdVTitHf3WAhuqA2z0QJ57ukPe2wYzjLRlmXBeOzflA/viewform");
        }
        else {
            window.open("https://apps.apple.com/us/app/locus-your-ai-wingman/id6752917187");
        }
    }

    return (
        <div onClick={() => openInStore()} className='bg-locus-primary cursor-pointer rounded-3xl w-28 p-2 flex justify-center items-center'><p className='comic-relief text-sm text-white'>Get The App</p></div>
    )
}
