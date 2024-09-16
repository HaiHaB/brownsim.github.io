import * as THREE from 'three';
import {FBXLoader} from 'three/addons/loaders/FBXLoader.min.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.min.js';

const Renderer = {
    container: null,
    renderer: null,

    init: function () {
        this.container = document.getElementById('avatar-container');
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setAnimationLoop(this.onAnimate);
        this.container.appendChild(this.renderer.domElement);
        this.renderer.shadowMap.enabled = true;

        window.addEventListener('resize', () => {
            this.onResize();
        });
    },

    onResize: function () {
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

        Head.onResize();
        Matrix.onResize();
        //Chart.onResize();

        // Circle.onResize();
        //Axis.onResize();
    },

    onAnimate: function () {
        Head.onAnimate();
        Matrix.onAnimate();
        //Chart.onAnimate();

     //   Circle.onAnimate();
       // Axis.onAnimate();
    },
};

const Head = {
    camera: null,
    scene: null,
    fbx: null,
    controls: null,

    init: function () {
        (new FBXLoader()).load('./assets/3d/humanhead.fbx', (fbx) => {
            this.ready(fbx);
        });
    },

    ready: function (fbx) {

        const container = Renderer.container;

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 2000);
        this.camera.position.set(0, 0, 60);

        // Scene setup
        this.scene = new THREE.Scene();

        // Add OrbitControls for better interaction
        this.controls = new OrbitControls(this.camera, Renderer.renderer.domElement);

        this.controls.enableZoom = false; // to disable zoom
        this.controls.enablePan = false; // to disable panning
        this.controls.autoRotate = true; // to disable panning

        // //@Todo Add axis helper, but better to remove it
        // const axesHelper = new THREE.AxesHelper(17);
        // // red, yellow, blue
        // axesHelper.setColors ( 0xFF0000, 0xFFFF00, 0x0000FF)
        // this.scene.add(axesHelper)

        // Load avatar
        fbx.traverse(function (child) {
            if (child.isMesh) {
                // Original material
                child.material = new THREE.MeshStandardMaterial({
                    side: THREE.FrontSide,
                });

                // Create wireframe geometry and material
                const wireframeGeometry = new THREE.WireframeGeometry(child.geometry);
                const wireframeMaterial = new THREE.LineBasicMaterial({color: 0xFFFFFF});
                const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

                // Add the wireframe as a child of the mesh
                child.add(wireframe);
            }

        });
        this.scene.add(fbx);

        // Adjust the model scale and position if necessary
        fbx.position.set(0, 0, 0); // Center the object

        // Compute the bounding box to center the model
        const box = new THREE.Box3().setFromObject(fbx);
        const center = box.getCenter(new THREE.Vector3());
        fbx.position.sub(center);

        this.scene.add(fbx);

        this.fbx = fbx;

        this.axis = new THREE.Vector3(0, 0, 0).normalize();
        this.speed = 1;
    },

    onResize: function () {
        this.camera.aspect = Renderer.container.clientWidth / Renderer.container.clientHeight;
        this.camera.updateProjectionMatrix();
    },

    onAnimate: function () {

        if (this.fbx === null) return;

        //this.fbx.rotateY(0.003);

        // Auto-rotate camera
        this.controls.update();

        const renderer = Renderer.renderer;
        const container = Renderer.container;
        renderer.setViewport(0, 0, container.clientWidth, container.clientHeight);
        renderer.setScissor(0, 0, container.clientWidth, container.clientHeight);
        renderer.setScissorTest(true);
        renderer.render(this.scene, this.camera);
    }
};

const Matrix = {
    counter: 0,
    $num: [],
    $matrixes: [],

    init: function () {

        let container = document.createElement('div');
        container.classList.add('matrix-container');

        const matrixName = ["q", "q̇", "q̈"];
        for (let i = 0; i < 3; i++) {
            let matrix = document.createElement('div');
            matrix.classList.add('matrix');
            matrix.innerHTML = '<span class="matrix-text">' + matrixName[i] + '</span>' +
                '<span class="matrix-line top-left"></span>' +
                '<span class="matrix-line top-right"></span>' +
                '<span class="matrix-line bottom-left"></span>' +
                '<span class="matrix-line bottom-right"></span>' +
                '<div class="num">0.0000</div>' +
                '<div class="num">0.0000</div>' +
                '<div class="num">0.0000</div>' +
                '<div class="num">0.0000</div>';

            container.appendChild(matrix);

            this.$matrixes[i] = matrix;
            this.$num[i] = matrix.querySelectorAll('.num');
        }

        Renderer.container.appendChild(container);

        // resize
        this.onResize();
    },

    onResize: function () {
        let clientHeight = Renderer.container.clientHeight;

        for (let i = 0; i < 3; i++) {
            this.$matrixes[i].style.top = (clientHeight / 4) * i + 'px';
        }
    },

    onAnimate: function () {
        if (!Head.fbx) {
            return;
        }

        // Delay and print out number
        this.counter++; // Increment the counter

        // Only update the numbers every 10 frames
        if (this.counter % 15 === 0) {
            this.counter = 0;

            // Get quaternion of the head
            const x = (Head.camera.quaternion.x)
            const y = (Head.camera.quaternion.y)
            const z = (Head.camera.quaternion.z)
            const w = (Head.camera.quaternion.w)
            const quaternion = [(Head.camera.quaternion.x), (Head.camera.quaternion.y),(Head.camera.quaternion.z) ,(Head.camera.quaternion.w) ];
            const firstDerivatives = [];
            for (let i = 0; i < quaternion.length; i++) {
                firstDerivatives[i] = quaternion[i] - this.$num[0][i].innerHTML;
            }

            const secondDerivatives = [];
            for (let i = 0; i < quaternion.length; i++) {
                secondDerivatives[i] = firstDerivatives[i] - this.$num[1][i].innerHTML;
            }
            const newMatrix = [
                quaternion,
                firstDerivatives,
                secondDerivatives,
            ];

            // Need an old matrix to calculate the first derivatives

            for (let i = 0; i < newMatrix.length; i++) {
                for (let j = 0; j < newMatrix[i].length; j++) {
                    this.$num[i][j].innerHTML = newMatrix[i][j].toFixed(4);
                }
            }
        }
    }
};

// const Chart = {
//     data: [],
//     chartScene: null,
//     chartCamera: null,
//     chartLine: null,
//     counter: 0,
//     display: true,

//     init: function () {

//         // Create chart scene
//         this.chartScene = new THREE.Scene();
//         this.chartCamera = new THREE.OrthographicCamera(0, 51, 51, 0, -1, 1); // Adjusted right and top parameters

//         // Initialize chart line
//         const chartMaterial = new THREE.LineBasicMaterial({color: 0xE29E73});
//         const chartGeometry = new THREE.BufferGeometry().setFromPoints([]);

//         this.chartLine = new THREE.Line(chartGeometry, chartMaterial);
//         this.chartScene.add(this.chartLine);

//         // Generate initial chart data
//         for (let i = 0; i < 50; i++) {
//             this.data.push({x: i, y: (Math.sin(i / 5)) * 15 + 25});
//         }

//         // Create X and Y axes
//         const axesMaterial = new THREE.LineBasicMaterial({color: 0xE29E73}); // Yellow color for axes

//         // X axis
//         const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(1, 1, 0), new THREE.Vector3(51, 1, 0)]);
//         const xAxis = new THREE.Line(xAxisGeometry, axesMaterial);
//         this.chartScene.add(xAxis);

//         // Arrow for X axis
//         const xAxisArrow = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 4), axesMaterial);
//         xAxisArrow.position.set(50, 1, 0); // Adjusted x position
//         xAxisArrow.rotation.z = -Math.PI / 2;
//         this.chartScene.add(xAxisArrow);

//         // Y axis
//         const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(1, 1, 0), new THREE.Vector3(1, 51, 0)]);
//         const yAxis = new THREE.Line(yAxisGeometry, axesMaterial);
//         this.chartScene.add(yAxis);

//         // Arrow for Y axis
//         const yAxisArrow = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 4), axesMaterial);
//         yAxisArrow.position.set(1, 50, 0); // Adjusted y position
//         this.chartScene.add(yAxisArrow);

//         this.onResize();
//     },

//     onResize: function () {
//         this.display = window.innerWidth >= 480;
//     },

//     onAnimate: function () {

//         if (!this.display) {
//             return;
//         }

//         this.counter++; // Increment the counter

//         // Only add a new data point every 2 frames - use to slow down the chart
//         if (this.counter % 2 === 0) {
//             this.counter = 0;

//             this.data.shift();

//             //TODO: This should be the speed of rotation instead
//             let firstPoint = this.data[0];
//             let lastPoint = this.data[this.data.length - 1];
//             this.data.push({x: lastPoint.x + 1, y: (Math.sin((lastPoint.x + 1) / 5)) * 15 + 25});

//             const points = this.data.map(d => new THREE.Vector3(d.x - firstPoint.x + 1, d.y, 0));
//             this.chartLine.geometry.setFromPoints(points);
//         }

//         const renderer = Renderer.renderer;
//         const container = Renderer.container;
//         const chartWidth = container.clientWidth / 4;
//         const chartHeight = container.clientHeight / 4;

//         renderer.setViewport(0, 0, chartWidth, chartHeight);
//         renderer.setScissor(0, 0, chartWidth, chartHeight);
//         renderer.setScissorTest(true);
//         renderer.render(this.chartScene, this.chartCamera);
//     },
// };

// const Circle = {

//     $arcs: [],
//     $circles: [],
//     counter: 0,

//     init: function () {

//         for (let i = 0; i < 3; i++) {
//             let circle = document.createElement('div');
//             circle.classList.add('circle');
//             circle.innerHTML = '<svg viewBox="0 0 100 100">\n' +
//                 '                <circle cx="50" cy="50" r="49" stroke="#E29E73" stroke-width="1" fill="transparent" />\n' +
//                 '                <path fill="#E29E73" />\n' +
//                 '            </svg>';

//             Renderer.container.appendChild(circle);

//             this.$circles[i] = circle;
//             this.$arcs[i] = circle.querySelector('path');
//         }

//         // resize
//         this.onResize();
//     },

//     onResize: function () {
//         let clientHeight = Renderer.container.clientHeight;

//         for (let i = 0; i < 3; i++) {
//             this.$circles[i].style.top = (clientHeight / 4) * i + 'px';
//         }
//     },

//     onAnimate: function () {
//         // Delay and get euler angles
//         this.counter++; // Increment the counter
//         if  (Head.fbx == null)
//             return;

//         // Only update the numbers every 2 frames
//         if (this.counter % 2 === 0) {
//             this.counter = 0;
//             // This is for euler_angles: yaw, pitch, roll
//             const current_euler_angles = [Head.fbx.rotation.x, Head.fbx.rotation.y, Head.fbx.rotation.z];


//             // Update the degree values and update the lines
//             for (let i = 0; i < 3; i++) {
//                 this.$arcs[i].setAttribute('d', this.render(50, 50, 47, current_euler_angles[i]));
//             }

//         }
//     },

//     radiantToCartesian: function (centerX, centerY, radius, radiant) {
//         return {
//             x: centerX + (radius * Math.cos(radiant)),
//             y: centerY + (radius * Math.sin(radiant))
//         };
//     },

//     render: function (x, y, radius, endAngle) {
//         const startAngle = 0; // Pie starts at 0 degrees
//         const end = this.radiantToCartesian(x, y, radius, endAngle);
//         const start = this.radiantToCartesian(x, y, radius, startAngle);
//         const largeArcFlag = endAngle <= 180 ? "0" : "1";

//         return [
//             "M", x, y, // Move to the center of the circle
//             "L", start.x, start.y, // Draw a line to the start of the arc
//             // https://www.nan.fyi/svg-paths/arcs
//              "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y, // Draw the arc, 1 means clockwise
//             "Z" // Close the path back to the center
//         ].join(" ");
//     },
// };



// const Axis = {
//     axisScene: null,
//     axisCamera: null,
//     display: true,

//     init: function () {
//         // Create axis scene
//         this.axisScene = new THREE.Scene();
//         this.axisCamera = new THREE.PerspectiveCamera(75, Renderer.container.clientWidth / Renderer.container.clientHeight, 0.1, 1000);
//         this.axisCamera.position.set(9, 9, 9); // Adjust the camera position
//         this.axisCamera.lookAt(0, 0, 0); // Make the camera look at the origin

//         // Create an AxesHelper and add it to the scene
//         const axesHelper = new THREE.AxesHelper(7); // Reduce the size of the axes
//         const axesMaterial = new THREE.LineBasicMaterial({color: 0xE29E73});
//         const axes = new THREE.LineSegments(axesHelper.geometry, axesMaterial);
//         this.axisScene.add(axes);

//         // Create ArrowHelpers for each axis
//         const arrowSize = 1.4; // Reduce the size of the arrows
//         const arrowDir = new THREE.Vector3(1, 0, 0);
//         const arrowOrigin = new THREE.Vector3(7, 0, 0); // Adjust the origin of the arrows
//         const arrowHelperX = new THREE.ArrowHelper(arrowDir, arrowOrigin, arrowSize, 0xE29E73);
//         this.axisScene.add(arrowHelperX);

//         arrowDir.set(0, 1, 0);
//         arrowOrigin.set(0, 7, 0);
//         const arrowHelperY = new THREE.ArrowHelper(arrowDir, arrowOrigin, arrowSize, 0xE29E73);
//         this.axisScene.add(arrowHelperY);

//         arrowDir.set(0, 0, 1);
//         arrowOrigin.set(0, 0, 7);
//         const arrowHelperZ = new THREE.ArrowHelper(arrowDir, arrowOrigin, arrowSize, 0xE29E73);
//         this.axisScene.add(arrowHelperZ);

//         this.onResize();
//     },

//     onResize: function () {
//         this.axisCamera.aspect = Renderer.container.clientWidth / Renderer.container.clientHeight;
//         this.axisCamera.updateProjectionMatrix();

//         this.display = window.innerWidth >= 480;
//     },

//     onAnimate: function () {

//         if (!Head.fbx || !this.display) {
//             return;
//         }

//         this.axisScene.rotation.copy(Head.fbx.rotation);

//         const renderer = Renderer.renderer;
//         const container = Renderer.container;
//         const axisWidth = container.clientWidth / 4;
//         const axisHeight = container.clientHeight / 4;

//         renderer.setViewport(3 * axisWidth, 0, axisWidth, axisHeight);
//         renderer.setScissor(3 * axisWidth, 0, axisWidth, axisHeight);
//         renderer.setScissorTest(true);
//         renderer.render(this.axisScene, this.axisCamera);
//     },
// };


(function () {

    // Check if the avatar container exists
    if (!document.getElementById('avatar-container')) {
        return;
    }

    Renderer.init();

    Head.init();

    Matrix.init();
    //Chart.init();

   // Circle.init();
    //Axis.init();

})();