import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";
import LogoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionBtn>Nova Transação</NewTransactionBtn>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
