export const Img: React.FC<IImg> = ({
  alt,
  src,
  width = '1rem',
  height = 'auto',
}) => {
  return <img alt={alt} src={src} width={width} height={height} />;
};

interface IImg {
  alt: string;
  src: string;
  width?: string;
  height?: string;
}
