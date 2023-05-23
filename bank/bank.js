const leia = require("prompt-sync")();

class Conta {
  constructor(numero, cpf, saldo, ativo) {
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativo = ativo;
  }

  ativar() {
    this.ativo = true;
  }

  credito(valor) {
    if (this.ativo) {
      if (valor < 0) {
        console.log("Impossível realizar, valor negativo");
      } else if (valor == 0) {
        console.log("Impossível realizar, valor zerado...");
      } else {
        this.saldo += valor;
      }
    } else {
      console.log("Conta inativa....");
    }
  }

  debito(valor) {
    if (this.ativo) {
      if (valor < 0) {
        console.log("Impossível realizar, valor negativo...");
      } else if (valor == 0) {
        console.log("Impossível realizar, valor zerado...");
      } else if (valor > this.saldo) {
        console.log("Impossível realizar, saldo indisponível...");
      } else {
        this.saldo -= valor;
      }
    } else {
      console.log("Conta inativa...");
    }
  }
}

class ContaPoupanca extends Conta {
  constructor(numero, cpf, saldo, ativo, dataAniversario) {
    super(numero, cpf, saldo, ativo);
    this.dataAniversario = dataAniversario;
  }

  atualizarSaldo() {
    const hoje = new Date();
    if (
      this.dataAniversario.getDate() == hoje.getDate() &&
      this.dataAniversario.getMonth() == hoje.getMonth()
    ) {
      const rendimento = this.saldo * 0.0005; // 0,05%
      this.saldo += rendimento;
      console.log("Saldo atualizado com rendimento de 0,05%.");
    }
  }
}

class ContaCorrente extends Conta {
  constructor(numero, cpf, saldo, ativo) {
    super(numero, cpf, saldo, ativo);
    this.numChequesSolicitados = 0;
  }

  solicitarCheque() {
    if (this.numChequesSolicitados < 3) {
      this.saldo -= 30.0; // Debita R$ 30.00 por cheque solicitado
      this.numChequesSolicitados++;
      console.log("Cheque solicitado com sucesso.");
    } else {
      console.log("Limite máximo de cheques atingido.");
    }
  }
}

class ContaEspecial extends Conta {
  constructor(numero, cpf, saldo, ativo, limite) {
    super(numero, cpf, saldo, ativo);
    this.limite = limite;
  }

  debito(valor) {
    if (this.ativo) {
      if (valor < 0) {
        console.log("Impossível realizar, valor negativo...");
      } else if (valor == 0) {
        console.log("Impossível realizar, valor zerado...");
      } else if (valor > this.saldo + this.limite) {
        console.log("Impossível realizar, saldo e limite indisponíveis...");
      } else {
        if (valor > this.saldo) {
          const saldoRestante = valor - this.saldo;
          this.saldo = 0;
          this.limite -= saldoRestante;
        } else {
          this.saldo -= valor;
        }
      }
    } else {
      console.log("Conta inativa...");
    }
  }
}

// PROGRAMA PRINCIPAL
console.log("ReimasBank");
console.log("Aqui você se torna um rei!\n");

const tipoConta = leia(
  "1 - CONTA POUPANÇA\n2 - CONTA CORRENTE\n3 - CONTA ESPECIAL\n4 - SAIR\n\nDIGITE O CÓDIGO DA OPÇÃO SELECIONADA: "
);

if (tipoConta == "1") {
  const numero = parseInt(leia("Digite o número da conta: "));
  const cpf = leia("Digite o CPF da conta: ");
  const saldo = parseFloat(leia("Digite o saldo atual da conta: "));
  const ativo = leia("A conta está ativa? (S/N): ") == "S";
  const dataAniversario = new Date(leia("Digite a data de aniversário da conta (AAAA-MM-DD): "));

  const contaPoupanca = new ContaPoupanca(numero, cpf, saldo, ativo, dataAniversario);

  for (let x = 1; x <= 10; x++) {
    console.log("\nCONTA POUPANÇA");
    console.log("Saldo Atual: R$ " + contaPoupanca.saldo.toFixed(2));

    const op = leia("MOVIMENTO - D - débito ou C - crédito: ");
    const valor = parseFloat(leia("Valor do movimento: R$ "));

    if (op == "D") {
      contaPoupanca.debito(valor);
    } else if (op == "C") {
      contaPoupanca.credito(valor);
    }

    const continuar = leia("\nContinuar? (S/N): ");
    if (continuar != "S") {
      break;
    }
  }

  contaPoupanca.atualizarSaldo();
  console.log("\nSaldo final da conta: R$ " + contaPoupanca.saldo.toFixed(2));
} else if (tipoConta == "2") {
  const numero = parseInt(leia("Digite o número da conta: "));
  const cpf = leia("Digite o CPF da conta: ");
  const saldo = parseFloat(leia("Digite o saldo atual da conta: "));
  const ativo = leia("A conta está ativa? (S/N): ") == "S";

  const contaCorrente = new ContaCorrente(numero, cpf, saldo, ativo);

  for (let x = 1; x <= 10; x++) {
    console.log("\nCONTA CORRENTE");
    console.log("Saldo Atual: R$ " + contaCorrente.saldo.toFixed(2));

    const op = leia("MOVIMENTO - D - débito ou C - crédito: ");
    const valor = parseFloat(leia("Valor do movimento: R$ "));

    if (op == "D") {
      contaCorrente.debito(valor);
    } else if (op == "C") {
      contaCorrente.credito(valor);
    }

    const continuar = leia("\nContinuar? (S/N): ");
    if (continuar != "S") {
      const solicitarCheque = leia("Deseja solicitar um cheque? (S/N): ");
      if (solicitarCheque == "S") {
        contaCorrente.solicitarCheque();
      }
      break;
    }
  }

  console.log("\nSaldo final da conta: R$ " + contaCorrente.saldo.toFixed(2));
} else if (tipoConta == "3") {
  const numero = parseInt(leia("Digite o número da conta: "));
  const cpf = leia("Digite o CPF da conta: ");
  const saldo = parseFloat(leia("Digite o saldo atual da conta: "));
  const ativo = leia("A conta está ativa? (S/N): ") == "S";
  const limite = parseFloat(leia("Digite o limite da conta: "));

  const contaEspecial = new ContaEspecial(numero, cpf, saldo, ativo, limite);

  for (let x = 1; x <= 10; x++) {
    console.log("\nCONTA ESPECIAL");
    console.log("Saldo Atual: R$ " + contaEspecial.saldo.toFixed(2));

    const op = leia("MOVIMENTO - D - débito ou C - crédito: ");
    const valor = parseFloat(leia("Valor do movimento: R$ "));

    if (op == "D") {
      contaEspecial.debito(valor);
    } else if (op == "C") {
      contaEspecial.credito(valor);
    }

    const continuar = leia("\nContinuar? (S/N): ");
    if (continuar != "S") {
      break;
    }
  }

  console.log("\nSaldo final da conta: R$ " + contaEspecial.saldo.toFixed(2));
  console.log("Limite atual da conta: R$ " + contaEspecial.limite.toFixed(2));
} else if (tipoConta == "4") {
  console.log("Programa finalizado.");
} else {
  console.log("Opção inválida. Programa finalizado.");
}