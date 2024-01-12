"use client";
import dayjs from "dayjs";
import React from "react";
import { motion } from "framer-motion";
import Blog from "../components/landingpage/blog";

export default async function Home({ params }: any) {
  return (
    <div className="">
      <Blog />
    </div>
  );
}
