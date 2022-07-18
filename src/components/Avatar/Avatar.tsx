import { AvatarWrapperStyled, NameStyled, AvatarStyled } from "./Avatar.styled";

type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  name: string;
  src?: string;
};
const Avatar = ({ name, src, size = "sm" }: AvatarProps) => {
  const strgs = name.split(" ");
  return (
    <AvatarWrapperStyled data-testid="avatar-cont" hasSrc={!!src} size={size} name={name}>
      {src ? (
        <AvatarStyled src={src} alt={name} />
      ) : (
        <NameStyled>
          {`${strgs.length > 1 ? strgs[0][0] + strgs[1][0] : strgs[0][0]}`}
        </NameStyled>
      )}
    </AvatarWrapperStyled>
  );
};

export default Avatar;
