/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Arbitrary constant `g` to be used in Lanczos approximation functions.
*
* @module @stdlib/constants-float32-gamma-lanczos-g
* @type {number}
*
* @example
* var FLOAT32_GAMMA_LANCZOS_G = require( '@stdlib/constants-float32-gamma-lanczos-g' );
* // returns 10.900510787963867
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );


// MAIN //

/**
* Arbitrary constant `g` to be used in Lanczos approximation functions.
*
* @constant
* @type {number}
* @default 10.900510787963867
* @see [Lanczos Approximation]{@link https://en.wikipedia.org/wiki/Lanczos_approximation}
*/
var FLOAT32_GAMMA_LANCZOS_G = float64ToFloat32( 10.900511 );


// EXPORTS //

module.exports = FLOAT32_GAMMA_LANCZOS_G;
