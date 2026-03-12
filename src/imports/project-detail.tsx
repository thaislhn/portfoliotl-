siathais@macbook-air-de-thais portfolionew % npm run dev

> @figma/my-make-file@0.0.1 dev
> vite

sh: vite: command not found
siathais@macbook-air-de-thais portfolionew % npm install
npm warn deprecated three-mesh-bvh@0.7.8: Deprecated due to three.js version incompatibility. Please use v0.8.0, instead.

added 356 packages, and audited 357 packages in 29s

39 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
siathais@macbook-air-de-thais portfolionew % npm run dev

> @figma/my-make-file@0.0.1 dev
> vite


  VITE v6.3.5  ready in 970 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Error: The following dependencies are imported but could not be resolved:

  figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png (imported by /Users/siathais/Downloads/portfolionew/src/app/pages/ProjectDetail.tsx)
  figma:asset/600e11c8559e2b501df681b9fe3ac7c50098c42c.png (imported by /Users/siathais/Downloads/portfolionew/src/app/pages/ProjectDetail.tsx)

Are they installed?
    at file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:14849:15
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46985:28
3:03:58 PM [vite] (client) Pre-transform error: Failed to resolve import "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png" from "src/app/pages/ProjectDetail.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /Users/siathais/Downloads/portfolionew/src/app/pages/ProjectDetail.tsx:7:26
  20 |  import { useEffect } from "react";
  21 |  import { CustomCursor } from "../components/CustomCursor";
  22 |  import imgMoodboard1 from "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png";
     |                             ^
  23 |  import imgMoodboard2 from "figma:asset/600e11c8559e2b501df681b9fe3ac7c50098c42c.png";
  24 |  const projectsData = {
3:03:58 PM [vite] Internal server error: Failed to resolve import "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png" from "src/app/pages/ProjectDetail.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /Users/siathais/Downloads/portfolionew/src/app/pages/ProjectDetail.tsx:7:26
  20 |  import { useEffect } from "react";
  21 |  import { CustomCursor } from "../components/CustomCursor";
  22 |  import imgMoodboard1 from "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png";
     |                             ^
  23 |  import imgMoodboard2 from "figma:asset/600e11c8559e2b501df681b9fe3ac7c50098c42c.png";
  24 |  const projectsData = {
      at TransformPluginContext._formatLog (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:42499:41)
      at TransformPluginContext.error (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:42496:16)
      at normalizeUrl (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:40475:23)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:40594:37
      at async Promise.all (index 7)
      at async TransformPluginContext.transform (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:40521:7)
      at async EnvironmentPluginContainer.transform (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:42294:18)
      at async loadAndTransform (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:35735:27)
      at async viteTransformMiddleware (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:37250:24)
3:03:58 PM [vite] (client) ✨ new dependencies optimized: react-dom/client, react-router, three, motion/react
3:03:58 PM [vite] (client) ✨ optimized dependencies changed. reloading
3:03:58 PM [vite] Internal server error: Failed to resolve import "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png" from "src/app/pages/ProjectDetail.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /Users/siathais/Downloads/portfolionew/src/app/pages/ProjectDetail.tsx:7:26
  20 |  import { useEffect } from "react";
  21 |  import { CustomCursor } from "../components/CustomCursor";
  22 |  import imgMoodboard1 from "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png";
     |                             ^
  23 |  import imgMoodboard2 from "figma:asset/600e11c8559e2b501df681b9fe3ac7c50098c42c.png";
  24 |  const projectsData = {
      at TransformPluginContext._formatLog (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:42499:41)
      at TransformPluginContext.error (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:42496:16)
      at normalizeUrl (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:40475:23)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:40594:37
      at async Promise.all (index 7)
      at async TransformPluginContext.transform (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:40521:7)
      at async EnvironmentPluginContainer.transform (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:42294:18)
      at async loadAndTransform (file:///Users/siathais/Downloads/portfolionew/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:35735:27)
3:03:58 PM [vite] (client) Pre-transform error: Failed to resolve import "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png" from "src/app/pages/ProjectDetail.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /Users/siathais/Downloads/portfolionew/src/app/pages/ProjectDetail.tsx:7:26
  20 |  import { useEffect } from "react";
  21 |  import { CustomCursor } from "../components/CustomCursor";
  22 |  import imgMoodboard1 from "figma:asset/82959ded5b3b98b1628abea1a47a0e0c29e609a4.png";
     |                             ^
  23 |  import imgMoodboard2 from "figma:asset/600e11c8559e2b501df681b9fe3ac7c50098c42c.png";
  24 |  const projectsData = {