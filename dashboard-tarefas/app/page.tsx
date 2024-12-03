import Inicio from '@/app/ui/geral/inicio';

export default async function Page() {
  let dados_gas = await fetch(`${process.env.REDMINE_API_URL_BASE}`+"/issues.json?limit=1", {
    headers: {
      "X-Redmine-API-Key":`${process.env.X_API_KEY_REDMINE}`
    },
  });

  let dados_formatados = await dados_gas.json();
  console.log(dados_formatados);

  return (
    <Inicio />
  );
}
