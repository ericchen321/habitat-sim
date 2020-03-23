in mediump vec3 v_color;
flat in mediump uint v_objectId;
#ifdef ESP_BUILD_WITH_TRIANGLE_SENSOR
in int gl_PrimitiveID;
#endif

layout(location = 0) out mediump vec4 color;
layout(location = 1) out uint objectId;
#ifdef ESP_BUILD_WITH_TRIANGLE_SENSOR
layout(location = 2) out int triangleId;
#endif

void main() {
#ifdef DEBUG_OBJECT_ID
  vec3 colors[] =
      vec3[](vec3(0.12156862745098039, 0.4666666666666667, 0.7058823529411765),
             vec3(0.6823529411764706, 0.7803921568627451, 0.9098039215686274),
             vec3(1.0, 0.4980392156862745, 0.054901960784313725),
             vec3(1.0, 0.7333333333333333, 0.47058823529411764),
             vec3(0.17254901960784313, 0.6274509803921569, 0.17254901960784313),
             vec3(0.596078431372549, 0.8745098039215686, 0.5411764705882353),
             vec3(0.8392156862745098, 0.15294117647058825, 0.1568627450980392),
             vec3(1.0, 0.596078431372549, 0.5882352941176471),
             vec3(0.5803921568627451, 0.403921568627451, 0.7411764705882353),
             vec3(0.7725490196078432, 0.6901960784313725, 0.8352941176470589),
             vec3(0.5490196078431373, 0.33725490196078434, 0.29411764705882354),
             vec3(0.7686274509803922, 0.611764705882353, 0.5803921568627451),
             vec3(0.8901960784313725, 0.4666666666666667, 0.7607843137254902),
             vec3(0.9686274509803922, 0.7137254901960784, 0.8235294117647058),
             vec3(0.4980392156862745, 0.4980392156862745, 0.4980392156862745),
             vec3(0.7803921568627451, 0.7803921568627451, 0.7803921568627451),
             vec3(0.7372549019607844, 0.7411764705882353, 0.13333333333333333),
             vec3(0.8588235294117647, 0.8588235294117647, 0.5529411764705883),
             vec3(0.09019607843137255, 0.7450980392156863, 0.8117647058823529),
             vec3(0.6196078431372549, 0.8549019607843137, 0.8980392156862745),
             vec3(0.2235294117647059, 0.23137254901960785, 0.4745098039215686),
             vec3(0.3215686274509804, 0.32941176470588235, 0.6392156862745098),
             vec3(0.4196078431372549, 0.43137254901960786, 0.8117647058823529),
             vec3(0.611764705882353, 0.6196078431372549, 0.8705882352941177),
             vec3(0.38823529411764707, 0.4745098039215686, 0.2235294117647059),
             vec3(0.5490196078431373, 0.6352941176470588, 0.3215686274509804),
             vec3(0.7098039215686275, 0.8117647058823529, 0.4196078431372549),
             vec3(0.807843137254902, 0.8588235294117647, 0.611764705882353),
             vec3(0.5490196078431373, 0.42745098039215684, 0.19215686274509805),
             vec3(0.7411764705882353, 0.6196078431372549, 0.2235294117647059),
             vec3(0.9058823529411765, 0.7294117647058823, 0.3215686274509804),
             vec3(0.9058823529411765, 0.796078431372549, 0.5803921568627451),
             vec3(0.5176470588235295, 0.23529411764705882, 0.2235294117647059),
             vec3(0.6784313725490196, 0.28627450980392155, 0.2901960784313726),
             vec3(0.8392156862745098, 0.3803921568627451, 0.4196078431372549),
             vec3(0.9058823529411765, 0.5882352941176471, 0.611764705882353),
             vec3(0.4823529411764706, 0.2549019607843137, 0.45098039215686275),
             vec3(0.6470588235294118, 0.3176470588235294, 0.5803921568627451),
             vec3(0.807843137254902, 0.42745098039215684, 0.7411764705882353),
             vec3(0.8705882352941177, 0.6196078431372549, 0.8392156862745098));
  uint l = colors.length();
  uint index = v_objectId - (l * uint(floor(v_objectId / l)));
  color = vec4(colors[index], 1.0);
#else
  color = vec4(v_color, 1.0);
#endif
  objectId = v_objectId;
#ifdef ESP_BUILD_WITH_TRIANGLE_SENSOR
  triangleId = gl_PrimitiveID;
#endif
}
