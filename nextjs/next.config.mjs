import { withPigment } from "@pigment-css/nextjs-plugin";
import { extendTheme } from "@mui/material";

/** @type {import('next').NextConfig} */
const nextConfig = {};
const pigmentConfig = { theme: extendTheme() };

export default withPigment(nextConfig, pigmentConfig);
