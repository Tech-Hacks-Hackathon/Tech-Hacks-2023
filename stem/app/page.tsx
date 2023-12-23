"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {}, []);

  return (
    <main>
      <div>Virtual Campus</div>
    </main>
  );
}
