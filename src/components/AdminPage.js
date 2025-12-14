 import React, { useEffect, useState } from "react";
import content from "../data/content.json";
import { getAllPosts } from "../data/blogService";

const DEFAULT_USERNAME = process.env.REACT_APP_ADMIN_USERNAME || "admin";
const DEFAULT_PASSCODE = process.env.REACT_APP_ADMIN_PASSCODE || "admin123";

const INPUT_CLASSES =
  "w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

const TEXTAREA_CLASSES =
  "w-full border border-gray-300 rounded-lg p-3 font-mono text-sm h-96 focus:outline-none focus:ring-2 focus:ring-blue-500";

function downloadJsonFile(data) {
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "content.json";
  link.click();
  URL.revokeObjectURL(url);
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => window.localStorage.getItem("adminAuthed") === "true"
  );
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [rawContent, setRawContent] = useState(
    () => JSON.stringify(content, null, 2)
  );
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      window.localStorage.setItem("adminAuthed", "true");
    } else {
      window.localStorage.removeItem("adminAuthed");
    }
  }, [isAuthenticated]);

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      username.trim() === DEFAULT_USERNAME &&
      passcode.trim() === DEFAULT_PASSCODE
    ) {
      setIsAuthenticated(true);
      setUsername("");
      setPasscode("");
      setError("");
    } else {
      setError("Invalid admin cr
