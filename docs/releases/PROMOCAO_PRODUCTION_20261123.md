# Promoção controlada Preview → Production (Cloudflare Pages `topacrh`)

## Estado
- Preview publicado: deployment `46197a08-acfe-4218-bfbc-e504850d809d`
  - https://claude-preview-20261123.topacrh.pages.dev (protegido por Cloudflare Access)
- Production vigente (rollback alvo): deployment `8f771e0f-3bd7-411b-beac-96578ea5e517`
  - https://8f771e0f.topacrh.pages.dev (criado em 2026-11-18)
- Frontend e `api/*` apontam para o Supabase `zlzydfdcirdbfbyaiyzk`.

## Checklist antes de promover (manual, autenticado)
1. Login admin → Frota → Documentos: abrir "Ver PDF" de 3 veículos e "Abrir documento anterior" no histórico (URL assinada).
2. Subir um PDF novo de veículo; confirmar que o anterior vai ao histórico.
3. App Mecânico: PIN → ponto (selfie), KM (foto), abastecimento (fotos/recibo).
4. Rescisão: criar e listar; Compras: criar solicitação; Almoxarifado: entrada/saída.
5. Usuários filial_matriz / filial_praia / filial_goiania: confirmar que só enxergam a própria empresa; admin/diretor_geral veem as 5.
6. Conferir buckets: todos `public=false` (nada a alterar).

## Promoção
Deploy direto de nova versão em `main` (Production) com o MESMO `dist` validado, ou promover o deployment
do preview pelo painel Cloudflare Pages → Deployments → "Rollback/Promote". Nunca publicar sem o checklist.

## Rollback
Painel Cloudflare Pages → `topacrh` → Deployments → `8f771e0f` → "Rollback to this deployment"
(ou API: `POST /accounts/{id}/pages/projects/topacrh/deployments/8f771e0f-3bd7-411b-beac-96578ea5e517/rollback`).
Não há migrations novas nesta entrega; rollback é só de frontend.
