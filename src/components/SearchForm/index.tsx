import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { SearchFormInputs } from "../../models/interfaces/transaction";
import { searchFormSchema } from "../../schemas/transaction";

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions({ query: data.query });

    console.log(data);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
