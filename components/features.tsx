import {
  AccountTree,
  Assistant,
  InsertChart,
  Label,
  Numbers,
  PeopleAlt,
  SignalCellular4Bar,
  SmartToy,
  WhatsApp,
} from "@mui/icons-material";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Principais Recursos que nossa plataforma oferece.
            </h2>
            <p className="text-xl text-gray-400">
              Descubra Como Nossos Recursos Sob Medida Podem Transformar Sua
              Maneira de Gerenciar a Contabilidade.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />

                <Assistant />
              </svg>

              <h4 className="h4 mb-2">ChatBot</h4>
              <p className="text-lg text-gray-400 text-center">
                Ativo 24H por dia, seu cliente não ficará sem resposta.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <AccountTree />
              </svg>
              <h4 className="h4 mb-2">Departamentos</h4>
              <p className="text-lg text-gray-400 text-center">
                Direcione seus clientes para seus devidos departamentos.
                (Atendimento Organizado).
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <WhatsApp />
              </svg>
              <h4 className="h4 mb-2">Atendimento</h4>
              <p className="text-lg text-gray-400 text-center">
                O atendente poderá: Enviar e receber textos e mídias, indicar
                tags, fazer anotações nos leads, transferir atendimento, etc.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <InsertChart />
              </svg>
              <h4 className="h4 mb-2">Dashboard</h4>
              <p className="text-lg text-gray-400 text-center">
                Acompanhe em tempo real as conversas entre os atendentes e
                clientes. Relatórios detalhados.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <Label />
              </svg>
              <h4 className="h4 mb-2">Carteira de clientes</h4>
              <p className="text-lg text-gray-400 text-center">
                Separe clientes por atendentes especifico quando chamarem no
                whats
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <Numbers />
              </svg>
              <h4 className="h4 mb-2">Atendimento por numero</h4>
              <p className="text-lg text-gray-400 text-center">
                Agora cada setor pode ter um numero especifico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
