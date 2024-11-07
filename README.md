# Real-Time-Object-Detection
Web-based real-time object detection for YOLO model.

This project is a web-based application that utilizes real-time object detection to identify and label objects within an image or video stream. It is built using Next.js, ONNXRuntime, YOLOv7, and YOLOv10 model.

## Demo at <a href="https://shanmukhrtod.vercel.app/" target="_blank">RTOD</a>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

In order to run this project, you will need to have the following software installed on your machine:

- Node.js
- A web browser

### Installation

1. Clone the repository to your local machine:

```
https://github.com/shanmukhisaway/Real-Time-Object-Detection.git
```

2. Navigate to the project directory:

```
cd real-time-object-detection
```

3. Also, install the yolo models from the internet.
   
4. Install the necessary dependencies by running:

```
npm install
# or
yarn install
```

5. Start the development server by running:

```
npm run dev
# or
yarn dev
```

6. Open your web browser and navigate to http://localhost:3000 to view the application.

### Adding Custom Models

1. Add your custom model to the `/models` directory.
2. Update the `RES_TO_MODEL` constant in `components/models/Yolo.tsx` to include your model's resolution and path.
3. Modify the `preprocess` and `postprocess` functions in `components/models/Yolo.tsx` to match the input and output requirements of your model.

### Installation as PWA

This app can also be installed on your device (desktop or mobile) as a progressive web app (PWA). Here's how:

1. Visit the app's URL in a web browser that supports PWAs (such as Google Chrome or Firefox).
2. Look for the "Install" or "Add to Homescreen" button in the browser's interface.
3. Click the button and follow the prompts to install the app.
4. The app will now be installed on your device and can be launched from the homescreen like any other app.

### Deployment

This project can be deployed to a web server for public access. For more information on deploying a Next.js application, please visit the official [documentation](https://nextjs.org/docs/deployment/)

## Contributing

If you want to contribute to this project, please feel free to submit a pull request. Any contributions, big or small, are greatly appreciated!

## License

This project is licensed under the MIT license - see the [LICENSE](LICENSE.md) file for details.


## Citation for YOLOv10

```

@article{THU-MIGyolov10,
title={YOLOv10: Real-Time End-to-End Object Detection},
author={Ao Wang, Hui Chen, Lihao Liu, et al.},
journal={arXiv preprint arXiv:2405.14458},
year={2024},
institution={Tsinghua University},
license = {AGPL-3.0}
}

```

## Citation for YOLOv7

```

@article{wang2022yolov7,
title={{YOLOv7}: Trainable bag-of-freebies sets new state-of-the-art for real-time object detectors},
author={Wang, Chien-Yao and Bochkovskiy, Alexey and Liao, Hong-Yuan Mark},
journal={arXiv preprint arXiv:2207.02696},
year={2022}
}

```
