///////////////////////////////////////////////////
// KTX2 Header.
///////////////////////////////////////////////////

export const KHR_SUPERCOMPRESSION_NONE = 0;
export const KHR_SUPERCOMPRESSION_BASISLZ = 1;
export const KHR_SUPERCOMPRESSION_ZSTD = 2;
export const KHR_SUPERCOMPRESSION_ZLIB = 3;

///////////////////////////////////////////////////
// Data Format Descriptor (DFD).
///////////////////////////////////////////////////

export const KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT = 0;
export const KHR_DF_VENDORID_KHRONOS = 0;
export const KHR_DF_VERSION = 2;

export const KHR_DF_MODEL_UNSPECIFIED = 0;
export const KHR_DF_MODEL_RGBSDA = 1;
// ...
export const KHR_DF_MODEL_ETC1 = 160;
export const KHR_DF_MODEL_ETC2 = 161;
export const KHR_DF_MODEL_ASTC = 162;
export const KHR_DF_MODEL_ETC1S = 163;
export const KHR_DF_MODEL_UASTC = 166;

export const KHR_DF_FLAG_ALPHA_STRAIGHT = 0;
export const KHR_DF_FLAG_ALPHA_PREMULTIPLIED = 1;

export const KHR_DF_TRANSFER_UNSPECIFIED = 0;
export const KHR_DF_TRANSFER_LINEAR = 1;
export const KHR_DF_TRANSFER_SRGB = 2;
export const KHR_DF_TRANSFER_ITU = 3;
export const KHR_DF_TRANSFER_NTSC = 4;
export const KHR_DF_TRANSFER_SLOG = 5;
export const KHR_DF_TRANSFER_SLOG2 = 6;
export const KHR_DF_TRANSFER_BT1886 = 7;
export const KHR_DF_TRANSFER_HLG_OETF = 8;
export const KHR_DF_TRANSFER_HLG_EOTF = 9;
export const KHR_DF_TRANSFER_PQ_EOTF = 10;
export const KHR_DF_TRANSFER_PQ_OETF = 11;
export const KHR_DF_TRANSFER_DCIP3 = 12;
export const KHR_DF_TRANSFER_PAL_OETF = 13;
export const KHR_DF_TRANSFER_PAL625_EOTF = 14;
export const KHR_DF_TRANSFER_ST240 = 15;
export const KHR_DF_TRANSFER_ACESCC = 16;
export const KHR_DF_TRANSFER_ACESCCT = 17;
export const KHR_DF_TRANSFER_ADOBERGB = 18;

export const KHR_DF_PRIMARIES_UNSPECIFIED = 0;
export const KHR_DF_PRIMARIES_BT709 = 1;
export const KHR_DF_PRIMARIES_BT601_EBU = 2;
export const KHR_DF_PRIMARIES_BT601_SMPTE = 3;
export const KHR_DF_PRIMARIES_BT2020 = 4;
export const KHR_DF_PRIMARIES_CIEXYZ = 5;
export const KHR_DF_PRIMARIES_ACES = 6;
export const KHR_DF_PRIMARIES_ACESCC = 7;
export const KHR_DF_PRIMARIES_NTSC1953 = 8;
export const KHR_DF_PRIMARIES_PAL525 = 9;
export const KHR_DF_PRIMARIES_DISPLAYP3 = 10;
export const KHR_DF_PRIMARIES_ADOBERGB = 11;

export const KHR_DF_CHANNEL_RGBSDA_RED = 0;
export const KHR_DF_CHANNEL_RGBSDA_GREEN = 1;
export const KHR_DF_CHANNEL_RGBSDA_BLUE = 2;
export const KHR_DF_CHANNEL_RGBSDA_STENCIL = 13;
export const KHR_DF_CHANNEL_RGBSDA_DEPTH = 14;
export const KHR_DF_CHANNEL_RGBSDA_ALPHA = 15;

export const KHR_DF_SAMPLE_DATATYPE_FLOAT = 0x80;
export const KHR_DF_SAMPLE_DATATYPE_SIGNED = 0x40;
export const KHR_DF_SAMPLE_DATATYPE_EXPONENT = 0x20;
export const KHR_DF_SAMPLE_DATATYPE_LINEAR = 0x10;

///////////////////////////////////////////////////
// VK FORMAT.
///////////////////////////////////////////////////

export const VK_FORMAT_UNDEFINED = 0;
export const VK_FORMAT_R4G4_UNORM_PACK8 = 1;
export const VK_FORMAT_R4G4B4A4_UNORM_PACK16 = 2;
export const VK_FORMAT_B4G4R4A4_UNORM_PACK16 = 3;
export const VK_FORMAT_R5G6B5_UNORM_PACK16 = 4;
export const VK_FORMAT_B5G6R5_UNORM_PACK16 = 5;
export const VK_FORMAT_R5G5B5A1_UNORM_PACK16 = 6;
export const VK_FORMAT_B5G5R5A1_UNORM_PACK16 = 7;
export const VK_FORMAT_A1R5G5B5_UNORM_PACK16 = 8;
export const VK_FORMAT_R8_UNORM = 9;
export const VK_FORMAT_R8_SNORM = 10;
export const VK_FORMAT_R8_UINT = 13;
export const VK_FORMAT_R8_SINT = 14;
export const VK_FORMAT_R8_SRGB = 15;
export const VK_FORMAT_R8G8_UNORM = 16;
export const VK_FORMAT_R8G8_SNORM = 17;
export const VK_FORMAT_R8G8_UINT = 20;
export const VK_FORMAT_R8G8_SINT = 21;
export const VK_FORMAT_R8G8_SRGB = 22;
export const VK_FORMAT_R8G8B8_UNORM = 23;
export const VK_FORMAT_R8G8B8_SNORM = 24;
export const VK_FORMAT_R8G8B8_UINT = 27;
export const VK_FORMAT_R8G8B8_SINT = 28;
export const VK_FORMAT_R8G8B8_SRGB = 29;
export const VK_FORMAT_B8G8R8_UNORM = 30;
export const VK_FORMAT_B8G8R8_SNORM = 31;
export const VK_FORMAT_B8G8R8_UINT = 34;
export const VK_FORMAT_B8G8R8_SINT = 35;
export const VK_FORMAT_B8G8R8_SRGB = 36;
export const VK_FORMAT_R8G8B8A8_UNORM = 37;
export const VK_FORMAT_R8G8B8A8_SNORM = 38;
export const VK_FORMAT_R8G8B8A8_UINT = 41;
export const VK_FORMAT_R8G8B8A8_SINT = 42;
export const VK_FORMAT_R8G8B8A8_SRGB = 43;
export const VK_FORMAT_B8G8R8A8_UNORM = 44;
export const VK_FORMAT_B8G8R8A8_SNORM = 45;
export const VK_FORMAT_B8G8R8A8_UINT = 48;
export const VK_FORMAT_B8G8R8A8_SINT = 49;
export const VK_FORMAT_B8G8R8A8_SRGB = 50;
export const VK_FORMAT_A2R10G10B10_UNORM_PACK32 = 58;
export const VK_FORMAT_A2R10G10B10_SNORM_PACK32 = 59;
export const VK_FORMAT_A2R10G10B10_UINT_PACK32 = 62;
export const VK_FORMAT_A2R10G10B10_SINT_PACK32 = 63;
export const VK_FORMAT_A2B10G10R10_UNORM_PACK32 = 64;
export const VK_FORMAT_A2B10G10R10_SNORM_PACK32 = 65;
export const VK_FORMAT_A2B10G10R10_UINT_PACK32 = 68;
export const VK_FORMAT_A2B10G10R10_SINT_PACK32 = 69;
export const VK_FORMAT_R16_UNORM = 70;
export const VK_FORMAT_R16_SNORM = 71;
export const VK_FORMAT_R16_UINT = 74;
export const VK_FORMAT_R16_SINT = 75;
export const VK_FORMAT_R16_SFLOAT = 76;
export const VK_FORMAT_R16G16_UNORM = 77;
export const VK_FORMAT_R16G16_SNORM = 78;
export const VK_FORMAT_R16G16_UINT = 81;
export const VK_FORMAT_R16G16_SINT = 82;
export const VK_FORMAT_R16G16_SFLOAT = 83;
export const VK_FORMAT_R16G16B16_UNORM = 84;
export const VK_FORMAT_R16G16B16_SNORM = 85;
export const VK_FORMAT_R16G16B16_UINT = 88;
export const VK_FORMAT_R16G16B16_SINT = 89;
export const VK_FORMAT_R16G16B16_SFLOAT = 90;
export const VK_FORMAT_R16G16B16A16_UNORM = 91;
export const VK_FORMAT_R16G16B16A16_SNORM = 92;
export const VK_FORMAT_R16G16B16A16_UINT = 95;
export const VK_FORMAT_R16G16B16A16_SINT = 96;
export const VK_FORMAT_R16G16B16A16_SFLOAT = 97;
export const VK_FORMAT_R32_UINT = 98;
export const VK_FORMAT_R32_SINT = 99;
export const VK_FORMAT_R32_SFLOAT = 100;
export const VK_FORMAT_R32G32_UINT = 101;
export const VK_FORMAT_R32G32_SINT = 102;
export const VK_FORMAT_R32G32_SFLOAT = 103;
export const VK_FORMAT_R32G32B32_UINT = 104;
export const VK_FORMAT_R32G32B32_SINT = 105;
export const VK_FORMAT_R32G32B32_SFLOAT = 106;
export const VK_FORMAT_R32G32B32A32_UINT = 107;
export const VK_FORMAT_R32G32B32A32_SINT = 108;
export const VK_FORMAT_R32G32B32A32_SFLOAT = 109;
export const VK_FORMAT_R64_UINT = 110;
export const VK_FORMAT_R64_SINT = 111;
export const VK_FORMAT_R64_SFLOAT = 112;
export const VK_FORMAT_R64G64_UINT = 113;
export const VK_FORMAT_R64G64_SINT = 114;
export const VK_FORMAT_R64G64_SFLOAT = 115;
export const VK_FORMAT_R64G64B64_UINT = 116;
export const VK_FORMAT_R64G64B64_SINT = 117;
export const VK_FORMAT_R64G64B64_SFLOAT = 118;
export const VK_FORMAT_R64G64B64A64_UINT = 119;
export const VK_FORMAT_R64G64B64A64_SINT = 120;
export const VK_FORMAT_R64G64B64A64_SFLOAT = 121;
export const VK_FORMAT_B10G11R11_UFLOAT_PACK32 = 122;
export const VK_FORMAT_E5B9G9R9_UFLOAT_PACK32 = 123;
export const VK_FORMAT_D16_UNORM = 124;
export const VK_FORMAT_X8_D24_UNORM_PACK32 = 125;
export const VK_FORMAT_D32_SFLOAT = 126;
export const VK_FORMAT_S8_UINT = 127;
export const VK_FORMAT_D16_UNORM_S8_UINT = 128;
export const VK_FORMAT_D24_UNORM_S8_UINT = 129;
export const VK_FORMAT_D32_SFLOAT_S8_UINT = 130;
export const VK_FORMAT_BC1_RGB_UNORM_BLOCK = 131;
export const VK_FORMAT_BC1_RGB_SRGB_BLOCK = 132;
export const VK_FORMAT_BC1_RGBA_UNORM_BLOCK = 133;
export const VK_FORMAT_BC1_RGBA_SRGB_BLOCK = 134;
export const VK_FORMAT_BC2_UNORM_BLOCK = 135;
export const VK_FORMAT_BC2_SRGB_BLOCK = 136;
export const VK_FORMAT_BC3_UNORM_BLOCK = 137;
export const VK_FORMAT_BC3_SRGB_BLOCK = 138;
export const VK_FORMAT_BC4_UNORM_BLOCK = 139;
export const VK_FORMAT_BC4_SNORM_BLOCK = 140;
export const VK_FORMAT_BC5_UNORM_BLOCK = 141;
export const VK_FORMAT_BC5_SNORM_BLOCK = 142;
export const VK_FORMAT_BC6H_UFLOAT_BLOCK = 143;
export const VK_FORMAT_BC6H_SFLOAT_BLOCK = 144;
export const VK_FORMAT_BC7_UNORM_BLOCK = 145;
export const VK_FORMAT_BC7_SRGB_BLOCK = 146;
export const VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK = 147;
export const VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK = 148;
export const VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK = 149;
export const VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK = 150;
export const VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK = 151;
export const VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK = 152;
export const VK_FORMAT_EAC_R11_UNORM_BLOCK = 153;
export const VK_FORMAT_EAC_R11_SNORM_BLOCK = 154;
export const VK_FORMAT_EAC_R11G11_UNORM_BLOCK = 155;
export const VK_FORMAT_EAC_R11G11_SNORM_BLOCK = 156;
export const VK_FORMAT_ASTC_4x4_UNORM_BLOCK = 157;
export const VK_FORMAT_ASTC_4x4_SRGB_BLOCK = 158;
export const VK_FORMAT_ASTC_5x4_UNORM_BLOCK = 159;
export const VK_FORMAT_ASTC_5x4_SRGB_BLOCK = 160;
export const VK_FORMAT_ASTC_5x5_UNORM_BLOCK = 161;
export const VK_FORMAT_ASTC_5x5_SRGB_BLOCK = 162;
export const VK_FORMAT_ASTC_6x5_UNORM_BLOCK = 163;
export const VK_FORMAT_ASTC_6x5_SRGB_BLOCK = 164;
export const VK_FORMAT_ASTC_6x6_UNORM_BLOCK = 165;
export const VK_FORMAT_ASTC_6x6_SRGB_BLOCK = 166;
export const VK_FORMAT_ASTC_8x5_UNORM_BLOCK = 167;
export const VK_FORMAT_ASTC_8x5_SRGB_BLOCK = 168;
export const VK_FORMAT_ASTC_8x6_UNORM_BLOCK = 169;
export const VK_FORMAT_ASTC_8x6_SRGB_BLOCK = 170;
export const VK_FORMAT_ASTC_8x8_UNORM_BLOCK = 171;
export const VK_FORMAT_ASTC_8x8_SRGB_BLOCK = 172;
export const VK_FORMAT_ASTC_10x5_UNORM_BLOCK = 173;
export const VK_FORMAT_ASTC_10x5_SRGB_BLOCK = 174;
export const VK_FORMAT_ASTC_10x6_UNORM_BLOCK = 175;
export const VK_FORMAT_ASTC_10x6_SRGB_BLOCK = 176;
export const VK_FORMAT_ASTC_10x8_UNORM_BLOCK = 177;
export const VK_FORMAT_ASTC_10x8_SRGB_BLOCK = 178;
export const VK_FORMAT_ASTC_10x10_UNORM_BLOCK = 179;
export const VK_FORMAT_ASTC_10x10_SRGB_BLOCK = 180;
export const VK_FORMAT_ASTC_12x10_UNORM_BLOCK = 181;
export const VK_FORMAT_ASTC_12x10_SRGB_BLOCK = 182;
export const VK_FORMAT_ASTC_12x12_UNORM_BLOCK = 183;
export const VK_FORMAT_ASTC_12x12_SRGB_BLOCK = 184;
export const VK_FORMAT_R10X6_UNORM_PACK16 = 1000156007;
export const VK_FORMAT_R10X6G10X6_UNORM_2PACK16 = 1000156008;
export const VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 1000156009;
export const VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 1000156010;
export const VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 1000156011;
export const VK_FORMAT_R12X4_UNORM_PACK16 = 1000156017;
export const VK_FORMAT_R12X4G12X4_UNORM_2PACK16 = 1000156018;
export const VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 1000156019;
export const VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 1000156020;
export const VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 1000156021;
export const VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG = 1000054000;
export const VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG = 1000054001;
export const VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG = 1000054002;
export const VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG = 1000054003;
export const VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG = 1000054004;
export const VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG = 1000054005;
export const VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG = 1000054006;
export const VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG = 1000054007;
export const VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT = 1000066000;
export const VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT = 1000066001;
export const VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT = 1000066002;
export const VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT = 1000066003;
export const VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT = 1000066004;
export const VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT = 1000066005;
export const VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT = 1000066006;
export const VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT = 1000066007;
export const VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT = 1000066008;
export const VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT = 1000066009;
export const VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT = 1000066010;
export const VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT = 1000066011;
export const VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT = 1000066012;
export const VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT = 1000066013;
export const VK_FORMAT_A4R4G4B4_UNORM_PACK16_EXT = 1000340000;
export const VK_FORMAT_A4B4G4R4_UNORM_PACK16_EXT = 1000340001;
