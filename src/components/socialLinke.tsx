export default function SocialLink(props: {image: string, alt: string, link: string}) {
    const { image, alt, link } = props;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-md bg-gray-600 hover:bg-gray-700 transition duration-200 ease-in-out">
            <img src={image} alt={alt} className="w-10 h-10" />
        </a>
    )
}