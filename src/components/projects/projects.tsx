import Header from "../header";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";

function Projects() {
  return (
    <div className="absolute w-full  flex justify-center lg:h-screen  border-2 bg-gray-900 border-gray-900 text-white p-4 m-2 gap-8 rounded-2xl">
      <div className="grid lg:grid-cols-3 h-fit gap-4">
        <Card className="bg-gray-800 p-4 w-full max-w-md shadow-lg shadow-gray-600 hover:scale-101 transition-transform duration-300 ease-in-out">
          <CardTitle className="text-2xl font-bold text-center text-white mb-4">
            Sketchspace
          </CardTitle>
          <CardContent className="text-gray-400 text-center mb-2 ">
            <div className="flex justify-around">
              <img
                src="https://github.com/Demohstens/Sketchspace/blob/main/screenshots/flower.png?raw=true"
                className="max-w-50 w-fit h-50 object-contain"
                alt="Sketchspace Screenshot"
              />
              <img
                src="https://github.com/Demohstens/Sketchspace/blob/main/screenshots/sketchspace%20Portrait.jpg?raw=true"
                className="max-w-50 w-fit h-50 object-contain"
                alt="Sketchspace Screenshot"
              />
            </div>

            <CardDescription className="text-white text-md text-center p-4">
              A Drawing app written in flutter that utilizes layering canvases
              to avoid redrawing all strokes. Heavy use of layers and in-memory
              "caching" to save on resources.
            </CardDescription>
            <CardAction className="text-gray-400 text-center mb-4 w-full">
              <Button
                onClick={() =>
                  window.open(
                    "https://github.com/Demohstens/Sketchspace/",
                    "_blank"
                  )
                }
                className="text-black text-xl bg-gray-200 hover:bg-blue-100 w-full"
              >
                Visit the repo
              </Button>
            </CardAction>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 p-4 w-full max-w-md shadow-lg shadow-gray-600 hover:scale-101 transition-transform duration-300 ease-in-out">
          <CardTitle className="text-2xl font-bold text-center text-white mb-4">
            Peroxide
          </CardTitle>
          <CardDescription className="text-white text-md text-center mb-4">
            An ambitious rust framework for writing GUI on native platforms.
            Very much a work in progress.
          </CardDescription>
          <CardAction className="w-full text-center mb-4">
            <Button
              onClick={() =>
                window.open("https://github.com/Demohstens/peroxide", "_blank")
              }
              className="text-black text-xl bg-gray-200 hover:bg-blue-100 w-full"
            >
              {" "}
              Visit the repo
            </Button>
          </CardAction>
        </Card>
        <Card className="bg-gray-800 p-4 w-full max-w-md shadow-lg shadow-gray-600 hover:scale-101 transition-transform duration-300 ease-in-out">
          <CardTitle className="text-2xl font-bold text-center text-white mb-4">
            Corrected Bow Animation
          </CardTitle>
          <img
            src="https://moddbcdn.vintagestory.at/2025-03-07_20-20-43_6bd8670828b653841dd963632cd5692e.jpg"
            className="w-full h-50 object-cover"
            alt="Sketchspace Screenshot"
          />
          <CardDescription className="text-white text-md text-center mb-4">
            A Vintage story mod that uses CIL patching to correct the rendering
            of bows. It also includes a custom animation for the bow.
          </CardDescription>

          <CardAction className="w-full text-center mb-4">
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/Demohstens/vs-CorrectedBowAnimation",
                  "_blank"
                )
              }
              className="text-black text-xl bg-gray-200 hover:bg-blue-100 w-full"
            >
              {" "}
              Visit the repo
            </Button>
          </CardAction>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
