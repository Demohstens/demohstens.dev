import SocialLink from "./socialLinke";
import SocialLinks from "./SocialLinks";
import { Separator } from "./ui/separator";

function ContactPopup() {
  return (
    <div className="flex  h-screen items-center justify-center">
      <div
        className="bg-gray-600 p-4 w-9/10 xl:w-1/2 xl:h-1/2  rounded-lg flex flex-col items-center justify-center"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from closing the overlay
        }}
      >
        <h1 className="text-white text-4xl font-bold">Contact me!</h1>
        <p className="text-white text-lg font-semibold mt-4 text-center p-4">
          I am looking for a job alongside my studies. If you are interested in
          hiring me, please don't hesitate to reach out! I am open to any
          opportunities, including internships or part-time positions.
        </p>
        <Separator className="w-1/2" />
        <SocialLinks />
      </div>
    </div>
  );
}

export default ContactPopup;
