interface Props {
  logoClass: string;
  logoImage: string;
  logoLink?: string;
}
function Logo({ logoClass, logoImage, logoLink }: Props) {
  return (
    <a href={logoLink} target="_blank">
      <img
        className={logoClass}
        src={`${process.env.PUBLIC_URL}/images/${logoImage}`}
      ></img>
    </a>
  );
}

export default Logo;
