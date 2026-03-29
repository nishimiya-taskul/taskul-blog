"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatAnimator() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [animated, setAnimated] = useState<Set<string>>(new Set());

  useEffect(() => {
    const blocks = document.querySelectorAll(".chat-block");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const block = entry.target as HTMLElement;
          const id =
            block.dataset.chatId ||
            `chat-${Array.from(blocks).indexOf(block)}`;
          block.dataset.chatId = id;

          if (animated.has(id)) return;

          setAnimated((prev) => new Set(prev).add(id));
          animateBlock(block);
          observerRef.current?.unobserve(block);
        });
      },
      { threshold: 0.3 }
    );

    blocks.forEach((block) => {
      const id =
        (block as HTMLElement).dataset.chatId ||
        `chat-${Array.from(blocks).indexOf(block)}`;
      (block as HTMLElement).dataset.chatId = id;
      if (!animated.has(id)) {
        observerRef.current?.observe(block);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [animated]);

  return null;
}

function animateBlock(block: HTMLElement) {
  const humanBubble = block.querySelector(
    ".chat-human .chat-bubble"
  ) as HTMLElement;
  const aiSection = block.querySelector(".chat-ai") as HTMLElement;
  const aiBubble = block.querySelector(
    ".chat-ai .chat-bubble"
  ) as HTMLElement;

  if (!humanBubble || !aiBubble || !aiSection) return;

  const humanText = humanBubble.textContent || "";
  const aiText = aiBubble.textContent || "";

  // Hide everything initially
  humanBubble.style.visibility = "hidden";
  humanBubble.textContent = "";
  aiSection.style.opacity = "0";
  aiBubble.textContent = "";

  // Type human message
  setTimeout(() => {
    humanBubble.style.visibility = "visible";
    typeText(humanBubble, humanText, 25, () => {
      // Show AI section with slight delay
      setTimeout(() => {
        aiSection.style.opacity = "1";
        aiSection.style.transition = "opacity 0.3s ease";

        // Type AI message
        setTimeout(() => {
          typeText(aiBubble, aiText, 20, () => {});
        }, 300);
      }, 400);
    });
  }, 200);
}

function typeText(
  element: HTMLElement,
  text: string,
  speed: number,
  onComplete: () => void
) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent = text.slice(0, i + 1);
      i++;
      setTimeout(type, speed);
    } else {
      onComplete();
    }
  }

  type();
}
