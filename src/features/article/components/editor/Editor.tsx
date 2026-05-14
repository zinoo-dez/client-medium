'use client';

import { useEffect, useRef, useCallback } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';

interface EditorProps {
  data?: OutputData;
  onChange: (data: OutputData) => void;
  placeholder?: string;
}

export default function Editor({ data, onChange, placeholder }: EditorProps) {
  const editorRef = useRef<EditorJS | null>(null);

  const initEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default;
    const Header = (await import('@editorjs/header')).default;
    const List = (await import('@editorjs/list')).default;
    const Code = (await import('@editorjs/code')).default;
    const Embed = (await import('@editorjs/embed')).default;
    const Image = (await import('@editorjs/image')).default;
    const Quote = (await import('@editorjs/quote')).default;
    const Marker = (await import('@editorjs/marker')).default;
    const InlineCode = (await import('@editorjs/inline-code')).default;
    const LinkTool = (await import('@editorjs/link')).default;

    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        data: data,
        placeholder: placeholder || 'Tell your story...',
        tools: {
          header: {
            class: Header as any,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: List as any,
          code: Code as any,
          embed: Embed as any,
          quote: Quote as any,
          marker: Marker as any,
          inlineCode: InlineCode as any,
          linkTool: LinkTool as any,
          image: {
            class: Image as any,
            config: {
              endpoints: {
                byFile: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/v1'}/upload`,
              },
            },
          },
        },
        onChange: async () => {
          const content = await editor.save();
          onChange(content);
        },
      });

      editorRef.current = editor;
    }
  }, [data, onChange, placeholder]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initEditor();
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [initEditor]);

  return (
    <div id="editorjs" className="prose prose-zinc prose-lg max-w-none font-serif min-h-[500px]" />
  );
}
