

const Editor = () => {
 const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript'
      }),
    ],
    content: '<h2>Write here</h2>',
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
    <div>
        <textarea
          className='w-full resize-none'
          value={text}
          onChange={handleOnChange}
        />
      </div>

      <Markdown 
        rehypePlugins={[remarkGfm]}
      >
        {text}
      </Markdown>
      

      <div className="text-white pt-8">
        {
          text
        }

      </div>
    </>
  )
}

export default Editor