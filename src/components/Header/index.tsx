import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";
import LogoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo" />
        <NewTransactionBtn>Nova Transação</NewTransactionBtn>
      </HeaderContent>
    </HeaderContainer>
  );
}
