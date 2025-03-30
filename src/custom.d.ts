declare namespace JSX {
  interface IntrinsicElements {
    "lite-youtube": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        videoid: string;
        params?: string;
        playlistid?: string;
        autoload?: boolean;
      },
      HTMLElement
    >;
  }
}
