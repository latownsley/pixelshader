// make this 120 for the mac:
#version 330 compatibility

uniform float	uPixelSize;

// out variables to be interpolated in the rasterizer and sent to each fragment shader:

out  vec3  vN;	  // normal vector
out  vec3  vL;	  // vector from point to light
out  vec3  vE;	  // vector from point to eye
out  vec2  vST;	  // (s,t) texture coordinates

// where the light is:

const vec3 LightPosition = vec3(  0., 5., 5. );

void
main( )
{
	
	vec4 pos = gl_ModelViewMatrix * gl_Vertex;

    // Pixelate world position 
    pos.xyz = floor(pos.xyz / uPixelSize) * uPixelSize;

    vN = normalize(gl_NormalMatrix * gl_Normal);
    vL = LightPosition - pos.xyz;
    vE = -pos.xyz;

    // Apply the pixelated position to final projection
    gl_Position = gl_ProjectionMatrix * pos;
}
