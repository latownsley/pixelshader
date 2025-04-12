// make this 120 for the mac:
#version 330 compatibility


uniform vec4    uColor;		 // object color
uniform vec3	LightPosition;
uniform float	uOutlineThickness;




// in variables 

in  vec3  vN;			// normal vector
in vec3   vL;			// vector from point to light
in  vec3  vE;			// vector from point to eye
in  vec2  vST;			// (s,t) texture coordinates

vec3 pasteurize(vec3 color, int levels) {
    return floor(color * float(levels)) / float(levels);
}

void main( )
{

	vec4 color1 = uColor;
	vec4 color2;

	// Normalize 
    vec3 L = normalize(vE);
    vec3 N = normalize(vN);
    
    // dot product calculation
    float intensity = (L.x * N.x) + (L.y * N.y) + (L.z * N.z);

	// Cel Shading Implementation
	if (intensity > 0.9)
	{
		color2 = vec4(1.0, 1.0, 1.0, 1.0);
	}
	else if (intensity > 0.6)
	{
		color2 = vec4(0.8, 0.8, 0.8, 1.0);
	}
	else if (intensity > 0.3)
	{
		color2 = vec4(0.5, 0.5, 0.5, 1.0);
	}
	else
	{
		color2 = vec4(0.2, 0.2, 0.2, 1.0);
	}

	// Outline
	float edgeThreshold = length(fwidth(N)) * uOutlineThickness;
	
	float edgeMin = 0.3;

	float edge = smoothstep(edgeMin, edgeMin + 0.1, edgeThreshold);
	
	if (edge > 0.5)
	{
		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // give black outline
	}
	else
	{
		// Apply pasteurization and toon shading
		int colorLevels = 4; 
		vec3 pasteurizedColor = pasteurize((color1 * color2).rgb, colorLevels);

		gl_FragColor = vec4(pasteurizedColor, 1.0);
	}

}
