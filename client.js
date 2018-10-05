// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import {Surface} from 'react-360-web';
import {ReactInstance} from 'react-360-web';
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });



const myCenterCylinderSurface = new Surface(
  1670, /* width */
  1000, /* height */
  Surface.SurfaceShape.Cylinder /* shape */

);
myCenterCylinderSurface.setDensity(4680);
myCenterCylinderSurface.setAngle( Math.PI /4, 0);
myCenterCylinderSurface.setRadius(1250);
// myCenterCylinderSurface.setRadius()

const myOtherCylinderSurface = new Surface(
  4800, /* width */
  1000, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);
myOtherCylinderSurface.setDensity(4680);
myOtherCylinderSurface.setAngle( Math.PI /4, 0);
myOtherCylinderSurface.setRadius(1250);


const myOneMoreCylinderSurface = new Surface(
  7830, /* width */
  1000, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);
myOneMoreCylinderSurface.setDensity(4680);
 myOneMoreCylinderSurface.setAngle(-Math.PI /4, 0);
myOneMoreCylinderSurface.setRadius(1250);


const myOneCylinderSurface = new Surface(
  0, /* width */
  720, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);
myOneMoreCylinderSurface.setDensity(4600);
myOneMoreCylinderSurface.setAngle( Math.PI /4, 0);
myOneMoreCylinderSurface.setRadius(850);

const myLeftCylinderSurface = new Surface(
  2000, /* width */
  1020, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);
const myRightCylinderSurface = new Surface(
  2000, /* width */
  1020, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);




  // Render your app content to the default cylinder surface
 
  r360.renderToSurface(
    r360.createRoot('hello360'),
    myCenterCylinderSurface,
    r360.createRoot('hello360'),(myCenterCylinderSurface)
  );

  r360.renderToSurface(
    r360.createRoot('hello360', { /* initial props for second panel */ }),
   myOtherCylinderSurface,
  );
  //r360.renderToSurface(
  //  r360.createRoot('hello360'),
    //r360.getDefaultSurface()

    // r360.createRoot('hello360'),(myRearCylinderSurface)
  // );
 r360.renderToSurface(
   r360.createRoot('hello360'),
    myOneMoreCylinderSurface,
   );
  // Load the initial environment
 // r360.compositor.setBackground(r360.getAssetURL('background.jpg'));
}

window.React360 = {init};
