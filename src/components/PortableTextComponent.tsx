import React from "react";
import {
  PortableText as PortableTextType,
  PortableTextReactComponents,
} from "@portabletext/react";
import { urlFor } from "../sanity/lib/image"; // Make sure to create a URL helper function for images.
import Image from "next/image";

interface PortableTextProps {
  value: any; // Define a more specific type here if needed based on your Sanity schema
}

const PortableTextComponent: React.FC<PortableTextProps> = ({ value }) => {
  const components: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }: { value: any }) => {
        const imageUrl = urlFor(value).width(800).url(); // Adjust width accordingly
        return (
          <div className="mb-6">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog Image"}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        );
      },
    },
    block: {
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-lg sm:text-xl text-gray-900 leading-relaxed mb-6">
          {children}
        </p>
      ),
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-600 mb-6">
          {children}
        </h1>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-3xl sm:text-4xl font-semibold text-teal-500 mb-4">
          {children}
        </h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-4">
          {children}
        </h3>
      ),
      ul: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc pl-6 mb-6">{children}</ul>
      ),
      ol: ({ children }: { children?: React.ReactNode }) => (
        <ol className="list-decimal pl-6 mb-6">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children?: React.ReactNode; value: any }) => (
        <li className="text-lg sm:text-xl text-gray-900 mb-2">{children}</li>
      ),
      number: ({ children }: { children?: React.ReactNode; value: any }) => (
        <li className="text-lg sm:text-xl text-gray-900 mb-2">{children}</li>
      ),
    },
    marks: {
      link: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value?: { href: string };
      }) => (
        <a
          href={value?.href}
          className="text-teal-600 hover:text-teal-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-semibold text-gray-800">{children}</strong>
      ),
      em: ({ children }: { children: React.ReactNode }) => (
        <em className="italic text-gray-700">{children}</em>
      ),
    },
  };

  return <PortableTextType value={value} components={components} />;
};

export default PortableTextComponent;
