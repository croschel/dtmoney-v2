import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { formatBRCurrency } from "../../utils/format";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const { summaryAmount } = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{formatBRCurrency(summaryAmount.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{formatBRCurrency(summaryAmount.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{formatBRCurrency(summaryAmount.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
