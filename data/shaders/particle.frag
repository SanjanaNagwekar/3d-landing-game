#version 150

in vec4 vColor;
out vec4 outputColor;

void main() {
    float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.0, distanceFromCenter);
    outputColor = vec4(vColor.rgb, vColor.a * alpha);
}
