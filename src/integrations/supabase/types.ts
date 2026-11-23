export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      abastecimento_acompanhantes: {
        Row: {
          acompanhante_id: string
          acompanhante_nome: string
          app_request_id: string
          autorizacao_id: string
          company_id: string | null
          created_at: string
          empresa_nome: string | null
          funcionario_id: string | null
          id: string
        }
        Insert: {
          acompanhante_id: string
          acompanhante_nome: string
          app_request_id: string
          autorizacao_id: string
          company_id?: string | null
          created_at?: string
          empresa_nome?: string | null
          funcionario_id?: string | null
          id?: string
        }
        Update: {
          acompanhante_id?: string
          acompanhante_nome?: string
          app_request_id?: string
          autorizacao_id?: string
          company_id?: string | null
          created_at?: string
          empresa_nome?: string | null
          funcionario_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "abastecimento_acompanhantes_acompanhante_id_fkey"
            columns: ["acompanhante_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_acompanhantes_acompanhante_id_fkey"
            columns: ["acompanhante_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "abastecimento_acompanhantes_autorizacao_id_fkey"
            columns: ["autorizacao_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_autorizacoes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_acompanhantes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_acompanhantes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "abastecimento_acompanhantes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_acompanhantes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      abastecimento_autorizacoes: {
        Row: {
          app_fuel_id: string | null
          app_request_id: string
          autorizado: boolean
          autorizado_em: string | null
          autorizado_por: string | null
          autorizado_por_nome: string | null
          categoria: string
          combustivel: string | null
          company_id: string | null
          concluido_em: string | null
          created_at: string
          employee_code: string | null
          empresa_nome: string | null
          filial: string | null
          fim_semana: boolean
          fora_expediente: boolean
          funcionario_id: string | null
          funcionario_nome: string
          hora_extra_fim: string | null
          hora_extra_inicio: string | null
          hora_extra_minutos: number
          id: string
          observacao: string | null
          ocr_bomba_em: string | null
          ocr_km: number | null
          ocr_litros: number | null
          ocr_painel_em: string | null
          ocr_preco_litro: number | null
          ocr_status: string | null
          ocr_valor: number | null
          placa: string | null
          posto_codigo: string | null
          posto_nome: string | null
          solicitado_em: string
          status: string
          tipo_hora_extra: string | null
          updated_at: string
          valor_estimado: number | null
          whatsapp_solicitacao_em: string | null
        }
        Insert: {
          app_fuel_id?: string | null
          app_request_id: string
          autorizado?: boolean
          autorizado_em?: string | null
          autorizado_por?: string | null
          autorizado_por_nome?: string | null
          categoria?: string
          combustivel?: string | null
          company_id?: string | null
          concluido_em?: string | null
          created_at?: string
          employee_code?: string | null
          empresa_nome?: string | null
          filial?: string | null
          fim_semana?: boolean
          fora_expediente?: boolean
          funcionario_id?: string | null
          funcionario_nome: string
          hora_extra_fim?: string | null
          hora_extra_inicio?: string | null
          hora_extra_minutos?: number
          id?: string
          observacao?: string | null
          ocr_bomba_em?: string | null
          ocr_km?: number | null
          ocr_litros?: number | null
          ocr_painel_em?: string | null
          ocr_preco_litro?: number | null
          ocr_status?: string | null
          ocr_valor?: number | null
          placa?: string | null
          posto_codigo?: string | null
          posto_nome?: string | null
          solicitado_em?: string
          status?: string
          tipo_hora_extra?: string | null
          updated_at?: string
          valor_estimado?: number | null
          whatsapp_solicitacao_em?: string | null
        }
        Update: {
          app_fuel_id?: string | null
          app_request_id?: string
          autorizado?: boolean
          autorizado_em?: string | null
          autorizado_por?: string | null
          autorizado_por_nome?: string | null
          categoria?: string
          combustivel?: string | null
          company_id?: string | null
          concluido_em?: string | null
          created_at?: string
          employee_code?: string | null
          empresa_nome?: string | null
          filial?: string | null
          fim_semana?: boolean
          fora_expediente?: boolean
          funcionario_id?: string | null
          funcionario_nome?: string
          hora_extra_fim?: string | null
          hora_extra_inicio?: string | null
          hora_extra_minutos?: number
          id?: string
          observacao?: string | null
          ocr_bomba_em?: string | null
          ocr_km?: number | null
          ocr_litros?: number | null
          ocr_painel_em?: string | null
          ocr_preco_litro?: number | null
          ocr_status?: string | null
          ocr_valor?: number | null
          placa?: string | null
          posto_codigo?: string | null
          posto_nome?: string | null
          solicitado_em?: string
          status?: string
          tipo_hora_extra?: string | null
          updated_at?: string
          valor_estimado?: number | null
          whatsapp_solicitacao_em?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "abastecimento_autorizacoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_autorizacoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "abastecimento_autorizacoes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_autorizacoes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      abastecimento_postos: {
        Row: {
          ativo: boolean
          cnpj: string | null
          codigo: string | null
          created_at: string
          endereco: string | null
          id: string
          nome: string
          observacao: string | null
          status: string
          telefone: string | null
          unidade: string | null
          unidade_codigo: string
          unidade_id: string | null
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          cnpj?: string | null
          codigo?: string | null
          created_at?: string
          endereco?: string | null
          id?: string
          nome: string
          observacao?: string | null
          status?: string
          telefone?: string | null
          unidade?: string | null
          unidade_codigo?: string
          unidade_id?: string | null
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          cnpj?: string | null
          codigo?: string | null
          created_at?: string
          endereco?: string | null
          id?: string
          nome?: string
          observacao?: string | null
          status?: string
          telefone?: string | null
          unidade?: string | null
          unidade_codigo?: string
          unidade_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "abastecimento_postos_unidade_id_fkey"
            columns: ["unidade_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_unidades"
            referencedColumns: ["id"]
          },
        ]
      }
      abastecimento_qr_tokens: {
        Row: {
          ativo: boolean
          codigo: string | null
          created_at: string
          expira_em: string | null
          id: string
          posto_id: string | null
          status: string
          token: string
          token_hash: string | null
          unidade_codigo: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          codigo?: string | null
          created_at?: string
          expira_em?: string | null
          id?: string
          posto_id?: string | null
          status?: string
          token?: string
          token_hash?: string | null
          unidade_codigo?: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          codigo?: string | null
          created_at?: string
          expira_em?: string | null
          id?: string
          posto_id?: string | null
          status?: string
          token?: string
          token_hash?: string | null
          unidade_codigo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "abastecimento_qr_tokens_posto_id_fkey"
            columns: ["posto_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_postos"
            referencedColumns: ["id"]
          },
        ]
      }
      abastecimento_registros: {
        Row: {
          acesso_externo_id: string | null
          combustivel: string | null
          created_at: string
          empresa: string | null
          endereco: string | null
          filial: string | null
          foto_bomba_url: string | null
          foto_painel_url: string | null
          funcionario_id: string | null
          id: string
          km: number | null
          km_atual: number | null
          km_rodado: number | null
          latitude: number | null
          litros: number | null
          longitude: number | null
          mecanico_nome: string | null
          motorista: string | null
          observacao: string | null
          placa: string | null
          posto_codigo: string | null
          posto_id: string | null
          qr_token_id: string | null
          recibo_texto: string | null
          registrado_por: string | null
          status: string | null
          unidade_codigo: string
          valor: number | null
          valor_por_litro: number | null
          valor_total: number | null
          veiculo: string | null
        }
        Insert: {
          acesso_externo_id?: string | null
          combustivel?: string | null
          created_at?: string
          empresa?: string | null
          endereco?: string | null
          filial?: string | null
          foto_bomba_url?: string | null
          foto_painel_url?: string | null
          funcionario_id?: string | null
          id?: string
          km?: number | null
          km_atual?: number | null
          km_rodado?: number | null
          latitude?: number | null
          litros?: number | null
          longitude?: number | null
          mecanico_nome?: string | null
          motorista?: string | null
          observacao?: string | null
          placa?: string | null
          posto_codigo?: string | null
          posto_id?: string | null
          qr_token_id?: string | null
          recibo_texto?: string | null
          registrado_por?: string | null
          status?: string | null
          unidade_codigo: string
          valor?: number | null
          valor_por_litro?: number | null
          valor_total?: number | null
          veiculo?: string | null
        }
        Update: {
          acesso_externo_id?: string | null
          combustivel?: string | null
          created_at?: string
          empresa?: string | null
          endereco?: string | null
          filial?: string | null
          foto_bomba_url?: string | null
          foto_painel_url?: string | null
          funcionario_id?: string | null
          id?: string
          km?: number | null
          km_atual?: number | null
          km_rodado?: number | null
          latitude?: number | null
          litros?: number | null
          longitude?: number | null
          mecanico_nome?: string | null
          motorista?: string | null
          observacao?: string | null
          placa?: string | null
          posto_codigo?: string | null
          posto_id?: string | null
          qr_token_id?: string | null
          recibo_texto?: string | null
          registrado_por?: string | null
          status?: string | null
          unidade_codigo?: string
          valor?: number | null
          valor_por_litro?: number | null
          valor_total?: number | null
          veiculo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "abastecimento_registros_acesso_externo_id_fkey"
            columns: ["acesso_externo_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_registros_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_registros_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "abastecimento_registros_posto_id_fkey"
            columns: ["posto_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_postos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_registros_qr_token_id_fkey"
            columns: ["qr_token_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_qr_tokens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimento_registros_qr_token_id_fkey"
            columns: ["qr_token_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_qr_tokens_public"
            referencedColumns: ["id"]
          },
        ]
      }
      abastecimento_unidades: {
        Row: {
          ativo: boolean
          codigo: string
          created_at: string
          id: string
          nome: string
          status: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          codigo: string
          created_at?: string
          id?: string
          nome: string
          status?: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          codigo?: string
          created_at?: string
          id?: string
          nome?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      abastecimentos: {
        Row: {
          acesso_externo_id: string | null
          acompanhantes: Json
          app_request_id: string | null
          autorizacao_id: string | null
          categoria_operacional: string | null
          combustivel: string | null
          competencia: string | null
          created_at: string
          data: string
          empresa: string | null
          endereco: string | null
          excluido: boolean
          excluido_em: string | null
          excluido_motivo: string | null
          filial: string | null
          fim_semana: boolean
          fora_expediente: boolean
          foto_bomba_url: string | null
          foto_painel_url: string | null
          foto_recibo_url: string | null
          funcionario_id: string | null
          hora: string
          hora_extra_minutos: number
          id: string
          km_atual: number | null
          km_rodado: number | null
          latitude: number | null
          litros: number
          longitude: number | null
          mecanico_nome: string
          observacao: string | null
          placa: string | null
          posto_cnpj: string | null
          posto_codigo: string | null
          posto_endereco: string | null
          posto_id: string | null
          posto_nome: string | null
          posto_telefone: string | null
          preenchimento: string | null
          qr_codigo: string | null
          recibo_gerado_em: string | null
          recibo_pdf_gerado_em: string | null
          recibo_pdf_url: string | null
          recibo_texto: string | null
          registro_teste: boolean
          status: string
          updated_at: string
          validado_por: string | null
          valor: number
          valor_por_litro: number | null
        }
        Insert: {
          acesso_externo_id?: string | null
          acompanhantes?: Json
          app_request_id?: string | null
          autorizacao_id?: string | null
          categoria_operacional?: string | null
          combustivel?: string | null
          competencia?: string | null
          created_at?: string
          data?: string
          empresa?: string | null
          endereco?: string | null
          excluido?: boolean
          excluido_em?: string | null
          excluido_motivo?: string | null
          filial?: string | null
          fim_semana?: boolean
          fora_expediente?: boolean
          foto_bomba_url?: string | null
          foto_painel_url?: string | null
          foto_recibo_url?: string | null
          funcionario_id?: string | null
          hora?: string
          hora_extra_minutos?: number
          id?: string
          km_atual?: number | null
          km_rodado?: number | null
          latitude?: number | null
          litros?: number
          longitude?: number | null
          mecanico_nome: string
          observacao?: string | null
          placa?: string | null
          posto_cnpj?: string | null
          posto_codigo?: string | null
          posto_endereco?: string | null
          posto_id?: string | null
          posto_nome?: string | null
          posto_telefone?: string | null
          preenchimento?: string | null
          qr_codigo?: string | null
          recibo_gerado_em?: string | null
          recibo_pdf_gerado_em?: string | null
          recibo_pdf_url?: string | null
          recibo_texto?: string | null
          registro_teste?: boolean
          status?: string
          updated_at?: string
          validado_por?: string | null
          valor?: number
          valor_por_litro?: number | null
        }
        Update: {
          acesso_externo_id?: string | null
          acompanhantes?: Json
          app_request_id?: string | null
          autorizacao_id?: string | null
          categoria_operacional?: string | null
          combustivel?: string | null
          competencia?: string | null
          created_at?: string
          data?: string
          empresa?: string | null
          endereco?: string | null
          excluido?: boolean
          excluido_em?: string | null
          excluido_motivo?: string | null
          filial?: string | null
          fim_semana?: boolean
          fora_expediente?: boolean
          foto_bomba_url?: string | null
          foto_painel_url?: string | null
          foto_recibo_url?: string | null
          funcionario_id?: string | null
          hora?: string
          hora_extra_minutos?: number
          id?: string
          km_atual?: number | null
          km_rodado?: number | null
          latitude?: number | null
          litros?: number
          longitude?: number | null
          mecanico_nome?: string
          observacao?: string | null
          placa?: string | null
          posto_cnpj?: string | null
          posto_codigo?: string | null
          posto_endereco?: string | null
          posto_id?: string | null
          posto_nome?: string | null
          posto_telefone?: string | null
          preenchimento?: string | null
          qr_codigo?: string | null
          recibo_gerado_em?: string | null
          recibo_pdf_gerado_em?: string | null
          recibo_pdf_url?: string | null
          recibo_texto?: string | null
          registro_teste?: boolean
          status?: string
          updated_at?: string
          validado_por?: string | null
          valor?: number
          valor_por_litro?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "abastecimentos_acesso_externo_id_fkey"
            columns: ["acesso_externo_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimentos_autorizacao_id_fkey"
            columns: ["autorizacao_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_autorizacoes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "abastecimentos_posto_id_fkey"
            columns: ["posto_id"]
            isOneToOne: false
            referencedRelation: "postos_combustivel"
            referencedColumns: ["id"]
          },
        ]
      }
      acessos_externos: {
        Row: {
          acesso_liberado: boolean | null
          ativo: boolean
          cpf: string | null
          cpf_clean: string | null
          created_at: string
          email: string | null
          email_corporativo: string | null
          empresa: string | null
          filial: string | null
          funcao: string | null
          funcionario_id: string | null
          id: string
          modulo: string | null
          modulos_liberados: Json
          nome: string | null
          observacoes: string | null
          perfil_acesso: string | null
          pin: string | null
          profile_user_id: string | null
          status: string | null
          telefone: string | null
          tipo_acesso: string | null
          ultima_validacao_email_em: string | null
          ultimo_acesso_em: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          acesso_liberado?: boolean | null
          ativo?: boolean
          cpf?: string | null
          cpf_clean?: string | null
          created_at?: string
          email?: string | null
          email_corporativo?: string | null
          empresa?: string | null
          filial?: string | null
          funcao?: string | null
          funcionario_id?: string | null
          id?: string
          modulo?: string | null
          modulos_liberados?: Json
          nome?: string | null
          observacoes?: string | null
          perfil_acesso?: string | null
          pin?: string | null
          profile_user_id?: string | null
          status?: string | null
          telefone?: string | null
          tipo_acesso?: string | null
          ultima_validacao_email_em?: string | null
          ultimo_acesso_em?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          acesso_liberado?: boolean | null
          ativo?: boolean
          cpf?: string | null
          cpf_clean?: string | null
          created_at?: string
          email?: string | null
          email_corporativo?: string | null
          empresa?: string | null
          filial?: string | null
          funcao?: string | null
          funcionario_id?: string | null
          id?: string
          modulo?: string | null
          modulos_liberados?: Json
          nome?: string | null
          observacoes?: string | null
          perfil_acesso?: string | null
          pin?: string | null
          profile_user_id?: string | null
          status?: string | null
          telefone?: string | null
          tipo_acesso?: string | null
          ultima_validacao_email_em?: string | null
          ultimo_acesso_em?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "acessos_externos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "acessos_externos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      acoes_log: {
        Row: {
          acao: string
          antes: Json | null
          arquivo_url: string | null
          cpf: string | null
          created_at: string
          depois: Json | null
          empresa: string | null
          entidade: string
          entidade_id: string | null
          funcionario_id: string | null
          funcionario_nome: string | null
          id: string
          modulo: string
          observacao: string | null
          origem: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          acao?: string
          antes?: Json | null
          arquivo_url?: string | null
          cpf?: string | null
          created_at?: string
          depois?: Json | null
          empresa?: string | null
          entidade?: string
          entidade_id?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string
          modulo?: string
          observacao?: string | null
          origem?: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          acao?: string
          antes?: Json | null
          arquivo_url?: string | null
          cpf?: string | null
          created_at?: string
          depois?: Json | null
          empresa?: string | null
          entidade?: string
          entidade_id?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string
          modulo?: string
          observacao?: string | null
          origem?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      acordo_joaquim_dados: {
        Row: {
          atualizado_em: string
          dados: Json
          id: string
        }
        Insert: {
          atualizado_em?: string
          dados?: Json
          id: string
        }
        Update: {
          atualizado_em?: string
          dados?: Json
          id?: string
        }
        Relationships: []
      }
      activity_log: {
        Row: {
          action: string
          created_at: string
          email: string
          filial: string
          id: string
          last_activity_at: string
          logged_in_at: string
          module: string
          nome: string
          route: string
          status: string
          user_id: string
        }
        Insert: {
          action?: string
          created_at?: string
          email?: string
          filial?: string
          id?: string
          last_activity_at?: string
          logged_in_at?: string
          module?: string
          nome?: string
          route?: string
          status?: string
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string
          email?: string
          filial?: string
          id?: string
          last_activity_at?: string
          logged_in_at?: string
          module?: string
          nome?: string
          route?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      admission_dossier_workflow: {
        Row: {
          contrato_documento_id: string | null
          contrato_recebido_em: string | null
          created_at: string
          dados_bancarios: Json
          efetivado_em: string | null
          efetivado_por: string | null
          finance_enviado_em: string | null
          finance_enviado_por: string | null
          finance_preparado_em: string | null
          finance_snapshot: Json
          pasta_funcionario: string | null
          pre_cadastro_id: string
          updated_at: string
          vr_diario: number | null
          vt_diario: number | null
        }
        Insert: {
          contrato_documento_id?: string | null
          contrato_recebido_em?: string | null
          created_at?: string
          dados_bancarios?: Json
          efetivado_em?: string | null
          efetivado_por?: string | null
          finance_enviado_em?: string | null
          finance_enviado_por?: string | null
          finance_preparado_em?: string | null
          finance_snapshot?: Json
          pasta_funcionario?: string | null
          pre_cadastro_id: string
          updated_at?: string
          vr_diario?: number | null
          vt_diario?: number | null
        }
        Update: {
          contrato_documento_id?: string | null
          contrato_recebido_em?: string | null
          created_at?: string
          dados_bancarios?: Json
          efetivado_em?: string | null
          efetivado_por?: string | null
          finance_enviado_em?: string | null
          finance_enviado_por?: string | null
          finance_preparado_em?: string | null
          finance_snapshot?: Json
          pasta_funcionario?: string | null
          pre_cadastro_id?: string
          updated_at?: string
          vr_diario?: number | null
          vt_diario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "admission_dossier_workflow_contrato_documento_id_fkey"
            columns: ["contrato_documento_id"]
            isOneToOne: false
            referencedRelation: "pre_cadastro_documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admission_dossier_workflow_pre_cadastro_id_fkey"
            columns: ["pre_cadastro_id"]
            isOneToOne: true
            referencedRelation: "pre_cadastros_admissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      alertas_filial: {
        Row: {
          acao: string
          acao_url: string | null
          cpf: string | null
          created_at: string
          dado_anterior: Json | null
          dado_novo: Json | null
          destinatario_user_id: string | null
          empresa_id: string | null
          empresa_nome: string | null
          escopo: string
          filial: string
          funcionario_id: string | null
          funcionario_nome: string | null
          id: string
          lido: boolean
          mensagem: string | null
          modulo: string
          nivel: string
          observacao: string | null
          origem_registro_id: string | null
          recorrencia: Json | null
          resolvido_em: string | null
          resolvido_por_user_id: string | null
          responsavel_cpf: string | null
          responsavel_nome: string | null
          responsavel_user_id: string | null
          status: string
          titulo: string | null
          updated_at: string
        }
        Insert: {
          acao?: string
          acao_url?: string | null
          cpf?: string | null
          created_at?: string
          dado_anterior?: Json | null
          dado_novo?: Json | null
          destinatario_user_id?: string | null
          empresa_id?: string | null
          empresa_nome?: string | null
          escopo?: string
          filial?: string
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string
          lido?: boolean
          mensagem?: string | null
          modulo?: string
          nivel?: string
          observacao?: string | null
          origem_registro_id?: string | null
          recorrencia?: Json | null
          resolvido_em?: string | null
          resolvido_por_user_id?: string | null
          responsavel_cpf?: string | null
          responsavel_nome?: string | null
          responsavel_user_id?: string | null
          status?: string
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          acao?: string
          acao_url?: string | null
          cpf?: string | null
          created_at?: string
          dado_anterior?: Json | null
          dado_novo?: Json | null
          destinatario_user_id?: string | null
          empresa_id?: string | null
          empresa_nome?: string | null
          escopo?: string
          filial?: string
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string
          lido?: boolean
          mensagem?: string | null
          modulo?: string
          nivel?: string
          observacao?: string | null
          origem_registro_id?: string | null
          recorrencia?: Json | null
          resolvido_em?: string | null
          resolvido_por_user_id?: string | null
          responsavel_cpf?: string | null
          responsavel_nome?: string | null
          responsavel_user_id?: string | null
          status?: string
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "alertas_filial_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alertas_filial_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      alertas_filial_apresentacoes: {
        Row: {
          alerta_id: string
          apresentado_em: string
          ciclo: string
          user_id: string
        }
        Insert: {
          alerta_id: string
          apresentado_em?: string
          ciclo: string
          user_id: string
        }
        Update: {
          alerta_id?: string
          apresentado_em?: string
          ciclo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alertas_filial_apresentacoes_alerta_id_fkey"
            columns: ["alerta_id"]
            isOneToOne: false
            referencedRelation: "alertas_filial"
            referencedColumns: ["id"]
          },
        ]
      }
      alertas_filial_leituras: {
        Row: {
          alerta_id: string
          lido_em: string
          user_id: string
        }
        Insert: {
          alerta_id: string
          lido_em?: string
          user_id: string
        }
        Update: {
          alerta_id?: string
          lido_em?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alertas_filial_leituras_alerta_id_fkey"
            columns: ["alerta_id"]
            isOneToOne: false
            referencedRelation: "alertas_filial"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_ajustes: {
        Row: {
          company_id: string | null
          created_at: string
          diferenca: number
          empresa: string | null
          id: string
          importacao_lote_id: string | null
          item_id: string
          motivo: string | null
          observacao: string | null
          origem_importacao: string | null
          quantidade_anterior: number
          quantidade_nova: number
          tipo_movimentacao: string
          user_id: string | null
          usuario_nome: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          diferenca?: number
          empresa?: string | null
          id?: string
          importacao_lote_id?: string | null
          item_id: string
          motivo?: string | null
          observacao?: string | null
          origem_importacao?: string | null
          quantidade_anterior?: number
          quantidade_nova?: number
          tipo_movimentacao: string
          user_id?: string | null
          usuario_nome?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          diferenca?: number
          empresa?: string | null
          id?: string
          importacao_lote_id?: string | null
          item_id?: string
          motivo?: string | null
          observacao?: string | null
          origem_importacao?: string | null
          quantidade_anterior?: number
          quantidade_nova?: number
          tipo_movimentacao?: string
          user_id?: string | null
          usuario_nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_ajustes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_ajustes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_ajustes_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_ajustes_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_ajustes_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_ajustes_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_auditoria: {
        Row: {
          acao: string
          company_id: string | null
          created_at: string
          empresa: string | null
          entidade: string
          entidade_id: string | null
          id: string
          motivo: string | null
          user_id: string | null
          usuario_nome: string | null
          valor_anterior: Json | null
          valor_posterior: Json | null
        }
        Insert: {
          acao: string
          company_id?: string | null
          created_at?: string
          empresa?: string | null
          entidade: string
          entidade_id?: string | null
          id?: string
          motivo?: string | null
          user_id?: string | null
          usuario_nome?: string | null
          valor_anterior?: Json | null
          valor_posterior?: Json | null
        }
        Update: {
          acao?: string
          company_id?: string | null
          created_at?: string
          empresa?: string | null
          entidade?: string
          entidade_id?: string | null
          id?: string
          motivo?: string | null
          user_id?: string | null
          usuario_nome?: string | null
          valor_anterior?: Json | null
          valor_posterior?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_auditoria_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_auditoria_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      almoxarifado_autorizacoes_excepcionais: {
        Row: {
          autorizado_por: string | null
          autorizado_por_nome: string
          carga_id: string | null
          created_at: string
          data_hora: string
          funcionario_id: string | null
          funcionario_nome: string | null
          id: string
          motivo: string
          operador_id: string | null
          operador_nome: string
        }
        Insert: {
          autorizado_por?: string | null
          autorizado_por_nome: string
          carga_id?: string | null
          created_at?: string
          data_hora?: string
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string
          motivo: string
          operador_id?: string | null
          operador_nome: string
        }
        Update: {
          autorizado_por?: string | null
          autorizado_por_nome?: string
          carga_id?: string | null
          created_at?: string
          data_hora?: string
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string
          motivo?: string
          operador_id?: string | null
          operador_nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_autorizacoes_excepcionais_carga_id_fkey"
            columns: ["carga_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_cargas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_autorizacoes_excepcionais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_autorizacoes_excepcionais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      almoxarifado_backup_20260910_entradas: {
        Row: {
          company_id: string | null
          created_at: string | null
          data_entrada: string | null
          empresa: string | null
          fornecedor: string | null
          id: string | null
          importacao_lote_id: string | null
          item_id: string | null
          nota_fiscal: string | null
          nota_fiscal_url: string | null
          observacao: string | null
          observacoes: string | null
          origem_importacao: string | null
          quantidade: number | null
          responsavel_nome: string | null
          user_id: string | null
          valor_total: number | null
          valor_unitario: number | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          data_entrada?: string | null
          empresa?: string | null
          fornecedor?: string | null
          id?: string | null
          importacao_lote_id?: string | null
          item_id?: string | null
          nota_fiscal?: string | null
          nota_fiscal_url?: string | null
          observacao?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          quantidade?: number | null
          responsavel_nome?: string | null
          user_id?: string | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          data_entrada?: string | null
          empresa?: string | null
          fornecedor?: string | null
          id?: string | null
          importacao_lote_id?: string | null
          item_id?: string | null
          nota_fiscal?: string | null
          nota_fiscal_url?: string | null
          observacao?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          quantidade?: number | null
          responsavel_nome?: string | null
          user_id?: string | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Relationships: []
      }
      almoxarifado_backup_20260910_importacoes: {
        Row: {
          arquivo_hash: string | null
          arquivo_nome: string | null
          confirmado_em: string | null
          created_at: string | null
          id: string | null
          resumo: Json | null
          status: string | null
          usuario_id: string | null
        }
        Insert: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          confirmado_em?: string | null
          created_at?: string | null
          id?: string | null
          resumo?: Json | null
          status?: string | null
          usuario_id?: string | null
        }
        Update: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          confirmado_em?: string | null
          created_at?: string | null
          id?: string | null
          resumo?: Json | null
          status?: string | null
          usuario_id?: string | null
        }
        Relationships: []
      }
      almoxarifado_backup_20260910_itens: {
        Row: {
          aplicacao: string | null
          ativo: boolean | null
          categoria: string | null
          codigo_alternativo: string | null
          codigo_barras: string | null
          codigo_sku: string | null
          codigo_topac: string | null
          company_id: string | null
          created_at: string | null
          descricao: string | null
          empresa: string | null
          estoque_minimo: number | null
          id: string | null
          importacao_lote_id: string | null
          inativo_em: string | null
          localizacao: string | null
          nome: string | null
          observacoes: string | null
          origem_importacao: string | null
          quantidade: number | null
          unidade: string | null
          updated_at: string | null
          user_id: string | null
          valor_unitario: number | null
        }
        Insert: {
          aplicacao?: string | null
          ativo?: boolean | null
          categoria?: string | null
          codigo_alternativo?: string | null
          codigo_barras?: string | null
          codigo_sku?: string | null
          codigo_topac?: string | null
          company_id?: string | null
          created_at?: string | null
          descricao?: string | null
          empresa?: string | null
          estoque_minimo?: number | null
          id?: string | null
          importacao_lote_id?: string | null
          inativo_em?: string | null
          localizacao?: string | null
          nome?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          quantidade?: number | null
          unidade?: string | null
          updated_at?: string | null
          user_id?: string | null
          valor_unitario?: number | null
        }
        Update: {
          aplicacao?: string | null
          ativo?: boolean | null
          categoria?: string | null
          codigo_alternativo?: string | null
          codigo_barras?: string | null
          codigo_sku?: string | null
          codigo_topac?: string | null
          company_id?: string | null
          created_at?: string | null
          descricao?: string | null
          empresa?: string | null
          estoque_minimo?: number | null
          id?: string | null
          importacao_lote_id?: string | null
          inativo_em?: string | null
          localizacao?: string | null
          nome?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          quantidade?: number | null
          unidade?: string | null
          updated_at?: string | null
          user_id?: string | null
          valor_unitario?: number | null
        }
        Relationships: []
      }
      almoxarifado_backup_20260910_saidas: {
        Row: {
          company_id: string | null
          created_at: string | null
          data_saida: string | null
          empresa: string | null
          equipamento: string | null
          equipe: string | null
          ficha: string | null
          funcionario_id: string | null
          funcionario_nome: string | null
          id: string | null
          importacao_lote_id: string | null
          item_id: string | null
          mecanico_nome: string | null
          motivo: string | null
          numero_serie: string | null
          observacao: string | null
          observacoes: string | null
          ordem_servico: string | null
          origem_importacao: string | null
          patrimonio: string | null
          quantidade: number | null
          quantidade_devolvida: number | null
          quantidade_entregue: number | null
          quantidade_utilizada: number | null
          responsavel_liberacao: string | null
          user_id: string | null
          veiculo: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          data_saida?: string | null
          empresa?: string | null
          equipamento?: string | null
          equipe?: string | null
          ficha?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string | null
          importacao_lote_id?: string | null
          item_id?: string | null
          mecanico_nome?: string | null
          motivo?: string | null
          numero_serie?: string | null
          observacao?: string | null
          observacoes?: string | null
          ordem_servico?: string | null
          origem_importacao?: string | null
          patrimonio?: string | null
          quantidade?: number | null
          quantidade_devolvida?: number | null
          quantidade_entregue?: number | null
          quantidade_utilizada?: number | null
          responsavel_liberacao?: string | null
          user_id?: string | null
          veiculo?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          data_saida?: string | null
          empresa?: string | null
          equipamento?: string | null
          equipe?: string | null
          ficha?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string | null
          id?: string | null
          importacao_lote_id?: string | null
          item_id?: string | null
          mecanico_nome?: string | null
          motivo?: string | null
          numero_serie?: string | null
          observacao?: string | null
          observacoes?: string | null
          ordem_servico?: string | null
          origem_importacao?: string | null
          patrimonio?: string | null
          quantidade?: number | null
          quantidade_devolvida?: number | null
          quantidade_entregue?: number | null
          quantidade_utilizada?: number | null
          responsavel_liberacao?: string | null
          user_id?: string | null
          veiculo?: string | null
        }
        Relationships: []
      }
      almoxarifado_backup_20260910_staging: {
        Row: {
          created_at: string | null
          lote_id: string | null
          payload: string | null
          seq: number | null
        }
        Insert: {
          created_at?: string | null
          lote_id?: string | null
          payload?: string | null
          seq?: number | null
        }
        Update: {
          created_at?: string | null
          lote_id?: string | null
          payload?: string | null
          seq?: number | null
        }
        Relationships: []
      }
      almoxarifado_carga_itens: {
        Row: {
          carga_id: string
          created_at: string
          id: string
          item_id: string
          observacoes: string | null
          quantidade_devolvida: number
          quantidade_entregue: number
          quantidade_utilizada: number
          saldo_em_posse: number | null
        }
        Insert: {
          carga_id: string
          created_at?: string
          id?: string
          item_id: string
          observacoes?: string | null
          quantidade_devolvida?: number
          quantidade_entregue?: number
          quantidade_utilizada?: number
          saldo_em_posse?: number | null
        }
        Update: {
          carga_id?: string
          created_at?: string
          id?: string
          item_id?: string
          observacoes?: string | null
          quantidade_devolvida?: number
          quantidade_entregue?: number
          quantidade_utilizada?: number
          saldo_em_posse?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_carga_itens_carga_id_fkey"
            columns: ["carga_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_cargas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_carga_itens_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_carga_itens_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_carga_itens_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_carga_itens_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_cargas: {
        Row: {
          assinado_em: string | null
          assinatura_nome: string | null
          company_id: string | null
          created_at: string
          data_carga: string
          destino_company_id: string | null
          documento_url: string | null
          empresa: string | null
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          importacao_lote_id: string | null
          observacoes: string | null
          origem_importacao: string | null
          placa: string | null
          protocolo: string | null
          status: string
          status_assinatura: string
          tipo: string
          updated_at: string
          user_id: string | null
          veiculo: string | null
        }
        Insert: {
          assinado_em?: string | null
          assinatura_nome?: string | null
          company_id?: string | null
          created_at?: string
          data_carga?: string
          destino_company_id?: string | null
          documento_url?: string | null
          empresa?: string | null
          funcionario_id?: string | null
          funcionario_nome: string
          id?: string
          importacao_lote_id?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          placa?: string | null
          protocolo?: string | null
          status?: string
          status_assinatura?: string
          tipo?: string
          updated_at?: string
          user_id?: string | null
          veiculo?: string | null
        }
        Update: {
          assinado_em?: string | null
          assinatura_nome?: string | null
          company_id?: string | null
          created_at?: string
          data_carga?: string
          destino_company_id?: string | null
          documento_url?: string | null
          empresa?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          importacao_lote_id?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          placa?: string | null
          protocolo?: string | null
          status?: string
          status_assinatura?: string
          tipo?: string
          updated_at?: string
          user_id?: string | null
          veiculo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_cargas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_cargas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_cargas_destino_company_id_fkey"
            columns: ["destino_company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_cargas_destino_company_id_fkey"
            columns: ["destino_company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      almoxarifado_cargas_livres: {
        Row: {
          carga_id: string
          created_at: string
          itens: Json
          texto_original: string
        }
        Insert: {
          carga_id: string
          created_at?: string
          itens: Json
          texto_original: string
        }
        Update: {
          carga_id?: string
          created_at?: string
          itens?: Json
          texto_original?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_cargas_livres_carga_id_fkey"
            columns: ["carga_id"]
            isOneToOne: true
            referencedRelation: "almoxarifado_cargas"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_documentos_assinados: {
        Row: {
          arquivo_nome: string | null
          arquivo_url: string
          created_at: string
          data_referencia: string
          enviado_por: string | null
          enviado_por_nome: string | null
          fechamento_funcionario_id: string | null
          funcionario_id: string | null
          funcionario_nome: string
          id: string
        }
        Insert: {
          arquivo_nome?: string | null
          arquivo_url: string
          created_at?: string
          data_referencia: string
          enviado_por?: string | null
          enviado_por_nome?: string | null
          fechamento_funcionario_id?: string | null
          funcionario_id?: string | null
          funcionario_nome: string
          id?: string
        }
        Update: {
          arquivo_nome?: string | null
          arquivo_url?: string
          created_at?: string
          data_referencia?: string
          enviado_por?: string | null
          enviado_por_nome?: string | null
          fechamento_funcionario_id?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_documentos_assinado_fechamento_funcionario_id_fkey"
            columns: ["fechamento_funcionario_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_fechamentos_funcionario"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_documentos_assinados_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_documentos_assinados_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      almoxarifado_entradas: {
        Row: {
          cancelado_em: string | null
          cancelado_por: string | null
          company_id: string | null
          created_at: string
          data_entrada: string | null
          data_planilha_texto: string | null
          descricao_nf_planilha: string | null
          descricao_planilha: string | null
          emissao_planilha_texto: string | null
          empresa: string | null
          empresa_compra_planilha: string | null
          empresa_venda_planilha: string | null
          fornecedor: string | null
          hora_informada: boolean
          id: string
          importacao_lote_id: string | null
          item_id: string
          nota_fiscal: string | null
          nota_fiscal_url: string | null
          observacao: string | null
          observacoes: string | null
          origem_importacao: string | null
          quantidade: number
          responsavel_nome: string | null
          user_id: string | null
          valor_total: number
          valor_unitario: number
        }
        Insert: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          company_id?: string | null
          created_at?: string
          data_entrada?: string | null
          data_planilha_texto?: string | null
          descricao_nf_planilha?: string | null
          descricao_planilha?: string | null
          emissao_planilha_texto?: string | null
          empresa?: string | null
          empresa_compra_planilha?: string | null
          empresa_venda_planilha?: string | null
          fornecedor?: string | null
          hora_informada?: boolean
          id?: string
          importacao_lote_id?: string | null
          item_id: string
          nota_fiscal?: string | null
          nota_fiscal_url?: string | null
          observacao?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          quantidade: number
          responsavel_nome?: string | null
          user_id?: string | null
          valor_total?: number
          valor_unitario?: number
        }
        Update: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          company_id?: string | null
          created_at?: string
          data_entrada?: string | null
          data_planilha_texto?: string | null
          descricao_nf_planilha?: string | null
          descricao_planilha?: string | null
          emissao_planilha_texto?: string | null
          empresa?: string | null
          empresa_compra_planilha?: string | null
          empresa_venda_planilha?: string | null
          fornecedor?: string | null
          hora_informada?: boolean
          id?: string
          importacao_lote_id?: string | null
          item_id?: string
          nota_fiscal?: string | null
          nota_fiscal_url?: string | null
          observacao?: string | null
          observacoes?: string | null
          origem_importacao?: string | null
          quantidade?: number
          responsavel_nome?: string | null
          user_id?: string | null
          valor_total?: number
          valor_unitario?: number
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_entradas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_entradas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_entradas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_entradas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_entradas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_entradas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_fechamentos: {
        Row: {
          company_id: string | null
          created_at: string
          data_fechamento: string
          empresa: string
          fechado_em: string
          fechado_por: string | null
          fechado_por_nome: string | null
          id: string
          motivo_reabertura: string | null
          quantidade_movimentacoes: number
          reaberto: boolean
          reaberto_em: string | null
          reaberto_por: string | null
          reaberto_por_nome: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          data_fechamento: string
          empresa: string
          fechado_em?: string
          fechado_por?: string | null
          fechado_por_nome?: string | null
          id?: string
          motivo_reabertura?: string | null
          quantidade_movimentacoes?: number
          reaberto?: boolean
          reaberto_em?: string | null
          reaberto_por?: string | null
          reaberto_por_nome?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          data_fechamento?: string
          empresa?: string
          fechado_em?: string
          fechado_por?: string | null
          fechado_por_nome?: string | null
          id?: string
          motivo_reabertura?: string | null
          quantidade_movimentacoes?: number
          reaberto?: boolean
          reaberto_em?: string | null
          reaberto_por?: string | null
          reaberto_por_nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_fechamentos_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_fechamentos_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      almoxarifado_fechamentos_funcionario: {
        Row: {
          assinado_digital_em: string | null
          assinatura_nome: string | null
          company_id: string | null
          created_at: string
          data: string
          empresa_nome: string | null
          funcionario_id: string
          funcionario_nome: string
          gerado_em: string
          gerado_por: string | null
          id: string
          impresso_em: string | null
          impresso_por: string | null
          movimentacoes: Json
          protocolo: string
          status: string
          total_itens: number
          total_movimentacoes: number
          updated_at: string
        }
        Insert: {
          assinado_digital_em?: string | null
          assinatura_nome?: string | null
          company_id?: string | null
          created_at?: string
          data: string
          empresa_nome?: string | null
          funcionario_id: string
          funcionario_nome: string
          gerado_em?: string
          gerado_por?: string | null
          id?: string
          impresso_em?: string | null
          impresso_por?: string | null
          movimentacoes?: Json
          protocolo: string
          status?: string
          total_itens?: number
          total_movimentacoes?: number
          updated_at?: string
        }
        Update: {
          assinado_digital_em?: string | null
          assinatura_nome?: string | null
          company_id?: string | null
          created_at?: string
          data?: string
          empresa_nome?: string | null
          funcionario_id?: string
          funcionario_nome?: string
          gerado_em?: string
          gerado_por?: string | null
          id?: string
          impresso_em?: string | null
          impresso_por?: string | null
          movimentacoes?: Json
          protocolo?: string
          status?: string
          total_itens?: number
          total_movimentacoes?: number
          updated_at?: string
        }
        Relationships: []
      }
      almoxarifado_fechamentos_mensais: {
        Row: {
          company_id: string | null
          competencia: string
          detalhe: Json
          empresa_nome: string | null
          fechado_em: string
          fechado_por: string | null
          fechado_por_nome: string | null
          id: string
          resumo: Json
        }
        Insert: {
          company_id?: string | null
          competencia: string
          detalhe?: Json
          empresa_nome?: string | null
          fechado_em?: string
          fechado_por?: string | null
          fechado_por_nome?: string | null
          id?: string
          resumo?: Json
        }
        Update: {
          company_id?: string | null
          competencia?: string
          detalhe?: Json
          empresa_nome?: string | null
          fechado_em?: string
          fechado_por?: string | null
          fechado_por_nome?: string | null
          id?: string
          resumo?: Json
        }
        Relationships: []
      }
      almoxarifado_ferramentas: {
        Row: {
          codigo: string | null
          company_id: string | null
          created_at: string
          descricao: string
          devolvida_em: string | null
          empresa: string | null
          entregue_em: string | null
          id: string
          item_id: string | null
          numero_serie: string | null
          observacoes: string | null
          patrimonio: string | null
          responsavel_id: string | null
          responsavel_nome: string | null
          status: string
          updated_at: string
        }
        Insert: {
          codigo?: string | null
          company_id?: string | null
          created_at?: string
          descricao: string
          devolvida_em?: string | null
          empresa?: string | null
          entregue_em?: string | null
          id?: string
          item_id?: string | null
          numero_serie?: string | null
          observacoes?: string | null
          patrimonio?: string | null
          responsavel_id?: string | null
          responsavel_nome?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          codigo?: string | null
          company_id?: string | null
          created_at?: string
          descricao?: string
          devolvida_em?: string | null
          empresa?: string | null
          entregue_em?: string | null
          id?: string
          item_id?: string | null
          numero_serie?: string | null
          observacoes?: string | null
          patrimonio?: string | null
          responsavel_id?: string | null
          responsavel_nome?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_ferramentas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_ferramentas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_ferramentas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_ferramentas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_ferramentas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_ferramentas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_import_dicionario: {
        Row: {
          idx: number
          lote_id: string
          tipo: string
          valor: string
        }
        Insert: {
          idx: number
          lote_id: string
          tipo: string
          valor: string
        }
        Update: {
          idx?: number
          lote_id?: string
          tipo?: string
          valor?: string
        }
        Relationships: []
      }
      almoxarifado_import_payload_staging: {
        Row: {
          created_at: string
          lote_id: string
          payload: string
          seq: number
        }
        Insert: {
          created_at?: string
          lote_id: string
          payload: string
          seq: number
        }
        Update: {
          created_at?: string
          lote_id?: string
          payload?: string
          seq?: number
        }
        Relationships: []
      }
      almoxarifado_importacao_erros: {
        Row: {
          aba: string | null
          codigo: string | null
          created_at: string
          dados: Json | null
          id: string
          linha: number | null
          lote_id: string
          mensagem: string
          tipo: string
        }
        Insert: {
          aba?: string | null
          codigo?: string | null
          created_at?: string
          dados?: Json | null
          id?: string
          linha?: number | null
          lote_id: string
          mensagem: string
          tipo: string
        }
        Update: {
          aba?: string | null
          codigo?: string | null
          created_at?: string
          dados?: Json | null
          id?: string
          linha?: number | null
          lote_id?: string
          mensagem?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_importacao_erros_lote_id_fkey"
            columns: ["lote_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_importacoes"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_importacoes: {
        Row: {
          arquivo_hash: string | null
          arquivo_nome: string
          confirmado_em: string | null
          created_at: string
          id: string
          resumo: Json
          status: string
          usuario_id: string | null
        }
        Insert: {
          arquivo_hash?: string | null
          arquivo_nome: string
          confirmado_em?: string | null
          created_at?: string
          id?: string
          resumo?: Json
          status?: string
          usuario_id?: string | null
        }
        Update: {
          arquivo_hash?: string | null
          arquivo_nome?: string
          confirmado_em?: string | null
          created_at?: string
          id?: string
          resumo?: Json
          status?: string
          usuario_id?: string | null
        }
        Relationships: []
      }
      almoxarifado_itens: {
        Row: {
          aplicacao: string | null
          ativo: boolean
          categoria: string | null
          codigo_alternativo: string | null
          codigo_barras: string | null
          codigo_sku: string | null
          codigo_topac: string | null
          company_id: string | null
          created_at: string
          descricao: string | null
          empresa: string | null
          estoque_minimo: number
          id: string
          importacao_lote_id: string | null
          inativo_em: string | null
          localizacao: string | null
          nome: string
          observacoes: string | null
          origem_importacao: string | null
          planilha_ajuste_aumentar: number | null
          planilha_ajuste_diminuir: number | null
          planilha_entrada_total: number | null
          planilha_linha: number | null
          planilha_saida_total: number | null
          planilha_status: string | null
          planilha_ultima_saida: string | null
          planilha_ultimo_pedido: string | null
          planilha_valor_estoque: number | null
          quantidade: number
          unidade: string
          updated_at: string
          user_id: string | null
          valor_unitario: number
        }
        Insert: {
          aplicacao?: string | null
          ativo?: boolean
          categoria?: string | null
          codigo_alternativo?: string | null
          codigo_barras?: string | null
          codigo_sku?: string | null
          codigo_topac?: string | null
          company_id?: string | null
          created_at?: string
          descricao?: string | null
          empresa?: string | null
          estoque_minimo?: number
          id?: string
          importacao_lote_id?: string | null
          inativo_em?: string | null
          localizacao?: string | null
          nome: string
          observacoes?: string | null
          origem_importacao?: string | null
          planilha_ajuste_aumentar?: number | null
          planilha_ajuste_diminuir?: number | null
          planilha_entrada_total?: number | null
          planilha_linha?: number | null
          planilha_saida_total?: number | null
          planilha_status?: string | null
          planilha_ultima_saida?: string | null
          planilha_ultimo_pedido?: string | null
          planilha_valor_estoque?: number | null
          quantidade?: number
          unidade?: string
          updated_at?: string
          user_id?: string | null
          valor_unitario?: number
        }
        Update: {
          aplicacao?: string | null
          ativo?: boolean
          categoria?: string | null
          codigo_alternativo?: string | null
          codigo_barras?: string | null
          codigo_sku?: string | null
          codigo_topac?: string | null
          company_id?: string | null
          created_at?: string
          descricao?: string | null
          empresa?: string | null
          estoque_minimo?: number
          id?: string
          importacao_lote_id?: string | null
          inativo_em?: string | null
          localizacao?: string | null
          nome?: string
          observacoes?: string | null
          origem_importacao?: string | null
          planilha_ajuste_aumentar?: number | null
          planilha_ajuste_diminuir?: number | null
          planilha_entrada_total?: number | null
          planilha_linha?: number | null
          planilha_saida_total?: number | null
          planilha_status?: string | null
          planilha_ultima_saida?: string | null
          planilha_ultimo_pedido?: string | null
          planilha_valor_estoque?: number | null
          quantidade?: number
          unidade?: string
          updated_at?: string
          user_id?: string | null
          valor_unitario?: number
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_itens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_itens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      almoxarifado_planilha_raw: {
        Row: {
          aba: string
          arquivo_hash: string
          arquivo_nome: string
          created_at: string
          dados: Json
          id: number
          linha: number
          lote_id: string
        }
        Insert: {
          aba: string
          arquivo_hash: string
          arquivo_nome: string
          created_at?: string
          dados?: Json
          id?: never
          linha: number
          lote_id: string
        }
        Update: {
          aba?: string
          arquivo_hash?: string
          arquivo_nome?: string
          created_at?: string
          dados?: Json
          id?: never
          linha?: number
          lote_id?: string
        }
        Relationships: []
      }
      almoxarifado_saidas: {
        Row: {
          cancelado_em: string | null
          cancelado_por: string | null
          company_id: string | null
          created_at: string
          data_planilha_texto: string | null
          data_saida: string | null
          descricao_planilha: string | null
          empresa: string | null
          equipamento: string | null
          equipe: string | null
          ficha: string | null
          ficha_planilha_texto: string | null
          funcionario_id: string | null
          funcionario_nome: string | null
          hora_informada: boolean
          id: string
          importacao_lote_id: string | null
          item_id: string
          mecanico_nome: string | null
          motivo: string | null
          numero_serie: string | null
          observacao: string | null
          observacoes: string | null
          ordem_servico: string | null
          origem_importacao: string | null
          patrimonio: string | null
          patrimonio_planilha_texto: string | null
          quantidade: number
          quantidade_devolvida: number
          quantidade_entregue: number | null
          quantidade_planilha_texto: string | null
          quantidade_utilizada: number | null
          responsavel_liberacao: string | null
          user_id: string | null
          veiculo: string | null
        }
        Insert: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          company_id?: string | null
          created_at?: string
          data_planilha_texto?: string | null
          data_saida?: string | null
          descricao_planilha?: string | null
          empresa?: string | null
          equipamento?: string | null
          equipe?: string | null
          ficha?: string | null
          ficha_planilha_texto?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string | null
          hora_informada?: boolean
          id?: string
          importacao_lote_id?: string | null
          item_id: string
          mecanico_nome?: string | null
          motivo?: string | null
          numero_serie?: string | null
          observacao?: string | null
          observacoes?: string | null
          ordem_servico?: string | null
          origem_importacao?: string | null
          patrimonio?: string | null
          patrimonio_planilha_texto?: string | null
          quantidade: number
          quantidade_devolvida?: number
          quantidade_entregue?: number | null
          quantidade_planilha_texto?: string | null
          quantidade_utilizada?: number | null
          responsavel_liberacao?: string | null
          user_id?: string | null
          veiculo?: string | null
        }
        Update: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          company_id?: string | null
          created_at?: string
          data_planilha_texto?: string | null
          data_saida?: string | null
          descricao_planilha?: string | null
          empresa?: string | null
          equipamento?: string | null
          equipe?: string | null
          ficha?: string | null
          ficha_planilha_texto?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string | null
          hora_informada?: boolean
          id?: string
          importacao_lote_id?: string | null
          item_id?: string
          mecanico_nome?: string | null
          motivo?: string | null
          numero_serie?: string | null
          observacao?: string | null
          observacoes?: string | null
          ordem_servico?: string | null
          origem_importacao?: string | null
          patrimonio?: string | null
          patrimonio_planilha_texto?: string | null
          quantidade?: number
          quantidade_devolvida?: number
          quantidade_entregue?: number | null
          quantidade_planilha_texto?: string | null
          quantidade_utilizada?: number | null
          responsavel_liberacao?: string | null
          user_id?: string | null
          veiculo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_saidas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_transferencias: {
        Row: {
          company_destino_id: string | null
          company_origem_id: string | null
          created_at: string
          empresa_destino: string
          empresa_origem: string
          id: string
          item_id: string
          observacoes: string | null
          quantidade: number
          recebido_em: string | null
          recebido_por: string | null
          solicitado_por: string | null
          status: string
        }
        Insert: {
          company_destino_id?: string | null
          company_origem_id?: string | null
          created_at?: string
          empresa_destino: string
          empresa_origem: string
          id?: string
          item_id: string
          observacoes?: string | null
          quantidade: number
          recebido_em?: string | null
          recebido_por?: string | null
          solicitado_por?: string | null
          status?: string
        }
        Update: {
          company_destino_id?: string | null
          company_origem_id?: string | null
          created_at?: string
          empresa_destino?: string
          empresa_origem?: string
          id?: string
          item_id?: string
          observacoes?: string | null
          quantidade?: number
          recebido_em?: string | null
          recebido_por?: string | null
          solicitado_por?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_transferencias_company_destino_id_fkey"
            columns: ["company_destino_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_company_destino_id_fkey"
            columns: ["company_destino_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_company_origem_id_fkey"
            columns: ["company_origem_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_company_origem_id_fkey"
            columns: ["company_origem_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_transferencias_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_user_context: {
        Row: {
          company_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_user_context_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_user_context_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      alteracoes_salariais: {
        Row: {
          aplicado_em: string | null
          aplicado_por: string | null
          competencia: string
          created_at: string
          email_assunto: string
          email_corpo: string
          empresa_id: string
          funcionario_id: string
          id: string
          observacao: string | null
          percentual: number
          salario_atual: number
          salario_solicitado: number
          solicitado_em: string
          solicitado_por: string | null
          status: string
          updated_at: string
        }
        Insert: {
          aplicado_em?: string | null
          aplicado_por?: string | null
          competencia: string
          created_at?: string
          email_assunto: string
          email_corpo: string
          empresa_id: string
          funcionario_id: string
          id?: string
          observacao?: string | null
          percentual: number
          salario_atual: number
          salario_solicitado: number
          solicitado_em?: string
          solicitado_por?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          aplicado_em?: string | null
          aplicado_por?: string | null
          competencia?: string
          created_at?: string
          email_assunto?: string
          email_corpo?: string
          empresa_id?: string
          funcionario_id?: string
          id?: string
          observacao?: string | null
          percentual?: number
          salario_atual?: number
          salario_solicitado?: number
          solicitado_em?: string
          solicitado_por?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "alteracoes_salariais_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alteracoes_salariais_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "alteracoes_salariais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alteracoes_salariais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      apontamentos_contabilidade: {
        Row: {
          atualizado_por_nome: string | null
          company_id: string | null
          competencia: string
          created_at: string
          criado_por_funcionario_id: string | null
          criado_por_nome: string | null
          criado_por_user_id: string | null
          empresa_nome: string | null
          id: string
          status: string
          total_geral: number
          updated_at: string
        }
        Insert: {
          atualizado_por_nome?: string | null
          company_id?: string | null
          competencia: string
          created_at?: string
          criado_por_funcionario_id?: string | null
          criado_por_nome?: string | null
          criado_por_user_id?: string | null
          empresa_nome?: string | null
          id?: string
          status?: string
          total_geral?: number
          updated_at?: string
        }
        Update: {
          atualizado_por_nome?: string | null
          company_id?: string | null
          competencia?: string
          created_at?: string
          criado_por_funcionario_id?: string | null
          criado_por_nome?: string | null
          criado_por_user_id?: string | null
          empresa_nome?: string | null
          id?: string
          status?: string
          total_geral?: number
          updated_at?: string
        }
        Relationships: []
      }
      apontamentos_contabilidade_itens: {
        Row: {
          adiantamento: number
          adiantamento_manual: boolean
          alterado_em: string | null
          alterado_por_nome: string | null
          apontamento_id: string
          assistencia_medica: number
          comissao: number
          comissao_base: number
          comissao_percentual: number
          comissao_valor: number
          cpf: string | null
          created_at: string
          desconto_dsr: number
          desconto_falta: number
          dsr_qtd: number
          falta_dsr: number
          faltas_qtd: number
          funcionario_id: string | null
          hora_extra_100: number
          hora_extra_100_horas: number
          hora_extra_50: number
          hora_extra_50_horas: number
          hora_extra_60: number
          hora_extra_60_horas: number
          id: string
          insalubridade: number
          nome: string
          salario: number
          tem_comissao: boolean
          total: number
          updated_at: string
        }
        Insert: {
          adiantamento?: number
          adiantamento_manual?: boolean
          alterado_em?: string | null
          alterado_por_nome?: string | null
          apontamento_id: string
          assistencia_medica?: number
          comissao?: number
          comissao_base?: number
          comissao_percentual?: number
          comissao_valor?: number
          cpf?: string | null
          created_at?: string
          desconto_dsr?: number
          desconto_falta?: number
          dsr_qtd?: number
          falta_dsr?: number
          faltas_qtd?: number
          funcionario_id?: string | null
          hora_extra_100?: number
          hora_extra_100_horas?: number
          hora_extra_50?: number
          hora_extra_50_horas?: number
          hora_extra_60?: number
          hora_extra_60_horas?: number
          id?: string
          insalubridade?: number
          nome: string
          salario?: number
          tem_comissao?: boolean
          total?: number
          updated_at?: string
        }
        Update: {
          adiantamento?: number
          adiantamento_manual?: boolean
          alterado_em?: string | null
          alterado_por_nome?: string | null
          apontamento_id?: string
          assistencia_medica?: number
          comissao?: number
          comissao_base?: number
          comissao_percentual?: number
          comissao_valor?: number
          cpf?: string | null
          created_at?: string
          desconto_dsr?: number
          desconto_falta?: number
          dsr_qtd?: number
          falta_dsr?: number
          faltas_qtd?: number
          funcionario_id?: string | null
          hora_extra_100?: number
          hora_extra_100_horas?: number
          hora_extra_50?: number
          hora_extra_50_horas?: number
          hora_extra_60?: number
          hora_extra_60_horas?: number
          id?: string
          insalubridade?: number
          nome?: string
          salario?: number
          tem_comissao?: boolean
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "apontamentos_contabilidade_itens_apontamento_fk"
            columns: ["apontamento_id"]
            isOneToOne: false
            referencedRelation: "apontamentos_contabilidade"
            referencedColumns: ["id"]
          },
        ]
      }
      apontamentos_filial: {
        Row: {
          competencia: string
          conferido_em: string | null
          conferido_por_nome: string | null
          conferido_por_user_id: string | null
          created_at: string
          data: string
          empresa_nome: string
          enviado_em: string | null
          filial: string
          funcionario_id: string
          funcionario_nome: string
          id: string
          motivo_devolucao: string | null
          observacao: string | null
          quantidade: number | null
          registrado_por_nome: string | null
          registrado_por_user_id: string | null
          status: string
          tipo: string
          updated_at: string
          valor: number | null
        }
        Insert: {
          competencia: string
          conferido_em?: string | null
          conferido_por_nome?: string | null
          conferido_por_user_id?: string | null
          created_at?: string
          data: string
          empresa_nome?: string
          enviado_em?: string | null
          filial: string
          funcionario_id: string
          funcionario_nome?: string
          id?: string
          motivo_devolucao?: string | null
          observacao?: string | null
          quantidade?: number | null
          registrado_por_nome?: string | null
          registrado_por_user_id?: string | null
          status?: string
          tipo: string
          updated_at?: string
          valor?: number | null
        }
        Update: {
          competencia?: string
          conferido_em?: string | null
          conferido_por_nome?: string | null
          conferido_por_user_id?: string | null
          created_at?: string
          data?: string
          empresa_nome?: string
          enviado_em?: string | null
          filial?: string
          funcionario_id?: string
          funcionario_nome?: string
          id?: string
          motivo_devolucao?: string | null
          observacao?: string | null
          quantidade?: number | null
          registrado_por_nome?: string | null
          registrado_por_user_id?: string | null
          status?: string
          tipo?: string
          updated_at?: string
          valor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "apontamentos_filial_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "apontamentos_filial_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      app_mecanico_abastecimento_preferencias: {
        Row: {
          acesso_id: string
          updated_at: string
          viagem: boolean
        }
        Insert: {
          acesso_id: string
          updated_at?: string
          viagem?: boolean
        }
        Update: {
          acesso_id?: string
          updated_at?: string
          viagem?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "app_mecanico_abastecimento_preferencias_acesso_id_fkey"
            columns: ["acesso_id"]
            isOneToOne: true
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
        ]
      }
      app_mecanico_localizacao_atual: {
        Row: {
          acesso_id: string
          atualizado_em: string
          consentimento_em: string
          consentimento_versao: string
          direcao_graus: number | null
          em_movimento: boolean
          empresa: string | null
          filial: string | null
          funcionario_id: string | null
          latitude: number
          longitude: number
          nome: string
          origem: string
          precisao_metros: number | null
          ultimo_sinal_timestamp: string
          velocidade_mps: number | null
        }
        Insert: {
          acesso_id: string
          atualizado_em?: string
          consentimento_em?: string
          consentimento_versao: string
          direcao_graus?: number | null
          em_movimento?: boolean
          empresa?: string | null
          filial?: string | null
          funcionario_id?: string | null
          latitude: number
          longitude: number
          nome: string
          origem?: string
          precisao_metros?: number | null
          ultimo_sinal_timestamp?: string
          velocidade_mps?: number | null
        }
        Update: {
          acesso_id?: string
          atualizado_em?: string
          consentimento_em?: string
          consentimento_versao?: string
          direcao_graus?: number | null
          em_movimento?: boolean
          empresa?: string | null
          filial?: string | null
          funcionario_id?: string | null
          latitude?: number
          longitude?: number
          nome?: string
          origem?: string
          precisao_metros?: number | null
          ultimo_sinal_timestamp?: string
          velocidade_mps?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "app_mecanico_localizacao_atual_acesso_id_fkey"
            columns: ["acesso_id"]
            isOneToOne: true
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
        ]
      }
      app_mecanico_login_limites: {
        Row: {
          atualizado_em: string
          bloqueado_ate: string | null
          cpf_hash: string
          falhas: number
        }
        Insert: {
          atualizado_em?: string
          bloqueado_ate?: string | null
          cpf_hash: string
          falhas?: number
        }
        Update: {
          atualizado_em?: string
          bloqueado_ate?: string | null
          cpf_hash?: string
          falhas?: number
        }
        Relationships: []
      }
      app_mecanico_sessao_config: {
        Row: {
          enforcement: boolean
          id: number
          updated_at: string
        }
        Insert: {
          enforcement?: boolean
          id?: number
          updated_at?: string
        }
        Update: {
          enforcement?: boolean
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      app_mecanico_sessoes: {
        Row: {
          acesso_id: string
          criada_em: string
          expira_em: string
          id: string
          revogada_em: string | null
          token_hash: string
        }
        Insert: {
          acesso_id: string
          criada_em?: string
          expira_em: string
          id?: string
          revogada_em?: string | null
          token_hash: string
        }
        Update: {
          acesso_id?: string
          criada_em?: string
          expira_em?: string
          id?: string
          revogada_em?: string | null
          token_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_mecanico_sessoes_acesso_id_fkey"
            columns: ["acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
        ]
      }
      aso_agendamentos: {
        Row: {
          clinica_endereco: string
          company_id: string | null
          cpf: string
          created_at: string
          data_admissao: string | null
          data_exame: string | null
          empresa: string
          espaco_confinado: boolean
          funcao: string
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          obra_local: string
          observacao: string | null
          responsavel_contato: string
          rg: string
          status: string
          tipo_exame: string
          trabalho_altura: boolean
          updated_at: string
          user_id: string | null
        }
        Insert: {
          clinica_endereco?: string
          company_id?: string | null
          cpf?: string
          created_at?: string
          data_admissao?: string | null
          data_exame?: string | null
          empresa?: string
          espaco_confinado?: boolean
          funcao?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          obra_local?: string
          observacao?: string | null
          responsavel_contato?: string
          rg?: string
          status?: string
          tipo_exame?: string
          trabalho_altura?: boolean
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          clinica_endereco?: string
          company_id?: string | null
          cpf?: string
          created_at?: string
          data_admissao?: string | null
          data_exame?: string | null
          empresa?: string
          espaco_confinado?: boolean
          funcao?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          obra_local?: string
          observacao?: string | null
          responsavel_contato?: string
          rg?: string
          status?: string
          tipo_exame?: string
          trabalho_altura?: boolean
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "aso_agendamentos_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aso_agendamentos_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "aso_agendamentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aso_agendamentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      aso_documentos_pendentes: {
        Row: {
          arquivo_url: string | null
          cpf_detectado: string | null
          created_at: string
          email_from: string | null
          email_subject: string | null
          funcionario_id: string | null
          id: string
          motivo: string | null
          nome_arquivo: string
          nome_detectado: string | null
          received_at: string
          status: string
          storage_bucket: string
          storage_path: string
          texto_detectado: string | null
          updated_at: string
          vinculado_documento_id: string | null
          vinculado_em: string | null
          vinculado_por_nome: string | null
          vinculado_por_user_id: string | null
        }
        Insert: {
          arquivo_url?: string | null
          cpf_detectado?: string | null
          created_at?: string
          email_from?: string | null
          email_subject?: string | null
          funcionario_id?: string | null
          id?: string
          motivo?: string | null
          nome_arquivo?: string
          nome_detectado?: string | null
          received_at?: string
          status?: string
          storage_bucket?: string
          storage_path: string
          texto_detectado?: string | null
          updated_at?: string
          vinculado_documento_id?: string | null
          vinculado_em?: string | null
          vinculado_por_nome?: string | null
          vinculado_por_user_id?: string | null
        }
        Update: {
          arquivo_url?: string | null
          cpf_detectado?: string | null
          created_at?: string
          email_from?: string | null
          email_subject?: string | null
          funcionario_id?: string | null
          id?: string
          motivo?: string | null
          nome_arquivo?: string
          nome_detectado?: string | null
          received_at?: string
          status?: string
          storage_bucket?: string
          storage_path?: string
          texto_detectado?: string | null
          updated_at?: string
          vinculado_documento_id?: string | null
          vinculado_em?: string | null
          vinculado_por_nome?: string | null
          vinculado_por_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "aso_documentos_pendentes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aso_documentos_pendentes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "aso_documentos_pendentes_vinculado_documento_id_fkey"
            columns: ["vinculado_documento_id"]
            isOneToOne: false
            referencedRelation: "documentos_funcionario"
            referencedColumns: ["id"]
          },
        ]
      }
      assistente_conversas: {
        Row: {
          created_at: string
          id: string
          titulo: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          titulo?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          titulo?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      assistente_mensagens: {
        Row: {
          content: string
          conversa_id: string
          created_at: string
          data: Json | null
          id: string
          role: string
        }
        Insert: {
          content?: string
          conversa_id: string
          created_at?: string
          data?: Json | null
          id?: string
          role: string
        }
        Update: {
          content?: string
          conversa_id?: string
          created_at?: string
          data?: Json | null
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistente_mensagens_conversa_id_fkey"
            columns: ["conversa_id"]
            isOneToOne: false
            referencedRelation: "assistente_conversas"
            referencedColumns: ["id"]
          },
        ]
      }
      atestados: {
        Row: {
          aplicado_vr: boolean
          aplicado_vt: boolean
          arquivo_nome: string
          arquivo_url: string
          cid: string
          company_id: string
          competencia: string
          created_at: string
          crm: string
          data_fim: string | null
          data_inicio: string | null
          dias_cobertos: number
          empresa_nome: string
          enviado_contabilidade_destinos: string | null
          enviado_contabilidade_em: string | null
          enviado_contabilidade_por: string | null
          funcionario_id: string
          funcionario_nome: string
          id: string
          importado_por_nome: string
          importado_por_user_id: string | null
          medico: string
          ocr_confianca: number
          ocr_texto_bruto: string
          status: string
          updated_at: string
        }
        Insert: {
          aplicado_vr?: boolean
          aplicado_vt?: boolean
          arquivo_nome?: string
          arquivo_url?: string
          cid?: string
          company_id: string
          competencia: string
          created_at?: string
          crm?: string
          data_fim?: string | null
          data_inicio?: string | null
          dias_cobertos?: number
          empresa_nome?: string
          enviado_contabilidade_destinos?: string | null
          enviado_contabilidade_em?: string | null
          enviado_contabilidade_por?: string | null
          funcionario_id: string
          funcionario_nome?: string
          id?: string
          importado_por_nome?: string
          importado_por_user_id?: string | null
          medico?: string
          ocr_confianca?: number
          ocr_texto_bruto?: string
          status?: string
          updated_at?: string
        }
        Update: {
          aplicado_vr?: boolean
          aplicado_vt?: boolean
          arquivo_nome?: string
          arquivo_url?: string
          cid?: string
          company_id?: string
          competencia?: string
          created_at?: string
          crm?: string
          data_fim?: string | null
          data_inicio?: string | null
          dias_cobertos?: number
          empresa_nome?: string
          enviado_contabilidade_destinos?: string | null
          enviado_contabilidade_em?: string | null
          enviado_contabilidade_por?: string | null
          funcionario_id?: string
          funcionario_nome?: string
          id?: string
          importado_por_nome?: string
          importado_por_user_id?: string | null
          medico?: string
          ocr_confianca?: number
          ocr_texto_bruto?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "atestados_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "atestados_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "atestados_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "atestados_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      ativos: {
        Row: {
          ano_fabricacao: string | null
          ano_modelo: string | null
          arquivo_url: string | null
          categoria_veiculo: string
          chassi: string | null
          cor: string
          created_at: string
          descricao: string
          documento_atualizado_em: string | null
          documento_nome: string
          documento_url: string
          empresa: string | null
          id: string
          marca: string
          modelo: string
          observacao: string | null
          patrimonio: string | null
          placa: string | null
          renavam: string | null
          status: string
          tipo: string
          tipo_veiculo: string
          updated_at: string
          user_id: string | null
          vencimento_ipva: string | null
          vencimento_licenciamento: string | null
        }
        Insert: {
          ano_fabricacao?: string | null
          ano_modelo?: string | null
          arquivo_url?: string | null
          categoria_veiculo?: string
          chassi?: string | null
          cor?: string
          created_at?: string
          descricao?: string
          documento_atualizado_em?: string | null
          documento_nome?: string
          documento_url?: string
          empresa?: string | null
          id?: string
          marca?: string
          modelo?: string
          observacao?: string | null
          patrimonio?: string | null
          placa?: string | null
          renavam?: string | null
          status?: string
          tipo?: string
          tipo_veiculo?: string
          updated_at?: string
          user_id?: string | null
          vencimento_ipva?: string | null
          vencimento_licenciamento?: string | null
        }
        Update: {
          ano_fabricacao?: string | null
          ano_modelo?: string | null
          arquivo_url?: string | null
          categoria_veiculo?: string
          chassi?: string | null
          cor?: string
          created_at?: string
          descricao?: string
          documento_atualizado_em?: string | null
          documento_nome?: string
          documento_url?: string
          empresa?: string | null
          id?: string
          marca?: string
          modelo?: string
          observacao?: string | null
          patrimonio?: string | null
          placa?: string | null
          renavam?: string | null
          status?: string
          tipo?: string
          tipo_veiculo?: string
          updated_at?: string
          user_id?: string | null
          vencimento_ipva?: string | null
          vencimento_licenciamento?: string | null
        }
        Relationships: []
      }
      ativos_documentos_historico: {
        Row: {
          ano_fabricacao: string | null
          ano_modelo: string | null
          arquivado_em: string
          arquivado_por: string | null
          ativo_id: string
          chassi: string | null
          descricao: string | null
          documento_atualizado_em: string | null
          documento_nome: string | null
          documento_url: string | null
          empresa: string | null
          id: string
          placa: string | null
          renavam: string | null
        }
        Insert: {
          ano_fabricacao?: string | null
          ano_modelo?: string | null
          arquivado_em?: string
          arquivado_por?: string | null
          ativo_id: string
          chassi?: string | null
          descricao?: string | null
          documento_atualizado_em?: string | null
          documento_nome?: string | null
          documento_url?: string | null
          empresa?: string | null
          id?: string
          placa?: string | null
          renavam?: string | null
        }
        Update: {
          ano_fabricacao?: string | null
          ano_modelo?: string | null
          arquivado_em?: string
          arquivado_por?: string | null
          ativo_id?: string
          chassi?: string | null
          descricao?: string | null
          documento_atualizado_em?: string | null
          documento_nome?: string | null
          documento_url?: string | null
          empresa?: string | null
          id?: string
          placa?: string | null
          renavam?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ativos_documentos_historico_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
        ]
      }
      benefit_generations: {
        Row: {
          company_id: string
          competencia: string
          data_pagamento: string | null
          dias_pagos: number
          generated_at: string
          generated_by: string | null
          id: string
          report_snapshot: Json
          tipo: string
          total: number
          updated_at: string
        }
        Insert: {
          company_id: string
          competencia: string
          data_pagamento?: string | null
          dias_pagos: number
          generated_at?: string
          generated_by?: string | null
          id?: string
          report_snapshot?: Json
          tipo: string
          total?: number
          updated_at?: string
        }
        Update: {
          company_id?: string
          competencia?: string
          data_pagamento?: string | null
          dias_pagos?: number
          generated_at?: string
          generated_by?: string | null
          id?: string
          report_snapshot?: Json
          tipo?: string
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "benefit_generations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "benefit_generations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      cadastros_pendentes: {
        Row: {
          aprovado_em: string | null
          aprovado_por: string | null
          auth_user_id: string | null
          bloqueado: boolean
          cpf: string | null
          created_at: string
          email: string
          email_confirmed_at: string | null
          email_confirmed_manual: boolean
          id: string
          last_resend_at: string | null
          motivo: string
          nome_completo: string
          resend_count: number
          status: string
          telefone: string
          ultimo_erro_email: string | null
          updated_at: string
        }
        Insert: {
          aprovado_em?: string | null
          aprovado_por?: string | null
          auth_user_id?: string | null
          bloqueado?: boolean
          cpf?: string | null
          created_at?: string
          email: string
          email_confirmed_at?: string | null
          email_confirmed_manual?: boolean
          id?: string
          last_resend_at?: string | null
          motivo?: string
          nome_completo?: string
          resend_count?: number
          status?: string
          telefone?: string
          ultimo_erro_email?: string | null
          updated_at?: string
        }
        Update: {
          aprovado_em?: string | null
          aprovado_por?: string | null
          auth_user_id?: string | null
          bloqueado?: boolean
          cpf?: string | null
          created_at?: string
          email?: string
          email_confirmed_at?: string | null
          email_confirmed_manual?: boolean
          id?: string
          last_resend_at?: string | null
          motivo?: string
          nome_completo?: string
          resend_count?: number
          status?: string
          telefone?: string
          ultimo_erro_email?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      cartoes_ponto: {
        Row: {
          arquivo_nome: string
          arquivo_url: string
          company_id: string | null
          competencia: string
          conferido_em: string | null
          conferido_por_nome: string
          conferido_por_user_id: string | null
          created_at: string
          dias_json: Json
          divergencias_json: Json
          empresa_nome: string
          enviado_fechamento: boolean
          enviado_fechamento_em: string | null
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          importado_por_nome: string
          importado_por_user_id: string
          motivo_ignorado: string
          observacao: string
          ocr_confianca: number
          origem: string
          status_conferencia: string
          totais_json: Json
          updated_at: string
        }
        Insert: {
          arquivo_nome?: string
          arquivo_url?: string
          company_id?: string | null
          competencia?: string
          conferido_em?: string | null
          conferido_por_nome?: string
          conferido_por_user_id?: string | null
          created_at?: string
          dias_json?: Json
          divergencias_json?: Json
          empresa_nome?: string
          enviado_fechamento?: boolean
          enviado_fechamento_em?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          importado_por_nome?: string
          importado_por_user_id: string
          motivo_ignorado?: string
          observacao?: string
          ocr_confianca?: number
          origem?: string
          status_conferencia?: string
          totais_json?: Json
          updated_at?: string
        }
        Update: {
          arquivo_nome?: string
          arquivo_url?: string
          company_id?: string | null
          competencia?: string
          conferido_em?: string | null
          conferido_por_nome?: string
          conferido_por_user_id?: string | null
          created_at?: string
          dias_json?: Json
          divergencias_json?: Json
          empresa_nome?: string
          enviado_fechamento?: boolean
          enviado_fechamento_em?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          importado_por_nome?: string
          importado_por_user_id?: string
          motivo_ignorado?: string
          observacao?: string
          ocr_confianca?: number
          origem?: string
          status_conferencia?: string
          totais_json?: Json
          updated_at?: string
        }
        Relationships: []
      }
      categorias_financeiras: {
        Row: {
          ativa: boolean
          created_at: string
          descricao: string | null
          id: string
          nome: string
          tipo: string
        }
        Insert: {
          ativa?: boolean
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          tipo?: string
        }
        Update: {
          ativa?: boolean
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          tipo?: string
        }
        Relationships: []
      }
      centros_custo: {
        Row: {
          codigo: string
          created_at: string
          descricao: string | null
          empresa_id: string | null
          id: string
          nome: string
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          codigo: string
          created_at?: string
          descricao?: string | null
          empresa_id?: string | null
          id?: string
          nome: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          codigo?: string
          created_at?: string
          descricao?: string | null
          empresa_id?: string | null
          id?: string
          nome?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "centros_custo_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "centros_custo_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      chamado_adicionais: {
        Row: {
          chamado_id: string
          created_at: string
          descricao_identificada: string
          id: string
          latitude: number | null
          longitude: number | null
          mecanico_acesso_id: string | null
          mecanico_funcionario_id: string | null
          mecanico_nome: string | null
          observacao: string | null
          servico_executado: string
          status: string
          visualizado_em: string | null
          visualizado_por_operador_id: string | null
        }
        Insert: {
          chamado_id: string
          created_at?: string
          descricao_identificada: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          mecanico_acesso_id?: string | null
          mecanico_funcionario_id?: string | null
          mecanico_nome?: string | null
          observacao?: string | null
          servico_executado: string
          status?: string
          visualizado_em?: string | null
          visualizado_por_operador_id?: string | null
        }
        Update: {
          chamado_id?: string
          created_at?: string
          descricao_identificada?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          mecanico_acesso_id?: string | null
          mecanico_funcionario_id?: string | null
          mecanico_nome?: string | null
          observacao?: string | null
          servico_executado?: string
          status?: string
          visualizado_em?: string | null
          visualizado_por_operador_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chamado_adicionais_chamado_id_fkey"
            columns: ["chamado_id"]
            isOneToOne: false
            referencedRelation: "chamados"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_adicionais_mecanico_acesso_id_fkey"
            columns: ["mecanico_acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_adicionais_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_adicionais_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "chamado_adicionais_visualizado_por_operador_id_fkey"
            columns: ["visualizado_por_operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
        ]
      }
      chamado_eventos: {
        Row: {
          autor_nome: string | null
          chamado_id: string
          created_at: string
          detalhes: Json
          id: string
          latitude: number | null
          longitude: number | null
          mecanico_acesso_id: string | null
          mecanico_funcionario_id: string | null
          operador_id: string | null
          status: string | null
          tipo: string
        }
        Insert: {
          autor_nome?: string | null
          chamado_id: string
          created_at?: string
          detalhes?: Json
          id?: string
          latitude?: number | null
          longitude?: number | null
          mecanico_acesso_id?: string | null
          mecanico_funcionario_id?: string | null
          operador_id?: string | null
          status?: string | null
          tipo: string
        }
        Update: {
          autor_nome?: string | null
          chamado_id?: string
          created_at?: string
          detalhes?: Json
          id?: string
          latitude?: number | null
          longitude?: number | null
          mecanico_acesso_id?: string | null
          mecanico_funcionario_id?: string | null
          operador_id?: string | null
          status?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "chamado_eventos_chamado_id_fkey"
            columns: ["chamado_id"]
            isOneToOne: false
            referencedRelation: "chamados"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_eventos_mecanico_acesso_id_fkey"
            columns: ["mecanico_acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_eventos_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_eventos_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "chamado_eventos_operador_id_fkey"
            columns: ["operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
        ]
      }
      chamado_itens_utilizados: {
        Row: {
          chamado_id: string
          created_at: string
          id: string
          item_id: string
          nome_item: string
          quantidade: number
        }
        Insert: {
          chamado_id: string
          created_at?: string
          id?: string
          item_id: string
          nome_item?: string
          quantidade?: number
        }
        Update: {
          chamado_id?: string
          created_at?: string
          id?: string
          item_id?: string
          nome_item?: string
          quantidade?: number
        }
        Relationships: [
          {
            foreignKeyName: "chamado_itens_utilizados_chamado_id_fkey"
            columns: ["chamado_id"]
            isOneToOne: false
            referencedRelation: "chamados"
            referencedColumns: ["id"]
          },
        ]
      }
      chamado_materiais: {
        Row: {
          adicional_id: string | null
          almoxarifado_item_id: string | null
          chamado_id: string
          created_at: string
          descricao: string
          id: string
          mecanico_acesso_id: string | null
          mecanico_funcionario_id: string | null
          quantidade: number
          unidade: string | null
        }
        Insert: {
          adicional_id?: string | null
          almoxarifado_item_id?: string | null
          chamado_id: string
          created_at?: string
          descricao: string
          id?: string
          mecanico_acesso_id?: string | null
          mecanico_funcionario_id?: string | null
          quantidade?: number
          unidade?: string | null
        }
        Update: {
          adicional_id?: string | null
          almoxarifado_item_id?: string | null
          chamado_id?: string
          created_at?: string
          descricao?: string
          id?: string
          mecanico_acesso_id?: string | null
          mecanico_funcionario_id?: string | null
          quantidade?: number
          unidade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chamado_materiais_adicional_id_fkey"
            columns: ["adicional_id"]
            isOneToOne: false
            referencedRelation: "chamado_adicionais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_materiais_almoxarifado_item_id_fkey"
            columns: ["almoxarifado_item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "chamado_materiais_almoxarifado_item_id_fkey"
            columns: ["almoxarifado_item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_materiais_almoxarifado_item_id_fkey"
            columns: ["almoxarifado_item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "chamado_materiais_almoxarifado_item_id_fkey"
            columns: ["almoxarifado_item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_materiais_chamado_id_fkey"
            columns: ["chamado_id"]
            isOneToOne: false
            referencedRelation: "chamados"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_materiais_mecanico_acesso_id_fkey"
            columns: ["mecanico_acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_materiais_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamado_materiais_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      chamados: {
        Row: {
          aceito_em: string | null
          aceito_por_acesso_id: string | null
          aceito_por_nome: string | null
          alocacao_id: string | null
          atribuido_em: string | null
          cancelado_em: string | null
          cancelado_por_operador_id: string | null
          cancelamento_motivo: string | null
          chegada_em: string | null
          cliente: string
          cliente_id: string | null
          cliente_local_id: string | null
          colaborador_id: string | null
          concluido_em: string | null
          contrato_id: string | null
          created_at: string
          criado_por: string | null
          descricao_conclusao: string | null
          em_deslocamento_em: string | null
          email_formalizacao_em: string | null
          email_formalizacao_status: string | null
          equipamento_id: string | null
          fim_latitude: number | null
          fim_longitude: number | null
          id: string
          info_adicional: string | null
          inicio_atendimento_em: string | null
          inicio_latitude: number | null
          inicio_longitude: number | null
          itens_previstos: string | null
          latitude: number | null
          local_servico: string
          longitude: number | null
          notificacao_pendente: boolean
          numero: number | null
          observacoes: string | null
          operador_abertura_id: string | null
          operador_abertura_nome: string | null
          origem: string | null
          patrimonio_snapshot: string | null
          placa_snapshot: string | null
          solicitante_contato: string | null
          solicitante_nome: string | null
          status: string
          tipo_servico: string
          updated_at: string
          veiculo_id: string | null
        }
        Insert: {
          aceito_em?: string | null
          aceito_por_acesso_id?: string | null
          aceito_por_nome?: string | null
          alocacao_id?: string | null
          atribuido_em?: string | null
          cancelado_em?: string | null
          cancelado_por_operador_id?: string | null
          cancelamento_motivo?: string | null
          chegada_em?: string | null
          cliente?: string
          cliente_id?: string | null
          cliente_local_id?: string | null
          colaborador_id?: string | null
          concluido_em?: string | null
          contrato_id?: string | null
          created_at?: string
          criado_por?: string | null
          descricao_conclusao?: string | null
          em_deslocamento_em?: string | null
          email_formalizacao_em?: string | null
          email_formalizacao_status?: string | null
          equipamento_id?: string | null
          fim_latitude?: number | null
          fim_longitude?: number | null
          id?: string
          info_adicional?: string | null
          inicio_atendimento_em?: string | null
          inicio_latitude?: number | null
          inicio_longitude?: number | null
          itens_previstos?: string | null
          latitude?: number | null
          local_servico?: string
          longitude?: number | null
          notificacao_pendente?: boolean
          numero?: number | null
          observacoes?: string | null
          operador_abertura_id?: string | null
          operador_abertura_nome?: string | null
          origem?: string | null
          patrimonio_snapshot?: string | null
          placa_snapshot?: string | null
          solicitante_contato?: string | null
          solicitante_nome?: string | null
          status?: string
          tipo_servico?: string
          updated_at?: string
          veiculo_id?: string | null
        }
        Update: {
          aceito_em?: string | null
          aceito_por_acesso_id?: string | null
          aceito_por_nome?: string | null
          alocacao_id?: string | null
          atribuido_em?: string | null
          cancelado_em?: string | null
          cancelado_por_operador_id?: string | null
          cancelamento_motivo?: string | null
          chegada_em?: string | null
          cliente?: string
          cliente_id?: string | null
          cliente_local_id?: string | null
          colaborador_id?: string | null
          concluido_em?: string | null
          contrato_id?: string | null
          created_at?: string
          criado_por?: string | null
          descricao_conclusao?: string | null
          em_deslocamento_em?: string | null
          email_formalizacao_em?: string | null
          email_formalizacao_status?: string | null
          equipamento_id?: string | null
          fim_latitude?: number | null
          fim_longitude?: number | null
          id?: string
          info_adicional?: string | null
          inicio_atendimento_em?: string | null
          inicio_latitude?: number | null
          inicio_longitude?: number | null
          itens_previstos?: string | null
          latitude?: number | null
          local_servico?: string
          longitude?: number | null
          notificacao_pendente?: boolean
          numero?: number | null
          observacoes?: string | null
          operador_abertura_id?: string | null
          operador_abertura_nome?: string | null
          origem?: string | null
          patrimonio_snapshot?: string | null
          placa_snapshot?: string | null
          solicitante_contato?: string | null
          solicitante_nome?: string | null
          status?: string
          tipo_servico?: string
          updated_at?: string
          veiculo_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chamados_aceito_por_acesso_id_fkey"
            columns: ["aceito_por_acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_alocacao_id_fkey"
            columns: ["alocacao_id"]
            isOneToOne: false
            referencedRelation: "operacional_alocacoes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_cancelado_por_operador_id_fkey"
            columns: ["cancelado_por_operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_cliente_local_id_fkey"
            columns: ["cliente_local_id"]
            isOneToOne: false
            referencedRelation: "cliente_locais_operacionais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_equipamento_id_fkey"
            columns: ["equipamento_id"]
            isOneToOne: false
            referencedRelation: "contrato_equipamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_operador_abertura_id_fkey"
            columns: ["operador_abertura_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chamados_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      cliente_locais_operacionais: {
        Row: {
          ativo: boolean
          cep: string | null
          cidade: string | null
          cliente_id: string
          contato_nome: string | null
          contato_telefone: string | null
          created_at: string
          endereco: string | null
          id: string
          nome: string
          uf: string | null
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          cep?: string | null
          cidade?: string | null
          cliente_id: string
          contato_nome?: string | null
          contato_telefone?: string | null
          created_at?: string
          endereco?: string | null
          id?: string
          nome: string
          uf?: string | null
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          cep?: string | null
          cidade?: string | null
          cliente_id?: string
          contato_nome?: string | null
          contato_telefone?: string | null
          created_at?: string
          endereco?: string | null
          id?: string
          nome?: string
          uf?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cliente_locais_operacionais_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
        ]
      }
      clientes_dn4: {
        Row: {
          cnpj_cpf: string | null
          created_at: string
          empresa_vinculada: string | null
          endereco: string | null
          forma_pagamento_padrao: string | null
          id: string
          nome: string
          observacoes: string | null
          updated_at: string
        }
        Insert: {
          cnpj_cpf?: string | null
          created_at?: string
          empresa_vinculada?: string | null
          endereco?: string | null
          forma_pagamento_padrao?: string | null
          id?: string
          nome: string
          observacoes?: string | null
          updated_at?: string
        }
        Update: {
          cnpj_cpf?: string | null
          created_at?: string
          empresa_vinculada?: string | null
          endereco?: string | null
          forma_pagamento_padrao?: string | null
          id?: string
          nome?: string
          observacoes?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      clientes_fat: {
        Row: {
          cep: string | null
          cidade: string | null
          cnpj_cpf: string | null
          contato_responsavel: string | null
          created_at: string
          email: string | null
          endereco: string | null
          id: string
          inscricao_estadual: string | null
          nome_fantasia: string | null
          observacoes: string | null
          razao_social: string
          status: string
          telefone: string | null
          uf: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          cep?: string | null
          cidade?: string | null
          cnpj_cpf?: string | null
          contato_responsavel?: string | null
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          inscricao_estadual?: string | null
          nome_fantasia?: string | null
          observacoes?: string | null
          razao_social: string
          status?: string
          telefone?: string | null
          uf?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          cep?: string | null
          cidade?: string | null
          cnpj_cpf?: string | null
          contato_responsavel?: string | null
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          inscricao_estadual?: string | null
          nome_fantasia?: string | null
          observacoes?: string | null
          razao_social?: string
          status?: string
          telefone?: string | null
          uf?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      clientes_faturamento: {
        Row: {
          bairro: string | null
          cep: string | null
          cidade: string | null
          codigo_dn4: string | null
          cpf_cnpj: string | null
          created_at: string
          empresa_origem: string | null
          endereco: string | null
          filial_origem: string | null
          id: string
          inscricao_estadual: string | null
          nome_razao_social: string
          status: string | null
          uf: string | null
          updated_at: string
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          inscricao_estadual?: string | null
          nome_razao_social: string
          status?: string | null
          uf?: string | null
          updated_at?: string
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          inscricao_estadual?: string | null
          nome_razao_social?: string
          status?: string | null
          uf?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      clinicas_empresa_vinculos: {
        Row: {
          ativo: boolean
          clinica_id: string
          created_at: string
          empresa_id: string
          id: string
          regra_nome_arquivo: string
        }
        Insert: {
          ativo?: boolean
          clinica_id: string
          created_at?: string
          empresa_id: string
          id?: string
          regra_nome_arquivo?: string
        }
        Update: {
          ativo?: boolean
          clinica_id?: string
          created_at?: string
          empresa_id?: string
          id?: string
          regra_nome_arquivo?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinicas_empresa_vinculos_clinica_id_fkey"
            columns: ["clinica_id"]
            isOneToOne: false
            referencedRelation: "clinicas_envio_config"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinicas_empresa_vinculos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinicas_empresa_vinculos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      clinicas_envio_config: {
        Row: {
          assinatura: string
          assunto_padrao: string
          ativo: boolean
          codigo: string
          corpo_padrao: string
          created_at: string
          dia_envio: number
          email_principal: string
          emails_copia: string[]
          id: string
          nome: string
          template_hash: string
          template_nome: string
          template_versao: string
          updated_at: string
        }
        Insert: {
          assinatura?: string
          assunto_padrao: string
          ativo?: boolean
          codigo: string
          corpo_padrao: string
          created_at?: string
          dia_envio?: number
          email_principal: string
          emails_copia?: string[]
          id?: string
          nome: string
          template_hash: string
          template_nome: string
          template_versao?: string
          updated_at?: string
        }
        Update: {
          assinatura?: string
          assunto_padrao?: string
          ativo?: boolean
          codigo?: string
          corpo_padrao?: string
          created_at?: string
          dia_envio?: number
          email_principal?: string
          emails_copia?: string[]
          id?: string
          nome?: string
          template_hash?: string
          template_nome?: string
          template_versao?: string
          updated_at?: string
        }
        Relationships: []
      }
      clinicas_envios_mensais: {
        Row: {
          arquivo_hash: string
          arquivo_nome: string
          arquivo_url: string
          assunto: string
          clinica_id: string
          competencia: string
          conferido_em: string | null
          conferido_por: string | null
          corpo: string
          created_at: string
          destinatarios: string[]
          empresa_id: string
          enviado_em: string | null
          enviado_por: string | null
          erro: string
          gerado_em: string | null
          gerado_por: string | null
          id: string
          quantidade_funcionarios: number
          status: string
          template_hash: string
          tipo_envio: string
          updated_at: string
          validacao: Json
        }
        Insert: {
          arquivo_hash?: string
          arquivo_nome?: string
          arquivo_url?: string
          assunto?: string
          clinica_id: string
          competencia: string
          conferido_em?: string | null
          conferido_por?: string | null
          corpo?: string
          created_at?: string
          destinatarios?: string[]
          empresa_id: string
          enviado_em?: string | null
          enviado_por?: string | null
          erro?: string
          gerado_em?: string | null
          gerado_por?: string | null
          id?: string
          quantidade_funcionarios?: number
          status?: string
          template_hash?: string
          tipo_envio?: string
          updated_at?: string
          validacao?: Json
        }
        Update: {
          arquivo_hash?: string
          arquivo_nome?: string
          arquivo_url?: string
          assunto?: string
          clinica_id?: string
          competencia?: string
          conferido_em?: string | null
          conferido_por?: string | null
          corpo?: string
          created_at?: string
          destinatarios?: string[]
          empresa_id?: string
          enviado_em?: string | null
          enviado_por?: string | null
          erro?: string
          gerado_em?: string | null
          gerado_por?: string | null
          id?: string
          quantidade_funcionarios?: number
          status?: string
          template_hash?: string
          tipo_envio?: string
          updated_at?: string
          validacao?: Json
        }
        Relationships: [
          {
            foreignKeyName: "clinicas_envios_mensais_clinica_id_fkey"
            columns: ["clinica_id"]
            isOneToOne: false
            referencedRelation: "clinicas_envio_config"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinicas_envios_mensais_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinicas_envios_mensais_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      cobrancas_tentativas: {
        Row: {
          canal: string
          created_at: string
          data: string
          id: string
          observacao: string | null
          proximo_contato: string | null
          resultado: string
          titulo_id: string
          user_id: string
          usuario_nome: string | null
        }
        Insert: {
          canal?: string
          created_at?: string
          data?: string
          id?: string
          observacao?: string | null
          proximo_contato?: string | null
          resultado?: string
          titulo_id: string
          user_id: string
          usuario_nome?: string | null
        }
        Update: {
          canal?: string
          created_at?: string
          data?: string
          id?: string
          observacao?: string | null
          proximo_contato?: string | null
          resultado?: string
          titulo_id?: string
          user_id?: string
          usuario_nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cobrancas_tentativas_titulo_id_fkey"
            columns: ["titulo_id"]
            isOneToOne: false
            referencedRelation: "titulos_receber"
            referencedColumns: ["id"]
          },
        ]
      }
      colaborador_veiculo: {
        Row: {
          created_at: string
          id: string
          user_id: string
          veiculo_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          user_id: string
          veiculo_id: string
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
          veiculo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "colaborador_veiculo_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      combustivel_galoes: {
        Row: {
          cargo: string
          competencia: string
          created_at: string
          data: string
          foto_url: string
          hora: string
          id: string
          latitude: number | null
          longitude: number | null
          modelo: string
          motorista_nome: string
          observacao: string
          origem: string
          placa: string
          quantidade_litros: number
          tecnico_id: string | null
          tipo_combustivel: string
          updated_at: string
          user_id: string | null
          veiculo_id: string | null
        }
        Insert: {
          cargo?: string
          competencia?: string
          created_at?: string
          data?: string
          foto_url?: string
          hora?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          modelo?: string
          motorista_nome?: string
          observacao?: string
          origem?: string
          placa?: string
          quantidade_litros?: number
          tecnico_id?: string | null
          tipo_combustivel?: string
          updated_at?: string
          user_id?: string | null
          veiculo_id?: string | null
        }
        Update: {
          cargo?: string
          competencia?: string
          created_at?: string
          data?: string
          foto_url?: string
          hora?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          modelo?: string
          motorista_nome?: string
          observacao?: string
          origem?: string
          placa?: string
          quantidade_litros?: number
          tecnico_id?: string | null
          tipo_combustivel?: string
          updated_at?: string
          user_id?: string | null
          veiculo_id?: string | null
        }
        Relationships: []
      }
      compras: {
        Row: {
          centro_custo: string
          company_id: string | null
          created_at: string
          data_aprovacao: string | null
          data_compra: string | null
          data_entrega: string | null
          data_solicitacao: string
          empresa_nome: string
          fornecedor: string
          id: string
          item: string
          numero_solicitacao: string
          observacao: string
          quantidade: number
          solicitante_nome: string
          solicitante_user_id: string
          status: string
          unidade: string
          updated_at: string
          valor_estimado: number
          valor_real: number
        }
        Insert: {
          centro_custo?: string
          company_id?: string | null
          created_at?: string
          data_aprovacao?: string | null
          data_compra?: string | null
          data_entrega?: string | null
          data_solicitacao?: string
          empresa_nome?: string
          fornecedor?: string
          id?: string
          item?: string
          numero_solicitacao?: string
          observacao?: string
          quantidade?: number
          solicitante_nome?: string
          solicitante_user_id: string
          status?: string
          unidade?: string
          updated_at?: string
          valor_estimado?: number
          valor_real?: number
        }
        Update: {
          centro_custo?: string
          company_id?: string | null
          created_at?: string
          data_aprovacao?: string | null
          data_compra?: string | null
          data_entrega?: string | null
          data_solicitacao?: string
          empresa_nome?: string
          fornecedor?: string
          id?: string
          item?: string
          numero_solicitacao?: string
          observacao?: string
          quantidade?: number
          solicitante_nome?: string
          solicitante_user_id?: string
          status?: string
          unidade?: string
          updated_at?: string
          valor_estimado?: number
          valor_real?: number
        }
        Relationships: []
      }
      compras_historico: {
        Row: {
          compra_id: string
          created_at: string
          id: string
          observacao: string
          status_anterior: string
          status_novo: string
          user_id: string
          usuario_nome: string
        }
        Insert: {
          compra_id: string
          created_at?: string
          id?: string
          observacao?: string
          status_anterior?: string
          status_novo?: string
          user_id: string
          usuario_nome?: string
        }
        Update: {
          compra_id?: string
          created_at?: string
          id?: string
          observacao?: string
          status_anterior?: string
          status_novo?: string
          user_id?: string
          usuario_nome?: string
        }
        Relationships: []
      }
      conciliacoes: {
        Row: {
          conta_bancaria_id: string
          created_at: string
          data_fim: string
          data_inicio: string
          divergencia: number
          id: string
          observacao: string | null
          status: string
          total_extrato: number
          total_interno: number
          updated_at: string
          user_id: string
        }
        Insert: {
          conta_bancaria_id: string
          created_at?: string
          data_fim: string
          data_inicio: string
          divergencia?: number
          id?: string
          observacao?: string | null
          status?: string
          total_extrato?: number
          total_interno?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          conta_bancaria_id?: string
          created_at?: string
          data_fim?: string
          data_inicio?: string
          divergencia?: number
          id?: string
          observacao?: string | null
          status?: string
          total_extrato?: number
          total_interno?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conciliacoes_conta_bancaria_id_fkey"
            columns: ["conta_bancaria_id"]
            isOneToOne: false
            referencedRelation: "contas_bancarias"
            referencedColumns: ["id"]
          },
        ]
      }
      config_emails_contabilidade: {
        Row: {
          created_at: string
          email_marisa: string
          email_robson: string
          emails_copia: string
          id: string
          updated_at: string
          updated_by: string | null
          updated_by_nome: string | null
        }
        Insert: {
          created_at?: string
          email_marisa?: string
          email_robson?: string
          emails_copia?: string
          id?: string
          updated_at?: string
          updated_by?: string | null
          updated_by_nome?: string | null
        }
        Update: {
          created_at?: string
          email_marisa?: string
          email_robson?: string
          emails_copia?: string
          id?: string
          updated_at?: string
          updated_by?: string | null
          updated_by_nome?: string | null
        }
        Relationships: []
      }
      config_financeiro: {
        Row: {
          chave: string
          descricao: string | null
          id: string
          updated_at: string
          valor: string
        }
        Insert: {
          chave: string
          descricao?: string | null
          id?: string
          updated_at?: string
          valor?: string
        }
        Update: {
          chave?: string
          descricao?: string | null
          id?: string
          updated_at?: string
          valor?: string
        }
        Relationships: []
      }
      contabilidade_email_documentos: {
        Row: {
          arquivo_original: string
          cnpj_detectado: string | null
          competencia: string | null
          confianca: number | null
          cpf_detectado: string | null
          created_at: string
          data_admissao_detectada: string | null
          decisao: string
          destino_id: string | null
          destino_tabela: string | null
          document_sha256: string | null
          duplicado_de: string | null
          empresa_id: string | null
          funcao_detectada: string | null
          funcionario_id: string | null
          id: string
          mensagem_id: string
          metodo_vinculo: string | null
          mime_type: string
          motivo_decisao: string | null
          nome_detectado: string | null
          ocr_utilizado: boolean
          pagina_fim: number | null
          pagina_inicio: number | null
          paginas: number[]
          parent_documento_id: string | null
          pre_cadastro_id: string | null
          revisado_em: string | null
          revisado_por: string | null
          salario_detectado: number | null
          source_sha256: string
          status: string
          storage_bucket: string
          storage_path: string
          tamanho_bytes: number
          tentativas: number
          texto_extraido: string | null
          tipo_identificado: string | null
          ultimo_erro: string | null
          updated_at: string
        }
        Insert: {
          arquivo_original: string
          cnpj_detectado?: string | null
          competencia?: string | null
          confianca?: number | null
          cpf_detectado?: string | null
          created_at?: string
          data_admissao_detectada?: string | null
          decisao?: string
          destino_id?: string | null
          destino_tabela?: string | null
          document_sha256?: string | null
          duplicado_de?: string | null
          empresa_id?: string | null
          funcao_detectada?: string | null
          funcionario_id?: string | null
          id?: string
          mensagem_id: string
          metodo_vinculo?: string | null
          mime_type?: string
          motivo_decisao?: string | null
          nome_detectado?: string | null
          ocr_utilizado?: boolean
          pagina_fim?: number | null
          pagina_inicio?: number | null
          paginas?: number[]
          parent_documento_id?: string | null
          pre_cadastro_id?: string | null
          revisado_em?: string | null
          revisado_por?: string | null
          salario_detectado?: number | null
          source_sha256: string
          status?: string
          storage_bucket: string
          storage_path: string
          tamanho_bytes?: number
          tentativas?: number
          texto_extraido?: string | null
          tipo_identificado?: string | null
          ultimo_erro?: string | null
          updated_at?: string
        }
        Update: {
          arquivo_original?: string
          cnpj_detectado?: string | null
          competencia?: string | null
          confianca?: number | null
          cpf_detectado?: string | null
          created_at?: string
          data_admissao_detectada?: string | null
          decisao?: string
          destino_id?: string | null
          destino_tabela?: string | null
          document_sha256?: string | null
          duplicado_de?: string | null
          empresa_id?: string | null
          funcao_detectada?: string | null
          funcionario_id?: string | null
          id?: string
          mensagem_id?: string
          metodo_vinculo?: string | null
          mime_type?: string
          motivo_decisao?: string | null
          nome_detectado?: string | null
          ocr_utilizado?: boolean
          pagina_fim?: number | null
          pagina_inicio?: number | null
          paginas?: number[]
          parent_documento_id?: string | null
          pre_cadastro_id?: string | null
          revisado_em?: string | null
          revisado_por?: string | null
          salario_detectado?: number | null
          source_sha256?: string
          status?: string
          storage_bucket?: string
          storage_path?: string
          tamanho_bytes?: number
          tentativas?: number
          texto_extraido?: string | null
          tipo_identificado?: string | null
          ultimo_erro?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_email_documentos_duplicado_de_fkey"
            columns: ["duplicado_de"]
            isOneToOne: false
            referencedRelation: "contabilidade_email_documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_mensagem_id_fkey"
            columns: ["mensagem_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_email_mensagens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_parent_documento_id_fkey"
            columns: ["parent_documento_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_email_documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_documentos_pre_cadastro_id_fkey"
            columns: ["pre_cadastro_id"]
            isOneToOne: false
            referencedRelation: "pre_cadastros_admissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_email_eventos: {
        Row: {
          ator_tipo: string
          ator_user_id: string | null
          created_at: string
          documento_id: string | null
          evento: string
          id: string
          mensagem_id: string | null
          payload: Json
        }
        Insert: {
          ator_tipo?: string
          ator_user_id?: string | null
          created_at?: string
          documento_id?: string | null
          evento: string
          id?: string
          mensagem_id?: string | null
          payload?: Json
        }
        Update: {
          ator_tipo?: string
          ator_user_id?: string | null
          created_at?: string
          documento_id?: string | null
          evento?: string
          id?: string
          mensagem_id?: string | null
          payload?: Json
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_email_eventos_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_email_documentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_eventos_mensagem_id_fkey"
            columns: ["mensagem_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_email_mensagens"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_email_mensagens: {
        Row: {
          assunto: string | null
          created_at: string
          erro: string | null
          id: string
          mailbox: string | null
          metadata: Json
          processado_em: string | null
          provider: string
          provider_message_id: string
          recebido_em: string
          remetente: string | null
          status: string
          total_anexos: number
          total_pdfs: number
          updated_at: string
        }
        Insert: {
          assunto?: string | null
          created_at?: string
          erro?: string | null
          id?: string
          mailbox?: string | null
          metadata?: Json
          processado_em?: string | null
          provider?: string
          provider_message_id: string
          recebido_em?: string
          remetente?: string | null
          status?: string
          total_anexos?: number
          total_pdfs?: number
          updated_at?: string
        }
        Update: {
          assunto?: string | null
          created_at?: string
          erro?: string | null
          id?: string
          mailbox?: string | null
          metadata?: Json
          processado_em?: string | null
          provider?: string
          provider_message_id?: string
          recebido_em?: string
          remetente?: string | null
          status?: string
          total_anexos?: number
          total_pdfs?: number
          updated_at?: string
        }
        Relationships: []
      }
      contabilidade_email_threads: {
        Row: {
          assunto: string
          competencia: string | null
          created_at: string
          empresa_id: string | null
          encerrado_em: string | null
          last_message_id: string | null
          last_provider_email_id: string | null
          root_message_id: string | null
          status: string
          thread_key: string
          updated_at: string
        }
        Insert: {
          assunto: string
          competencia?: string | null
          created_at?: string
          empresa_id?: string | null
          encerrado_em?: string | null
          last_message_id?: string | null
          last_provider_email_id?: string | null
          root_message_id?: string | null
          status?: string
          thread_key: string
          updated_at?: string
        }
        Update: {
          assunto?: string
          competencia?: string | null
          created_at?: string
          empresa_id?: string | null
          encerrado_em?: string | null
          last_message_id?: string | null
          last_provider_email_id?: string | null
          root_message_id?: string | null
          status?: string
          thread_key?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_email_threads_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_email_threads_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      contabilidade_folha_ciclos: {
        Row: {
          apontamento_liberado_em: string | null
          apontamento_liberado_por: string | null
          ativo: boolean
          competencia: string
          conferido_em: string | null
          conferido_por: string | null
          contabilidade_recebeu_em: string | null
          created_at: string
          email_envio_em: string | null
          email_envio_status: string | null
          email_retorno_em: string | null
          email_retorno_status: string | null
          empresa_id: string
          enviado_em: string | null
          enviado_por_portal_user_id: string | null
          id: string
          observacao: string | null
          portal: string
          rh_recebeu_em: string | null
          rh_recebeu_por: string | null
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          apontamento_liberado_em?: string | null
          apontamento_liberado_por?: string | null
          ativo?: boolean
          competencia: string
          conferido_em?: string | null
          conferido_por?: string | null
          contabilidade_recebeu_em?: string | null
          created_at?: string
          email_envio_em?: string | null
          email_envio_status?: string | null
          email_retorno_em?: string | null
          email_retorno_status?: string | null
          empresa_id: string
          enviado_em?: string | null
          enviado_por_portal_user_id?: string | null
          id?: string
          observacao?: string | null
          portal: string
          rh_recebeu_em?: string | null
          rh_recebeu_por?: string | null
          status?: string
          tipo: string
          updated_at?: string
        }
        Update: {
          apontamento_liberado_em?: string | null
          apontamento_liberado_por?: string | null
          ativo?: boolean
          competencia?: string
          conferido_em?: string | null
          conferido_por?: string | null
          contabilidade_recebeu_em?: string | null
          created_at?: string
          email_envio_em?: string | null
          email_envio_status?: string | null
          email_retorno_em?: string | null
          email_retorno_status?: string | null
          empresa_id?: string
          enviado_em?: string | null
          enviado_por_portal_user_id?: string | null
          id?: string
          observacao?: string | null
          portal?: string
          rh_recebeu_em?: string | null
          rh_recebeu_por?: string | null
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_folha_ciclos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_ciclos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_folha_ciclos_enviado_por_portal_user_id_fkey"
            columns: ["enviado_por_portal_user_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_folha_documentos: {
        Row: {
          ciclo_id: string
          classificacao: string
          cpf_detectado: string | null
          created_at: string
          detalhes: Json
          empresa_id: string
          funcionario_id: string | null
          id: string
          nome_detectado: string | null
          pagina: number | null
          payroll_document_id: string | null
          portal_upload_id: string | null
          status: string
          tipo_documento: string | null
          updated_at: string
        }
        Insert: {
          ciclo_id: string
          classificacao?: string
          cpf_detectado?: string | null
          created_at?: string
          detalhes?: Json
          empresa_id: string
          funcionario_id?: string | null
          id?: string
          nome_detectado?: string | null
          pagina?: number | null
          payroll_document_id?: string | null
          portal_upload_id?: string | null
          status?: string
          tipo_documento?: string | null
          updated_at?: string
        }
        Update: {
          ciclo_id?: string
          classificacao?: string
          cpf_detectado?: string | null
          created_at?: string
          detalhes?: Json
          empresa_id?: string
          funcionario_id?: string | null
          id?: string
          nome_detectado?: string | null
          pagina?: number | null
          payroll_document_id?: string | null
          portal_upload_id?: string | null
          status?: string
          tipo_documento?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_folha_documentos_ciclo_id_fkey"
            columns: ["ciclo_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_folha_ciclos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_payroll_document_id_fkey"
            columns: ["payroll_document_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_payroll_document_id_fkey"
            columns: ["payroll_document_id"]
            isOneToOne: false
            referencedRelation: "payroll_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_payroll_document_id_fkey"
            columns: ["payroll_document_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "contabilidade_folha_documentos_portal_upload_id_fkey"
            columns: ["portal_upload_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_folha_retificacoes: {
        Row: {
          ciclo_id: string
          competencia: string
          corrigido_por_auth_user_id: string | null
          corrigido_por_email: string | null
          corrigido_por_nome: string | null
          corrigido_por_portal_user_id: string | null
          corrigido_por_tipo: string
          created_at: string
          destinatarios: string[]
          documentos_removidos: number
          email_em: string | null
          email_erro: string | null
          email_status: string
          empresa_id: string
          id: string
          justificativa: string
          payroll_documentos_retificados: number
          portal: string
          tipo: string
          uploads_removidos: number
        }
        Insert: {
          ciclo_id: string
          competencia: string
          corrigido_por_auth_user_id?: string | null
          corrigido_por_email?: string | null
          corrigido_por_nome?: string | null
          corrigido_por_portal_user_id?: string | null
          corrigido_por_tipo: string
          created_at?: string
          destinatarios?: string[]
          documentos_removidos?: number
          email_em?: string | null
          email_erro?: string | null
          email_status?: string
          empresa_id: string
          id?: string
          justificativa: string
          payroll_documentos_retificados?: number
          portal: string
          tipo: string
          uploads_removidos?: number
        }
        Update: {
          ciclo_id?: string
          competencia?: string
          corrigido_por_auth_user_id?: string | null
          corrigido_por_email?: string | null
          corrigido_por_nome?: string | null
          corrigido_por_portal_user_id?: string | null
          corrigido_por_tipo?: string
          created_at?: string
          destinatarios?: string[]
          documentos_removidos?: number
          email_em?: string | null
          email_erro?: string | null
          email_status?: string
          empresa_id?: string
          id?: string
          justificativa?: string
          payroll_documentos_retificados?: number
          portal?: string
          tipo?: string
          uploads_removidos?: number
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_folha_retificac_corrigido_por_portal_user_id_fkey"
            columns: ["corrigido_por_portal_user_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_retificacoes_ciclo_id_fkey"
            columns: ["ciclo_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_folha_ciclos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_retificacoes_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_folha_retificacoes_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      contabilidade_portal_acesso_empresas: {
        Row: {
          acesso_id: string | null
          created_at: string
          empresa_id: string
          id: string
          portal_user_id: string | null
        }
        Insert: {
          acesso_id?: string | null
          created_at?: string
          empresa_id: string
          id?: string
          portal_user_id?: string | null
        }
        Update: {
          acesso_id?: string | null
          created_at?: string
          empresa_id?: string
          id?: string
          portal_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_acesso_empresas_acesso_id_fkey"
            columns: ["acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_acesso_empresas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_acesso_empresas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_portal_acesso_empresas_portal_user_id_fkey"
            columns: ["portal_user_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_portal_alertas: {
        Row: {
          categoria: string
          created_at: string
          detalhes: Json
          empresa_id: string
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          prioridade: string
          titulo: string
          updated_at: string
        }
        Insert: {
          categoria: string
          created_at?: string
          detalhes?: Json
          empresa_id: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          prioridade?: string
          titulo: string
          updated_at?: string
        }
        Update: {
          categoria?: string
          created_at?: string
          detalhes?: Json
          empresa_id?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          prioridade?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_alertas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_alertas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_portal_alertas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_alertas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      contabilidade_portal_config: {
        Row: {
          ativo: boolean
          formalizacao_destinos: string[]
          portal: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          formalizacao_destinos?: string[]
          portal: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          formalizacao_destinos?: string[]
          portal?: string
          updated_at?: string
        }
        Relationships: []
      }
      contabilidade_portal_email_verificacoes: {
        Row: {
          created_at: string
          expira_em: string
          id: string
          otp_hash: string
          setup_token_hash: string | null
          tentativas: number
          usado_em: string | null
          usuario_id: string
        }
        Insert: {
          created_at?: string
          expira_em: string
          id?: string
          otp_hash: string
          setup_token_hash?: string | null
          tentativas?: number
          usado_em?: string | null
          usuario_id: string
        }
        Update: {
          created_at?: string
          expira_em?: string
          id?: string
          otp_hash?: string
          setup_token_hash?: string | null
          tentativas?: number
          usado_em?: string | null
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_email_verificacoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_portal_review_emails: {
        Row: {
          assunto: string | null
          created_at: string
          destinos: string[] | null
          empresa_id: string
          enviado_em: string | null
          erro: string | null
          id: string
          origem_id: string
          origem_tipo: string
          portal: string
          portal_user_id: string | null
          provider_id: string | null
          review_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          assunto?: string | null
          created_at?: string
          destinos?: string[] | null
          empresa_id: string
          enviado_em?: string | null
          erro?: string | null
          id?: string
          origem_id: string
          origem_tipo: string
          portal: string
          portal_user_id?: string | null
          provider_id?: string | null
          review_id?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          assunto?: string | null
          created_at?: string
          destinos?: string[] | null
          empresa_id?: string
          enviado_em?: string | null
          erro?: string | null
          id?: string
          origem_id?: string
          origem_tipo?: string
          portal?: string
          portal_user_id?: string | null
          provider_id?: string | null
          review_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_review_emails_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_review_emails_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_portal_review_emails_portal_user_id_fkey"
            columns: ["portal_user_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_review_emails_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_revisoes"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_portal_revisoes: {
        Row: {
          created_at: string
          empresa_id: string
          id: string
          observacao: string | null
          origem_id: string
          origem_tipo: string
          revisado_em: string | null
          revisor_acesso_id: string | null
          revisor_nome: string | null
          revisor_portal_user_id: string | null
          source_updated_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          empresa_id: string
          id?: string
          observacao?: string | null
          origem_id: string
          origem_tipo: string
          revisado_em?: string | null
          revisor_acesso_id?: string | null
          revisor_nome?: string | null
          revisor_portal_user_id?: string | null
          source_updated_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          empresa_id?: string
          id?: string
          observacao?: string | null
          origem_id?: string
          origem_tipo?: string
          revisado_em?: string | null
          revisor_acesso_id?: string | null
          revisor_nome?: string | null
          revisor_portal_user_id?: string | null
          source_updated_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_revisoes_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_revisoes_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_portal_revisoes_revisor_acesso_id_fkey"
            columns: ["revisor_acesso_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_revisoes_revisor_portal_user_id_fkey"
            columns: ["revisor_portal_user_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_portal_sessoes: {
        Row: {
          criado_em: string
          expira_em: string
          id: string
          portal: string
          token_hash: string
          ultimo_uso_em: string
          usuario_id: string
        }
        Insert: {
          criado_em?: string
          expira_em: string
          id?: string
          portal: string
          token_hash: string
          ultimo_uso_em?: string
          usuario_id: string
        }
        Update: {
          criado_em?: string
          expira_em?: string
          id?: string
          portal?: string
          token_hash?: string
          ultimo_uso_em?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_sessoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_portal_uploads: {
        Row: {
          arquivo_nome: string
          ciclo_id: string | null
          competencia: string | null
          created_at: string
          empresa_id: string
          formalizacao_destinos: string[] | null
          formalizacao_email_em: string | null
          formalizacao_email_status: string
          funcionario_nome: string | null
          id: string
          observacao: string | null
          origem_id: string | null
          origem_tipo: string | null
          portal_user_id: string
          processamento_detalhes: Json
          processamento_status: string
          processo_tipo: string | null
          rh_resposta: string | null
          rh_resposta_em: string | null
          rh_resposta_por: string | null
          status: string
          storage_bucket: string
          storage_path: string
          tamanho_bytes: number | null
          tipo_documento: string
          updated_at: string
        }
        Insert: {
          arquivo_nome: string
          ciclo_id?: string | null
          competencia?: string | null
          created_at?: string
          empresa_id: string
          formalizacao_destinos?: string[] | null
          formalizacao_email_em?: string | null
          formalizacao_email_status?: string
          funcionario_nome?: string | null
          id?: string
          observacao?: string | null
          origem_id?: string | null
          origem_tipo?: string | null
          portal_user_id: string
          processamento_detalhes?: Json
          processamento_status?: string
          processo_tipo?: string | null
          rh_resposta?: string | null
          rh_resposta_em?: string | null
          rh_resposta_por?: string | null
          status?: string
          storage_bucket?: string
          storage_path: string
          tamanho_bytes?: number | null
          tipo_documento?: string
          updated_at?: string
        }
        Update: {
          arquivo_nome?: string
          ciclo_id?: string | null
          competencia?: string | null
          created_at?: string
          empresa_id?: string
          formalizacao_destinos?: string[] | null
          formalizacao_email_em?: string | null
          formalizacao_email_status?: string
          funcionario_nome?: string | null
          id?: string
          observacao?: string | null
          origem_id?: string | null
          origem_tipo?: string | null
          portal_user_id?: string
          processamento_detalhes?: Json
          processamento_status?: string
          processo_tipo?: string | null
          rh_resposta?: string | null
          rh_resposta_em?: string | null
          rh_resposta_por?: string | null
          status?: string
          storage_bucket?: string
          storage_path?: string
          tamanho_bytes?: number | null
          tipo_documento?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contabilidade_portal_uploads_ciclo_id_fkey"
            columns: ["ciclo_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_folha_ciclos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_uploads_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contabilidade_portal_uploads_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "contabilidade_portal_uploads_portal_user_id_fkey"
            columns: ["portal_user_id"]
            isOneToOne: false
            referencedRelation: "contabilidade_portal_usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      contabilidade_portal_usuarios: {
        Row: {
          ativo: boolean
          codigo_hash: string
          codigo_inicial_hash: string | null
          created_at: string
          email: string | null
          email_verificado_em: string | null
          id: string
          nome: string
          pin_hash: string | null
          pin_lookup_hash: string | null
          portal: string
          primeiro_acesso_concluido_em: string | null
          ultimo_acesso_em: string | null
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          codigo_hash: string
          codigo_inicial_hash?: string | null
          created_at?: string
          email?: string | null
          email_verificado_em?: string | null
          id?: string
          nome: string
          pin_hash?: string | null
          pin_lookup_hash?: string | null
          portal: string
          primeiro_acesso_concluido_em?: string | null
          ultimo_acesso_em?: string | null
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          codigo_hash?: string
          codigo_inicial_hash?: string | null
          created_at?: string
          email?: string | null
          email_verificado_em?: string | null
          id?: string
          nome?: string
          pin_hash?: string | null
          pin_lookup_hash?: string | null
          portal?: string
          primeiro_acesso_concluido_em?: string | null
          ultimo_acesso_em?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      contas_bancarias: {
        Row: {
          agencia: string | null
          banco: string | null
          conta: string | null
          created_at: string
          empresa_id: string
          id: string
          nome: string
          observacoes: string | null
          saldo_atual: number
          saldo_inicial: number
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          agencia?: string | null
          banco?: string | null
          conta?: string | null
          created_at?: string
          empresa_id: string
          id?: string
          nome: string
          observacoes?: string | null
          saldo_atual?: number
          saldo_inicial?: number
          status?: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          agencia?: string | null
          banco?: string | null
          conta?: string | null
          created_at?: string
          empresa_id?: string
          id?: string
          nome?: string
          observacoes?: string | null
          saldo_atual?: number
          saldo_inicial?: number
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contas_bancarias_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contas_bancarias_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      contrato_equipamentos: {
        Row: {
          ativo_id: string | null
          contrato_id: string
          created_at: string
          data_envio: string | null
          data_retorno: string | null
          descricao_livre: string | null
          id: string
          observacao: string | null
          patrimonio: string | null
          placa: string | null
          status: string
          updated_at: string
          valor_unitario: number
        }
        Insert: {
          ativo_id?: string | null
          contrato_id: string
          created_at?: string
          data_envio?: string | null
          data_retorno?: string | null
          descricao_livre?: string | null
          id?: string
          observacao?: string | null
          patrimonio?: string | null
          placa?: string | null
          status?: string
          updated_at?: string
          valor_unitario?: number
        }
        Update: {
          ativo_id?: string | null
          contrato_id?: string
          created_at?: string
          data_envio?: string | null
          data_retorno?: string | null
          descricao_livre?: string | null
          id?: string
          observacao?: string | null
          patrimonio?: string | null
          placa?: string | null
          status?: string
          updated_at?: string
          valor_unitario?: number
        }
        Relationships: [
          {
            foreignKeyName: "contrato_equipamentos_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contrato_equipamentos_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
        ]
      }
      contratos: {
        Row: {
          cliente_id: string | null
          created_at: string
          data_base_reajuste: string | null
          data_fim: string | null
          data_inicio: string | null
          dia_vencimento: number | null
          empresa_id: string | null
          id: string
          indice_reajuste: string | null
          numero: string
          observacoes: string | null
          percentual_reajuste: number | null
          periodicidade: string
          proximo_reajuste: string | null
          regra_faturamento: string
          status: string
          tipo: string
          updated_at: string
          user_id: string | null
          valor_mensal: number
        }
        Insert: {
          cliente_id?: string | null
          created_at?: string
          data_base_reajuste?: string | null
          data_fim?: string | null
          data_inicio?: string | null
          dia_vencimento?: number | null
          empresa_id?: string | null
          id?: string
          indice_reajuste?: string | null
          numero: string
          observacoes?: string | null
          percentual_reajuste?: number | null
          periodicidade?: string
          proximo_reajuste?: string | null
          regra_faturamento?: string
          status?: string
          tipo?: string
          updated_at?: string
          user_id?: string | null
          valor_mensal?: number
        }
        Update: {
          cliente_id?: string | null
          created_at?: string
          data_base_reajuste?: string | null
          data_fim?: string | null
          data_inicio?: string | null
          dia_vencimento?: number | null
          empresa_id?: string | null
          id?: string
          indice_reajuste?: string | null
          numero?: string
          observacoes?: string | null
          percentual_reajuste?: number | null
          periodicidade?: string
          proximo_reajuste?: string | null
          regra_faturamento?: string
          status?: string
          tipo?: string
          updated_at?: string
          user_id?: string | null
          valor_mensal?: number
        }
        Relationships: [
          {
            foreignKeyName: "contratos_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contratos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contratos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      dn4_ctes: {
        Row: {
          atualizado_em: string
          company_id: string
          criado_em: string
          dados: Json
          data_emissao: string | null
          destinatario: string | null
          id: string
          numero: string | null
          remetente: string | null
          serie: string | null
          status: string
          usuario_id: string
          valor: number | null
        }
        Insert: {
          atualizado_em?: string
          company_id: string
          criado_em?: string
          dados?: Json
          data_emissao?: string | null
          destinatario?: string | null
          id?: string
          numero?: string | null
          remetente?: string | null
          serie?: string | null
          status?: string
          usuario_id: string
          valor?: number | null
        }
        Update: {
          atualizado_em?: string
          company_id?: string
          criado_em?: string
          dados?: Json
          data_emissao?: string | null
          destinatario?: string | null
          id?: string
          numero?: string | null
          remetente?: string | null
          serie?: string | null
          status?: string
          usuario_id?: string
          valor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dn4_ctes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dn4_ctes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      dn4_eventos: {
        Row: {
          criado_em: string
          cte_id: string | null
          detalhes: Json
          evento: string
          id: string
          usuario_id: string
        }
        Insert: {
          criado_em?: string
          cte_id?: string | null
          detalhes?: Json
          evento: string
          id?: string
          usuario_id: string
        }
        Update: {
          criado_em?: string
          cte_id?: string | null
          detalhes?: Json
          evento?: string
          id?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dn4_eventos_cte_id_fkey"
            columns: ["cte_id"]
            isOneToOne: false
            referencedRelation: "dn4_ctes"
            referencedColumns: ["id"]
          },
        ]
      }
      dn4_migracao_arquivos: {
        Row: {
          cabecalhos: Json
          criado_em: string
          id: string
          lote_id: string
          mapeamento: Json
          mensagem: string | null
          nome_arquivo: string
          status: string
          storage_path: string | null
          tipo_detectado: string
          total_erros: number
          total_lidos: number
          total_validos: number
        }
        Insert: {
          cabecalhos?: Json
          criado_em?: string
          id?: string
          lote_id: string
          mapeamento?: Json
          mensagem?: string | null
          nome_arquivo: string
          status?: string
          storage_path?: string | null
          tipo_detectado?: string
          total_erros?: number
          total_lidos?: number
          total_validos?: number
        }
        Update: {
          cabecalhos?: Json
          criado_em?: string
          id?: string
          lote_id?: string
          mapeamento?: Json
          mensagem?: string | null
          nome_arquivo?: string
          status?: string
          storage_path?: string | null
          tipo_detectado?: string
          total_erros?: number
          total_lidos?: number
          total_validos?: number
        }
        Relationships: [
          {
            foreignKeyName: "dn4_migracao_arquivos_lote_id_fkey"
            columns: ["lote_id"]
            isOneToOne: false
            referencedRelation: "dn4_migracao_lotes"
            referencedColumns: ["id"]
          },
        ]
      }
      dn4_migracao_logs: {
        Row: {
          acao: string
          criado_em: string
          criado_por: string | null
          detalhe: string | null
          id: string
          lote_id: string | null
          payload: Json
        }
        Insert: {
          acao: string
          criado_em?: string
          criado_por?: string | null
          detalhe?: string | null
          id?: string
          lote_id?: string | null
          payload?: Json
        }
        Update: {
          acao?: string
          criado_em?: string
          criado_por?: string | null
          detalhe?: string | null
          id?: string
          lote_id?: string | null
          payload?: Json
        }
        Relationships: [
          {
            foreignKeyName: "dn4_migracao_logs_lote_id_fkey"
            columns: ["lote_id"]
            isOneToOne: false
            referencedRelation: "dn4_migracao_lotes"
            referencedColumns: ["id"]
          },
        ]
      }
      dn4_migracao_lotes: {
        Row: {
          backup_logico: Json
          cancelado_em: string | null
          confirmado_em: string | null
          criado_em: string
          criado_por: string | null
          id: string
          nome: string
          resumo: Json
          status: string
        }
        Insert: {
          backup_logico?: Json
          cancelado_em?: string | null
          confirmado_em?: string | null
          criado_em?: string
          criado_por?: string | null
          id?: string
          nome: string
          resumo?: Json
          status?: string
        }
        Update: {
          backup_logico?: Json
          cancelado_em?: string | null
          confirmado_em?: string | null
          criado_em?: string
          criado_por?: string | null
          id?: string
          nome?: string
          resumo?: Json
          status?: string
        }
        Relationships: []
      }
      dn4_migracao_registros: {
        Row: {
          arquivo_id: string
          chave_principal: string | null
          criado_em: string
          dados_mapeados: Json
          dados_raw: Json
          erros: Json
          id: string
          linha: number
          lote_id: string
          migrado_em: string | null
          modulo: string
          status: string
        }
        Insert: {
          arquivo_id: string
          chave_principal?: string | null
          criado_em?: string
          dados_mapeados?: Json
          dados_raw?: Json
          erros?: Json
          id?: string
          linha?: number
          lote_id: string
          migrado_em?: string | null
          modulo?: string
          status?: string
        }
        Update: {
          arquivo_id?: string
          chave_principal?: string | null
          criado_em?: string
          dados_mapeados?: Json
          dados_raw?: Json
          erros?: Json
          id?: string
          linha?: number
          lote_id?: string
          migrado_em?: string | null
          modulo?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "dn4_migracao_registros_arquivo_id_fkey"
            columns: ["arquivo_id"]
            isOneToOne: false
            referencedRelation: "dn4_migracao_arquivos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dn4_migracao_registros_lote_id_fkey"
            columns: ["lote_id"]
            isOneToOne: false
            referencedRelation: "dn4_migracao_lotes"
            referencedColumns: ["id"]
          },
        ]
      }
      dn4_usuario_empresas: {
        Row: {
          ativo: boolean
          company_id: string
          criado_em: string
          usuario_id: string
        }
        Insert: {
          ativo?: boolean
          company_id: string
          criado_em?: string
          usuario_id: string
        }
        Update: {
          ativo?: boolean
          company_id?: string
          criado_em?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dn4_usuario_empresas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dn4_usuario_empresas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      dn4_usuarios: {
        Row: {
          ativo: boolean
          atualizado_em: string
          criado_em: string
          email: string
          id: string
          nome_completo: string | null
          perfil: string
        }
        Insert: {
          ativo?: boolean
          atualizado_em?: string
          criado_em?: string
          email: string
          id: string
          nome_completo?: string | null
          perfil?: string
        }
        Update: {
          ativo?: boolean
          atualizado_em?: string
          criado_em?: string
          email?: string
          id?: string
          nome_completo?: string | null
          perfil?: string
        }
        Relationships: []
      }
      documentos_duplicidade_auditoria: {
        Row: {
          dados_removidos: Json
          fingerprint: string
          id: string
          motivo: string
          registro_mantido_id: string | null
          registro_removido_id: string
          removido_em: string
          tabela_origem: string
        }
        Insert: {
          dados_removidos?: Json
          fingerprint: string
          id?: string
          motivo: string
          registro_mantido_id?: string | null
          registro_removido_id: string
          removido_em?: string
          tabela_origem: string
        }
        Update: {
          dados_removidos?: Json
          fingerprint?: string
          id?: string
          motivo?: string
          registro_mantido_id?: string | null
          registro_removido_id?: string
          removido_em?: string
          tabela_origem?: string
        }
        Relationships: []
      }
      documentos_funcionario: {
        Row: {
          arquivo_url: string | null
          categoria: string | null
          company_id: string
          competencia: string | null
          created_at: string
          data_documento: string | null
          descricao: string | null
          destinatarios: string | null
          empresa_nome: string
          enviado_em: string | null
          enviado_por_nome: string | null
          enviado_por_user_id: string | null
          funcionario_id: string
          funcionario_nome: string
          gerado_por_nome: string
          gerado_por_user_id: string
          id: string
          nome_arquivo: string | null
          observacao: string | null
          origem: string | null
          status_envio: string
          storage_bucket: string | null
          storage_path: string | null
          tipo_documento: string
          unidade: string | null
          updated_at: string
        }
        Insert: {
          arquivo_url?: string | null
          categoria?: string | null
          company_id: string
          competencia?: string | null
          created_at?: string
          data_documento?: string | null
          descricao?: string | null
          destinatarios?: string | null
          empresa_nome?: string
          enviado_em?: string | null
          enviado_por_nome?: string | null
          enviado_por_user_id?: string | null
          funcionario_id: string
          funcionario_nome?: string
          gerado_por_nome?: string
          gerado_por_user_id: string
          id?: string
          nome_arquivo?: string | null
          observacao?: string | null
          origem?: string | null
          status_envio?: string
          storage_bucket?: string | null
          storage_path?: string | null
          tipo_documento?: string
          unidade?: string | null
          updated_at?: string
        }
        Update: {
          arquivo_url?: string | null
          categoria?: string | null
          company_id?: string
          competencia?: string | null
          created_at?: string
          data_documento?: string | null
          descricao?: string | null
          destinatarios?: string | null
          empresa_nome?: string
          enviado_em?: string | null
          enviado_por_nome?: string | null
          enviado_por_user_id?: string | null
          funcionario_id?: string
          funcionario_nome?: string
          gerado_por_nome?: string
          gerado_por_user_id?: string
          id?: string
          nome_arquivo?: string | null
          observacao?: string | null
          origem?: string | null
          status_envio?: string
          storage_bucket?: string | null
          storage_path?: string | null
          tipo_documento?: string
          unidade?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_envios_log: {
        Row: {
          assunto: string | null
          cc: string | null
          destinatarios: string | null
          documento_id: string | null
          documento_nome: string | null
          email_corporativo_usado: string | null
          email_remetente: string | null
          enviado_em: string
          erro: string | null
          id: string
          modulo_origem: string | null
          provider: string | null
          reply_to: string | null
          status: string
          user_id: string | null
          usuario_nome: string | null
        }
        Insert: {
          assunto?: string | null
          cc?: string | null
          destinatarios?: string | null
          documento_id?: string | null
          documento_nome?: string | null
          email_corporativo_usado?: string | null
          email_remetente?: string | null
          enviado_em?: string
          erro?: string | null
          id?: string
          modulo_origem?: string | null
          provider?: string | null
          reply_to?: string | null
          status?: string
          user_id?: string | null
          usuario_nome?: string | null
        }
        Update: {
          assunto?: string | null
          cc?: string | null
          destinatarios?: string | null
          documento_id?: string | null
          documento_nome?: string | null
          email_corporativo_usado?: string | null
          email_remetente?: string | null
          enviado_em?: string
          erro?: string | null
          id?: string
          modulo_origem?: string | null
          provider?: string | null
          reply_to?: string | null
          status?: string
          user_id?: string | null
          usuario_nome?: string | null
        }
        Relationships: []
      }
      employee_banking_changes: {
        Row: {
          changed_at: string
          changed_by: string | null
          company_id: string
          email_body: string | null
          email_cc: string | null
          email_status: string
          email_subject: string | null
          email_to: string
          employee_id: string
          fields_changed: string[]
          id: string
          new_data: Json
          previous_data: Json
          source_text: string | null
        }
        Insert: {
          changed_at?: string
          changed_by?: string | null
          company_id: string
          email_body?: string | null
          email_cc?: string | null
          email_status?: string
          email_subject?: string | null
          email_to?: string
          employee_id: string
          fields_changed?: string[]
          id?: string
          new_data?: Json
          previous_data?: Json
          source_text?: string | null
        }
        Update: {
          changed_at?: string
          changed_by?: string | null
          company_id?: string
          email_body?: string | null
          email_cc?: string | null
          email_status?: string
          email_subject?: string | null
          email_to?: string
          employee_id?: string
          fields_changed?: string[]
          id?: string
          new_data?: Json
          previous_data?: Json
          source_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_banking_changes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_banking_changes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "employee_banking_changes_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_banking_changes_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      empresas: {
        Row: {
          bairro: string | null
          cep: string | null
          cidade: string | null
          cnpj: string | null
          codigo: string | null
          created_at: string
          id: string
          logradouro: string | null
          nome: string
          numero: string | null
          observacoes: string | null
          razao_social: string | null
          status: string | null
          telefone: string | null
          tipo_logradouro: string | null
          uf: string | null
          updated_at: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          cnpj?: string | null
          codigo?: string | null
          created_at?: string
          id?: string
          logradouro?: string | null
          nome?: string
          numero?: string | null
          observacoes?: string | null
          razao_social?: string | null
          status?: string | null
          telefone?: string | null
          tipo_logradouro?: string | null
          uf?: string | null
          updated_at?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          cnpj?: string | null
          codigo?: string | null
          created_at?: string
          id?: string
          logradouro?: string | null
          nome?: string
          numero?: string | null
          observacoes?: string | null
          razao_social?: string | null
          status?: string | null
          telefone?: string | null
          tipo_logradouro?: string | null
          uf?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      epi_catalogo: {
        Row: {
          ativo: boolean
          ca: string | null
          codigo: string
          created_at: string
          grupo: string
          id: string
          nome: string
          ordem: number
          quantidade_padrao: number
          regra_elegibilidade: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          ca?: string | null
          codigo: string
          created_at?: string
          grupo?: string
          id?: string
          nome: string
          ordem?: number
          quantidade_padrao?: number
          regra_elegibilidade?: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          ca?: string | null
          codigo?: string
          created_at?: string
          grupo?: string
          id?: string
          nome?: string
          ordem?: number
          quantidade_padrao?: number
          regra_elegibilidade?: string
          updated_at?: string
        }
        Relationships: []
      }
      epi_entregas: {
        Row: {
          cargo: string
          company_id: string
          created_at: string
          criado_por: string | null
          criado_por_nome: string
          data_entrega: string | null
          data_prevista: string
          documento_funcionario_id: string | null
          efetivado_em: string | null
          efetivado_por: string | null
          efetivado_por_nome: string | null
          empresa_nome: string
          funcionario_id: string
          funcionario_nome: string
          id: string
          itens: Json
          proxima_reposicao: string | null
          solicitacao_id: string | null
          status: string
          termo_responsabilidade: string
          updated_at: string
        }
        Insert: {
          cargo?: string
          company_id: string
          created_at?: string
          criado_por?: string | null
          criado_por_nome?: string
          data_entrega?: string | null
          data_prevista?: string
          documento_funcionario_id?: string | null
          efetivado_em?: string | null
          efetivado_por?: string | null
          efetivado_por_nome?: string | null
          empresa_nome: string
          funcionario_id: string
          funcionario_nome: string
          id?: string
          itens?: Json
          proxima_reposicao?: string | null
          solicitacao_id?: string | null
          status?: string
          termo_responsabilidade?: string
          updated_at?: string
        }
        Update: {
          cargo?: string
          company_id?: string
          created_at?: string
          criado_por?: string | null
          criado_por_nome?: string
          data_entrega?: string | null
          data_prevista?: string
          documento_funcionario_id?: string | null
          efetivado_em?: string | null
          efetivado_por?: string | null
          efetivado_por_nome?: string | null
          empresa_nome?: string
          funcionario_id?: string
          funcionario_nome?: string
          id?: string
          itens?: Json
          proxima_reposicao?: string | null
          solicitacao_id?: string | null
          status?: string
          termo_responsabilidade?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "epi_entregas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_entregas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "epi_entregas_documento_funcionario_id_fkey"
            columns: ["documento_funcionario_id"]
            isOneToOne: false
            referencedRelation: "documentos_funcionario"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_entregas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_entregas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "epi_entregas_solicitacao_id_fkey"
            columns: ["solicitacao_id"]
            isOneToOne: false
            referencedRelation: "epi_solicitacoes"
            referencedColumns: ["id"]
          },
        ]
      }
      epi_historico: {
        Row: {
          acao: string
          company_id: string
          created_at: string
          detalhes: Json
          entrega_id: string | null
          funcionario_id: string
          id: string
          solicitacao_id: string | null
          user_id: string | null
          usuario_nome: string
        }
        Insert: {
          acao: string
          company_id: string
          created_at?: string
          detalhes?: Json
          entrega_id?: string | null
          funcionario_id: string
          id?: string
          solicitacao_id?: string | null
          user_id?: string | null
          usuario_nome?: string
        }
        Update: {
          acao?: string
          company_id?: string
          created_at?: string
          detalhes?: Json
          entrega_id?: string | null
          funcionario_id?: string
          id?: string
          solicitacao_id?: string | null
          user_id?: string | null
          usuario_nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "epi_historico_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_historico_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "epi_historico_entrega_id_fkey"
            columns: ["entrega_id"]
            isOneToOne: false
            referencedRelation: "epi_entregas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_historico_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_historico_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "epi_historico_solicitacao_id_fkey"
            columns: ["solicitacao_id"]
            isOneToOne: false
            referencedRelation: "epi_solicitacoes"
            referencedColumns: ["id"]
          },
        ]
      }
      epi_solicitacao_funcionarios: {
        Row: {
          cargo: string
          company_id: string
          created_at: string
          empresa_nome: string
          funcionario_id: string
          funcionario_nome: string
          id: string
          itens: Json
          mecanico_externo: boolean
          solicitacao_id: string
        }
        Insert: {
          cargo?: string
          company_id: string
          created_at?: string
          empresa_nome: string
          funcionario_id: string
          funcionario_nome: string
          id?: string
          itens?: Json
          mecanico_externo?: boolean
          solicitacao_id: string
        }
        Update: {
          cargo?: string
          company_id?: string
          created_at?: string
          empresa_nome?: string
          funcionario_id?: string
          funcionario_nome?: string
          id?: string
          itens?: Json
          mecanico_externo?: boolean
          solicitacao_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "epi_solicitacao_funcionarios_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_solicitacao_funcionarios_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "epi_solicitacao_funcionarios_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epi_solicitacao_funcionarios_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "epi_solicitacao_funcionarios_solicitacao_id_fkey"
            columns: ["solicitacao_id"]
            isOneToOne: false
            referencedRelation: "epi_solicitacoes"
            referencedColumns: ["id"]
          },
        ]
      }
      epi_solicitacoes: {
        Row: {
          aprovado_em: string | null
          aprovado_por: string | null
          aprovado_por_nome: string | null
          created_at: string
          criado_por: string | null
          criado_por_nome: string
          data_referencia: string
          id: string
          observacoes: string
          status: string
          updated_at: string
        }
        Insert: {
          aprovado_em?: string | null
          aprovado_por?: string | null
          aprovado_por_nome?: string | null
          created_at?: string
          criado_por?: string | null
          criado_por_nome?: string
          data_referencia?: string
          id?: string
          observacoes?: string
          status?: string
          updated_at?: string
        }
        Update: {
          aprovado_em?: string | null
          aprovado_por?: string | null
          aprovado_por_nome?: string | null
          created_at?: string
          criado_por?: string | null
          criado_por_nome?: string
          data_referencia?: string
          id?: string
          observacoes?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      equipamentos_faturamento: {
        Row: {
          codigo_equipamento: string | null
          created_at: string
          descricao: string | null
          filial_opera: string | null
          grupo: string | null
          id: string
          numero_patrimonio: string
          numero_serie: string | null
          situacao: string | null
          tipo_equipamento: string | null
          updated_at: string
          valor_compra: number | null
          valor_indenizacao: number | null
          valor_mercado: number | null
          valor_venda: number | null
        }
        Insert: {
          codigo_equipamento?: string | null
          created_at?: string
          descricao?: string | null
          filial_opera?: string | null
          grupo?: string | null
          id?: string
          numero_patrimonio: string
          numero_serie?: string | null
          situacao?: string | null
          tipo_equipamento?: string | null
          updated_at?: string
          valor_compra?: number | null
          valor_indenizacao?: number | null
          valor_mercado?: number | null
          valor_venda?: number | null
        }
        Update: {
          codigo_equipamento?: string | null
          created_at?: string
          descricao?: string | null
          filial_opera?: string | null
          grupo?: string | null
          id?: string
          numero_patrimonio?: string
          numero_serie?: string | null
          situacao?: string | null
          tipo_equipamento?: string | null
          updated_at?: string
          valor_compra?: number | null
          valor_indenizacao?: number | null
          valor_mercado?: number | null
          valor_venda?: number | null
        }
        Relationships: []
      }
      equipamentos_faturamento_historico: {
        Row: {
          alterado_em: string
          alterado_por: string | null
          dados_antes: Json | null
          dados_depois: Json | null
          equipamento_id: string
          id: string
        }
        Insert: {
          alterado_em?: string
          alterado_por?: string | null
          dados_antes?: Json | null
          dados_depois?: Json | null
          equipamento_id: string
          id?: string
        }
        Update: {
          alterado_em?: string
          alterado_por?: string | null
          dados_antes?: Json | null
          dados_depois?: Json | null
          equipamento_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "equipamentos_faturamento_historico_equipamento_id_fkey"
            columns: ["equipamento_id"]
            isOneToOne: false
            referencedRelation: "equipamentos_faturamento"
            referencedColumns: ["id"]
          },
        ]
      }
      estoque_interno_acessos: {
        Row: {
          ativo: boolean
          criado_em: string
          email: string
          nome: string
          pode_gerenciar: boolean
          pode_movimentar: boolean
        }
        Insert: {
          ativo?: boolean
          criado_em?: string
          email: string
          nome: string
          pode_gerenciar?: boolean
          pode_movimentar?: boolean
        }
        Update: {
          ativo?: boolean
          criado_em?: string
          email?: string
          nome?: string
          pode_gerenciar?: boolean
          pode_movimentar?: boolean
        }
        Relationships: []
      }
      estoque_interno_auditoria: {
        Row: {
          ator_email: string
          ator_nome: string
          ator_user_id: string
          criado_em: string
          dados_anteriores: Json | null
          dados_novos: Json | null
          id: string
          item_id: string | null
          motivo: string
          movimento_id: string | null
          operacao: string
        }
        Insert: {
          ator_email: string
          ator_nome: string
          ator_user_id: string
          criado_em?: string
          dados_anteriores?: Json | null
          dados_novos?: Json | null
          id?: string
          item_id?: string | null
          motivo: string
          movimento_id?: string | null
          operacao: string
        }
        Update: {
          ator_email?: string
          ator_nome?: string
          ator_user_id?: string
          criado_em?: string
          dados_anteriores?: Json | null
          dados_novos?: Json | null
          id?: string
          item_id?: string | null
          motivo?: string
          movimento_id?: string | null
          operacao?: string
        }
        Relationships: [
          {
            foreignKeyName: "estoque_interno_auditoria_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "estoque_interno_atividade_produtos"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "estoque_interno_auditoria_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "estoque_interno_itens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estoque_interno_auditoria_movimento_id_fkey"
            columns: ["movimento_id"]
            isOneToOne: false
            referencedRelation: "estoque_interno_movimentos"
            referencedColumns: ["id"]
          },
        ]
      }
      estoque_interno_itens: {
        Row: {
          aplicacao: string | null
          atualizado_em: string
          codigo: number
          criado_em: string
          descricao: string
          divergencia_historico: number
          entradas_planilha: number | null
          estoque_maximo: number | null
          estoque_minimo: number | null
          id: string
          origem_linha: number | null
          saidas_planilha: number | null
          saldo_atual: number
          saldo_inicial: number
          unidade: string
        }
        Insert: {
          aplicacao?: string | null
          atualizado_em?: string
          codigo: number
          criado_em?: string
          descricao: string
          divergencia_historico?: number
          entradas_planilha?: number | null
          estoque_maximo?: number | null
          estoque_minimo?: number | null
          id?: string
          origem_linha?: number | null
          saidas_planilha?: number | null
          saldo_atual?: number
          saldo_inicial?: number
          unidade?: string
        }
        Update: {
          aplicacao?: string | null
          atualizado_em?: string
          codigo?: number
          criado_em?: string
          descricao?: string
          divergencia_historico?: number
          entradas_planilha?: number | null
          estoque_maximo?: number | null
          estoque_minimo?: number | null
          id?: string
          origem_linha?: number | null
          saidas_planilha?: number | null
          saldo_atual?: number
          saldo_inicial?: number
          unidade?: string
        }
        Relationships: []
      }
      estoque_interno_movimentos: {
        Row: {
          aba_origem: string | null
          ator_email: string | null
          ator_user_id: string | null
          cancelado_em: string | null
          cancelado_por: string | null
          criado_em: string
          data_movimento: string | null
          data_suspeita: boolean
          destinatario: string | null
          historico_importado: boolean
          id: string
          item_id: string
          linha_origem: number | null
          lote_importacao: string | null
          observacao: string | null
          origem_responsavel: string | null
          preco_unitario: number | null
          quantidade: number
          saldo_antes: number | null
          saldo_depois: number | null
          tipo: string
        }
        Insert: {
          aba_origem?: string | null
          ator_email?: string | null
          ator_user_id?: string | null
          cancelado_em?: string | null
          cancelado_por?: string | null
          criado_em?: string
          data_movimento?: string | null
          data_suspeita?: boolean
          destinatario?: string | null
          historico_importado?: boolean
          id?: string
          item_id: string
          linha_origem?: number | null
          lote_importacao?: string | null
          observacao?: string | null
          origem_responsavel?: string | null
          preco_unitario?: number | null
          quantidade: number
          saldo_antes?: number | null
          saldo_depois?: number | null
          tipo: string
        }
        Update: {
          aba_origem?: string | null
          ator_email?: string | null
          ator_user_id?: string | null
          cancelado_em?: string | null
          cancelado_por?: string | null
          criado_em?: string
          data_movimento?: string | null
          data_suspeita?: boolean
          destinatario?: string | null
          historico_importado?: boolean
          id?: string
          item_id?: string
          linha_origem?: number | null
          lote_importacao?: string | null
          observacao?: string | null
          origem_responsavel?: string | null
          preco_unitario?: number | null
          quantidade?: number
          saldo_antes?: number | null
          saldo_depois?: number | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "estoque_interno_movimentos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "estoque_interno_atividade_produtos"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "estoque_interno_movimentos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "estoque_interno_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      estoque_veiculo: {
        Row: {
          created_at: string
          id: string
          nome_item: string
          quantidade: number
          unidade: string
          updated_at: string
          veiculo_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          nome_item: string
          quantidade?: number
          unidade?: string
          updated_at?: string
          veiculo_id: string
        }
        Update: {
          created_at?: string
          id?: string
          nome_item?: string
          quantidade?: number
          unidade?: string
          updated_at?: string
          veiculo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "estoque_veiculo_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      faturamento_pendencias: {
        Row: {
          cliente_id: string | null
          contrato_id: string | null
          created_at: string
          descricao: string
          empresa_id: string | null
          fatura_id: string | null
          id: string
          resolvida_em: string | null
          resolvida_por: string | null
          severidade: string
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          cliente_id?: string | null
          contrato_id?: string | null
          created_at?: string
          descricao: string
          empresa_id?: string | null
          fatura_id?: string | null
          id?: string
          resolvida_em?: string | null
          resolvida_por?: string | null
          severidade?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          cliente_id?: string | null
          contrato_id?: string | null
          created_at?: string
          descricao?: string
          empresa_id?: string | null
          fatura_id?: string | null
          id?: string
          resolvida_em?: string | null
          resolvida_por?: string | null
          severidade?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "faturamento_pendencias_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturamento_pendencias_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturamento_pendencias_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturamento_pendencias_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "faturamento_pendencias_fatura_id_fkey"
            columns: ["fatura_id"]
            isOneToOne: false
            referencedRelation: "faturas"
            referencedColumns: ["id"]
          },
        ]
      }
      faturas: {
        Row: {
          acrescimos: number
          cliente_id: string | null
          competencia: string | null
          contrato_id: string | null
          created_at: string
          data_emissao: string | null
          data_vencimento: string | null
          descontos: number
          empresa_id: string | null
          id: string
          numero: string
          observacoes: string | null
          status: string
          subtotal: number
          total: number
          updated_at: string
          user_id: string | null
          valor_pago: number
        }
        Insert: {
          acrescimos?: number
          cliente_id?: string | null
          competencia?: string | null
          contrato_id?: string | null
          created_at?: string
          data_emissao?: string | null
          data_vencimento?: string | null
          descontos?: number
          empresa_id?: string | null
          id?: string
          numero: string
          observacoes?: string | null
          status?: string
          subtotal?: number
          total?: number
          updated_at?: string
          user_id?: string | null
          valor_pago?: number
        }
        Update: {
          acrescimos?: number
          cliente_id?: string | null
          competencia?: string | null
          contrato_id?: string | null
          created_at?: string
          data_emissao?: string | null
          data_vencimento?: string | null
          descontos?: number
          empresa_id?: string | null
          id?: string
          numero?: string
          observacoes?: string | null
          status?: string
          subtotal?: number
          total?: number
          updated_at?: string
          user_id?: string | null
          valor_pago?: number
        }
        Relationships: [
          {
            foreignKeyName: "faturas_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturas_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      fechamentos_filial: {
        Row: {
          company_id: string | null
          competencia: string
          conferido_em: string | null
          conferido_por_nome: string | null
          conferido_por_user_id: string | null
          created_at: string
          empresa_nome: string
          encaminhado_contabilidade_em: string | null
          encaminhado_contabilidade_por_nome: string | null
          enviado_em: string | null
          enviado_por_nome: string | null
          enviado_por_user_id: string | null
          fechado_em: string | null
          fechado_por: string | null
          fechado_por_nome: string | null
          fechado_por_user_id: string | null
          id: string
          motivo_devolucao: string | null
          motivo_reabertura: string
          observacoes: string | null
          reaberto_em: string | null
          reaberto_por_nome: string | null
          reaberto_por_user_id: string | null
          status: string
          total_descontos: number
          total_funcionarios: number
          total_liquido: number
          total_proventos: number
          updated_at: string
        }
        Insert: {
          company_id?: string | null
          competencia: string
          conferido_em?: string | null
          conferido_por_nome?: string | null
          conferido_por_user_id?: string | null
          created_at?: string
          empresa_nome?: string
          encaminhado_contabilidade_em?: string | null
          encaminhado_contabilidade_por_nome?: string | null
          enviado_em?: string | null
          enviado_por_nome?: string | null
          enviado_por_user_id?: string | null
          fechado_em?: string | null
          fechado_por?: string | null
          fechado_por_nome?: string | null
          fechado_por_user_id?: string | null
          id?: string
          motivo_devolucao?: string | null
          motivo_reabertura?: string
          observacoes?: string | null
          reaberto_em?: string | null
          reaberto_por_nome?: string | null
          reaberto_por_user_id?: string | null
          status?: string
          total_descontos?: number
          total_funcionarios?: number
          total_liquido?: number
          total_proventos?: number
          updated_at?: string
        }
        Update: {
          company_id?: string | null
          competencia?: string
          conferido_em?: string | null
          conferido_por_nome?: string | null
          conferido_por_user_id?: string | null
          created_at?: string
          empresa_nome?: string
          encaminhado_contabilidade_em?: string | null
          encaminhado_contabilidade_por_nome?: string | null
          enviado_em?: string | null
          enviado_por_nome?: string | null
          enviado_por_user_id?: string | null
          fechado_em?: string | null
          fechado_por?: string | null
          fechado_por_nome?: string | null
          fechado_por_user_id?: string | null
          id?: string
          motivo_devolucao?: string | null
          motivo_reabertura?: string
          observacoes?: string | null
          reaberto_em?: string | null
          reaberto_por_nome?: string | null
          reaberto_por_user_id?: string | null
          status?: string
          total_descontos?: number
          total_funcionarios?: number
          total_liquido?: number
          total_proventos?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fechamentos_filial_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fechamentos_filial_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      fechamentos_historico: {
        Row: {
          acao: string
          created_at: string
          detalhes: Json | null
          fechamento_id: string | null
          id: string
          user_id: string | null
          usuario_nome: string | null
        }
        Insert: {
          acao: string
          created_at?: string
          detalhes?: Json | null
          fechamento_id?: string | null
          id?: string
          user_id?: string | null
          usuario_nome?: string | null
        }
        Update: {
          acao?: string
          created_at?: string
          detalhes?: Json | null
          fechamento_id?: string | null
          id?: string
          user_id?: string | null
          usuario_nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fechamentos_historico_fechamento_id_fkey"
            columns: ["fechamento_id"]
            isOneToOne: false
            referencedRelation: "fechamentos_filial"
            referencedColumns: ["id"]
          },
        ]
      }
      ferias_avisos: {
        Row: {
          assinado_pdf_url: string
          aviso_pdf_url: string
          company_id: string | null
          created_at: string
          data_entrega: string | null
          data_pagamento: string | null
          data_retorno: string
          dias_abono: number
          dias_ferias: number
          empresa_nome: string
          enviado_contabilidade_destinos: string | null
          enviado_contabilidade_em: string | null
          enviado_contabilidade_por: string | null
          funcionario_cargo: string
          funcionario_cpf: string
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          observacao: string
          periodo_aquisitivo_fim: string | null
          periodo_aquisitivo_inicio: string | null
          periodo_aquisitivo_origem: string
          periodo_gozo_fim: string
          periodo_gozo_inicio: string
          prazo_pagamento: string | null
          status: string
          status_pagamento: string
          updated_at: string
          user_id: string
          user_nome: string
          valor_pago: number | null
        }
        Insert: {
          assinado_pdf_url?: string
          aviso_pdf_url?: string
          company_id?: string | null
          created_at?: string
          data_entrega?: string | null
          data_pagamento?: string | null
          data_retorno: string
          dias_abono?: number
          dias_ferias?: number
          empresa_nome?: string
          enviado_contabilidade_destinos?: string | null
          enviado_contabilidade_em?: string | null
          enviado_contabilidade_por?: string | null
          funcionario_cargo?: string
          funcionario_cpf?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          observacao?: string
          periodo_aquisitivo_fim?: string | null
          periodo_aquisitivo_inicio?: string | null
          periodo_aquisitivo_origem?: string
          periodo_gozo_fim: string
          periodo_gozo_inicio: string
          prazo_pagamento?: string | null
          status?: string
          status_pagamento?: string
          updated_at?: string
          user_id?: string
          user_nome?: string
          valor_pago?: number | null
        }
        Update: {
          assinado_pdf_url?: string
          aviso_pdf_url?: string
          company_id?: string | null
          created_at?: string
          data_entrega?: string | null
          data_pagamento?: string | null
          data_retorno?: string
          dias_abono?: number
          dias_ferias?: number
          empresa_nome?: string
          enviado_contabilidade_destinos?: string | null
          enviado_contabilidade_em?: string | null
          enviado_contabilidade_por?: string | null
          funcionario_cargo?: string
          funcionario_cpf?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          observacao?: string
          periodo_aquisitivo_fim?: string | null
          periodo_aquisitivo_inicio?: string | null
          periodo_aquisitivo_origem?: string
          periodo_gozo_fim?: string
          periodo_gozo_inicio?: string
          prazo_pagamento?: string | null
          status?: string
          status_pagamento?: string
          updated_at?: string
          user_id?: string
          user_nome?: string
          valor_pago?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ferias_avisos_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ferias_avisos_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "ferias_avisos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ferias_avisos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      ferias_periodos_oficiais: {
        Row: {
          abono_opcao: string | null
          company_id: string
          created_at: string
          data_admissao: string | null
          data_limite: string
          decimo_terceiro_opcao: string | null
          dias_direito: number
          fonte_arquivo: string | null
          fonte_cnpj: string | null
          fonte_gerado_em: string | null
          funcionario_codigo: string | null
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          inicio_previsto: string | null
          observacao: string | null
          periodo_aquisitivo_fim: string
          periodo_aquisitivo_inicio: string
          referencia: string
          updated_at: string
        }
        Insert: {
          abono_opcao?: string | null
          company_id: string
          created_at?: string
          data_admissao?: string | null
          data_limite: string
          decimo_terceiro_opcao?: string | null
          dias_direito: number
          fonte_arquivo?: string | null
          fonte_cnpj?: string | null
          fonte_gerado_em?: string | null
          funcionario_codigo?: string | null
          funcionario_id?: string | null
          funcionario_nome: string
          id?: string
          inicio_previsto?: string | null
          observacao?: string | null
          periodo_aquisitivo_fim: string
          periodo_aquisitivo_inicio: string
          referencia: string
          updated_at?: string
        }
        Update: {
          abono_opcao?: string | null
          company_id?: string
          created_at?: string
          data_admissao?: string | null
          data_limite?: string
          decimo_terceiro_opcao?: string | null
          dias_direito?: number
          fonte_arquivo?: string | null
          fonte_cnpj?: string | null
          fonte_gerado_em?: string | null
          funcionario_codigo?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          inicio_previsto?: string | null
          observacao?: string | null
          periodo_aquisitivo_fim?: string
          periodo_aquisitivo_inicio?: string
          referencia?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ferias_periodos_oficiais_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ferias_periodos_oficiais_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "ferias_periodos_oficiais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ferias_periodos_oficiais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      filial_auditoria: {
        Row: {
          acao: string
          ator_email: string | null
          ator_nome: string | null
          ator_role: string | null
          ator_user_id: string | null
          company_id: string | null
          created_at: string
          dados_antes: Json | null
          dados_depois: Json | null
          empresa_nome: string | null
          entidade_id: string | null
          filial: string | null
          id: string
          tabela: string
        }
        Insert: {
          acao: string
          ator_email?: string | null
          ator_nome?: string | null
          ator_role?: string | null
          ator_user_id?: string | null
          company_id?: string | null
          created_at?: string
          dados_antes?: Json | null
          dados_depois?: Json | null
          empresa_nome?: string | null
          entidade_id?: string | null
          filial?: string | null
          id?: string
          tabela: string
        }
        Update: {
          acao?: string
          ator_email?: string | null
          ator_nome?: string | null
          ator_role?: string | null
          ator_user_id?: string | null
          company_id?: string | null
          created_at?: string
          dados_antes?: Json | null
          dados_depois?: Json | null
          empresa_nome?: string | null
          entidade_id?: string | null
          filial?: string | null
          id?: string
          tabela?: string
        }
        Relationships: []
      }
      filial_documentos_fluxo: {
        Row: {
          acesso_externo_id: string | null
          company_id: string
          competencia: string
          created_at: string
          devolvido_documento_id: string | null
          devolvido_em: string | null
          funcionario_id: string
          id: string
          impresso_em: string | null
          observacao: string | null
          solicitado_em: string | null
          solicitado_por_nome: string | null
          source_documento_id: string
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          acesso_externo_id?: string | null
          company_id: string
          competencia?: string
          created_at?: string
          devolvido_documento_id?: string | null
          devolvido_em?: string | null
          funcionario_id: string
          id?: string
          impresso_em?: string | null
          observacao?: string | null
          solicitado_em?: string | null
          solicitado_por_nome?: string | null
          source_documento_id: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          acesso_externo_id?: string | null
          company_id?: string
          competencia?: string
          created_at?: string
          devolvido_documento_id?: string | null
          devolvido_em?: string | null
          funcionario_id?: string
          id?: string
          impresso_em?: string | null
          observacao?: string | null
          solicitado_em?: string | null
          solicitado_por_nome?: string | null
          source_documento_id?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "filial_documentos_fluxo_acesso_externo_id_fkey"
            columns: ["acesso_externo_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filial_documentos_fluxo_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filial_documentos_fluxo_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "filial_documentos_fluxo_devolvido_documento_id_fkey"
            columns: ["devolvido_documento_id"]
            isOneToOne: false
            referencedRelation: "documentos_funcionario"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filial_documentos_fluxo_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filial_documentos_fluxo_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "filial_documentos_fluxo_source_documento_id_fkey"
            columns: ["source_documento_id"]
            isOneToOne: true
            referencedRelation: "documentos_funcionario"
            referencedColumns: ["id"]
          },
        ]
      }
      fornecedores: {
        Row: {
          agencia: string | null
          banco: string | null
          categoria: string | null
          cep: string | null
          cidade: string | null
          cnpj_cpf: string | null
          conta: string | null
          contato_responsavel: string | null
          created_at: string
          email: string | null
          endereco: string | null
          id: string
          inscricao_estadual: string | null
          nome_fantasia: string | null
          observacoes: string | null
          pix: string | null
          razao_social: string
          status: string
          telefone: string | null
          tipo_conta: string | null
          uf: string | null
          updated_at: string
        }
        Insert: {
          agencia?: string | null
          banco?: string | null
          categoria?: string | null
          cep?: string | null
          cidade?: string | null
          cnpj_cpf?: string | null
          conta?: string | null
          contato_responsavel?: string | null
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          inscricao_estadual?: string | null
          nome_fantasia?: string | null
          observacoes?: string | null
          pix?: string | null
          razao_social: string
          status?: string
          telefone?: string | null
          tipo_conta?: string | null
          uf?: string | null
          updated_at?: string
        }
        Update: {
          agencia?: string | null
          banco?: string | null
          categoria?: string | null
          cep?: string | null
          cidade?: string | null
          cnpj_cpf?: string | null
          conta?: string | null
          contato_responsavel?: string | null
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          inscricao_estadual?: string | null
          nome_fantasia?: string | null
          observacoes?: string | null
          pix?: string | null
          razao_social?: string
          status?: string
          telefone?: string | null
          tipo_conta?: string | null
          uf?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      funcionario_leitura_inteligente_backups: {
        Row: {
          created_at: string
          criado_por: string | null
          dados_antes: Json
          dados_aplicados: Json
          desfeito_em: string | null
          desfeito_por: string | null
          funcionario_id: string
          id: string
          texto_origem: string | null
        }
        Insert: {
          created_at?: string
          criado_por?: string | null
          dados_antes: Json
          dados_aplicados?: Json
          desfeito_em?: string | null
          desfeito_por?: string | null
          funcionario_id: string
          id?: string
          texto_origem?: string | null
        }
        Update: {
          created_at?: string
          criado_por?: string | null
          dados_antes?: Json
          dados_aplicados?: Json
          desfeito_em?: string | null
          desfeito_por?: string | null
          funcionario_id?: string
          id?: string
          texto_origem?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funcionario_leitura_inteligente_backups_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funcionario_leitura_inteligente_backups_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      funcionarios: {
        Row: {
          agencia: string | null
          ativo: boolean | null
          banco: string | null
          banco_codigo: string | null
          cargo: string | null
          categoria: string | null
          celular: string | null
          company_id: string | null
          conta: string | null
          conta_digito: string | null
          cpf: string | null
          cpf_pendente_acesso: boolean | null
          cpf_titular: string | null
          created_at: string
          dados_bancarios_atualizado_em: string | null
          dados_bancarios_origem: string | null
          data_admissao: string | null
          data_demissao: string | null
          data_exame_medico: string | null
          data_nascimento: string | null
          email: string | null
          empresa_id: string | null
          endereco: string | null
          excluido_em: string | null
          excluido_por: string | null
          exclusao_motivo: string | null
          exclusao_origem: string | null
          experiencia_atualizado_em: string | null
          experiencia_fim: string | null
          experiencia_fonte: string | null
          experiencia_inicio: string | null
          id: string
          insalubridade_ativa: boolean | null
          insalubridade_valor: number | null
          matricula_esocial: string | null
          nome: string
          observacoes: string | null
          pix: string | null
          registro: string | null
          rg: string | null
          salario: number | null
          salario_base: number | null
          setor_ghe: string | null
          status: string | null
          telefone: string | null
          tem_insalubridade: boolean | null
          tipo_chave_pix: string | null
          tipo_conta: string | null
          titular_conta: string | null
          updated_at: string | null
          va_ativo: boolean | null
          va_mensal: number | null
          valor_insalubridade: number | null
          vr_ativo: boolean | null
          vr_diario: number | null
          vt_ativo: boolean | null
          vt_diario: number | null
        }
        Insert: {
          agencia?: string | null
          ativo?: boolean | null
          banco?: string | null
          banco_codigo?: string | null
          cargo?: string | null
          categoria?: string | null
          celular?: string | null
          company_id?: string | null
          conta?: string | null
          conta_digito?: string | null
          cpf?: string | null
          cpf_pendente_acesso?: boolean | null
          cpf_titular?: string | null
          created_at?: string
          dados_bancarios_atualizado_em?: string | null
          dados_bancarios_origem?: string | null
          data_admissao?: string | null
          data_demissao?: string | null
          data_exame_medico?: string | null
          data_nascimento?: string | null
          email?: string | null
          empresa_id?: string | null
          endereco?: string | null
          excluido_em?: string | null
          excluido_por?: string | null
          exclusao_motivo?: string | null
          exclusao_origem?: string | null
          experiencia_atualizado_em?: string | null
          experiencia_fim?: string | null
          experiencia_fonte?: string | null
          experiencia_inicio?: string | null
          id?: string
          insalubridade_ativa?: boolean | null
          insalubridade_valor?: number | null
          matricula_esocial?: string | null
          nome?: string
          observacoes?: string | null
          pix?: string | null
          registro?: string | null
          rg?: string | null
          salario?: number | null
          salario_base?: number | null
          setor_ghe?: string | null
          status?: string | null
          telefone?: string | null
          tem_insalubridade?: boolean | null
          tipo_chave_pix?: string | null
          tipo_conta?: string | null
          titular_conta?: string | null
          updated_at?: string | null
          va_ativo?: boolean | null
          va_mensal?: number | null
          valor_insalubridade?: number | null
          vr_ativo?: boolean | null
          vr_diario?: number | null
          vt_ativo?: boolean | null
          vt_diario?: number | null
        }
        Update: {
          agencia?: string | null
          ativo?: boolean | null
          banco?: string | null
          banco_codigo?: string | null
          cargo?: string | null
          categoria?: string | null
          celular?: string | null
          company_id?: string | null
          conta?: string | null
          conta_digito?: string | null
          cpf?: string | null
          cpf_pendente_acesso?: boolean | null
          cpf_titular?: string | null
          created_at?: string
          dados_bancarios_atualizado_em?: string | null
          dados_bancarios_origem?: string | null
          data_admissao?: string | null
          data_demissao?: string | null
          data_exame_medico?: string | null
          data_nascimento?: string | null
          email?: string | null
          empresa_id?: string | null
          endereco?: string | null
          excluido_em?: string | null
          excluido_por?: string | null
          exclusao_motivo?: string | null
          exclusao_origem?: string | null
          experiencia_atualizado_em?: string | null
          experiencia_fim?: string | null
          experiencia_fonte?: string | null
          experiencia_inicio?: string | null
          id?: string
          insalubridade_ativa?: boolean | null
          insalubridade_valor?: number | null
          matricula_esocial?: string | null
          nome?: string
          observacoes?: string | null
          pix?: string | null
          registro?: string | null
          rg?: string | null
          salario?: number | null
          salario_base?: number | null
          setor_ghe?: string | null
          status?: string | null
          telefone?: string | null
          tem_insalubridade?: boolean | null
          tipo_chave_pix?: string | null
          tipo_conta?: string | null
          titular_conta?: string | null
          updated_at?: string | null
          va_ativo?: boolean | null
          va_mensal?: number | null
          valor_insalubridade?: number | null
          vr_ativo?: boolean | null
          vr_diario?: number | null
          vt_ativo?: boolean | null
          vt_diario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "funcionarios_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funcionarios_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "funcionarios_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funcionarios_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      garagem_beneficiarios: {
        Row: {
          ativo: boolean
          atualizado_em: string
          atualizado_por: string | null
          company_id: string
          employee_id: string
          placa: string
          valor_mensal: number
          veiculo: string
        }
        Insert: {
          ativo?: boolean
          atualizado_em?: string
          atualizado_por?: string | null
          company_id: string
          employee_id: string
          placa?: string
          valor_mensal?: number
          veiculo?: string
        }
        Update: {
          ativo?: boolean
          atualizado_em?: string
          atualizado_por?: string | null
          company_id?: string
          employee_id?: string
          placa?: string
          valor_mensal?: number
          veiculo?: string
        }
        Relationships: [
          {
            foreignKeyName: "garagem_beneficiarios_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "garagem_beneficiarios_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "garagem_beneficiarios_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "garagem_beneficiarios_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      historico_documental: {
        Row: {
          arquivo_url: string | null
          company_id: string | null
          competencia: string | null
          created_at: string
          criado_por: string | null
          descricao: string | null
          funcionario_id: string | null
          id: string
          metadata: Json
          tipo: string
          titulo: string
        }
        Insert: {
          arquivo_url?: string | null
          company_id?: string | null
          competencia?: string | null
          created_at?: string
          criado_por?: string | null
          descricao?: string | null
          funcionario_id?: string | null
          id?: string
          metadata?: Json
          tipo: string
          titulo?: string
        }
        Update: {
          arquivo_url?: string | null
          company_id?: string | null
          competencia?: string | null
          created_at?: string
          criado_por?: string | null
          descricao?: string | null
          funcionario_id?: string | null
          id?: string
          metadata?: Json
          tipo?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "historico_documental_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_documental_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "historico_documental_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_documental_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      historico_locacao_faturamento: {
        Row: {
          cliente_id: string | null
          created_at: string
          data_fim: string | null
          data_inicio: string | null
          descricao_equipamento: string | null
          equipamento_id: string | null
          filial: string | null
          id: string
          item: string | null
          numero_nf: string | null
          numero_os: string | null
          patrimonio: string | null
          pedido: string | null
          periodo_texto: string | null
          quantidade: number | null
          updated_at: string
          valor_diaria_periodo: number | null
          valor_faturado_periodo: number | null
          valor_pedido_periodo: number | null
        }
        Insert: {
          cliente_id?: string | null
          created_at?: string
          data_fim?: string | null
          data_inicio?: string | null
          descricao_equipamento?: string | null
          equipamento_id?: string | null
          filial?: string | null
          id?: string
          item?: string | null
          numero_nf?: string | null
          numero_os?: string | null
          patrimonio?: string | null
          pedido?: string | null
          periodo_texto?: string | null
          quantidade?: number | null
          updated_at?: string
          valor_diaria_periodo?: number | null
          valor_faturado_periodo?: number | null
          valor_pedido_periodo?: number | null
        }
        Update: {
          cliente_id?: string | null
          created_at?: string
          data_fim?: string | null
          data_inicio?: string | null
          descricao_equipamento?: string | null
          equipamento_id?: string | null
          filial?: string | null
          id?: string
          item?: string | null
          numero_nf?: string | null
          numero_os?: string | null
          patrimonio?: string | null
          pedido?: string | null
          periodo_texto?: string | null
          quantidade?: number | null
          updated_at?: string
          valor_diaria_periodo?: number | null
          valor_faturado_periodo?: number | null
          valor_pedido_periodo?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "historico_locacao_faturamento_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_faturamento"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historico_locacao_faturamento_equipamento_id_fkey"
            columns: ["equipamento_id"]
            isOneToOne: false
            referencedRelation: "equipamentos_faturamento"
            referencedColumns: ["id"]
          },
        ]
      }
      horas_extras_operacionais: {
        Row: {
          app_request_id: string
          automatico: boolean
          autorizacao_id: string
          company_id: string | null
          created_at: string
          fim_em: string
          funcionario_id: string | null
          horas: number
          id: string
          inicio_em: string
          minutos: number
          movimento_diario_id: string | null
          origem: string
          status: string
          tipo_folha: string
          updated_at: string
        }
        Insert: {
          app_request_id: string
          automatico?: boolean
          autorizacao_id: string
          company_id?: string | null
          created_at?: string
          fim_em: string
          funcionario_id?: string | null
          horas?: number
          id?: string
          inicio_em: string
          minutos?: number
          movimento_diario_id?: string | null
          origem?: string
          status?: string
          tipo_folha: string
          updated_at?: string
        }
        Update: {
          app_request_id?: string
          automatico?: boolean
          autorizacao_id?: string
          company_id?: string | null
          created_at?: string
          fim_em?: string
          funcionario_id?: string | null
          horas?: number
          id?: string
          inicio_em?: string
          minutos?: number
          movimento_diario_id?: string | null
          origem?: string
          status?: string
          tipo_folha?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "horas_extras_operacionais_autorizacao_id_fkey"
            columns: ["autorizacao_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_autorizacoes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "horas_extras_operacionais_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "horas_extras_operacionais_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "horas_extras_operacionais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "horas_extras_operacionais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "horas_extras_operacionais_movimento_diario_id_fkey"
            columns: ["movimento_diario_id"]
            isOneToOne: false
            referencedRelation: "movimento_diario"
            referencedColumns: ["id"]
          },
        ]
      }
      import_batches: {
        Row: {
          approved_at: string | null
          created_at: string
          created_by: string | null
          data_type: string
          error_rows: number
          file_name: string
          id: string
          ignored_rows: number
          imported_rows: number
          mapping: Json
          ready_rows: number
          source: string
          status: string
          total_rows: number
          warning_rows: number
        }
        Insert: {
          approved_at?: string | null
          created_at?: string
          created_by?: string | null
          data_type?: string
          error_rows?: number
          file_name: string
          id?: string
          ignored_rows?: number
          imported_rows?: number
          mapping?: Json
          ready_rows?: number
          source: string
          status: string
          total_rows?: number
          warning_rows?: number
        }
        Update: {
          approved_at?: string | null
          created_at?: string
          created_by?: string | null
          data_type?: string
          error_rows?: number
          file_name?: string
          id?: string
          ignored_rows?: number
          imported_rows?: number
          mapping?: Json
          ready_rows?: number
          source?: string
          status?: string
          total_rows?: number
          warning_rows?: number
        }
        Relationships: []
      }
      import_logs: {
        Row: {
          action: string
          batch_id: string | null
          created_at: string
          id: string
          message: string
          payload: Json
          status: string
        }
        Insert: {
          action: string
          batch_id?: string | null
          created_at?: string
          id?: string
          message: string
          payload?: Json
          status: string
        }
        Update: {
          action?: string
          batch_id?: string | null
          created_at?: string
          id?: string
          message?: string
          payload?: Json
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "import_logs_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "import_batches"
            referencedColumns: ["id"]
          },
        ]
      }
      importacoes_dn4: {
        Row: {
          arquivo: string
          arquivo_path: string | null
          arquivo_url: string | null
          created_at: string
          excluido: boolean
          excluido_em: string | null
          finalizado_em: string | null
          id: string
          iniciado_em: string
          mensagem: string | null
          motivo_exclusao: string | null
          status: string
          storage_path: string | null
          texto_extraido: string | null
          tipo: string | null
          tipo_arquivo: string | null
          total_confirmados: number
          total_erros: number
          total_lidos: number
          total_pendentes: number
          updated_at: string
          usuario_id: string | null
          usuario_nome: string | null
        }
        Insert: {
          arquivo: string
          arquivo_path?: string | null
          arquivo_url?: string | null
          created_at?: string
          excluido?: boolean
          excluido_em?: string | null
          finalizado_em?: string | null
          id?: string
          iniciado_em?: string
          mensagem?: string | null
          motivo_exclusao?: string | null
          status?: string
          storage_path?: string | null
          texto_extraido?: string | null
          tipo?: string | null
          tipo_arquivo?: string | null
          total_confirmados?: number
          total_erros?: number
          total_lidos?: number
          total_pendentes?: number
          updated_at?: string
          usuario_id?: string | null
          usuario_nome?: string | null
        }
        Update: {
          arquivo?: string
          arquivo_path?: string | null
          arquivo_url?: string | null
          created_at?: string
          excluido?: boolean
          excluido_em?: string | null
          finalizado_em?: string | null
          id?: string
          iniciado_em?: string
          mensagem?: string | null
          motivo_exclusao?: string | null
          status?: string
          storage_path?: string | null
          texto_extraido?: string | null
          tipo?: string | null
          tipo_arquivo?: string | null
          total_confirmados?: number
          total_erros?: number
          total_lidos?: number
          total_pendentes?: number
          updated_at?: string
          usuario_id?: string | null
          usuario_nome?: string | null
        }
        Relationships: []
      }
      imported_employees_staging: {
        Row: {
          batch_id: string
          created_at: string
          id: string
          normalized_payload: Json
          raw_payload: Json
          reasons: string[]
          row_number: number
          status: string
        }
        Insert: {
          batch_id: string
          created_at?: string
          id?: string
          normalized_payload?: Json
          raw_payload?: Json
          reasons?: string[]
          row_number: number
          status: string
        }
        Update: {
          batch_id?: string
          created_at?: string
          id?: string
          normalized_payload?: Json
          raw_payload?: Json
          reasons?: string[]
          row_number?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "imported_employees_staging_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "import_batches"
            referencedColumns: ["id"]
          },
        ]
      }
      lancamentos_mensais: {
        Row: {
          adiantamento: number
          adicionais: number
          apagado_em: string | null
          apagado_por_nome: string | null
          apagado_por_user_id: string | null
          atrasos: number
          bloqueado: boolean
          comissao_base: number
          company_id: string | null
          competencia: string
          created_at: string
          descontos_diversos: number
          faltas_datas: Json
          faltas_dias: number
          fechamento_id: string | null
          funcionario_id: string
          he100: number
          he50: number
          he60: number
          id: string
          insalubridade_aplicada: boolean
          observacoes: string | null
          origem: string
          status_conferencia: string
          updated_at: string
          user_id: string | null
          va_aplicado: boolean
          vr_aplicado: boolean
          vr_dias: number
          vt_aplicado: boolean
          vt_desconto: number
        }
        Insert: {
          adiantamento?: number
          adicionais?: number
          apagado_em?: string | null
          apagado_por_nome?: string | null
          apagado_por_user_id?: string | null
          atrasos?: number
          bloqueado?: boolean
          comissao_base?: number
          company_id?: string | null
          competencia: string
          created_at?: string
          descontos_diversos?: number
          faltas_datas?: Json
          faltas_dias?: number
          fechamento_id?: string | null
          funcionario_id: string
          he100?: number
          he50?: number
          he60?: number
          id?: string
          insalubridade_aplicada?: boolean
          observacoes?: string | null
          origem?: string
          status_conferencia?: string
          updated_at?: string
          user_id?: string | null
          va_aplicado?: boolean
          vr_aplicado?: boolean
          vr_dias?: number
          vt_aplicado?: boolean
          vt_desconto?: number
        }
        Update: {
          adiantamento?: number
          adicionais?: number
          apagado_em?: string | null
          apagado_por_nome?: string | null
          apagado_por_user_id?: string | null
          atrasos?: number
          bloqueado?: boolean
          comissao_base?: number
          company_id?: string | null
          competencia?: string
          created_at?: string
          descontos_diversos?: number
          faltas_datas?: Json
          faltas_dias?: number
          fechamento_id?: string | null
          funcionario_id?: string
          he100?: number
          he50?: number
          he60?: number
          id?: string
          insalubridade_aplicada?: boolean
          observacoes?: string | null
          origem?: string
          status_conferencia?: string
          updated_at?: string
          user_id?: string | null
          va_aplicado?: boolean
          vr_aplicado?: boolean
          vr_dias?: number
          vt_aplicado?: boolean
          vt_desconto?: number
        }
        Relationships: [
          {
            foreignKeyName: "lancamentos_mensais_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lancamentos_mensais_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "lancamentos_mensais_fechamento_id_fkey"
            columns: ["fechamento_id"]
            isOneToOne: false
            referencedRelation: "fechamentos_filial"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lancamentos_mensais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lancamentos_mensais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      mecanico_veiculo_historico: {
        Row: {
          acao: string
          ativo_id: string | null
          created_at: string
          dados_antes: Json | null
          dados_depois: Json | null
          funcionario_id: string | null
          id: string
          realizado_por: string
          vinculo_id: string | null
        }
        Insert: {
          acao: string
          ativo_id?: string | null
          created_at?: string
          dados_antes?: Json | null
          dados_depois?: Json | null
          funcionario_id?: string | null
          id?: string
          realizado_por?: string
          vinculo_id?: string | null
        }
        Update: {
          acao?: string
          ativo_id?: string | null
          created_at?: string
          dados_antes?: Json | null
          dados_depois?: Json | null
          funcionario_id?: string | null
          id?: string
          realizado_por?: string
          vinculo_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mecanico_veiculo_historico_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mecanico_veiculo_historico_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mecanico_veiculo_historico_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "mecanico_veiculo_historico_vinculo_id_fkey"
            columns: ["vinculo_id"]
            isOneToOne: false
            referencedRelation: "mecanico_veiculo_vinculos"
            referencedColumns: ["id"]
          },
        ]
      }
      mecanico_veiculo_vinculos: {
        Row: {
          ativo_id: string
          created_at: string
          criado_por: string
          encerrado_em: string | null
          funcionario_id: string
          id: string
          iniciado_em: string
          motivo: string
          status: string
          updated_at: string
        }
        Insert: {
          ativo_id: string
          created_at?: string
          criado_por?: string
          encerrado_em?: string | null
          funcionario_id: string
          id?: string
          iniciado_em?: string
          motivo?: string
          status?: string
          updated_at?: string
        }
        Update: {
          ativo_id?: string
          created_at?: string
          criado_por?: string
          encerrado_em?: string | null
          funcionario_id?: string
          id?: string
          iniciado_em?: string
          motivo?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mecanico_veiculo_vinculos_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mecanico_veiculo_vinculos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mecanico_veiculo_vinculos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      medicao_itens: {
        Row: {
          ajuste: number
          created_at: string
          descricao: string
          id: string
          medicao_id: string
          observacao: string | null
          quantidade: number
          total: number
          updated_at: string
          valor_unitario: number
        }
        Insert: {
          ajuste?: number
          created_at?: string
          descricao: string
          id?: string
          medicao_id: string
          observacao?: string | null
          quantidade?: number
          total?: number
          updated_at?: string
          valor_unitario?: number
        }
        Update: {
          ajuste?: number
          created_at?: string
          descricao?: string
          id?: string
          medicao_id?: string
          observacao?: string | null
          quantidade?: number
          total?: number
          updated_at?: string
          valor_unitario?: number
        }
        Relationships: [
          {
            foreignKeyName: "medicao_itens_medicao_id_fkey"
            columns: ["medicao_id"]
            isOneToOne: false
            referencedRelation: "medicoes"
            referencedColumns: ["id"]
          },
        ]
      }
      medicoes: {
        Row: {
          aprovada_em: string | null
          aprovada_por: string | null
          competencia: string
          contrato_id: string
          created_at: string
          data_fim: string | null
          data_inicio: string | null
          id: string
          observacoes: string | null
          status: string
          total: number
          updated_at: string
        }
        Insert: {
          aprovada_em?: string | null
          aprovada_por?: string | null
          competencia: string
          contrato_id: string
          created_at?: string
          data_fim?: string | null
          data_inicio?: string | null
          id?: string
          observacoes?: string | null
          status?: string
          total?: number
          updated_at?: string
        }
        Update: {
          aprovada_em?: string | null
          aprovada_por?: string | null
          competencia?: string
          contrato_id?: string
          created_at?: string
          data_fim?: string | null
          data_inicio?: string | null
          id?: string
          observacoes?: string | null
          status?: string
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "medicoes_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
        ]
      }
      mobile_admin_modulos: {
        Row: {
          ativo: boolean
          codigo: string
          created_at: string
          descricao: string | null
          icone: string | null
          nome: string
          ordem: number
          rota: string
        }
        Insert: {
          ativo?: boolean
          codigo: string
          created_at?: string
          descricao?: string | null
          icone?: string | null
          nome: string
          ordem?: number
          rota: string
        }
        Update: {
          ativo?: boolean
          codigo?: string
          created_at?: string
          descricao?: string | null
          icone?: string | null
          nome?: string
          ordem?: number
          rota?: string
        }
        Relationships: []
      }
      mobile_admin_user_modulos: {
        Row: {
          created_at: string
          escopo_key: string | null
          escopo_unidade: string | null
          id: string
          liberado: boolean
          modulo_codigo: string
          pode_editar: boolean
          pode_visualizar: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          escopo_key?: string | null
          escopo_unidade?: string | null
          id?: string
          liberado?: boolean
          modulo_codigo: string
          pode_editar?: boolean
          pode_visualizar?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          escopo_key?: string | null
          escopo_unidade?: string | null
          id?: string
          liberado?: boolean
          modulo_codigo?: string
          pode_editar?: boolean
          pode_visualizar?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mobile_admin_user_modulos_modulo_codigo_fkey"
            columns: ["modulo_codigo"]
            isOneToOne: false
            referencedRelation: "mobile_admin_modulos"
            referencedColumns: ["codigo"]
          },
        ]
      }
      modulo_acessos_privados: {
        Row: {
          ativo: boolean
          chave: string
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ativo?: boolean
          chave: string
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ativo?: boolean
          chave?: string
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      movimentacoes_bancarias: {
        Row: {
          conciliacao_id: string | null
          conciliado: boolean
          conta_bancaria_id: string
          created_at: string
          data: string
          data_conciliacao: string | null
          descricao: string | null
          id: string
          origem: string | null
          pagamento_id: string | null
          recebimento_id: string | null
          tipo: string
          user_id: string | null
          valor: number
        }
        Insert: {
          conciliacao_id?: string | null
          conciliado?: boolean
          conta_bancaria_id: string
          created_at?: string
          data?: string
          data_conciliacao?: string | null
          descricao?: string | null
          id?: string
          origem?: string | null
          pagamento_id?: string | null
          recebimento_id?: string | null
          tipo: string
          user_id?: string | null
          valor: number
        }
        Update: {
          conciliacao_id?: string | null
          conciliado?: boolean
          conta_bancaria_id?: string
          created_at?: string
          data?: string
          data_conciliacao?: string | null
          descricao?: string | null
          id?: string
          origem?: string | null
          pagamento_id?: string | null
          recebimento_id?: string | null
          tipo?: string
          user_id?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "movimentacoes_bancarias_conta_bancaria_id_fkey"
            columns: ["conta_bancaria_id"]
            isOneToOne: false
            referencedRelation: "contas_bancarias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "movimentacoes_bancarias_pagamento_id_fkey"
            columns: ["pagamento_id"]
            isOneToOne: false
            referencedRelation: "pagamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "movimentacoes_bancarias_recebimento_id_fkey"
            columns: ["recebimento_id"]
            isOneToOne: false
            referencedRelation: "recebimentos"
            referencedColumns: ["id"]
          },
        ]
      }
      movimento_diario: {
        Row: {
          company_id: string
          competencia: string
          created_at: string
          data: string
          funcionario_id: string
          id: string
          observacao: string
          origem: string | null
          origem_ref: string | null
          quantidade: number
          registrado_por_nome: string
          registrado_por_user_id: string | null
          tipo: string
          updated_at: string
          valor: number
        }
        Insert: {
          company_id: string
          competencia: string
          created_at?: string
          data: string
          funcionario_id: string
          id?: string
          observacao?: string
          origem?: string | null
          origem_ref?: string | null
          quantidade?: number
          registrado_por_nome?: string
          registrado_por_user_id?: string | null
          tipo: string
          updated_at?: string
          valor?: number
        }
        Update: {
          company_id?: string
          competencia?: string
          created_at?: string
          data?: string
          funcionario_id?: string
          id?: string
          observacao?: string
          origem?: string | null
          origem_ref?: string | null
          quantidade?: number
          registrado_por_nome?: string
          registrado_por_user_id?: string | null
          tipo?: string
          updated_at?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "movimento_diario_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "movimento_diario_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "movimento_diario_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "movimento_diario_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      operacional_alocacoes: {
        Row: {
          alerta_conferencia: boolean
          ativo: boolean
          ativo_id: string | null
          cliente_id: string
          cliente_local_id: string | null
          created_at: string
          data_base: string | null
          fonte: string | null
          fonte_arquivo: string | null
          fonte_pagina: number | null
          id: string
          observacao: string | null
          origem: string
          patrimonio: string | null
          placa: string
          updated_at: string
        }
        Insert: {
          alerta_conferencia?: boolean
          ativo?: boolean
          ativo_id?: string | null
          cliente_id: string
          cliente_local_id?: string | null
          created_at?: string
          data_base?: string | null
          fonte?: string | null
          fonte_arquivo?: string | null
          fonte_pagina?: number | null
          id?: string
          observacao?: string | null
          origem?: string
          patrimonio?: string | null
          placa: string
          updated_at?: string
        }
        Update: {
          alerta_conferencia?: boolean
          ativo?: boolean
          ativo_id?: string | null
          cliente_id?: string
          cliente_local_id?: string | null
          created_at?: string
          data_base?: string | null
          fonte?: string | null
          fonte_arquivo?: string | null
          fonte_pagina?: number | null
          id?: string
          observacao?: string | null
          origem?: string
          patrimonio?: string | null
          placa?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "operacional_alocacoes_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_alocacoes_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_alocacoes_cliente_local_id_fkey"
            columns: ["cliente_local_id"]
            isOneToOne: false
            referencedRelation: "cliente_locais_operacionais"
            referencedColumns: ["id"]
          },
        ]
      }
      operacional_movimentacoes: {
        Row: {
          ativo_id: string | null
          cliente_destino_id: string | null
          cliente_destino_nome: string | null
          cliente_origem_id: string | null
          cliente_origem_nome: string | null
          contrato_id: string | null
          created_at: string
          email_formalizacao_em: string | null
          email_formalizacao_status: string | null
          equipamento_id: string | null
          id: string
          local_destino_id: string | null
          local_destino_nome: string | null
          local_origem_id: string | null
          local_origem_nome: string | null
          observacao: string | null
          operador_id: string
          operador_nome: string
          patrimonio: string | null
          placa: string | null
          tipo: string
        }
        Insert: {
          ativo_id?: string | null
          cliente_destino_id?: string | null
          cliente_destino_nome?: string | null
          cliente_origem_id?: string | null
          cliente_origem_nome?: string | null
          contrato_id?: string | null
          created_at?: string
          email_formalizacao_em?: string | null
          email_formalizacao_status?: string | null
          equipamento_id?: string | null
          id?: string
          local_destino_id?: string | null
          local_destino_nome?: string | null
          local_origem_id?: string | null
          local_origem_nome?: string | null
          observacao?: string | null
          operador_id: string
          operador_nome: string
          patrimonio?: string | null
          placa?: string | null
          tipo: string
        }
        Update: {
          ativo_id?: string | null
          cliente_destino_id?: string | null
          cliente_destino_nome?: string | null
          cliente_origem_id?: string | null
          cliente_origem_nome?: string | null
          contrato_id?: string | null
          created_at?: string
          email_formalizacao_em?: string | null
          email_formalizacao_status?: string | null
          equipamento_id?: string | null
          id?: string
          local_destino_id?: string | null
          local_destino_nome?: string | null
          local_origem_id?: string | null
          local_origem_nome?: string | null
          observacao?: string | null
          operador_id?: string
          operador_nome?: string
          patrimonio?: string | null
          placa?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "operacional_movimentacoes_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_cliente_destino_id_fkey"
            columns: ["cliente_destino_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_cliente_origem_id_fkey"
            columns: ["cliente_origem_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_equipamento_id_fkey"
            columns: ["equipamento_id"]
            isOneToOne: false
            referencedRelation: "contrato_equipamentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_local_destino_id_fkey"
            columns: ["local_destino_id"]
            isOneToOne: false
            referencedRelation: "cliente_locais_operacionais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_local_origem_id_fkey"
            columns: ["local_origem_id"]
            isOneToOne: false
            referencedRelation: "cliente_locais_operacionais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_movimentacoes_operador_id_fkey"
            columns: ["operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
        ]
      }
      operacional_placas_disponibilidade: {
        Row: {
          ativo_id: string | null
          atualizado_em: string
          atualizado_por_nome: string | null
          atualizado_por_operador_id: string | null
          created_at: string
          id: string
          motivo: string | null
          origem: string
          placa: string
          status: string
        }
        Insert: {
          ativo_id?: string | null
          atualizado_em?: string
          atualizado_por_nome?: string | null
          atualizado_por_operador_id?: string | null
          created_at?: string
          id?: string
          motivo?: string | null
          origem?: string
          placa: string
          status?: string
        }
        Update: {
          ativo_id?: string | null
          atualizado_em?: string
          atualizado_por_nome?: string | null
          atualizado_por_operador_id?: string | null
          created_at?: string
          id?: string
          motivo?: string | null
          origem?: string
          placa?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "operacional_placas_disponibilid_atualizado_por_operador_id_fkey"
            columns: ["atualizado_por_operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operacional_placas_disponibilidade_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
        ]
      }
      operacional_registros_auditoria: {
        Row: {
          acao: string
          antes: Json | null
          created_at: string
          depois: Json | null
          entidade: string
          entidade_id: string | null
          id: string
          motivo: string
          operador_id: string | null
          operador_nome: string | null
          user_id: string | null
        }
        Insert: {
          acao: string
          antes?: Json | null
          created_at?: string
          depois?: Json | null
          entidade: string
          entidade_id?: string | null
          id?: string
          motivo: string
          operador_id?: string | null
          operador_nome?: string | null
          user_id?: string | null
        }
        Update: {
          acao?: string
          antes?: Json | null
          created_at?: string
          depois?: Json | null
          entidade?: string
          entidade_id?: string | null
          id?: string
          motivo?: string
          operador_id?: string | null
          operador_nome?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "operacional_registros_auditoria_operador_id_fkey"
            columns: ["operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
        ]
      }
      operadores_operacao: {
        Row: {
          ativo: boolean
          cargo: string | null
          codigo_emitido_em: string | null
          codigo_hash: string | null
          codigo_hint: string | null
          created_at: string
          created_by: string | null
          email: string | null
          empresa_id: string | null
          filial: string | null
          funcionario_id: string | null
          id: string
          modulos: string[]
          nome: string
          origem_cadastro: string | null
          permissoes: Json
          updated_at: string
          user_id: string | null
        }
        Insert: {
          ativo?: boolean
          cargo?: string | null
          codigo_emitido_em?: string | null
          codigo_hash?: string | null
          codigo_hint?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          empresa_id?: string | null
          filial?: string | null
          funcionario_id?: string | null
          id?: string
          modulos?: string[]
          nome: string
          origem_cadastro?: string | null
          permissoes?: Json
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          ativo?: boolean
          cargo?: string | null
          codigo_emitido_em?: string | null
          codigo_hash?: string | null
          codigo_hint?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          empresa_id?: string | null
          filial?: string | null
          funcionario_id?: string | null
          id?: string
          modulos?: string[]
          nome?: string
          origem_cadastro?: string | null
          permissoes?: Json
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "operadores_operacao_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operadores_operacao_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "operadores_operacao_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operadores_operacao_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      ordens_servico_digitais: {
        Row: {
          aberta_em: string
          aceita_em: string | null
          cancelada_em: string | null
          cancelamento_motivo: string | null
          chamado_id: string
          chegada_em: string | null
          cliente: string | null
          cliente_id: string | null
          concluida_em: string | null
          created_at: string
          deslocamento_em: string | null
          fim_latitude: number | null
          fim_longitude: number | null
          id: string
          inicio_execucao_em: string | null
          inicio_latitude: number | null
          inicio_longitude: number | null
          itens_previstos: string | null
          local_servico: string | null
          mecanico_funcionario_id: string | null
          mecanico_nome: string | null
          numero_os: number
          observacoes_abertura: string | null
          operador_abertura_id: string | null
          operador_abertura_nome: string | null
          patrimonio: string | null
          placa: string | null
          relatorio_conclusao: string | null
          servico_solicitado: string | null
          solicitante_contato: string | null
          solicitante_nome: string | null
          status: string
          updated_at: string
          versao: number
        }
        Insert: {
          aberta_em?: string
          aceita_em?: string | null
          cancelada_em?: string | null
          cancelamento_motivo?: string | null
          chamado_id: string
          chegada_em?: string | null
          cliente?: string | null
          cliente_id?: string | null
          concluida_em?: string | null
          created_at?: string
          deslocamento_em?: string | null
          fim_latitude?: number | null
          fim_longitude?: number | null
          id?: string
          inicio_execucao_em?: string | null
          inicio_latitude?: number | null
          inicio_longitude?: number | null
          itens_previstos?: string | null
          local_servico?: string | null
          mecanico_funcionario_id?: string | null
          mecanico_nome?: string | null
          numero_os: number
          observacoes_abertura?: string | null
          operador_abertura_id?: string | null
          operador_abertura_nome?: string | null
          patrimonio?: string | null
          placa?: string | null
          relatorio_conclusao?: string | null
          servico_solicitado?: string | null
          solicitante_contato?: string | null
          solicitante_nome?: string | null
          status?: string
          updated_at?: string
          versao?: number
        }
        Update: {
          aberta_em?: string
          aceita_em?: string | null
          cancelada_em?: string | null
          cancelamento_motivo?: string | null
          chamado_id?: string
          chegada_em?: string | null
          cliente?: string | null
          cliente_id?: string | null
          concluida_em?: string | null
          created_at?: string
          deslocamento_em?: string | null
          fim_latitude?: number | null
          fim_longitude?: number | null
          id?: string
          inicio_execucao_em?: string | null
          inicio_latitude?: number | null
          inicio_longitude?: number | null
          itens_previstos?: string | null
          local_servico?: string | null
          mecanico_funcionario_id?: string | null
          mecanico_nome?: string | null
          numero_os?: number
          observacoes_abertura?: string | null
          operador_abertura_id?: string | null
          operador_abertura_nome?: string | null
          patrimonio?: string | null
          placa?: string | null
          relatorio_conclusao?: string | null
          servico_solicitado?: string | null
          solicitante_contato?: string | null
          solicitante_nome?: string | null
          status?: string
          updated_at?: string
          versao?: number
        }
        Relationships: [
          {
            foreignKeyName: "ordens_servico_digitais_chamado_id_fkey"
            columns: ["chamado_id"]
            isOneToOne: true
            referencedRelation: "chamados"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ordens_servico_digitais_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ordens_servico_digitais_mecanico_funcionario_id_fkey"
            columns: ["mecanico_funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "ordens_servico_digitais_operador_abertura_id_fkey"
            columns: ["operador_abertura_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
        ]
      }
      pagamentos: {
        Row: {
          conta_bancaria_id: string | null
          created_at: string
          data: string
          forma_pagamento: string
          id: string
          observacoes: string | null
          titulo_id: string
          user_id: string
          usuario_nome: string | null
          valor: number
        }
        Insert: {
          conta_bancaria_id?: string | null
          created_at?: string
          data?: string
          forma_pagamento?: string
          id?: string
          observacoes?: string | null
          titulo_id: string
          user_id: string
          usuario_nome?: string | null
          valor: number
        }
        Update: {
          conta_bancaria_id?: string | null
          created_at?: string
          data?: string
          forma_pagamento?: string
          id?: string
          observacoes?: string | null
          titulo_id?: string
          user_id?: string
          usuario_nome?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "pagamentos_conta_bancaria_id_fkey"
            columns: ["conta_bancaria_id"]
            isOneToOne: false
            referencedRelation: "contas_bancarias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pagamentos_titulo_id_fkey"
            columns: ["titulo_id"]
            isOneToOne: false
            referencedRelation: "titulos_pagar"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_documents: {
        Row: {
          company_id: string
          competencia: string
          confirmed: boolean
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string | null
          document_sha256: string
          document_type: string
          document_version: number
          employee_id: string | null
          entitlement_amount: number | null
          extracted_data: Json
          file_size: number
          id: string
          is_current: boolean
          match_confidence: number | null
          mime_type: string
          net_amount: number | null
          original_filename: string
          payment_event_id: string | null
          payment_kind: string
          payment_reason: string | null
          payment_sequence: number
          payment_state: string
          physical_signature_method: string | null
          physical_signature_note: string | null
          physical_signed_at: string | null
          physical_signed_by: string | null
          prior_paid_amount: number | null
          source_page_end: number | null
          source_page_start: number | null
          source_sha256: string | null
          status: string
          storage_bucket: string
          storage_path: string
          updated_at: string
        }
        Insert: {
          company_id: string
          competencia: string
          confirmed?: boolean
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string | null
          document_sha256: string
          document_type?: string
          document_version?: number
          employee_id?: string | null
          entitlement_amount?: number | null
          extracted_data?: Json
          file_size?: number
          id?: string
          is_current?: boolean
          match_confidence?: number | null
          mime_type?: string
          net_amount?: number | null
          original_filename: string
          payment_event_id?: string | null
          payment_kind?: string
          payment_reason?: string | null
          payment_sequence?: number
          payment_state?: string
          physical_signature_method?: string | null
          physical_signature_note?: string | null
          physical_signed_at?: string | null
          physical_signed_by?: string | null
          prior_paid_amount?: number | null
          source_page_end?: number | null
          source_page_start?: number | null
          source_sha256?: string | null
          status?: string
          storage_bucket?: string
          storage_path: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          competencia?: string
          confirmed?: boolean
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string | null
          document_sha256?: string
          document_type?: string
          document_version?: number
          employee_id?: string | null
          entitlement_amount?: number | null
          extracted_data?: Json
          file_size?: number
          id?: string
          is_current?: boolean
          match_confidence?: number | null
          mime_type?: string
          net_amount?: number | null
          original_filename?: string
          payment_event_id?: string | null
          payment_kind?: string
          payment_reason?: string | null
          payment_sequence?: number
          payment_state?: string
          physical_signature_method?: string | null
          physical_signature_note?: string | null
          physical_signed_at?: string | null
          physical_signed_by?: string | null
          prior_paid_amount?: number | null
          source_page_end?: number | null
          source_page_start?: number | null
          source_sha256?: string | null
          status?: string
          storage_bucket?: string
          storage_path?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_face_events: {
        Row: {
          company_id: string
          created_at: string
          document_id: string | null
          employee_id: string | null
          event_type: string
          evidence_bucket: string | null
          evidence_path: string | null
          evidence_sha256: string | null
          face_score: number | null
          id: string
          ip: string | null
          match_distance: number | null
          metadata: Json
          session_hash: string | null
          user_agent: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          document_id?: string | null
          employee_id?: string | null
          event_type: string
          evidence_bucket?: string | null
          evidence_path?: string | null
          evidence_sha256?: string | null
          face_score?: number | null
          id?: string
          ip?: string | null
          match_distance?: number | null
          metadata?: Json
          session_hash?: string | null
          user_agent?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          document_id?: string | null
          employee_id?: string | null
          event_type?: string
          evidence_bucket?: string | null
          evidence_path?: string | null
          evidence_sha256?: string | null
          face_score?: number | null
          id?: string
          ip?: string | null
          match_distance?: number | null
          metadata?: Json
          session_hash?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_face_events_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_face_events_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_face_events_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_face_events_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "payroll_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_face_events_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_face_events_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_face_events_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_face_profiles: {
        Row: {
          active: boolean
          company_id: string
          descriptor: Json
          employee_id: string
          enrolled_at: string
          enrollment_method: string
          id: string
          model: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          company_id: string
          descriptor: Json
          employee_id: string
          enrolled_at?: string
          enrollment_method?: string
          id?: string
          model?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          company_id?: string
          descriptor?: Json
          employee_id?: string
          enrolled_at?: string
          enrollment_method?: string
          id?: string
          model?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_face_profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_face_profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_face_profiles_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_face_profiles_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_message_logs: {
        Row: {
          attempt: number
          channel: string
          company_id: string
          created_at: string
          delivered_at: string | null
          destination_masked: string | null
          employee_id: string | null
          error: string | null
          id: string
          idempotency_key: string
          message_kind: string
          message_template: string
          next_scheduled_at: string | null
          provider_message_id: string | null
          request_id: string | null
          sent_at: string | null
          status: string
        }
        Insert: {
          attempt?: number
          channel?: string
          company_id: string
          created_at?: string
          delivered_at?: string | null
          destination_masked?: string | null
          employee_id?: string | null
          error?: string | null
          id?: string
          idempotency_key: string
          message_kind: string
          message_template: string
          next_scheduled_at?: string | null
          provider_message_id?: string | null
          request_id?: string | null
          sent_at?: string | null
          status: string
        }
        Update: {
          attempt?: number
          channel?: string
          company_id?: string
          created_at?: string
          delivered_at?: string | null
          destination_masked?: string | null
          employee_id?: string | null
          error?: string | null
          id?: string
          idempotency_key?: string
          message_kind?: string
          message_template?: string
          next_scheduled_at?: string | null
          provider_message_id?: string | null
          request_id?: string | null
          sent_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_message_logs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_message_logs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_message_logs_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_message_logs_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "payroll_message_logs_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "payroll_message_logs_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_module_company_config: {
        Row: {
          company_id: string
          created_at: string
          enabled: boolean
          first_reminder_time: string
          link_ttl_hours: number
          otp_max_attempts: number
          otp_resend_seconds: number
          otp_ttl_minutes: number
          reminder_interval_hours: number
          reminder_window_end: string
          reminder_window_start: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          enabled?: boolean
          first_reminder_time?: string
          link_ttl_hours?: number
          otp_max_attempts?: number
          otp_resend_seconds?: number
          otp_ttl_minutes?: number
          reminder_interval_hours?: number
          reminder_window_end?: string
          reminder_window_start?: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          enabled?: boolean
          first_reminder_time?: string
          link_ttl_hours?: number
          otp_max_attempts?: number
          otp_resend_seconds?: number
          otp_ttl_minutes?: number
          reminder_interval_hours?: number
          reminder_window_end?: string
          reminder_window_start?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_module_company_config_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_module_company_config_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      payroll_otp_challenges: {
        Row: {
          attempts: number
          consumed_at: string | null
          created_at: string
          expires_at: string
          id: string
          max_attempts: number
          otp_hash: string
          request_id: string
          requested_ip: unknown
          requested_user_agent: string | null
          resend_after: string
          sent_at: string | null
          status: string
        }
        Insert: {
          attempts?: number
          consumed_at?: string | null
          created_at?: string
          expires_at: string
          id?: string
          max_attempts?: number
          otp_hash: string
          request_id: string
          requested_ip?: unknown
          requested_user_agent?: string | null
          resend_after: string
          sent_at?: string | null
          status?: string
        }
        Update: {
          attempts?: number
          consumed_at?: string | null
          created_at?: string
          expires_at?: string
          id?: string
          max_attempts?: number
          otp_hash?: string
          request_id?: string
          requested_ip?: unknown
          requested_user_agent?: string | null
          resend_after?: string
          sent_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_otp_challenges_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "payroll_otp_challenges_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_payment_receipts: {
        Row: {
          amount: number | null
          bank_authentication: string | null
          bank_name: string | null
          company_id: string
          competencia: string
          confirmed: boolean
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string | null
          document_id: string | null
          employee_id: string | null
          extracted_data: Json
          file_size: number
          id: string
          idempotency_key: string
          match_confidence: number | null
          mime_type: string
          original_filename: string
          paid_at: string | null
          payer_account: string | null
          payer_name: string | null
          receipt_sha256: string
          source_page_end: number | null
          source_page_start: number | null
          source_sha256: string | null
          status: string
          storage_bucket: string
          storage_path: string
          transaction_id: string | null
          updated_at: string
        }
        Insert: {
          amount?: number | null
          bank_authentication?: string | null
          bank_name?: string | null
          company_id: string
          competencia: string
          confirmed?: boolean
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string | null
          document_id?: string | null
          employee_id?: string | null
          extracted_data?: Json
          file_size?: number
          id?: string
          idempotency_key: string
          match_confidence?: number | null
          mime_type?: string
          original_filename: string
          paid_at?: string | null
          payer_account?: string | null
          payer_name?: string | null
          receipt_sha256: string
          source_page_end?: number | null
          source_page_start?: number | null
          source_sha256?: string | null
          status?: string
          storage_bucket?: string
          storage_path: string
          transaction_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number | null
          bank_authentication?: string | null
          bank_name?: string | null
          company_id?: string
          competencia?: string
          confirmed?: boolean
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string | null
          document_id?: string | null
          employee_id?: string | null
          extracted_data?: Json
          file_size?: number
          id?: string
          idempotency_key?: string
          match_confidence?: number | null
          mime_type?: string
          original_filename?: string
          paid_at?: string | null
          payer_account?: string | null
          payer_name?: string | null
          receipt_sha256?: string
          source_page_end?: number | null
          source_page_start?: number | null
          source_sha256?: string | null
          status?: string
          storage_bucket?: string
          storage_path?: string
          transaction_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_payment_receipts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_payment_receipts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_payment_receipts_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_payment_receipts_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "payroll_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_payment_receipts_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_payment_receipts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_payment_receipts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_public_access_attempts: {
        Row: {
          company_id: string | null
          created_at: string
          employee_id: string | null
          failure_reason: string | null
          id: string
          identifier_hash: string
          ip: string | null
          success: boolean
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          employee_id?: string | null
          failure_reason?: string | null
          id?: string
          identifier_hash: string
          ip?: string | null
          success?: boolean
        }
        Update: {
          company_id?: string | null
          created_at?: string
          employee_id?: string | null
          failure_reason?: string | null
          id?: string
          identifier_hash?: string
          ip?: string | null
          success?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "payroll_public_access_attempts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_public_access_attempts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_public_access_attempts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_public_access_attempts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_public_sessions: {
        Row: {
          auth_method: string
          company_id: string
          created_at: string
          employee_id: string
          expires_at: string
          id: string
          ip: string | null
          last_used_at: string
          revoked_at: string | null
          session_hash: string
          user_agent: string | null
        }
        Insert: {
          auth_method?: string
          company_id: string
          created_at?: string
          employee_id: string
          expires_at: string
          id?: string
          ip?: string | null
          last_used_at?: string
          revoked_at?: string | null
          session_hash: string
          user_agent?: string | null
        }
        Update: {
          auth_method?: string
          company_id?: string
          created_at?: string
          employee_id?: string
          expires_at?: string
          id?: string
          ip?: string | null
          last_used_at?: string
          revoked_at?: string | null
          session_hash?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_public_sessions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_public_sessions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_public_sessions_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_public_sessions_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_reminder_jobs: {
        Row: {
          attempt: number
          company_id: string
          created_at: string
          employee_id: string
          error: string | null
          id: string
          idempotency_key: string
          job_kind: string
          processed_at: string | null
          request_id: string
          scheduled_at: string
          status: string
          updated_at: string
        }
        Insert: {
          attempt?: number
          company_id: string
          created_at?: string
          employee_id: string
          error?: string | null
          id?: string
          idempotency_key: string
          job_kind?: string
          processed_at?: string | null
          request_id: string
          scheduled_at: string
          status?: string
          updated_at?: string
        }
        Update: {
          attempt?: number
          company_id?: string
          created_at?: string
          employee_id?: string
          error?: string | null
          id?: string
          idempotency_key?: string
          job_kind?: string
          processed_at?: string | null
          request_id?: string
          scheduled_at?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_reminder_jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_reminder_jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_reminder_jobs_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_reminder_jobs_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "payroll_reminder_jobs_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "payroll_reminder_jobs_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_signature_events: {
        Row: {
          actor_type: string
          actor_user_id: string | null
          company_id: string
          created_at: string
          employee_id: string | null
          event_type: string
          id: string
          ip: unknown
          payload: Json
          request_id: string | null
          user_agent: string | null
        }
        Insert: {
          actor_type?: string
          actor_user_id?: string | null
          company_id: string
          created_at?: string
          employee_id?: string | null
          event_type: string
          id?: string
          ip?: unknown
          payload?: Json
          request_id?: string | null
          user_agent?: string | null
        }
        Update: {
          actor_type?: string
          actor_user_id?: string | null
          company_id?: string
          created_at?: string
          employee_id?: string | null
          event_type?: string
          id?: string
          ip?: unknown
          payload?: Json
          request_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_signature_events_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signature_events_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_signature_events_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signature_events_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "payroll_signature_events_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "payroll_signature_events_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_signature_requests: {
        Row: {
          company_id: string
          competencia: string
          created_at: string
          created_by: string | null
          document_id: string
          employee_id: string
          expires_at: string
          id: string
          idempotency_key: string
          identity_method: string | null
          identity_validated_at: string | null
          next_reminder_at: string | null
          opened_at: string | null
          otp_validated_at: string | null
          phone_snapshot: string
          public_token_ciphertext: string
          public_token_hash: string
          public_token_nonce: string
          receipt_id: string | null
          reminder_count: number
          send_attempts: number
          send_error: string | null
          sent_at: string | null
          session_expires_at: string | null
          session_hash: string | null
          signed_at: string | null
          status: string
          token_key_version: number
          token_last4: string | null
          updated_at: string
          viewed_at: string | null
        }
        Insert: {
          company_id: string
          competencia: string
          created_at?: string
          created_by?: string | null
          document_id: string
          employee_id: string
          expires_at: string
          id?: string
          idempotency_key: string
          identity_method?: string | null
          identity_validated_at?: string | null
          next_reminder_at?: string | null
          opened_at?: string | null
          otp_validated_at?: string | null
          phone_snapshot: string
          public_token_ciphertext: string
          public_token_hash: string
          public_token_nonce: string
          receipt_id?: string | null
          reminder_count?: number
          send_attempts?: number
          send_error?: string | null
          sent_at?: string | null
          session_expires_at?: string | null
          session_hash?: string | null
          signed_at?: string | null
          status?: string
          token_key_version?: number
          token_last4?: string | null
          updated_at?: string
          viewed_at?: string | null
        }
        Update: {
          company_id?: string
          competencia?: string
          created_at?: string
          created_by?: string | null
          document_id?: string
          employee_id?: string
          expires_at?: string
          id?: string
          idempotency_key?: string
          identity_method?: string | null
          identity_validated_at?: string | null
          next_reminder_at?: string | null
          opened_at?: string | null
          otp_validated_at?: string | null
          phone_snapshot?: string
          public_token_ciphertext?: string
          public_token_hash?: string
          public_token_nonce?: string
          receipt_id?: string | null
          reminder_count?: number
          send_attempts?: number
          send_error?: string | null
          sent_at?: string | null
          session_expires_at?: string | null
          session_hash?: string | null
          signed_at?: string | null
          status?: string
          token_key_version?: number
          token_last4?: string | null
          updated_at?: string
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_signature_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: true
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: true
            referencedRelation: "payroll_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: true
            referencedRelation: "payroll_signature_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_receipt_id_fkey"
            columns: ["receipt_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["receipt_id"]
          },
          {
            foreignKeyName: "payroll_signature_requests_receipt_id_fkey"
            columns: ["receipt_id"]
            isOneToOne: false
            referencedRelation: "payroll_payment_receipts"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_signatures: {
        Row: {
          authentication_method: string
          browser: string | null
          certificate_bucket: string | null
          certificate_path: string | null
          certificate_sha256: string | null
          company_cnpj: string
          company_id: string
          company_name: string
          competencia: string
          created_at: string
          device: string | null
          document_id: string
          document_sha256_before: string
          document_sha256_final: string
          document_version: number
          employee_cpf: string
          employee_id: string
          employee_name: string
          employee_role: string | null
          evidence: Json
          id: string
          ip: unknown
          link_sent_at: string | null
          net_amount: number | null
          opened_at: string | null
          otp_validated_at: string | null
          payment_at: string | null
          phone_used: string
          receipt_id: string | null
          request_id: string
          session_fingerprint: string | null
          signed_at: string
          user_agent: string | null
          viewed_at: string | null
        }
        Insert: {
          authentication_method?: string
          browser?: string | null
          certificate_bucket?: string | null
          certificate_path?: string | null
          certificate_sha256?: string | null
          company_cnpj: string
          company_id: string
          company_name: string
          competencia: string
          created_at?: string
          device?: string | null
          document_id: string
          document_sha256_before: string
          document_sha256_final: string
          document_version: number
          employee_cpf: string
          employee_id: string
          employee_name: string
          employee_role?: string | null
          evidence?: Json
          id?: string
          ip?: unknown
          link_sent_at?: string | null
          net_amount?: number | null
          opened_at?: string | null
          otp_validated_at?: string | null
          payment_at?: string | null
          phone_used: string
          receipt_id?: string | null
          request_id: string
          session_fingerprint?: string | null
          signed_at?: string
          user_agent?: string | null
          viewed_at?: string | null
        }
        Update: {
          authentication_method?: string
          browser?: string | null
          certificate_bucket?: string | null
          certificate_path?: string | null
          certificate_sha256?: string | null
          company_cnpj?: string
          company_id?: string
          company_name?: string
          competencia?: string
          created_at?: string
          device?: string | null
          document_id?: string
          document_sha256_before?: string
          document_sha256_final?: string
          document_version?: number
          employee_cpf?: string
          employee_id?: string
          employee_name?: string
          employee_role?: string | null
          evidence?: Json
          id?: string
          ip?: unknown
          link_sent_at?: string | null
          net_amount?: number | null
          opened_at?: string | null
          otp_validated_at?: string | null
          payment_at?: string | null
          phone_used?: string
          receipt_id?: string | null
          request_id?: string
          session_fingerprint?: string | null
          signed_at?: string
          user_agent?: string | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_signatures_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signatures_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_signatures_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: true
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_signatures_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: true
            referencedRelation: "payroll_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signatures_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: true
            referencedRelation: "payroll_signature_status_v"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "payroll_signatures_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signatures_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "payroll_signatures_receipt_id_fkey"
            columns: ["receipt_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["receipt_id"]
          },
          {
            foreignKeyName: "payroll_signatures_receipt_id_fkey"
            columns: ["receipt_id"]
            isOneToOne: false
            referencedRelation: "payroll_payment_receipts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_signatures_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: true
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "payroll_signatures_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: true
            referencedRelation: "payroll_signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_terms_acceptances: {
        Row: {
          accepted: boolean
          accepted_at: string
          authentication_method: string | null
          company_id: string
          created_at: string
          employee_id: string
          id: string
          request_id: string | null
          term_version: string
        }
        Insert: {
          accepted: boolean
          accepted_at?: string
          authentication_method?: string | null
          company_id: string
          created_at?: string
          employee_id: string
          id?: string
          request_id?: string | null
          term_version: string
        }
        Update: {
          accepted?: boolean
          accepted_at?: string
          authentication_method?: string | null
          company_id?: string
          created_at?: string
          employee_id?: string
          id?: string
          request_id?: string | null
          term_version?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_terms_acceptances_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_terms_acceptances_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_terms_acceptances_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_terms_acceptances_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "payroll_terms_acceptances_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_admin_status_v"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "payroll_terms_acceptances_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "payroll_signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      ponto_veiculo: {
        Row: {
          ativo_id: string | null
          chegada_device: string | null
          chegada_em: string | null
          chegada_foto_path: string | null
          chegada_latitude: number | null
          chegada_longitude: number | null
          chegada_origem_km: string | null
          chegada_precisao_metros: number | null
          created_at: string
          data: string
          employee_code: string
          empresa_id: string | null
          empresa_nome: string | null
          filial: string | null
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          km_chegada: number | null
          km_chegada_ocr: number | null
          km_saida: number
          km_saida_ocr: number | null
          km_total: number | null
          observacao: string | null
          saida_device: string | null
          saida_em: string
          saida_foto_path: string
          saida_latitude: number
          saida_longitude: number
          saida_origem_km: string
          saida_precisao_metros: number | null
          status: string
          updated_at: string
          veiculo_descricao: string | null
          veiculo_placa: string
        }
        Insert: {
          ativo_id?: string | null
          chegada_device?: string | null
          chegada_em?: string | null
          chegada_foto_path?: string | null
          chegada_latitude?: number | null
          chegada_longitude?: number | null
          chegada_origem_km?: string | null
          chegada_precisao_metros?: number | null
          created_at?: string
          data: string
          employee_code: string
          empresa_id?: string | null
          empresa_nome?: string | null
          filial?: string | null
          funcionario_id?: string | null
          funcionario_nome: string
          id?: string
          km_chegada?: number | null
          km_chegada_ocr?: number | null
          km_saida: number
          km_saida_ocr?: number | null
          km_total?: number | null
          observacao?: string | null
          saida_device?: string | null
          saida_em: string
          saida_foto_path: string
          saida_latitude: number
          saida_longitude: number
          saida_origem_km?: string
          saida_precisao_metros?: number | null
          status?: string
          updated_at?: string
          veiculo_descricao?: string | null
          veiculo_placa: string
        }
        Update: {
          ativo_id?: string | null
          chegada_device?: string | null
          chegada_em?: string | null
          chegada_foto_path?: string | null
          chegada_latitude?: number | null
          chegada_longitude?: number | null
          chegada_origem_km?: string | null
          chegada_precisao_metros?: number | null
          created_at?: string
          data?: string
          employee_code?: string
          empresa_id?: string | null
          empresa_nome?: string | null
          filial?: string | null
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          km_chegada?: number | null
          km_chegada_ocr?: number | null
          km_saida?: number
          km_saida_ocr?: number | null
          km_total?: number | null
          observacao?: string | null
          saida_device?: string | null
          saida_em?: string
          saida_foto_path?: string
          saida_latitude?: number
          saida_longitude?: number
          saida_origem_km?: string
          saida_precisao_metros?: number | null
          status?: string
          updated_at?: string
          veiculo_descricao?: string | null
          veiculo_placa?: string
        }
        Relationships: [
          {
            foreignKeyName: "ponto_veiculo_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ponto_veiculo_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ponto_veiculo_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "ponto_veiculo_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ponto_veiculo_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      portal_acesso_auditoria: {
        Row: {
          acesso_id: string | null
          credencial_id: string | null
          criado_em: string
          email: string | null
          evento: string
          id: number
          ip_hash: string | null
          metadata: Json
          modulo: string | null
          motivo: string | null
          sessao_id: string | null
          user_agent: string | null
        }
        Insert: {
          acesso_id?: string | null
          credencial_id?: string | null
          criado_em?: string
          email?: string | null
          evento: string
          id?: never
          ip_hash?: string | null
          metadata?: Json
          modulo?: string | null
          motivo?: string | null
          sessao_id?: string | null
          user_agent?: string | null
        }
        Update: {
          acesso_id?: string | null
          credencial_id?: string | null
          criado_em?: string
          email?: string | null
          evento?: string
          id?: never
          ip_hash?: string | null
          metadata?: Json
          modulo?: string | null
          motivo?: string | null
          sessao_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_acesso_auditoria_credencial_id_fkey"
            columns: ["credencial_id"]
            isOneToOne: false
            referencedRelation: "portal_credenciais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portal_acesso_auditoria_sessao_id_fkey"
            columns: ["sessao_id"]
            isOneToOne: false
            referencedRelation: "portal_sessoes"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_credenciais: {
        Row: {
          atualizado_em: string
          bloqueado_ate: string | null
          cpf_clean: string
          criado_em: string
          email: string
          falhas_consecutivas: number
          funcao: string | null
          funcionario_id: string | null
          id: string
          nome: string
          senha_hash: string
          status: string
          ultimo_login_em: string | null
        }
        Insert: {
          atualizado_em?: string
          bloqueado_ate?: string | null
          cpf_clean: string
          criado_em?: string
          email: string
          falhas_consecutivas?: number
          funcao?: string | null
          funcionario_id?: string | null
          id?: string
          nome: string
          senha_hash: string
          status?: string
          ultimo_login_em?: string | null
        }
        Update: {
          atualizado_em?: string
          bloqueado_ate?: string | null
          cpf_clean?: string
          criado_em?: string
          email?: string
          falhas_consecutivas?: number
          funcao?: string | null
          funcionario_id?: string | null
          id?: string
          nome?: string
          senha_hash?: string
          status?: string
          ultimo_login_em?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_credenciais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portal_credenciais_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      portal_sessoes: {
        Row: {
          atualizado_em: string
          cpf_clean: string | null
          credencial_id: string | null
          email: string | null
          encerrado_em: string | null
          encerramento_motivo: string | null
          expira_em: string
          extensoes: number
          id: string
          inicio_em: string
          lembrar_dispositivo: boolean
          nome: string | null
          token_hash: string
          ultimo_motivo_extensao: string | null
        }
        Insert: {
          atualizado_em?: string
          cpf_clean?: string | null
          credencial_id?: string | null
          email?: string | null
          encerrado_em?: string | null
          encerramento_motivo?: string | null
          expira_em: string
          extensoes?: number
          id?: string
          inicio_em?: string
          lembrar_dispositivo?: boolean
          nome?: string | null
          token_hash: string
          ultimo_motivo_extensao?: string | null
        }
        Update: {
          atualizado_em?: string
          cpf_clean?: string | null
          credencial_id?: string | null
          email?: string | null
          encerrado_em?: string | null
          encerramento_motivo?: string | null
          expira_em?: string
          extensoes?: number
          id?: string
          inicio_em?: string
          lembrar_dispositivo?: boolean
          nome?: string | null
          token_hash?: string
          ultimo_motivo_extensao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_sessoes_credencial_id_fkey"
            columns: ["credencial_id"]
            isOneToOne: false
            referencedRelation: "portal_credenciais"
            referencedColumns: ["id"]
          },
        ]
      }
      postos_combustivel: {
        Row: {
          cnpj: string | null
          codigo: string
          created_at: string
          deleted_at: string | null
          endereco: string | null
          id: string
          nome: string
          observacao: string | null
          posto_opcoes: string[]
          status: string
          telefone: string | null
          tipo_qr: string
          unidade: string | null
          updated_at: string
        }
        Insert: {
          cnpj?: string | null
          codigo: string
          created_at?: string
          deleted_at?: string | null
          endereco?: string | null
          id?: string
          nome: string
          observacao?: string | null
          posto_opcoes?: string[]
          status?: string
          telefone?: string | null
          tipo_qr?: string
          unidade?: string | null
          updated_at?: string
        }
        Update: {
          cnpj?: string | null
          codigo?: string
          created_at?: string
          deleted_at?: string | null
          endereco?: string | null
          id?: string
          nome?: string
          observacao?: string | null
          posto_opcoes?: string[]
          status?: string
          telefone?: string | null
          tipo_qr?: string
          unidade?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      pre_cadastro_documentos: {
        Row: {
          arquivo_url: string
          created_at: string
          dados_extraidos: Json
          entregar_depois: boolean
          id: string
          mime_type: string | null
          nome_arquivo: string
          obrigatorio: boolean
          origem: string
          pre_cadastro_id: string
          status: string
          storage_bucket: string | null
          storage_path: string | null
          tamanho_bytes: number | null
          tipo_documento: string
        }
        Insert: {
          arquivo_url?: string
          created_at?: string
          dados_extraidos?: Json
          entregar_depois?: boolean
          id?: string
          mime_type?: string | null
          nome_arquivo?: string
          obrigatorio?: boolean
          origem?: string
          pre_cadastro_id: string
          status?: string
          storage_bucket?: string | null
          storage_path?: string | null
          tamanho_bytes?: number | null
          tipo_documento?: string
        }
        Update: {
          arquivo_url?: string
          created_at?: string
          dados_extraidos?: Json
          entregar_depois?: boolean
          id?: string
          mime_type?: string | null
          nome_arquivo?: string
          obrigatorio?: boolean
          origem?: string
          pre_cadastro_id?: string
          status?: string
          storage_bucket?: string | null
          storage_path?: string | null
          tamanho_bytes?: number | null
          tipo_documento?: string
        }
        Relationships: [
          {
            foreignKeyName: "pre_cadastro_documentos_pre_cadastro_id_fkey"
            columns: ["pre_cadastro_id"]
            isOneToOne: false
            referencedRelation: "pre_cadastros_admissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      pre_cadastro_eventos: {
        Row: {
          created_at: string
          created_by: string | null
          dados: Json
          descricao: string | null
          id: string
          pre_cadastro_id: string
          tipo: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          dados?: Json
          descricao?: string | null
          id?: string
          pre_cadastro_id: string
          tipo: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          dados?: Json
          descricao?: string | null
          id?: string
          pre_cadastro_id?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "pre_cadastro_eventos_pre_cadastro_id_fkey"
            columns: ["pre_cadastro_id"]
            isOneToOne: false
            referencedRelation: "pre_cadastros_admissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      pre_cadastro_solicitacoes_documentos: {
        Row: {
          aso_gerado_em: string | null
          concluido_em: string | null
          created_at: string
          dados_candidato: Json
          enviado_em: string | null
          expires_at: string
          id: string
          iniciado_em: string | null
          pre_cadastro_id: string
          requisitos: Json
          status: string
          telefone: string | null
          token: string
          updated_at: string
        }
        Insert: {
          aso_gerado_em?: string | null
          concluido_em?: string | null
          created_at?: string
          dados_candidato?: Json
          enviado_em?: string | null
          expires_at?: string
          id?: string
          iniciado_em?: string | null
          pre_cadastro_id: string
          requisitos?: Json
          status?: string
          telefone?: string | null
          token: string
          updated_at?: string
        }
        Update: {
          aso_gerado_em?: string | null
          concluido_em?: string | null
          created_at?: string
          dados_candidato?: Json
          enviado_em?: string | null
          expires_at?: string
          id?: string
          iniciado_em?: string | null
          pre_cadastro_id?: string
          requisitos?: Json
          status?: string
          telefone?: string | null
          token?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pre_cadastro_solicitacoes_documentos_pre_cadastro_id_fkey"
            columns: ["pre_cadastro_id"]
            isOneToOne: true
            referencedRelation: "pre_cadastros_admissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      pre_cadastros_admissionais: {
        Row: {
          aprovado_em: string | null
          aprovado_por: string | null
          arquivo_aso_url: string | null
          arquivo_ficha_url: string | null
          arquivo_toxicologico_url: string | null
          beneficios: string | null
          candidato_dados: Json
          candidato_etapa: number
          celular: string | null
          cnpj: string | null
          conferencia: Json
          correcao_solicitada: Json | null
          cpf: string | null
          created_at: string
          criado_por: string | null
          criado_por_acesso_externo_id: string | null
          ctps_tipo: string | null
          dados_bancarios: Json
          dados_extraidos: Json
          data_admissao: string | null
          data_nascimento: string | null
          email: string | null
          email_contabilidade_preparado_em: string | null
          email_exame_enviado_em: string | null
          email_filial_origem: string | null
          empresa_id: string | null
          empresa_nome: string | null
          endereco: string | null
          epi: string | null
          escolaridade: string | null
          exige_toxicologico: boolean
          experiencia: string | null
          filiacao: string | null
          filial_origem: string | null
          funcao: string | null
          funcionario_id: string | null
          historico: Json
          id: string
          insalubridade: string | null
          jornada: string | null
          nome: string | null
          obra_local: string | null
          origem_cadastro: string
          pasta_virtual: Json
          pendencias_documentais: Json
          public_completed_at: string | null
          public_last_saved_at: string | null
          public_seen_at: string | null
          public_started_at: string | null
          public_token: string
          responsavel_contato: string | null
          rg: string | null
          salario: number | null
          setor_ghe: string | null
          status: string
          tipo_admissao: string | null
          transporte: Json
          updated_at: string
          vale_refeicao: boolean
          vale_transporte: boolean
          vt_valor_diario: number | null
          vt_valor_mensal_estimado: number | null
        }
        Insert: {
          aprovado_em?: string | null
          aprovado_por?: string | null
          arquivo_aso_url?: string | null
          arquivo_ficha_url?: string | null
          arquivo_toxicologico_url?: string | null
          beneficios?: string | null
          candidato_dados?: Json
          candidato_etapa?: number
          celular?: string | null
          cnpj?: string | null
          conferencia?: Json
          correcao_solicitada?: Json | null
          cpf?: string | null
          created_at?: string
          criado_por?: string | null
          criado_por_acesso_externo_id?: string | null
          ctps_tipo?: string | null
          dados_bancarios?: Json
          dados_extraidos?: Json
          data_admissao?: string | null
          data_nascimento?: string | null
          email?: string | null
          email_contabilidade_preparado_em?: string | null
          email_exame_enviado_em?: string | null
          email_filial_origem?: string | null
          empresa_id?: string | null
          empresa_nome?: string | null
          endereco?: string | null
          epi?: string | null
          escolaridade?: string | null
          exige_toxicologico?: boolean
          experiencia?: string | null
          filiacao?: string | null
          filial_origem?: string | null
          funcao?: string | null
          funcionario_id?: string | null
          historico?: Json
          id?: string
          insalubridade?: string | null
          jornada?: string | null
          nome?: string | null
          obra_local?: string | null
          origem_cadastro?: string
          pasta_virtual?: Json
          pendencias_documentais?: Json
          public_completed_at?: string | null
          public_last_saved_at?: string | null
          public_seen_at?: string | null
          public_started_at?: string | null
          public_token?: string
          responsavel_contato?: string | null
          rg?: string | null
          salario?: number | null
          setor_ghe?: string | null
          status?: string
          tipo_admissao?: string | null
          transporte?: Json
          updated_at?: string
          vale_refeicao?: boolean
          vale_transporte?: boolean
          vt_valor_diario?: number | null
          vt_valor_mensal_estimado?: number | null
        }
        Update: {
          aprovado_em?: string | null
          aprovado_por?: string | null
          arquivo_aso_url?: string | null
          arquivo_ficha_url?: string | null
          arquivo_toxicologico_url?: string | null
          beneficios?: string | null
          candidato_dados?: Json
          candidato_etapa?: number
          celular?: string | null
          cnpj?: string | null
          conferencia?: Json
          correcao_solicitada?: Json | null
          cpf?: string | null
          created_at?: string
          criado_por?: string | null
          criado_por_acesso_externo_id?: string | null
          ctps_tipo?: string | null
          dados_bancarios?: Json
          dados_extraidos?: Json
          data_admissao?: string | null
          data_nascimento?: string | null
          email?: string | null
          email_contabilidade_preparado_em?: string | null
          email_exame_enviado_em?: string | null
          email_filial_origem?: string | null
          empresa_id?: string | null
          empresa_nome?: string | null
          endereco?: string | null
          epi?: string | null
          escolaridade?: string | null
          exige_toxicologico?: boolean
          experiencia?: string | null
          filiacao?: string | null
          filial_origem?: string | null
          funcao?: string | null
          funcionario_id?: string | null
          historico?: Json
          id?: string
          insalubridade?: string | null
          jornada?: string | null
          nome?: string | null
          obra_local?: string | null
          origem_cadastro?: string
          pasta_virtual?: Json
          pendencias_documentais?: Json
          public_completed_at?: string | null
          public_last_saved_at?: string | null
          public_seen_at?: string | null
          public_started_at?: string | null
          public_token?: string
          responsavel_contato?: string | null
          rg?: string | null
          salario?: number | null
          setor_ghe?: string | null
          status?: string
          tipo_admissao?: string | null
          transporte?: Json
          updated_at?: string
          vale_refeicao?: boolean
          vale_transporte?: boolean
          vt_valor_diario?: number | null
          vt_valor_mensal_estimado?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pre_cadastros_admissionais_criado_por_acesso_externo_id_fkey"
            columns: ["criado_por_acesso_externo_id"]
            isOneToOne: false
            referencedRelation: "acessos_externos"
            referencedColumns: ["id"]
          },
        ]
      }
      prestadores: {
        Row: {
          banco: string | null
          banco_agencia: string | null
          banco_conta: string | null
          banco_tipo_conta: string | null
          banco_titular: string | null
          cpf: string | null
          created_at: string
          dias_trabalho: string | null
          empresa_pagadora: string
          funcao: string | null
          id: string
          nome: string
          observacao: string | null
          pagamento_tipo: string
          proximo_pagamento: string | null
          status: string
          ultimo_pagamento: string | null
          updated_at: string
          user_id: string
          valor_diario: number | null
        }
        Insert: {
          banco?: string | null
          banco_agencia?: string | null
          banco_conta?: string | null
          banco_tipo_conta?: string | null
          banco_titular?: string | null
          cpf?: string | null
          created_at?: string
          dias_trabalho?: string | null
          empresa_pagadora?: string
          funcao?: string | null
          id?: string
          nome: string
          observacao?: string | null
          pagamento_tipo?: string
          proximo_pagamento?: string | null
          status?: string
          ultimo_pagamento?: string | null
          updated_at?: string
          user_id: string
          valor_diario?: number | null
        }
        Update: {
          banco?: string | null
          banco_agencia?: string | null
          banco_conta?: string | null
          banco_tipo_conta?: string | null
          banco_titular?: string | null
          cpf?: string | null
          created_at?: string
          dias_trabalho?: string | null
          empresa_pagadora?: string
          funcao?: string | null
          id?: string
          nome?: string
          observacao?: string | null
          pagamento_tipo?: string
          proximo_pagamento?: string | null
          status?: string
          ultimo_pagamento?: string | null
          updated_at?: string
          user_id?: string
          valor_diario?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          cargo: string | null
          cpf: string | null
          created_at: string
          email: string | null
          email_corporativo: string | null
          empresa: string | null
          filial: string | null
          id: string
          nome_completo: string | null
          telefone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cargo?: string | null
          cpf?: string | null
          created_at?: string
          email?: string | null
          email_corporativo?: string | null
          empresa?: string | null
          filial?: string | null
          id?: string
          nome_completo?: string | null
          telefone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cargo?: string | null
          cpf?: string | null
          created_at?: string
          email?: string | null
          email_corporativo?: string | null
          empresa?: string | null
          filial?: string | null
          id?: string
          nome_completo?: string | null
          telefone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      protocolos_documentos: {
        Row: {
          ano_fabricacao: string | null
          ano_modelo: string | null
          ativo_id: string | null
          categoria_ativo: string | null
          chassi: string | null
          created_at: string
          criado_por: string | null
          data_emissao: string
          descricao_ativo: string | null
          devolvido_em: string | null
          email_formalizacao_em: string | null
          email_formalizacao_status: string | null
          empresa_destinataria: string | null
          empresa_origem: string | null
          encerrado_em: string | null
          excluido_em: string | null
          excluido_por_operador_id: string | null
          exclusao_motivo: string | null
          exercicio: string | null
          id: string
          local_canteiro: string | null
          observacoes: string | null
          operador_id: string | null
          operador_nome: string | null
          patrimonio: string | null
          pdf_url: string | null
          placa: string | null
          protocolo_lote_id: string | null
          registro_ativo: boolean
          renavam: string | null
          responsavel_recebimento: string | null
          status_atualizado_em: string
          status_locacao: string
          texto_original: string | null
          ultima_alteracao_motivo: string | null
          updated_at: string
        }
        Insert: {
          ano_fabricacao?: string | null
          ano_modelo?: string | null
          ativo_id?: string | null
          categoria_ativo?: string | null
          chassi?: string | null
          created_at?: string
          criado_por?: string | null
          data_emissao?: string
          descricao_ativo?: string | null
          devolvido_em?: string | null
          email_formalizacao_em?: string | null
          email_formalizacao_status?: string | null
          empresa_destinataria?: string | null
          empresa_origem?: string | null
          encerrado_em?: string | null
          excluido_em?: string | null
          excluido_por_operador_id?: string | null
          exclusao_motivo?: string | null
          exercicio?: string | null
          id?: string
          local_canteiro?: string | null
          observacoes?: string | null
          operador_id?: string | null
          operador_nome?: string | null
          patrimonio?: string | null
          pdf_url?: string | null
          placa?: string | null
          protocolo_lote_id?: string | null
          registro_ativo?: boolean
          renavam?: string | null
          responsavel_recebimento?: string | null
          status_atualizado_em?: string
          status_locacao?: string
          texto_original?: string | null
          ultima_alteracao_motivo?: string | null
          updated_at?: string
        }
        Update: {
          ano_fabricacao?: string | null
          ano_modelo?: string | null
          ativo_id?: string | null
          categoria_ativo?: string | null
          chassi?: string | null
          created_at?: string
          criado_por?: string | null
          data_emissao?: string
          descricao_ativo?: string | null
          devolvido_em?: string | null
          email_formalizacao_em?: string | null
          email_formalizacao_status?: string | null
          empresa_destinataria?: string | null
          empresa_origem?: string | null
          encerrado_em?: string | null
          excluido_em?: string | null
          excluido_por_operador_id?: string | null
          exclusao_motivo?: string | null
          exercicio?: string | null
          id?: string
          local_canteiro?: string | null
          observacoes?: string | null
          operador_id?: string | null
          operador_nome?: string | null
          patrimonio?: string | null
          pdf_url?: string | null
          placa?: string | null
          protocolo_lote_id?: string | null
          registro_ativo?: boolean
          renavam?: string | null
          responsavel_recebimento?: string | null
          status_atualizado_em?: string
          status_locacao?: string
          texto_original?: string | null
          ultima_alteracao_motivo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "protocolos_documentos_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "protocolos_documentos_excluido_por_operador_id_fkey"
            columns: ["excluido_por_operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "protocolos_documentos_operador_id_fkey"
            columns: ["operador_id"]
            isOneToOne: false
            referencedRelation: "operadores_operacao"
            referencedColumns: ["id"]
          },
        ]
      }
      rastreamento_configuracao: {
        Row: {
          created_at: string
          observacoes: string | null
          provider: string
          regras_ativas: boolean
          status: string
          timezone: string
          tolerancia_minutos: number
          ultima_sincronizacao_em: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          observacoes?: string | null
          provider: string
          regras_ativas?: boolean
          status?: string
          timezone?: string
          tolerancia_minutos?: number
          ultima_sincronizacao_em?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          observacoes?: string | null
          provider?: string
          regras_ativas?: boolean
          status?: string
          timezone?: string
          tolerancia_minutos?: number
          ultima_sincronizacao_em?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      rastreamento_eventos: {
        Row: {
          ativo_id: string | null
          created_at: string
          endereco: string | null
          evento_em: string
          external_event_id: string | null
          id: string
          ignicao: boolean | null
          latitude: number | null
          longitude: number | null
          payload: Json | null
          placa: string
          provider: string
          recebido_em: string
          tipo: string
          velocidade_kmh: number | null
        }
        Insert: {
          ativo_id?: string | null
          created_at?: string
          endereco?: string | null
          evento_em: string
          external_event_id?: string | null
          id?: string
          ignicao?: boolean | null
          latitude?: number | null
          longitude?: number | null
          payload?: Json | null
          placa: string
          provider?: string
          recebido_em?: string
          tipo: string
          velocidade_kmh?: number | null
        }
        Update: {
          ativo_id?: string | null
          created_at?: string
          endereco?: string | null
          evento_em?: string
          external_event_id?: string | null
          id?: string
          ignicao?: boolean | null
          latitude?: number | null
          longitude?: number | null
          payload?: Json | null
          placa?: string
          provider?: string
          recebido_em?: string
          tipo?: string
          velocidade_kmh?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rastreamento_eventos_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
        ]
      }
      rastreamento_janelas_servico: {
        Row: {
          ativo: boolean
          dia_semana: number
          hora_fim: string | null
          hora_inicio: string | null
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          dia_semana: number
          hora_fim?: string | null
          hora_inicio?: string | null
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          dia_semana?: number
          hora_fim?: string | null
          hora_inicio?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      rastreamento_veiculos: {
        Row: {
          ativo_id: string | null
          created_at: string
          external_id: string | null
          id: string
          monitorar: boolean
          nome_externo: string | null
          placa: string
          provider: string
          ultima_posicao_em: string | null
          updated_at: string
        }
        Insert: {
          ativo_id?: string | null
          created_at?: string
          external_id?: string | null
          id?: string
          monitorar?: boolean
          nome_externo?: string | null
          placa: string
          provider?: string
          ultima_posicao_em?: string | null
          updated_at?: string
        }
        Update: {
          ativo_id?: string | null
          created_at?: string
          external_id?: string | null
          id?: string
          monitorar?: boolean
          nome_externo?: string | null
          placa?: string
          provider?: string
          ultima_posicao_em?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rastreamento_veiculos_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
        ]
      }
      reajustes: {
        Row: {
          aplicado_por: string | null
          contrato_id: string
          created_at: string
          data_aplicacao: string
          id: string
          indice: string | null
          observacao: string | null
          percentual: number
          status: string
          updated_at: string
          valor_anterior: number
          valor_novo: number
        }
        Insert: {
          aplicado_por?: string | null
          contrato_id: string
          created_at?: string
          data_aplicacao?: string
          id?: string
          indice?: string | null
          observacao?: string | null
          percentual?: number
          status?: string
          updated_at?: string
          valor_anterior?: number
          valor_novo?: number
        }
        Update: {
          aplicado_por?: string | null
          contrato_id?: string
          created_at?: string
          data_aplicacao?: string
          id?: string
          indice?: string | null
          observacao?: string | null
          percentual?: number
          status?: string
          updated_at?: string
          valor_anterior?: number
          valor_novo?: number
        }
        Relationships: [
          {
            foreignKeyName: "reajustes_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
        ]
      }
      recebimentos: {
        Row: {
          conta_bancaria_id: string | null
          created_at: string
          data: string
          forma_pagamento: string
          id: string
          observacoes: string | null
          titulo_id: string
          user_id: string
          usuario_nome: string | null
          valor: number
        }
        Insert: {
          conta_bancaria_id?: string | null
          created_at?: string
          data?: string
          forma_pagamento?: string
          id?: string
          observacoes?: string | null
          titulo_id: string
          user_id: string
          usuario_nome?: string | null
          valor: number
        }
        Update: {
          conta_bancaria_id?: string | null
          created_at?: string
          data?: string
          forma_pagamento?: string
          id?: string
          observacoes?: string | null
          titulo_id?: string
          user_id?: string
          usuario_nome?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "recebimentos_conta_bancaria_id_fkey"
            columns: ["conta_bancaria_id"]
            isOneToOne: false
            referencedRelation: "contas_bancarias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recebimentos_titulo_id_fkey"
            columns: ["titulo_id"]
            isOneToOne: false
            referencedRelation: "titulos_receber"
            referencedColumns: ["id"]
          },
        ]
      }
      receipt_post_label_prints: {
        Row: {
          created_at: string
          id: string
          period_end: string
          period_start: string
          printed_by: string
        }
        Insert: {
          created_at?: string
          id?: string
          period_end: string
          period_start: string
          printed_by?: string
        }
        Update: {
          created_at?: string
          id?: string
          period_end?: string
          period_start?: string
          printed_by?: string
        }
        Relationships: []
      }
      recibos_correcoes: {
        Row: {
          company_id: string
          competencia: string
          corrigido_por_nome: string | null
          corrigido_por_user_id: string | null
          created_at: string
          data_pagamento: string | null
          dias_finais_corrigido: number | null
          dias_finais_original: number | null
          funcionario_id: string
          id: string
          motivo: string
          observacao: string | null
          tipo: string
          updated_at: string
          valor_diario_corrigido: number | null
          valor_diario_original: number | null
          valor_total_corrigido: number | null
          valor_total_original: number | null
        }
        Insert: {
          company_id: string
          competencia: string
          corrigido_por_nome?: string | null
          corrigido_por_user_id?: string | null
          created_at?: string
          data_pagamento?: string | null
          dias_finais_corrigido?: number | null
          dias_finais_original?: number | null
          funcionario_id: string
          id?: string
          motivo: string
          observacao?: string | null
          tipo: string
          updated_at?: string
          valor_diario_corrigido?: number | null
          valor_diario_original?: number | null
          valor_total_corrigido?: number | null
          valor_total_original?: number | null
        }
        Update: {
          company_id?: string
          competencia?: string
          corrigido_por_nome?: string | null
          corrigido_por_user_id?: string | null
          created_at?: string
          data_pagamento?: string | null
          dias_finais_corrigido?: number | null
          dias_finais_original?: number | null
          funcionario_id?: string
          id?: string
          motivo?: string
          observacao?: string | null
          tipo?: string
          updated_at?: string
          valor_diario_corrigido?: number | null
          valor_diario_original?: number | null
          valor_total_corrigido?: number | null
          valor_total_original?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "recibos_correcoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recibos_correcoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "recibos_correcoes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recibos_correcoes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      registros_km: {
        Row: {
          created_at: string
          data: string
          foto_url: string | null
          hora: string
          id: string
          km_valor: number
          latitude: number | null
          longitude: number | null
          tipo_registro: string
          user_id: string
          veiculo_id: string
        }
        Insert: {
          created_at?: string
          data?: string
          foto_url?: string | null
          hora?: string
          id?: string
          km_valor: number
          latitude?: number | null
          longitude?: number | null
          tipo_registro?: string
          user_id: string
          veiculo_id: string
        }
        Update: {
          created_at?: string
          data?: string
          foto_url?: string | null
          hora?: string
          id?: string
          km_valor?: number
          latitude?: number | null
          longitude?: number | null
          tipo_registro?: string
          user_id?: string
          veiculo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "registros_km_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      registros_ponto: {
        Row: {
          created_at: string
          data: string
          data_hora_brasilia: string | null
          dispositivo: string | null
          endereco_formatado: string | null
          hora: string
          id: string
          latitude: number | null
          longitude: number | null
          registro_teste: boolean
          selfie_url: string | null
          timezone: string
          tipo: string
          user_id: string
          veiculo_id: string | null
        }
        Insert: {
          created_at?: string
          data?: string
          data_hora_brasilia?: string | null
          dispositivo?: string | null
          endereco_formatado?: string | null
          hora?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          registro_teste?: boolean
          selfie_url?: string | null
          timezone?: string
          tipo: string
          user_id: string
          veiculo_id?: string | null
        }
        Update: {
          created_at?: string
          data?: string
          data_hora_brasilia?: string | null
          dispositivo?: string | null
          endereco_formatado?: string | null
          hora?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          registro_teste?: boolean
          selfie_url?: string | null
          timezone?: string
          tipo?: string
          user_id?: string
          veiculo_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registros_ponto_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      representantes_faturamento: {
        Row: {
          cidade: string | null
          codigo_dn4: string | null
          cpf_cnpj: string | null
          created_at: string
          email: string | null
          empresa_origem: string | null
          endereco: string | null
          filial_origem: string | null
          id: string
          nome: string
          telefone: string | null
          tipo_pessoa: string | null
          uf: string | null
          updated_at: string
        }
        Insert: {
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          email?: string | null
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          nome: string
          telefone?: string | null
          tipo_pessoa?: string | null
          uf?: string | null
          updated_at?: string
        }
        Update: {
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          email?: string | null
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          nome?: string
          telefone?: string | null
          tipo_pessoa?: string | null
          uf?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      rescisao_historico: {
        Row: {
          acao: string
          alteracoes_manuais_json: Json
          created_at: string
          detalhe: string
          id: string
          rescisao_id: string
          snapshot_json: Json
          user_id: string | null
          usuario_nome: string
        }
        Insert: {
          acao?: string
          alteracoes_manuais_json?: Json
          created_at?: string
          detalhe?: string
          id?: string
          rescisao_id: string
          snapshot_json?: Json
          user_id?: string | null
          usuario_nome?: string
        }
        Update: {
          acao?: string
          alteracoes_manuais_json?: Json
          created_at?: string
          detalhe?: string
          id?: string
          rescisao_id?: string
          snapshot_json?: Json
          user_id?: string | null
          usuario_nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "rescisao_historico_rescisao_id_fkey"
            columns: ["rescisao_id"]
            isOneToOne: false
            referencedRelation: "rescisoes"
            referencedColumns: ["id"]
          },
        ]
      }
      rescisoes: {
        Row: {
          alteracoes_manuais_json: Json
          aviso_previo: string
          aviso_previo_desconto: number
          aviso_previo_valor: number
          calculado_em: string
          calculo_versao: string
          cargo: string
          company_id: string | null
          cpf: string | null
          created_at: string
          data_admissao: string | null
          data_desligamento: string
          data_projecao_aviso: string | null
          decimo_terceiro: number
          decimo_terceiro_adiantado: number
          decimo_terceiro_avos: number
          decimo_terceiro_bruto: number
          dependentes: number
          descontos_json: Json
          dias_aviso: number
          dias_saldo_salario: number
          divisor_saldo_salario: number
          empresa_cnpj: string | null
          empresa_municipio: string | null
          empresa_nome: string
          empresa_uf: string | null
          endereco: string | null
          ferias_em_aberto: number
          ferias_em_dobro_adicional: number
          ferias_proporcionais: number
          ferias_vencidas: number
          fgts_mes: number
          fgts_saldo_editado_manual: boolean
          fgts_saldo_motivo: string
          funcionario_id: string | null
          funcionario_nome: string
          id: string
          inss: number
          irrf: number
          liquido: number
          motivo: string
          multa_fgts: number
          observacoes: string
          outros_descontos: number
          periodos_ferias_json: Json
          remuneracao_base: number
          revisao_ferias_necessaria: boolean
          salario_base: number
          saldo_fgts_depositado: number
          saldo_salario: number
          snapshot_json: Json
          status: string
          terco_ferias: number
          terco_ferias_proporcionais: number
          terco_ferias_vencidas: number
          tipo_rescisao: string
          total_descontos: number
          total_proventos: number
          updated_at: string
          user_id: string | null
          usuario_nome: string
        }
        Insert: {
          alteracoes_manuais_json?: Json
          aviso_previo?: string
          aviso_previo_desconto?: number
          aviso_previo_valor?: number
          calculado_em?: string
          calculo_versao?: string
          cargo?: string
          company_id?: string | null
          cpf?: string | null
          created_at?: string
          data_admissao?: string | null
          data_desligamento: string
          data_projecao_aviso?: string | null
          decimo_terceiro?: number
          decimo_terceiro_adiantado?: number
          decimo_terceiro_avos?: number
          decimo_terceiro_bruto?: number
          dependentes?: number
          descontos_json?: Json
          dias_aviso?: number
          dias_saldo_salario?: number
          divisor_saldo_salario?: number
          empresa_cnpj?: string | null
          empresa_municipio?: string | null
          empresa_nome?: string
          empresa_uf?: string | null
          endereco?: string | null
          ferias_em_aberto?: number
          ferias_em_dobro_adicional?: number
          ferias_proporcionais?: number
          ferias_vencidas?: number
          fgts_mes?: number
          fgts_saldo_editado_manual?: boolean
          fgts_saldo_motivo?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          inss?: number
          irrf?: number
          liquido?: number
          motivo?: string
          multa_fgts?: number
          observacoes?: string
          outros_descontos?: number
          periodos_ferias_json?: Json
          remuneracao_base?: number
          revisao_ferias_necessaria?: boolean
          salario_base?: number
          saldo_fgts_depositado?: number
          saldo_salario?: number
          snapshot_json?: Json
          status?: string
          terco_ferias?: number
          terco_ferias_proporcionais?: number
          terco_ferias_vencidas?: number
          tipo_rescisao?: string
          total_descontos?: number
          total_proventos?: number
          updated_at?: string
          user_id?: string | null
          usuario_nome?: string
        }
        Update: {
          alteracoes_manuais_json?: Json
          aviso_previo?: string
          aviso_previo_desconto?: number
          aviso_previo_valor?: number
          calculado_em?: string
          calculo_versao?: string
          cargo?: string
          company_id?: string | null
          cpf?: string | null
          created_at?: string
          data_admissao?: string | null
          data_desligamento?: string
          data_projecao_aviso?: string | null
          decimo_terceiro?: number
          decimo_terceiro_adiantado?: number
          decimo_terceiro_avos?: number
          decimo_terceiro_bruto?: number
          dependentes?: number
          descontos_json?: Json
          dias_aviso?: number
          dias_saldo_salario?: number
          divisor_saldo_salario?: number
          empresa_cnpj?: string | null
          empresa_municipio?: string | null
          empresa_nome?: string
          empresa_uf?: string | null
          endereco?: string | null
          ferias_em_aberto?: number
          ferias_em_dobro_adicional?: number
          ferias_proporcionais?: number
          ferias_vencidas?: number
          fgts_mes?: number
          fgts_saldo_editado_manual?: boolean
          fgts_saldo_motivo?: string
          funcionario_id?: string | null
          funcionario_nome?: string
          id?: string
          inss?: number
          irrf?: number
          liquido?: number
          motivo?: string
          multa_fgts?: number
          observacoes?: string
          outros_descontos?: number
          periodos_ferias_json?: Json
          remuneracao_base?: number
          revisao_ferias_necessaria?: boolean
          salario_base?: number
          saldo_fgts_depositado?: number
          saldo_salario?: number
          snapshot_json?: Json
          status?: string
          terco_ferias?: number
          terco_ferias_proporcionais?: number
          terco_ferias_vencidas?: number
          tipo_rescisao?: string
          total_descontos?: number
          total_proventos?: number
          updated_at?: string
          user_id?: string | null
          usuario_nome?: string
        }
        Relationships: []
      }
      rh_documentos_uploads: {
        Row: {
          arquivo_url: string
          competencia: string | null
          created_at: string
          criado_por: string | null
          empresa_id: string | null
          enviado_por: string | null
          funcionario_id: string
          id: string
          metadata: Json
          nome_arquivo: string
          public_url: string | null
          status: string
          storage_path: string
          tipo_documento: string
          unidade: string | null
        }
        Insert: {
          arquivo_url?: string
          competencia?: string | null
          created_at?: string
          criado_por?: string | null
          empresa_id?: string | null
          enviado_por?: string | null
          funcionario_id: string
          id?: string
          metadata?: Json
          nome_arquivo: string
          public_url?: string | null
          status?: string
          storage_path: string
          tipo_documento: string
          unidade?: string | null
        }
        Update: {
          arquivo_url?: string
          competencia?: string | null
          created_at?: string
          criado_por?: string | null
          empresa_id?: string | null
          enviado_por?: string | null
          funcionario_id?: string
          id?: string
          metadata?: Json
          nome_arquivo?: string
          public_url?: string | null
          status?: string
          storage_path?: string
          tipo_documento?: string
          unidade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_documentos_uploads_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_documentos_uploads_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      rh_ocorrencias_disciplinares: {
        Row: {
          created_at: string
          created_by: string | null
          created_by_nome: string | null
          data_ocorrencia: string
          descricao: string
          evidencias: string | null
          funcionario_id: string
          id: string
          medida: string
          motivo_decisao: string | null
          relacionado_atestado_id: string | null
          status: string
          testemunhas: string | null
          tipo: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          created_by_nome?: string | null
          data_ocorrencia?: string
          descricao: string
          evidencias?: string | null
          funcionario_id: string
          id?: string
          medida?: string
          motivo_decisao?: string | null
          relacionado_atestado_id?: string | null
          status?: string
          testemunhas?: string | null
          tipo: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          created_by_nome?: string | null
          data_ocorrencia?: string
          descricao?: string
          evidencias?: string | null
          funcionario_id?: string
          id?: string
          medida?: string
          motivo_decisao?: string | null
          relacionado_atestado_id?: string | null
          status?: string
          testemunhas?: string | null
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rh_ocorrencias_disciplinares_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_ocorrencias_disciplinares_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "rh_ocorrencias_disciplinares_relacionado_atestado_id_fkey"
            columns: ["relacionado_atestado_id"]
            isOneToOne: false
            referencedRelation: "atestados"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_ocorrencias_disciplinares_eventos: {
        Row: {
          acao: string
          antes: Json | null
          created_at: string
          depois: Json | null
          id: string
          motivo: string | null
          ocorrencia_id: string
          user_id: string | null
          user_nome: string | null
        }
        Insert: {
          acao: string
          antes?: Json | null
          created_at?: string
          depois?: Json | null
          id?: string
          motivo?: string | null
          ocorrencia_id: string
          user_id?: string | null
          user_nome?: string | null
        }
        Update: {
          acao?: string
          antes?: Json | null
          created_at?: string
          depois?: Json | null
          id?: string
          motivo?: string | null
          ocorrencia_id?: string
          user_id?: string | null
          user_nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_ocorrencias_disciplinares_eventos_ocorrencia_id_fkey"
            columns: ["ocorrencia_id"]
            isOneToOne: false
            referencedRelation: "rh_ocorrencias_disciplinares"
            referencedColumns: ["id"]
          },
        ]
      }
      staging_clientes_dn4: {
        Row: {
          arquivo_origem: string | null
          bairro: string | null
          cep: string | null
          cidade: string | null
          codigo_dn4: string | null
          cpf_cnpj: string | null
          created_at: string
          data_importacao: string
          empresa_origem: string | null
          endereco: string | null
          filial_origem: string | null
          id: string
          importacao_id: string | null
          inscricao_estadual: string | null
          linha_original_extraida: Json | null
          mensagem_erro: string | null
          nome_razao_social: string | null
          pagina_origem: number | null
          status: string
          status_cliente: string | null
          uf: string | null
          updated_at: string
          usuario_importacao: string | null
        }
        Insert: {
          arquivo_origem?: string | null
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          data_importacao?: string
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          importacao_id?: string | null
          inscricao_estadual?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          nome_razao_social?: string | null
          pagina_origem?: number | null
          status?: string
          status_cliente?: string | null
          uf?: string | null
          updated_at?: string
          usuario_importacao?: string | null
        }
        Update: {
          arquivo_origem?: string | null
          bairro?: string | null
          cep?: string | null
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          data_importacao?: string
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          importacao_id?: string | null
          inscricao_estadual?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          nome_razao_social?: string | null
          pagina_origem?: number | null
          status?: string
          status_cliente?: string | null
          uf?: string | null
          updated_at?: string
          usuario_importacao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staging_clientes_dn4_importacao_id_fkey"
            columns: ["importacao_id"]
            isOneToOne: false
            referencedRelation: "importacoes_dn4"
            referencedColumns: ["id"]
          },
        ]
      }
      staging_equipamentos_dn4: {
        Row: {
          arquivo_origem: string | null
          codigo_equipamento: string | null
          created_at: string
          data_importacao: string
          descricao: string | null
          filial_opera: string | null
          grupo: string | null
          id: string
          importacao_id: string | null
          linha_original_extraida: Json | null
          mensagem_erro: string | null
          numero_patrimonio: string | null
          numero_serie: string | null
          pagina_origem: number | null
          situacao: string | null
          status: string
          tipo_equipamento: string | null
          updated_at: string
          usuario_importacao: string | null
          valor_compra: number | null
          valor_indenizacao: number | null
          valor_mercado: number | null
          valor_venda: number | null
        }
        Insert: {
          arquivo_origem?: string | null
          codigo_equipamento?: string | null
          created_at?: string
          data_importacao?: string
          descricao?: string | null
          filial_opera?: string | null
          grupo?: string | null
          id?: string
          importacao_id?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          numero_patrimonio?: string | null
          numero_serie?: string | null
          pagina_origem?: number | null
          situacao?: string | null
          status?: string
          tipo_equipamento?: string | null
          updated_at?: string
          usuario_importacao?: string | null
          valor_compra?: number | null
          valor_indenizacao?: number | null
          valor_mercado?: number | null
          valor_venda?: number | null
        }
        Update: {
          arquivo_origem?: string | null
          codigo_equipamento?: string | null
          created_at?: string
          data_importacao?: string
          descricao?: string | null
          filial_opera?: string | null
          grupo?: string | null
          id?: string
          importacao_id?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          numero_patrimonio?: string | null
          numero_serie?: string | null
          pagina_origem?: number | null
          situacao?: string | null
          status?: string
          tipo_equipamento?: string | null
          updated_at?: string
          usuario_importacao?: string | null
          valor_compra?: number | null
          valor_indenizacao?: number | null
          valor_mercado?: number | null
          valor_venda?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "staging_equipamentos_dn4_importacao_id_fkey"
            columns: ["importacao_id"]
            isOneToOne: false
            referencedRelation: "importacoes_dn4"
            referencedColumns: ["id"]
          },
        ]
      }
      staging_historico_locacao_dn4: {
        Row: {
          arquivo_origem: string | null
          cliente_cpf_cnpj: string | null
          cliente_id_resolvido: string | null
          cliente_nome: string | null
          created_at: string
          data_fim: string | null
          data_importacao: string
          data_inicio: string | null
          descricao_equipamento: string | null
          equipamento_id_resolvido: string | null
          filial: string | null
          id: string
          importacao_id: string | null
          item: string | null
          linha_original_extraida: Json | null
          mensagem_erro: string | null
          numero_nf: string | null
          numero_os: string | null
          pagina_origem: number | null
          patrimonio: string | null
          pedido: string | null
          periodo_texto: string | null
          quantidade: number | null
          status: string
          updated_at: string
          usuario_importacao: string | null
          valor_diaria_periodo: number | null
          valor_faturado_periodo: number | null
          valor_pedido_periodo: number | null
        }
        Insert: {
          arquivo_origem?: string | null
          cliente_cpf_cnpj?: string | null
          cliente_id_resolvido?: string | null
          cliente_nome?: string | null
          created_at?: string
          data_fim?: string | null
          data_importacao?: string
          data_inicio?: string | null
          descricao_equipamento?: string | null
          equipamento_id_resolvido?: string | null
          filial?: string | null
          id?: string
          importacao_id?: string | null
          item?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          numero_nf?: string | null
          numero_os?: string | null
          pagina_origem?: number | null
          patrimonio?: string | null
          pedido?: string | null
          periodo_texto?: string | null
          quantidade?: number | null
          status?: string
          updated_at?: string
          usuario_importacao?: string | null
          valor_diaria_periodo?: number | null
          valor_faturado_periodo?: number | null
          valor_pedido_periodo?: number | null
        }
        Update: {
          arquivo_origem?: string | null
          cliente_cpf_cnpj?: string | null
          cliente_id_resolvido?: string | null
          cliente_nome?: string | null
          created_at?: string
          data_fim?: string | null
          data_importacao?: string
          data_inicio?: string | null
          descricao_equipamento?: string | null
          equipamento_id_resolvido?: string | null
          filial?: string | null
          id?: string
          importacao_id?: string | null
          item?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          numero_nf?: string | null
          numero_os?: string | null
          pagina_origem?: number | null
          patrimonio?: string | null
          pedido?: string | null
          periodo_texto?: string | null
          quantidade?: number | null
          status?: string
          updated_at?: string
          usuario_importacao?: string | null
          valor_diaria_periodo?: number | null
          valor_faturado_periodo?: number | null
          valor_pedido_periodo?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "staging_historico_locacao_dn4_importacao_id_fkey"
            columns: ["importacao_id"]
            isOneToOne: false
            referencedRelation: "importacoes_dn4"
            referencedColumns: ["id"]
          },
        ]
      }
      staging_representantes_dn4: {
        Row: {
          arquivo_origem: string | null
          cidade: string | null
          codigo_dn4: string | null
          cpf_cnpj: string | null
          created_at: string
          data_importacao: string
          email: string | null
          empresa_origem: string | null
          endereco: string | null
          filial_origem: string | null
          id: string
          importacao_id: string | null
          linha_original_extraida: Json | null
          mensagem_erro: string | null
          nome: string | null
          pagina_origem: number | null
          status: string
          telefone: string | null
          tipo_pessoa: string | null
          uf: string | null
          updated_at: string
          usuario_importacao: string | null
        }
        Insert: {
          arquivo_origem?: string | null
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          data_importacao?: string
          email?: string | null
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          importacao_id?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          nome?: string | null
          pagina_origem?: number | null
          status?: string
          telefone?: string | null
          tipo_pessoa?: string | null
          uf?: string | null
          updated_at?: string
          usuario_importacao?: string | null
        }
        Update: {
          arquivo_origem?: string | null
          cidade?: string | null
          codigo_dn4?: string | null
          cpf_cnpj?: string | null
          created_at?: string
          data_importacao?: string
          email?: string | null
          empresa_origem?: string | null
          endereco?: string | null
          filial_origem?: string | null
          id?: string
          importacao_id?: string | null
          linha_original_extraida?: Json | null
          mensagem_erro?: string | null
          nome?: string | null
          pagina_origem?: number | null
          status?: string
          telefone?: string | null
          tipo_pessoa?: string | null
          uf?: string | null
          updated_at?: string
          usuario_importacao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staging_representantes_dn4_importacao_id_fkey"
            columns: ["importacao_id"]
            isOneToOne: false
            referencedRelation: "importacoes_dn4"
            referencedColumns: ["id"]
          },
        ]
      }
      system_access_controls: {
        Row: {
          label: string
          module_key: string
          restricted: boolean
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          label: string
          module_key: string
          restricted?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          label?: string
          module_key?: string
          restricted?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      tecnicos_campo: {
        Row: {
          access_token: string | null
          apelido: string
          created_at: string
          funcionario_id: string
          id: string
          observacoes: string | null
          status: string
          ultima_atividade_em: string | null
          updated_at: string
          user_id: string | null
          veiculo_id: string | null
        }
        Insert: {
          access_token?: string | null
          apelido?: string
          created_at?: string
          funcionario_id: string
          id?: string
          observacoes?: string | null
          status?: string
          ultima_atividade_em?: string | null
          updated_at?: string
          user_id?: string | null
          veiculo_id?: string | null
        }
        Update: {
          access_token?: string | null
          apelido?: string
          created_at?: string
          funcionario_id?: string
          id?: string
          observacoes?: string | null
          status?: string
          ultima_atividade_em?: string | null
          updated_at?: string
          user_id?: string | null
          veiculo_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tecnicos_campo_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: true
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tecnicos_campo_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: true
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
          {
            foreignKeyName: "tecnicos_campo_veiculo_id_fkey"
            columns: ["veiculo_id"]
            isOneToOne: false
            referencedRelation: "veiculos"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_vr_configuracoes: {
        Row: {
          atualizado_por: string | null
          bairro: string
          cep: string
          cidade: string
          codigo_cliente_ticket: string
          company_id: string
          created_at: string
          ddd: string
          departamento: string
          id: string
          interlocutor: string
          logradouro: string
          numero: string
          telefone: string
          tipo_logradouro: string
          uf: string
          unidade_entrega: string
          updated_at: string
        }
        Insert: {
          atualizado_por?: string | null
          bairro?: string
          cep?: string
          cidade?: string
          codigo_cliente_ticket?: string
          company_id: string
          created_at?: string
          ddd?: string
          departamento?: string
          id?: string
          interlocutor?: string
          logradouro?: string
          numero?: string
          telefone?: string
          tipo_logradouro?: string
          uf?: string
          unidade_entrega?: string
          updated_at?: string
        }
        Update: {
          atualizado_por?: string | null
          bairro?: string
          cep?: string
          cidade?: string
          codigo_cliente_ticket?: string
          company_id?: string
          created_at?: string
          ddd?: string
          departamento?: string
          id?: string
          interlocutor?: string
          logradouro?: string
          numero?: string
          telefone?: string
          tipo_logradouro?: string
          uf?: string
          unidade_entrega?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_vr_configuracoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_vr_configuracoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      ticket_vr_geracoes: {
        Row: {
          aprovado_em: string | null
          checksum_sha256: string | null
          cnpj: string
          company_id: string
          competencia: string
          created_at: string
          empresa_nome: string
          gerado_por_nome: string | null
          gerado_por_user_id: string | null
          id: string
          nome_arquivo: string | null
          snapshot: Json
          status: string
          total_dias_vr: number
          total_funcionarios: number
          txt_conteudo: string | null
          txt_gerado_em: string | null
          updated_at: string
          valor_total: number
          versao: number
        }
        Insert: {
          aprovado_em?: string | null
          checksum_sha256?: string | null
          cnpj: string
          company_id: string
          competencia: string
          created_at?: string
          empresa_nome: string
          gerado_por_nome?: string | null
          gerado_por_user_id?: string | null
          id?: string
          nome_arquivo?: string | null
          snapshot?: Json
          status: string
          total_dias_vr?: number
          total_funcionarios?: number
          txt_conteudo?: string | null
          txt_gerado_em?: string | null
          updated_at?: string
          valor_total?: number
          versao?: number
        }
        Update: {
          aprovado_em?: string | null
          checksum_sha256?: string | null
          cnpj?: string
          company_id?: string
          competencia?: string
          created_at?: string
          empresa_nome?: string
          gerado_por_nome?: string | null
          gerado_por_user_id?: string | null
          id?: string
          nome_arquivo?: string | null
          snapshot?: Json
          status?: string
          total_dias_vr?: number
          total_funcionarios?: number
          txt_conteudo?: string | null
          txt_gerado_em?: string | null
          updated_at?: string
          valor_total?: number
          versao?: number
        }
        Relationships: [
          {
            foreignKeyName: "ticket_vr_geracoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_vr_geracoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      titulos_pagar: {
        Row: {
          anexo_url: string | null
          aprovado_em: string | null
          aprovado_por: string | null
          categoria_id: string | null
          centro_custo_id: string | null
          competencia: string
          created_at: string
          data_emissao: string
          data_vencimento: string
          desconto: number
          descricao: string
          empresa_id: string
          fornecedor_id: string | null
          fornecedor_nome: string | null
          id: string
          juros: number
          multa: number
          numero: string | null
          observacoes: string | null
          recorrencia: string | null
          recorrencia_indice: number | null
          recorrencia_total: number | null
          requer_aprovacao: boolean
          saldo: number
          status: string
          updated_at: string
          valor_pago: number
          valor_previsto: number
        }
        Insert: {
          anexo_url?: string | null
          aprovado_em?: string | null
          aprovado_por?: string | null
          categoria_id?: string | null
          centro_custo_id?: string | null
          competencia: string
          created_at?: string
          data_emissao?: string
          data_vencimento: string
          desconto?: number
          descricao?: string
          empresa_id: string
          fornecedor_id?: string | null
          fornecedor_nome?: string | null
          id?: string
          juros?: number
          multa?: number
          numero?: string | null
          observacoes?: string | null
          recorrencia?: string | null
          recorrencia_indice?: number | null
          recorrencia_total?: number | null
          requer_aprovacao?: boolean
          saldo?: number
          status?: string
          updated_at?: string
          valor_pago?: number
          valor_previsto?: number
        }
        Update: {
          anexo_url?: string | null
          aprovado_em?: string | null
          aprovado_por?: string | null
          categoria_id?: string | null
          centro_custo_id?: string | null
          competencia?: string
          created_at?: string
          data_emissao?: string
          data_vencimento?: string
          desconto?: number
          descricao?: string
          empresa_id?: string
          fornecedor_id?: string | null
          fornecedor_nome?: string | null
          id?: string
          juros?: number
          multa?: number
          numero?: string | null
          observacoes?: string | null
          recorrencia?: string | null
          recorrencia_indice?: number | null
          recorrencia_total?: number | null
          requer_aprovacao?: boolean
          saldo?: number
          status?: string
          updated_at?: string
          valor_pago?: number
          valor_previsto?: number
        }
        Relationships: [
          {
            foreignKeyName: "titulos_pagar_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias_financeiras"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_pagar_centro_custo_id_fkey"
            columns: ["centro_custo_id"]
            isOneToOne: false
            referencedRelation: "centros_custo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_pagar_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_pagar_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "titulos_pagar_fornecedor_id_fkey"
            columns: ["fornecedor_id"]
            isOneToOne: false
            referencedRelation: "fornecedores"
            referencedColumns: ["id"]
          },
        ]
      }
      titulos_receber: {
        Row: {
          cliente_id: string | null
          competencia: string | null
          conta_bancaria_id: string | null
          contrato_id: string | null
          created_at: string
          data_emissao: string
          data_vencimento: string | null
          desconto: number
          empresa_id: string | null
          fatura_id: string | null
          id: string
          juros: number
          multa: number
          numero: string | null
          observacoes: string | null
          origem: string | null
          origem_id: string | null
          saldo: number
          status: string
          updated_at: string
          valor_original: number
          valor_pago: number
        }
        Insert: {
          cliente_id?: string | null
          competencia?: string | null
          conta_bancaria_id?: string | null
          contrato_id?: string | null
          created_at?: string
          data_emissao?: string
          data_vencimento?: string | null
          desconto?: number
          empresa_id?: string | null
          fatura_id?: string | null
          id?: string
          juros?: number
          multa?: number
          numero?: string | null
          observacoes?: string | null
          origem?: string | null
          origem_id?: string | null
          saldo?: number
          status?: string
          updated_at?: string
          valor_original?: number
          valor_pago?: number
        }
        Update: {
          cliente_id?: string | null
          competencia?: string | null
          conta_bancaria_id?: string | null
          contrato_id?: string | null
          created_at?: string
          data_emissao?: string
          data_vencimento?: string | null
          desconto?: number
          empresa_id?: string | null
          fatura_id?: string | null
          id?: string
          juros?: number
          multa?: number
          numero?: string | null
          observacoes?: string | null
          origem?: string | null
          origem_id?: string | null
          saldo?: number
          status?: string
          updated_at?: string
          valor_original?: number
          valor_pago?: number
        }
        Relationships: [
          {
            foreignKeyName: "titulos_receber_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes_fat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_receber_conta_bancaria_id_fkey"
            columns: ["conta_bancaria_id"]
            isOneToOne: false
            referencedRelation: "contas_bancarias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_receber_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_receber_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "titulos_receber_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "titulos_receber_fatura_id_fkey"
            columns: ["fatura_id"]
            isOneToOne: false
            referencedRelation: "faturas"
            referencedColumns: ["id"]
          },
        ]
      }
      topac_acessos_fixos: {
        Row: {
          ativo: boolean
          cpf_clean: string
          created_at: string
          email: string | null
          empresa: string
          filial: string
          id: string
          nome: string
          observacoes: string | null
          perfil: string
          roles: string[]
          telefone: string | null
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          cpf_clean: string
          created_at?: string
          email?: string | null
          empresa?: string
          filial?: string
          id?: string
          nome?: string
          observacoes?: string | null
          perfil?: string
          roles?: string[]
          telefone?: string | null
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          cpf_clean?: string
          created_at?: string
          email?: string | null
          empresa?: string
          filial?: string
          id?: string
          nome?: string
          observacoes?: string | null
          perfil?: string
          roles?: string[]
          telefone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      topac_admin_restricoes: {
        Row: {
          bloquear_assinatura_digital: boolean
          created_at: string
          ocultar_valores_dashboard: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          bloquear_assinatura_digital?: boolean
          created_at?: string
          ocultar_valores_dashboard?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          bloquear_assinatura_digital?: boolean
          created_at?: string
          ocultar_valores_dashboard?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      topac_login_attempts: {
        Row: {
          cpf_hash: string
          created_at: string
          id: string
          ip_hash: string
          success: boolean
        }
        Insert: {
          cpf_hash: string
          created_at?: string
          id?: string
          ip_hash: string
          success?: boolean
        }
        Update: {
          cpf_hash?: string
          created_at?: string
          id?: string
          ip_hash?: string
          success?: boolean
        }
        Relationships: []
      }
      topac_material_solicitacoes: {
        Row: {
          atendido_em: string | null
          atendido_por: string | null
          atendido_por_nome: string | null
          cargo: string
          company_id: string
          created_at: string
          data_solicitacao: string
          empresa_nome: string
          funcionario_id: string
          funcionario_nome: string
          id: string
          itens_entregues: Json
          itens_solicitados: Json
          justificativa: string
          solicitado_por: string | null
          solicitado_por_nome: string
          status: string
          tipo: string
          updated_at: string
        }
        Insert: {
          atendido_em?: string | null
          atendido_por?: string | null
          atendido_por_nome?: string | null
          cargo?: string
          company_id: string
          created_at?: string
          data_solicitacao?: string
          empresa_nome: string
          funcionario_id: string
          funcionario_nome: string
          id?: string
          itens_entregues?: Json
          itens_solicitados?: Json
          justificativa?: string
          solicitado_por?: string | null
          solicitado_por_nome: string
          status?: string
          tipo: string
          updated_at?: string
        }
        Update: {
          atendido_em?: string | null
          atendido_por?: string | null
          atendido_por_nome?: string | null
          cargo?: string
          company_id?: string
          created_at?: string
          data_solicitacao?: string
          empresa_nome?: string
          funcionario_id?: string
          funcionario_nome?: string
          id?: string
          itens_entregues?: Json
          itens_solicitados?: Json
          justificativa?: string
          solicitado_por?: string | null
          solicitado_por_nome?: string
          status?: string
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "topac_material_solicitacoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topac_material_solicitacoes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "topac_material_solicitacoes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topac_material_solicitacoes_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      uniforme_auditoria: {
        Row: {
          anterior: Json | null
          criado_em: string
          estoque_id: string
          id: string
          motivo: string
          movimento_id: string | null
          operacao: string
          posterior: Json | null
          responsavel_id: string
          responsavel_nome: string
        }
        Insert: {
          anterior?: Json | null
          criado_em?: string
          estoque_id: string
          id?: string
          motivo: string
          movimento_id?: string | null
          operacao: string
          posterior?: Json | null
          responsavel_id: string
          responsavel_nome: string
        }
        Update: {
          anterior?: Json | null
          criado_em?: string
          estoque_id?: string
          id?: string
          motivo?: string
          movimento_id?: string | null
          operacao?: string
          posterior?: Json | null
          responsavel_id?: string
          responsavel_nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "uniforme_auditoria_estoque_id_fkey"
            columns: ["estoque_id"]
            isOneToOne: false
            referencedRelation: "uniforme_estoque"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "uniforme_auditoria_movimento_id_fkey"
            columns: ["movimento_id"]
            isOneToOne: false
            referencedRelation: "uniforme_movimentos"
            referencedColumns: ["id"]
          },
        ]
      }
      uniforme_entregas: {
        Row: {
          cancelado_em: string | null
          cancelado_por: string | null
          cancelamento_motivo: string | null
          company_id: string
          criado_em: string
          data_entrega: string
          funcionario_id: string
          gerado_por: string
          id: string
          itens: Json
          unidade: string
        }
        Insert: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          cancelamento_motivo?: string | null
          company_id: string
          criado_em?: string
          data_entrega: string
          funcionario_id: string
          gerado_por: string
          id: string
          itens: Json
          unidade: string
        }
        Update: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          cancelamento_motivo?: string | null
          company_id?: string
          criado_em?: string
          data_entrega?: string
          funcionario_id?: string
          gerado_por?: string
          id?: string
          itens?: Json
          unidade?: string
        }
        Relationships: [
          {
            foreignKeyName: "uniforme_entregas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "uniforme_entregas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "uniforme_entregas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "uniforme_entregas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      uniforme_estoque: {
        Row: {
          atualizado_em: string
          id: string
          minimo: number
          modelo: string
          observacao: string | null
          saldo: number
          tamanho: string
          tipo: string
          unidade: string
        }
        Insert: {
          atualizado_em?: string
          id?: string
          minimo?: number
          modelo?: string
          observacao?: string | null
          saldo?: number
          tamanho: string
          tipo: string
          unidade: string
        }
        Update: {
          atualizado_em?: string
          id?: string
          minimo?: number
          modelo?: string
          observacao?: string | null
          saldo?: number
          tamanho?: string
          tipo?: string
          unidade?: string
        }
        Relationships: []
      }
      uniforme_movimentos: {
        Row: {
          cancelado_em: string | null
          cancelado_por: string | null
          criado_em: string
          entrega_id: string | null
          estoque_id: string
          funcionario_id: string | null
          id: string
          observacao: string | null
          quantidade: number
          responsavel_id: string
          saldo_antes: number
          saldo_depois: number
          tipo: string
        }
        Insert: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          criado_em?: string
          entrega_id?: string | null
          estoque_id: string
          funcionario_id?: string | null
          id?: string
          observacao?: string | null
          quantidade: number
          responsavel_id: string
          saldo_antes: number
          saldo_depois: number
          tipo: string
        }
        Update: {
          cancelado_em?: string | null
          cancelado_por?: string | null
          criado_em?: string
          entrega_id?: string | null
          estoque_id?: string
          funcionario_id?: string | null
          id?: string
          observacao?: string | null
          quantidade?: number
          responsavel_id?: string
          saldo_antes?: number
          saldo_depois?: number
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "uniforme_movimentos_entrega_id_fkey"
            columns: ["entrega_id"]
            isOneToOne: false
            referencedRelation: "uniforme_entregas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "uniforme_movimentos_estoque_id_fkey"
            columns: ["estoque_id"]
            isOneToOne: false
            referencedRelation: "uniforme_estoque"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "uniforme_movimentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "uniforme_movimentos_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      user_email_settings: {
        Row: {
          created_at: string
          email_corporativo: string
          id: string
          modulos: string[]
          oauth_provider: string | null
          oauth_status: string
          provider_type: string
          smtp_pass_configured: boolean
          smtp_pass_encrypted: string | null
          smtp_user: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_corporativo?: string
          id?: string
          modulos?: string[]
          oauth_provider?: string | null
          oauth_status?: string
          provider_type?: string
          smtp_pass_configured?: boolean
          smtp_pass_encrypted?: string | null
          smtp_user?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_corporativo?: string
          id?: string
          modulos?: string[]
          oauth_provider?: string | null
          oauth_status?: string
          provider_type?: string
          smtp_pass_configured?: boolean
          smtp_pass_encrypted?: string | null
          smtp_user?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      veiculo_manutencoes: {
        Row: {
          arquivo_nome: string | null
          arquivo_url: string | null
          ativo_id: string | null
          created_at: string
          created_by: string | null
          data: string
          descricao: string
          fornecedor: string | null
          id: string
          km: number | null
          nota_numero: string | null
          observacao: string | null
          origem: string
          placa: string | null
          updated_at: string
          valor: number
          veiculo_descricao: string | null
        }
        Insert: {
          arquivo_nome?: string | null
          arquivo_url?: string | null
          ativo_id?: string | null
          created_at?: string
          created_by?: string | null
          data?: string
          descricao: string
          fornecedor?: string | null
          id?: string
          km?: number | null
          nota_numero?: string | null
          observacao?: string | null
          origem?: string
          placa?: string | null
          updated_at?: string
          valor?: number
          veiculo_descricao?: string | null
        }
        Update: {
          arquivo_nome?: string | null
          arquivo_url?: string | null
          ativo_id?: string | null
          created_at?: string
          created_by?: string | null
          data?: string
          descricao?: string
          fornecedor?: string | null
          id?: string
          km?: number | null
          nota_numero?: string | null
          observacao?: string | null
          origem?: string
          placa?: string | null
          updated_at?: string
          valor?: number
          veiculo_descricao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "veiculo_manutencoes_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
        ]
      }
      veiculos: {
        Row: {
          created_at: string
          id: string
          identificacao_interna: string | null
          modelo: string
          placa: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          identificacao_interna?: string | null
          modelo?: string
          placa: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          identificacao_interna?: string | null
          modelo?: string
          placa?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      voice_command_history: {
        Row: {
          cancelled: boolean
          confirmed: boolean
          created_at: string
          id: string
          interpreted_action: Json | null
          result: string | null
          spoken_text: string
          user_id: string
        }
        Insert: {
          cancelled?: boolean
          confirmed?: boolean
          created_at?: string
          id?: string
          interpreted_action?: Json | null
          result?: string | null
          spoken_text: string
          user_id: string
        }
        Update: {
          cancelled?: boolean
          confirmed?: boolean
          created_at?: string
          id?: string
          interpreted_action?: Json | null
          result?: string | null
          spoken_text?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      abastecimento_qr_tokens_public: {
        Row: {
          codigo: string | null
          created_at: string | null
          id: string | null
          posto_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          codigo?: string | null
          created_at?: string | null
          id?: string | null
          posto_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          codigo?: string | null
          created_at?: string | null
          id?: string | null
          posto_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "abastecimento_qr_tokens_posto_id_fkey"
            columns: ["posto_id"]
            isOneToOne: false
            referencedRelation: "abastecimento_postos"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_compras_priorizadas: {
        Row: {
          aplicacao: string | null
          cobertura_dias: number | null
          codigo_alternativo: string | null
          codigo_topac: string | null
          company_id: string | null
          consumo_90d: number | null
          estoque_minimo: number | null
          item_id: string | null
          media_mensal: number | null
          minimo_calculado: number | null
          nome: string | null
          planilha_status: string | null
          prioridade: string | null
          quantidade_sugerida: number | null
          saldo: number | null
          ultima_saida: string | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_itens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_itens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      almoxarifado_consumo_mensal: {
        Row: {
          ano: number | null
          company_id: string | null
          consumo: number | null
          item_id: string | null
          mes: number | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_saidas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_compras_priorizadas"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_estoque_resumo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_inteligencia"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "almoxarifado_saidas_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "almoxarifado_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      almoxarifado_estoque_resumo: {
        Row: {
          aplicacao: string | null
          ativo: boolean | null
          categoria: string | null
          codigo_alternativo: string | null
          codigo_sku: string | null
          codigo_topac: string | null
          company_id: string | null
          created_at: string | null
          entradas_total: number | null
          estoque_minimo: number | null
          id: string | null
          nome: string | null
          observacoes: string | null
          planilha_ajuste_aumentar: number | null
          planilha_ajuste_diminuir: number | null
          planilha_status: string | null
          planilha_ultimo_pedido: string | null
          planilha_valor_estoque: number | null
          saidas_total: number | null
          saldo: number | null
          status_atual: string | null
          ultima_entrada: string | null
          ultima_saida: string | null
          unidade: string | null
          updated_at: string | null
          valor_unitario: number | null
        }
        Relationships: [
          {
            foreignKeyName: "almoxarifado_itens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "almoxarifado_itens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
        ]
      }
      almoxarifado_inteligencia: {
        Row: {
          codigo_alternativo: string | null
          codigo_barras: string | null
          codigo_topac: string | null
          compra_sugerida: number | null
          consumo_90d: number | null
          empresa: string | null
          estoque_minimo: number | null
          item_id: string | null
          media_mensal: number | null
          nome: string | null
          saldo: number | null
          status: string | null
          ultima_entrada: string | null
          ultima_saida: string | null
          ultimo_fornecedor: string | null
          ultimo_valor: number | null
        }
        Relationships: []
      }
      almoxarifado_planilha_compras_legado: {
        Row: {
          arquivo_hash: string | null
          arquivo_nome: string | null
          dados: Json | null
          destino: string | null
          fornecedor_ou_origem: string | null
          informacao_adicional: string | null
          linha: number | null
          lote_id: string | null
          material: string | null
          quantidade_ou_observacao: string | null
          situacao_ou_unidade: string | null
        }
        Insert: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          dados?: Json | null
          destino?: never
          fornecedor_ou_origem?: never
          informacao_adicional?: never
          linha?: number | null
          lote_id?: string | null
          material?: never
          quantidade_ou_observacao?: never
          situacao_ou_unidade?: never
        }
        Update: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          dados?: Json | null
          destino?: never
          fornecedor_ou_origem?: never
          informacao_adicional?: never
          linha?: number | null
          lote_id?: string | null
          material?: never
          quantidade_ou_observacao?: never
          situacao_ou_unidade?: never
        }
        Relationships: []
      }
      almoxarifado_planilha_ferramentas_legado: {
        Row: {
          arquivo_hash: string | null
          arquivo_nome: string | null
          codigo_topac: string | null
          dados: Json | null
          ferramenta: string | null
          linha: number | null
          lote_id: string | null
          responsavel_planilha: string | null
          ultima_entrada_planilha: string | null
          ultima_saida_planilha: string | null
        }
        Insert: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          codigo_topac?: never
          dados?: Json | null
          ferramenta?: never
          linha?: number | null
          lote_id?: string | null
          responsavel_planilha?: never
          ultima_entrada_planilha?: never
          ultima_saida_planilha?: never
        }
        Update: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          codigo_topac?: never
          dados?: Json | null
          ferramenta?: never
          linha?: number | null
          lote_id?: string | null
          responsavel_planilha?: never
          ultima_entrada_planilha?: never
          ultima_saida_planilha?: never
        }
        Relationships: []
      }
      almoxarifado_planilha_mecanicos_externos_legado: {
        Row: {
          arquivo_hash: string | null
          arquivo_nome: string | null
          clayton: string | null
          cleidson: string | null
          codigo_topac: string | null
          dados: Json | null
          leandro: string | null
          linha: number | null
          lote_id: string | null
          material: string | null
          quantidade_geral_planilha: string | null
          reidison: string | null
          reinaldo: string | null
          saida_clayton: string | null
          saida_cleidson: string | null
          saida_leandro: string | null
          saida_reidison: string | null
          saida_reinaldo: string | null
          utilizado_clayton: string | null
          utilizado_cleidson: string | null
          utilizado_leandro: string | null
          utilizado_reidison: string | null
          utilizado_reinaldo: string | null
        }
        Insert: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          clayton?: never
          cleidson?: never
          codigo_topac?: never
          dados?: Json | null
          leandro?: never
          linha?: number | null
          lote_id?: string | null
          material?: never
          quantidade_geral_planilha?: never
          reidison?: never
          reinaldo?: never
          saida_clayton?: never
          saida_cleidson?: never
          saida_leandro?: never
          saida_reidison?: never
          saida_reinaldo?: never
          utilizado_clayton?: never
          utilizado_cleidson?: never
          utilizado_leandro?: never
          utilizado_reidison?: never
          utilizado_reinaldo?: never
        }
        Update: {
          arquivo_hash?: string | null
          arquivo_nome?: string | null
          clayton?: never
          cleidson?: never
          codigo_topac?: never
          dados?: Json | null
          leandro?: never
          linha?: number | null
          lote_id?: string | null
          material?: never
          quantidade_geral_planilha?: never
          reidison?: never
          reinaldo?: never
          saida_clayton?: never
          saida_cleidson?: never
          saida_leandro?: never
          saida_reidison?: never
          saida_reinaldo?: never
          utilizado_clayton?: never
          utilizado_cleidson?: never
          utilizado_leandro?: never
          utilizado_reidison?: never
          utilizado_reinaldo?: never
        }
        Relationships: []
      }
      estoque_interno_atividade_produtos: {
        Row: {
          item_id: string | null
          ultima_movimentacao: string | null
        }
        Relationships: []
      }
      payroll_admin_status_v: {
        Row: {
          bank_name: string | null
          certificate_path: string | null
          certificate_sha256: string | null
          company_cnpj: string | null
          company_id: string | null
          company_name: string | null
          competencia: string | null
          document_id: string | null
          document_sha256: string | null
          document_type: string | null
          document_version: number | null
          employee_cpf: string | null
          employee_id: string | null
          employee_name: string | null
          employee_phone: string | null
          employee_role: string | null
          holerite_confirmed: boolean | null
          holerite_confirmed_at: string | null
          holerite_filename: string | null
          holerite_status: string | null
          holerite_storage_path: string | null
          net_amount: number | null
          opened_at: string | null
          otp_validated_at: string | null
          paid_at: string | null
          payment_amount: number | null
          payment_confirmed: boolean | null
          payment_confirmed_at: string | null
          payment_status: string | null
          receipt_filename: string | null
          receipt_id: string | null
          receipt_storage_path: string | null
          reminder_count: number | null
          request_id: string | null
          send_error: string | null
          sent_at: string | null
          signature_id: string | null
          signature_status: string | null
          signed_at: string | null
          transaction_id: string | null
          viewed_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      payroll_identity_readiness_v: {
        Row: {
          company_id: string | null
          cpf_ok: boolean | null
          empresa: string | null
          empresa_codigo: string | null
          funcionario_id: string | null
          nascimento_ok: boolean | null
          nome: string | null
          pronto_para_acesso: boolean | null
          telefone_ok: boolean | null
        }
        Relationships: []
      }
      payroll_signature_status_v: {
        Row: {
          company_id: string | null
          competencia: string | null
          document_id: string | null
          document_type: string | null
          employee_id: string | null
          employee_name: string | null
          holerite_confirmed: boolean | null
          payment_confirmed: boolean | null
          signature_status: string | null
          signed_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "payroll_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "payroll_identity_readiness_v"
            referencedColumns: ["funcionario_id"]
          },
        ]
      }
      rastreamento_eventos_classificados: {
        Row: {
          ativo_id: string | null
          created_at: string | null
          dia_semana: number | null
          endereco: string | null
          evento_em: string | null
          evento_em_local: string | null
          external_event_id: string | null
          fora_horario: boolean | null
          hora_fim: string | null
          hora_inicio: string | null
          id: string | null
          ignicao: boolean | null
          janela_ativa: boolean | null
          latitude: number | null
          longitude: number | null
          payload: Json | null
          placa: string | null
          provider: string | null
          recebido_em: string | null
          regras_ativas: boolean | null
          timezone: string | null
          tipo: string | null
          tolerancia_minutos: number | null
          velocidade_kmh: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rastreamento_eventos_ativo_id_fkey"
            columns: ["ativo_id"]
            isOneToOne: false
            referencedRelation: "ativos"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      _acesso_externo_listar_portais_core: {
        Args: { p_pin: string }
        Returns: Json
      }
      _acesso_externo_validar_pin_core: {
        Args: { p_modulo: string; p_pin: string }
        Returns: Json
      }
      _app_mecanico_expirar_solicitacoes_antigas: {
        Args: { p_funcionario_id: string }
        Returns: undefined
      }
      _app_mecanico_get_acesso: {
        Args: { p_acesso_id: string }
        Returns: {
          acesso_liberado: boolean | null
          ativo: boolean
          cpf: string | null
          cpf_clean: string | null
          created_at: string
          email: string | null
          email_corporativo: string | null
          empresa: string | null
          filial: string | null
          funcao: string | null
          funcionario_id: string | null
          id: string
          modulo: string | null
          modulos_liberados: Json
          nome: string | null
          observacoes: string | null
          perfil_acesso: string | null
          pin: string | null
          profile_user_id: string | null
          status: string | null
          telefone: string | null
          tipo_acesso: string | null
          ultima_validacao_email_em: string | null
          ultimo_acesso_em: string | null
          updated_at: string | null
          user_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "acessos_externos"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      _app_mecanico_placas_autorizadas: {
        Args: { p_filial?: string; p_funcionario_id: string; p_obs: string }
        Returns: string[]
      }
      _app_mecanico_placas_from_obs: {
        Args: { p_obs: string }
        Returns: string[]
      }
      _operador_operacao_por_codigo: {
        Args: { p_codigo: string; p_modulo: string }
        Returns: {
          ativo: boolean
          cargo: string | null
          codigo_emitido_em: string | null
          codigo_hash: string | null
          codigo_hint: string | null
          created_at: string
          created_by: string | null
          email: string | null
          empresa_id: string | null
          filial: string | null
          funcionario_id: string | null
          id: string
          modulos: string[]
          nome: string
          origem_cadastro: string | null
          permissoes: Json
          updated_at: string
          user_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "operadores_operacao"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      _topac_admin_usuario_autorizado: { Args: never; Returns: boolean }
      acesso_externo_completar_cadastro: {
        Args: {
          p_cpf: string
          p_email: string
          p_nome: string
          p_telefone: string
        }
        Returns: Json
      }
      acesso_externo_filtro_empresa: {
        Args: { p_acesso_id: string; p_modulo: string }
        Returns: Json
      }
      acesso_externo_listar_por_cpf: { Args: { p_cpf: string }; Returns: Json }
      acesso_externo_listar_portais: { Args: { p_pin: string }; Returns: Json }
      acesso_externo_marcar_validacao_email: {
        Args: { p_cpf: string; p_email?: string }
        Returns: Json
      }
      acesso_externo_mask_email: { Args: { p_email: string }; Returns: string }
      acesso_externo_obter: {
        Args: { p_id: string; p_modulo: string }
        Returns: Json
      }
      acesso_externo_validar_pin: {
        Args: { p_modulo: string; p_pin: string }
        Returns: Json
      }
      admin_abastecimento_corrigir_leitura: {
        Args: {
          p_abastecimento_id: string
          p_km?: number
          p_litros?: number
          p_observacao?: string
          p_valor?: number
          p_valor_por_litro?: number
        }
        Returns: Json
      }
      admin_abastecimentos_revisao: { Args: never; Returns: Json[] }
      admin_app_mecanico_atualizar_acesso: {
        Args: {
          p_acesso_id: string
          p_acesso_liberado: boolean
          p_filial?: string
          p_observacoes?: string
          p_telefone?: string
        }
        Returns: Json
      }
      admin_app_mecanico_excluir_abastecimento: {
        Args: { p_abastecimento_id: string; p_acesso_id: string }
        Returns: Json
      }
      admin_app_mecanico_excluir_ponto: {
        Args: { p_acesso_id: string; p_ponto_id: string }
        Returns: Json
      }
      admin_app_mecanico_historico: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      admin_app_mecanico_trocar_veiculo: {
        Args: { p_acesso_id: string; p_ativo_id?: string }
        Returns: Json
      }
      admin_app_mecanicos_dashboard: { Args: never; Returns: Json }
      admin_app_mecanicos_rastreamento_base: { Args: never; Returns: Json }
      admin_app_mecanicos_veiculos: { Args: never; Returns: Json }
      admin_aprovar_cadastro_pendente: {
        Args: {
          p_cargo: string
          p_cpf: string
          p_empresa: string
          p_filial: string
          p_nome: string
          p_pending_id: string
          p_roles: string[]
          p_telefone: string
        }
        Returns: Json
      }
      admin_bloquear_cadastro_pendente: {
        Args: { p_bloquear?: boolean; p_pending_id: string }
        Returns: Json
      }
      admin_bloquear_usuario: {
        Args: { p_bloquear: boolean; p_user_id: string }
        Returns: Json
      }
      admin_configurar_acessos_funcionario: {
        Args: {
          p_ativo?: boolean
          p_funcionario_id: string
          p_modulos?: string[]
        }
        Returns: Json
      }
      admin_confirmar_email_manual: {
        Args: { p_pending_id?: string; p_user_id?: string }
        Returns: Json
      }
      admin_corrigir_abastecimento_manual: {
        Args: {
          p_id: string
          p_km?: number
          p_litros?: number
          p_observacao?: string
          p_valor?: number
          p_valor_por_litro?: number
        }
        Returns: Json
      }
      admin_dossie_aprovar_com_contrato: {
        Args: { p_id: string }
        Returns: string
      }
      admin_excluir_cadastro_pendente: {
        Args: { p_pending_id: string }
        Returns: Json
      }
      admin_excluir_funcionario_seguro: {
        Args: { p_funcionario_id: string; p_motivo?: string }
        Returns: Json
      }
      admin_excluir_usuario: { Args: { p_user_id: string }; Returns: Json }
      admin_listar_usuarios: {
        Args: never
        Returns: {
          blocked: boolean
          cpf: string
          created_at: string
          email: string
          email_confirmed: boolean
          empresa: string
          filial: string
          nome_completo: string
          role: string
          role_id: string
          telefone: string
          user_id: string
        }[]
      }
      admin_listar_usuarios_v2: {
        Args: never
        Returns: {
          blocked: boolean
          cargo: string
          cpf: string
          created_at: string
          email: string
          email_confirmed: boolean
          email_confirmed_manual: boolean
          email_rate_limited: boolean
          empresa: string
          filial: string
          nome_completo: string
          origem: string
          pending_id: string
          role: string
          role_id: string
          roles: string[]
          status_cadastro: string
          telefone: string
          user_id: string
        }[]
      }
      admin_marcar_reenvio_confirmacao: {
        Args: { p_email: string; p_error?: string; p_ok?: boolean }
        Returns: Json
      }
      admin_posto_combustivel_toggle: {
        Args: { p_bloquear: boolean; p_id: string }
        Returns: Json
      }
      admin_posto_combustivel_upsert: {
        Args: {
          p_cnpj: string
          p_endereco: string
          p_id: string
          p_nome: string
          p_telefone: string
        }
        Returns: Json
      }
      admin_pre_cadastro_aprovar_oficial: {
        Args: { p_id: string }
        Returns: string
      }
      admin_pre_cadastro_marcar_aso_recebido: {
        Args: { p_arquivo_url?: string; p_id: string }
        Returns: undefined
      }
      admin_pre_cadastro_marcar_exame_enviado: {
        Args: { p_id: string }
        Returns: undefined
      }
      admin_pre_cadastro_preparar_contabilidade: {
        Args: { p_id: string }
        Returns: undefined
      }
      admin_salvar_usuario_acesso: {
        Args: {
          p_cargo: string
          p_cpf: string
          p_empresa: string
          p_filial: string
          p_nome: string
          p_roles: string[]
          p_telefone: string
          p_user_id: string
        }
        Returns: Json
      }
      almoxarifado_active_company: {
        Args: { p_user_id?: string }
        Returns: string
      }
      almoxarifado_assinar_carga_v2: {
        Args: { p_carga_id: string; p_nome: string }
        Returns: Json
      }
      almoxarifado_assinar_fechamento_diario: {
        Args: { p_fechamento_id: string; p_nome: string }
        Returns: Json
      }
      almoxarifado_consultar_planilha_legado: {
        Args: {
          p_aba: string
          p_busca?: string
          p_pagina?: number
          p_tamanho?: number
        }
        Returns: {
          dados: Json
          linha: number
          total: number
        }[]
      }
      almoxarifado_corrigir: {
        Args: {
          p_dados?: Json
          p_item_id?: string
          p_motivo?: string
          p_movimento_id?: string
          p_operacao: string
        }
        Returns: Json
      }
      almoxarifado_criar_carga_livre: {
        Args: {
          p_funcionario_id: string
          p_itens: Json
          p_observacoes?: string
          p_texto: string
        }
        Returns: Json
      }
      almoxarifado_criar_carga_v2: {
        Args: {
          p_funcionario_id: string
          p_itens?: Json
          p_observacoes?: string
          p_placa?: string
          p_tipo: string
          p_veiculo?: string
        }
        Returns: Json
      }
      almoxarifado_fechar_mes: {
        Args: { p_competencia: string }
        Returns: string
      }
      almoxarifado_gerar_fechamentos_diarios: {
        Args: { p_data?: string }
        Returns: {
          assinado_digital_em: string | null
          assinatura_nome: string | null
          company_id: string | null
          created_at: string
          data: string
          empresa_nome: string | null
          funcionario_id: string
          funcionario_nome: string
          gerado_em: string
          gerado_por: string | null
          id: string
          impresso_em: string | null
          impresso_por: string | null
          movimentacoes: Json
          protocolo: string
          status: string
          total_itens: number
          total_movimentacoes: number
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "almoxarifado_fechamentos_funcionario"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      almoxarifado_import_compact_v1: {
        Args: { p_lote: string; p_offset: number; p_rows: Json; p_tipo: string }
        Returns: Json
      }
      almoxarifado_import_dict_v1: {
        Args: { p_lote: string; p_tipo: string; p_values: Json }
        Returns: number
      }
      almoxarifado_import_entries_b64_v2: {
        Args: { p_b64: string; p_lote: string }
        Returns: number
      }
      almoxarifado_import_excel_batch_v2: {
        Args: {
          p_company_code: string
          p_lote: string
          p_payload: Json
          p_seq: number
          p_tipo: string
        }
        Returns: Json
      }
      almoxarifado_import_excel_batch_v3: {
        Args: {
          p_company_code: string
          p_lote: string
          p_payload: Json
          p_seq: number
          p_tipo: string
        }
        Returns: Json
      }
      almoxarifado_import_excel_batch_v4: {
        Args: {
          p_company_code: string
          p_lote: string
          p_payload: Json
          p_seq: number
          p_tipo: string
        }
        Returns: Json
      }
      almoxarifado_import_exits_b64_v2: {
        Args: { p_b64: string; p_lote: string }
        Returns: number
      }
      almoxarifado_import_exits_encoded_v1: {
        Args: { p_lote: string; p_offset: number; p_text: string }
        Returns: Json
      }
      almoxarifado_import_items_b64_v2: {
        Args: { p_b64: string; p_lote: string }
        Returns: number
      }
      almoxarifado_import_raw_batch_v1: {
        Args: {
          p_aba: string
          p_arquivo: string
          p_hash: string
          p_lote: string
          p_rows: Json
        }
        Returns: number
      }
      almoxarifado_import_staged_cipher_v1: {
        Args: { p_end: number; p_start: number; p_tipo: string }
        Returns: number
      }
      almoxarifado_import_text_v1: {
        Args: {
          p_lote: string
          p_offset: number
          p_text: string
          p_tipo: string
        }
        Returns: Json
      }
      almoxarifado_import_xlsm_batch: {
        Args: {
          p_company_code: string
          p_lote: string
          p_payload: Json
          p_seq: number
          p_tipo: string
        }
        Returns: Json
      }
      almoxarifado_import_xlsm_entries_encoded: {
        Args: {
          p_company_code: string
          p_lote: string
          p_payload: Json
          p_seq: number
        }
        Returns: Json
      }
      almoxarifado_import_xlsm_exits_encoded: {
        Args: {
          p_company_code: string
          p_lote: string
          p_payload: Json
          p_seq: number
        }
        Returns: Json
      }
      almoxarifado_is_central: {
        Args: { p_user_id?: string }
        Returns: boolean
      }
      almoxarifado_marcar_fechamento_impresso: {
        Args: { p_fechamento_id: string }
        Returns: Json
      }
      almoxarifado_novo_protocolo: {
        Args: { p_tipo?: string }
        Returns: string
      }
      almoxarifado_row_allowed: {
        Args: { p_company_id: string; p_user_id?: string }
        Returns: boolean
      }
      almoxarifado_set_company_context: {
        Args: { p_company_id: string }
        Returns: Json
      }
      app_mecanico_abastecimento_contexto: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      app_mecanico_abastecimento_fotos_salvas: {
        Args: { p_acesso_id: string; p_autorizacao_id: string }
        Returns: Json
      }
      app_mecanico_abrir_sessao: {
        Args: { p_cpf: string; p_nascimento: string; p_pin: string }
        Returns: Json
      }
      app_mecanico_atualizar_abastecimento: {
        Args: {
          p_abastecimento_id: string
          p_acesso_id: string
          p_combustivel?: string
          p_km_atual?: number
          p_litros: number
          p_observacao?: string
          p_valor: number
          p_valor_por_litro?: number
        }
        Returns: Json
      }
      app_mecanico_atualizar_chamado: {
        Args: {
          p_acao: string
          p_acesso_id: string
          p_chamado_id: string
          p_observacao?: string
        }
        Returns: Json
      }
      app_mecanico_chamado_acao_v2: {
        Args: {
          p_acao: string
          p_acesso_id: string
          p_chamado_id: string
          p_descricao_conclusao?: string
          p_latitude?: number
          p_longitude?: number
          p_observacao?: string
        }
        Returns: Json
      }
      app_mecanico_criar_chamado: {
        Args: {
          p_acesso_id: string
          p_itens_previstos?: string
          p_local_servico?: string
          p_observacoes?: string
          p_tipo_servico: string
        }
        Returns: Json
      }
      app_mecanico_criar_solicitacao_abastecimento: {
        Args: {
          p_acesso_id: string
          p_combustivel: string
          p_observacao?: string
          p_placa: string
          p_posto_codigo: string
          p_valor_estimado?: number
        }
        Returns: Json
      }
      app_mecanico_dashboard_resumo: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      app_mecanico_definir_modo_abastecimento: {
        Args: { p_acesso_id: string; p_viagem: boolean }
        Returns: Json
      }
      app_mecanico_encerrar_sessao: { Args: { p_token: string }; Returns: Json }
      app_mecanico_excluir_abastecimento: {
        Args: {
          p_abastecimento_id: string
          p_acesso_id: string
          p_motivo: string
        }
        Returns: Json
      }
      app_mecanico_excluir_solicitacao_abastecimento: {
        Args: { p_acesso_id: string; p_autorizacao_id: string }
        Returns: Json
      }
      app_mecanico_finalizar_abastecimento_autorizado: {
        Args: {
          p_acesso_id: string
          p_autorizacao_id: string
          p_endereco?: string
          p_foto_bomba_url: string
          p_foto_painel_url: string
          p_km: number
          p_latitude: number
          p_litros: number
          p_longitude: number
          p_valor: number
        }
        Returns: Json
      }
      app_mecanico_finalizar_abastecimento_fotografico_v2: {
        Args: {
          p_acesso_id: string
          p_autorizacao_id: string
          p_endereco?: string
          p_foto_bomba_url: string
          p_foto_painel_url: string
          p_foto_recibo_url: string
          p_latitude: number
          p_longitude: number
        }
        Returns: Json
      }
      app_mecanico_finalizar_abastecimento_fotografico_v3: {
        Args: {
          p_acesso_id: string
          p_autorizacao_id: string
          p_endereco?: string
          p_foto_bomba_url: string
          p_foto_painel_url: string
          p_foto_recibo_url: string
          p_km: number
          p_latitude: number
          p_litros: number
          p_longitude: number
          p_valor: number
        }
        Returns: Json
      }
      app_mecanico_liberar_abastecimento_apos_whatsapp: {
        Args: { p_acesso_id: string; p_autorizacao_id: string }
        Returns: Json
      }
      app_mecanico_listar_chamados: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      app_mecanico_listar_historico: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      app_mecanico_marcar_revisao_abastecimento: {
        Args: {
          p_acesso_id: string
          p_autorizacao_id: string
          p_motivo?: string
        }
        Returns: Json
      }
      app_mecanico_marcar_whatsapp_abastecimento: {
        Args: { p_acesso_id: string; p_autorizacao_id: string }
        Returns: Json
      }
      app_mecanico_modo_abastecimento: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      app_mecanico_registrar_abastecimento_posto: {
        Args: {
          p_acesso_id: string
          p_combustivel: string
          p_endereco?: string
          p_foto_bomba_url?: string
          p_foto_painel_url?: string
          p_km: number
          p_latitude?: number
          p_litros: number
          p_longitude?: number
          p_observacao?: string
          p_placa?: string
          p_posto_codigo: string
          p_valor: number
        }
        Returns: Json
      }
      app_mecanico_registrar_adicional: {
        Args: {
          p_acesso_id: string
          p_chamado_id: string
          p_descricao_identificada: string
          p_latitude?: number
          p_longitude?: number
          p_materiais?: Json
          p_observacao?: string
          p_servico_executado: string
        }
        Returns: Json
      }
      app_mecanico_registrar_localizacao: {
        Args: {
          p_acesso_id: string
          p_consentimento_versao?: string
          p_direcao_graus?: number
          p_latitude: number
          p_longitude: number
          p_origem?: string
          p_precisao_metros?: number
          p_velocidade_mps?: number
        }
        Returns: Json
      }
      app_mecanico_registrar_ocr_abastecimento: {
        Args: {
          p_acesso_id: string
          p_autorizacao_id: string
          p_km?: number
          p_litros?: number
          p_preco_litro?: number
          p_valor?: number
        }
        Returns: Json
      }
      app_mecanico_registrar_ocr_abastecimento_validado: {
        Args: {
          p_acesso_id: string
          p_autorizacao_id: string
          p_km?: number
          p_litros?: number
          p_preco_litro?: number
          p_valor?: number
        }
        Returns: Json
      }
      app_mecanico_registrar_ponto: {
        Args: {
          p_acesso_id: string
          p_dispositivo?: string
          p_endereco?: string
          p_latitude?: number
          p_longitude?: number
          p_selfie_url?: string
          p_tipo: string
        }
        Returns: Json
      }
      app_mecanico_status_abastecimento: {
        Args: { p_acesso_id: string; p_autorizacao_id?: string }
        Returns: Json
      }
      app_mecanico_status_dia: { Args: { p_acesso_id: string }; Returns: Json }
      app_mecanico_validar_acesso: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      app_mecanico_validar_qr_posto: {
        Args: { p_acesso_id: string; p_codigo: string }
        Returns: Json
      }
      app_mecanico_vincular_recibo_pdf: {
        Args: {
          p_abastecimento_id: string
          p_acesso_id: string
          p_recibo_pdf_url: string
        }
        Returns: Json
      }
      contabilidade_corrigir_envio: {
        Args: {
          p_ciclo_id: string
          p_justificativa: string
          p_mode: string
          p_portal?: string
          p_token?: string
        }
        Returns: Json
      }
      contabilidade_corrigir_envio_base: {
        Args: {
          p_ciclo_id: string
          p_justificativa: string
          p_mode: string
          p_portal?: string
          p_token?: string
        }
        Returns: Json
      }
      contabilidade_portal_dashboard: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      contabilidade_portal_dashboard_sessao: {
        Args: { p_portal: string; p_token: string }
        Returns: Json
      }
      contabilidade_portal_empresas: {
        Args: { p_acesso_id: string }
        Returns: Json
      }
      contabilidade_portal_empresas_sessao: {
        Args: { p_portal: string; p_token: string }
        Returns: Json
      }
      contabilidade_portal_login: {
        Args: { p_codigo: string; p_portal: string }
        Returns: Json
      }
      contabilidade_portal_logout: {
        Args: { p_portal: string; p_token: string }
        Returns: Json
      }
      contabilidade_portal_revisar: {
        Args: {
          p_acesso_id: string
          p_observacao?: string
          p_origem_id: string
          p_origem_tipo: string
          p_status: string
        }
        Returns: Json
      }
      contabilidade_portal_revisar_sessao: {
        Args: {
          p_observacao?: string
          p_origem_id: string
          p_origem_tipo: string
          p_portal: string
          p_status: string
          p_token: string
        }
        Returns: Json
      }
      contabilidade_portal_uploads_sessao: {
        Args: { p_portal: string; p_token: string }
        Returns: Json
      }
      contabilidade_portal_usuario_sessao: {
        Args: { p_portal: string; p_token: string }
        Returns: string
      }
      dashboard_faturamento_kpis: { Args: never; Returns: Json }
      dn4_confirmar_migracao_lote: {
        Args: { p_lote_id: string }
        Returns: Json
      }
      dn4_confirmar_registros: {
        Args: { p_ids: string[]; p_tipo: string }
        Returns: Json
      }
      dn4_eh_administrador: { Args: never; Returns: boolean }
      dn4_ignorar_registros: {
        Args: { p_ids: string[]; p_tipo: string }
        Returns: Json
      }
      dn4_limpar_duplicados_oficial: { Args: never; Returns: Json }
      dn4_marcar_duplicados: {
        Args: { p_importacao_id: string }
        Returns: Json
      }
      dn4_migracao_backup_counts: { Args: never; Returns: Json }
      dn4_norm: { Args: { t: string }; Returns: string }
      dn4_resumo_importacao: {
        Args: { p_importacao_id: string }
        Returns: Json
      }
      epi_mecanicos_externos: {
        Args: never
        Returns: {
          funcionario_id: string
        }[]
      }
      estoque_interno_cadastrar_item: {
        Args: {
          p_aplicacao?: string
          p_codigo: number
          p_descricao: string
          p_maximo?: number
          p_minimo?: number
          p_unidade?: string
        }
        Returns: string
      }
      estoque_interno_corrigir: {
        Args: {
          p_dados?: Json
          p_item_id?: string
          p_motivo?: string
          p_movimento_id?: string
          p_operacao: string
        }
        Returns: Json
      }
      estoque_interno_meu_acesso: {
        Args: never
        Returns: {
          ativo: boolean
          email: string
          nome: string
          pode_gerenciar: boolean
          pode_movimentar: boolean
        }[]
      }
      estoque_interno_movimentar: {
        Args: {
          p_codigo: number
          p_destinatario?: string
          p_observacao?: string
          p_preco_unitario?: number
          p_quantidade: number
          p_tipo: string
        }
        Returns: string
      }
      estoque_interno_movimentar_lote: {
        Args: { p_destinatario: string; p_itens: Json; p_observacao?: string }
        Returns: Json
      }
      fn_abastecimento_qr_registrar: {
        Args: {
          p_km: number
          p_litros: number
          p_motorista: string
          p_observacao: string
          p_placa: string
          p_registrado_por?: string
          p_token: string
          p_valor_total: number
          p_veiculo: string
        }
        Returns: string
      }
      fn_liberar_acesso_mobile_admin: {
        Args: { p_user_id: string }
        Returns: Json
      }
      fn_mobile_admin_home: { Args: { p_user_id: string }; Returns: Json }
      fn_mobile_admin_permissoes: { Args: { p_user_id: string }; Returns: Json }
      fn_mobile_admin_status_modulos: {
        Args: { p_user_id: string }
        Returns: {
          ativo: boolean
          codigo: string
          escopo_unidade: string
          icone: string
          nome: string
          ordem: number
          pode_editar: boolean
          pode_visualizar: boolean
          rota: string
        }[]
      }
      fn_rh_documento_upload_registrar: {
        Args: {
          p_competencia: string
          p_enviado_por: string
          p_funcionario_id: string
          p_nome_arquivo: string
          p_public_url: string
          p_storage_path: string
          p_tipo_documento: string
          p_unidade: string
        }
        Returns: string
      }
      gen_tecnico_access_token: { Args: never; Returns: string }
      has_role: { Args: { _role: string; _user_id: string }; Returns: boolean }
      is_corporate_email: { Args: { p_email: string }; Returns: boolean }
      operacional_cancelar_chamado: {
        Args: {
          p_chamado_id: string
          p_codigo_operador: string
          p_motivo?: string
        }
        Returns: Json
      }
      operacional_chamado_detalhe: {
        Args: { p_chamado_id: string }
        Returns: Json
      }
      operacional_consultar_placas: {
        Args: { p_busca?: string }
        Returns: Json
      }
      operacional_criar_chamado: {
        Args: {
          p_cliente: string
          p_cliente_id?: string
          p_cliente_local_id?: string
          p_codigo_operador: string
          p_colaborador_id: string
          p_contrato_id?: string
          p_equipamento_id?: string
          p_itens_previstos?: string
          p_local_servico: string
          p_observacoes?: string
          p_solicitante_contato?: string
          p_solicitante_nome: string
          p_tipo_servico: string
        }
        Returns: Json
      }
      operacional_criar_chamado_v2: {
        Args: {
          p_alocacao_id?: string
          p_cliente: string
          p_cliente_id?: string
          p_cliente_local_id?: string
          p_codigo_operador: string
          p_colaborador_id: string
          p_contrato_id?: string
          p_equipamento_id?: string
          p_itens_previstos?: string
          p_local_servico: string
          p_observacoes?: string
          p_solicitante_contato?: string
          p_solicitante_nome: string
          p_tipo_servico: string
        }
        Returns: Json
      }
      operacional_definir_disponibilidade: {
        Args: {
          p_codigo_operador: string
          p_motivo: string
          p_placa: string
          p_status: string
        }
        Returns: Json
      }
      operacional_editar_chamado: {
        Args: {
          p_chamado_id: string
          p_cliente: string
          p_codigo_operador: string
          p_colaborador_id: string
          p_itens_previstos?: string
          p_local_servico: string
          p_observacoes?: string
          p_tipo_servico: string
        }
        Returns: Json
      }
      operacional_editar_chamado_auditado: {
        Args: {
          p_chamado_id: string
          p_cliente: string
          p_codigo_operador: string
          p_colaborador_id: string
          p_itens_previstos: string
          p_local_servico: string
          p_motivo: string
          p_observacoes: string
          p_tipo_servico: string
        }
        Returns: Json
      }
      operacional_marcar_adicional_visualizado: {
        Args: { p_adicional_id: string; p_codigo_operador: string }
        Returns: Json
      }
      operacional_protocolo_alterar_status: {
        Args: {
          p_codigo_operador: string
          p_motivo: string
          p_protocolo_id: string
          p_status: string
        }
        Returns: Json
      }
      operacional_protocolo_desativar_registro: {
        Args: {
          p_codigo_operador: string
          p_motivo: string
          p_protocolo_id: string
        }
        Returns: Json
      }
      operacional_registrar_movimentacao: {
        Args: {
          p_cliente_destino_id?: string
          p_codigo_operador: string
          p_equipamento_id: string
          p_local_destino_id?: string
          p_local_destino_nome?: string
          p_observacao?: string
          p_tipo: string
        }
        Returns: Json
      }
      operacional_registrar_movimento_placa: {
        Args: {
          p_cliente_destino_id?: string
          p_codigo_operador: string
          p_local_destino_id?: string
          p_local_destino_nome?: string
          p_motivo?: string
          p_placa: string
          p_tipo: string
        }
        Returns: Json
      }
      operador_operacao_configurar_pin: {
        Args: { p_pin: string }
        Returns: Json
      }
      operador_operacao_definir_ativo: {
        Args: { p_ativo: boolean; p_operador_id: string }
        Returns: Json
      }
      operador_operacao_definir_email: {
        Args: { p_email: string; p_operador_id: string }
        Returns: Json
      }
      operador_operacao_emitir_codigo: {
        Args: { p_operador_id: string }
        Returns: Json
      }
      operador_operacao_garantir_self: {
        Args: { p_modulo?: string }
        Returns: Json
      }
      operador_operacao_invalidar_codigo: {
        Args: { p_operador_id: string }
        Returns: Json
      }
      operador_operacao_is_admin: { Args: never; Returns: boolean }
      operador_operacao_listar: { Args: never; Returns: Json }
      operador_operacao_validar_codigo: {
        Args: { p_codigo: string; p_modulo?: string }
        Returns: Json
      }
      payroll_admin_authorized: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      payroll_authoritative_now: { Args: never; Returns: string }
      payroll_company_enabled: {
        Args: { p_company_id: string }
        Returns: boolean
      }
      payroll_employee_belongs: {
        Args: { p_company_id: string; p_employee_id: string }
        Returns: boolean
      }
      payroll_finalize_signature: { Args: { p_signature: Json }; Returns: Json }
      payroll_match_identity: {
        Args: { p_birth: string; p_cpf: string; p_phone_last4: string }
        Returns: {
          company_id: string
          employee_id: string
        }[]
      }
      payroll_storage_company_id: { Args: { p_name: string }; Returns: string }
      preparar_pendencias_clinicas: {
        Args: { p_competencia?: string }
        Returns: number
      }
      registrar_cadastro_pendente: {
        Args: {
          p_email: string
          p_motivo?: string
          p_nome: string
          p_telefone: string
        }
        Returns: Json
      }
      registrar_cadastro_pendente_v2: {
        Args: {
          p_cpf?: string
          p_email: string
          p_motivo?: string
          p_nome: string
          p_telefone: string
        }
        Returns: Json
      }
      relatorio_abastecimento_periodo: {
        Args: { p_data_fim: string; p_data_inicio: string }
        Returns: Json[]
      }
      relatorio_ponto_periodo: {
        Args: { p_data_fim: string; p_data_inicio: string }
        Returns: Json[]
      }
      relatorio_quilometragem_periodo: {
        Args: { p_data_fim: string; p_data_inicio: string }
        Returns: Json[]
      }
      rh_registrar_ocorrencia_disciplinar: {
        Args: {
          p_data: string
          p_descricao: string
          p_evidencias?: string
          p_funcionario_id: string
          p_medida?: string
          p_motivo_decisao?: string
          p_testemunhas?: string
          p_tipo: string
        }
        Returns: Json
      }
      rh_retificar_ocorrencia_disciplinar: {
        Args: {
          p_descricao?: string
          p_medida?: string
          p_motivo: string
          p_motivo_decisao?: string
          p_ocorrencia_id: string
          p_status?: string
        }
        Returns: Json
      }
      topac_acesso_direto_link: { Args: { p_slug: string }; Returns: Json }
      topac_admin_pode_gerenciar_usuarios: { Args: never; Returns: boolean }
      topac_aplicar_acesso_por_cpf: {
        Args: {
          p_cpf?: string
          p_email?: string
          p_nome?: string
          p_telefone?: string
          p_user_id: string
        }
        Returns: Json
      }
      topac_aplicar_acesso_usuario: {
        Args: { p_user_id: string }
        Returns: Json
      }
      topac_aplicar_leitura_inteligente_funcionario: {
        Args: {
          p_funcionario_id: string
          p_payload: Json
          p_texto_origem?: string
        }
        Returns: Json
      }
      topac_backend_authorized: { Args: never; Returns: boolean }
      topac_clean_cpf: { Args: { p_cpf: string }; Returns: string }
      topac_concluir_abastecimento_operacional: {
        Args: {
          p_app_fuel_id: string
          p_app_request_id: string
          p_payload: Json
        }
        Returns: {
          app_fuel_id: string | null
          app_request_id: string
          autorizado: boolean
          autorizado_em: string | null
          autorizado_por: string | null
          autorizado_por_nome: string | null
          categoria: string
          combustivel: string | null
          company_id: string | null
          concluido_em: string | null
          created_at: string
          employee_code: string | null
          empresa_nome: string | null
          filial: string | null
          fim_semana: boolean
          fora_expediente: boolean
          funcionario_id: string | null
          funcionario_nome: string
          hora_extra_fim: string | null
          hora_extra_inicio: string | null
          hora_extra_minutos: number
          id: string
          observacao: string | null
          ocr_bomba_em: string | null
          ocr_km: number | null
          ocr_litros: number | null
          ocr_painel_em: string | null
          ocr_preco_litro: number | null
          ocr_status: string | null
          ocr_valor: number | null
          placa: string | null
          posto_codigo: string | null
          posto_nome: string | null
          solicitado_em: string
          status: string
          tipo_hora_extra: string | null
          updated_at: string
          valor_estimado: number | null
          whatsapp_solicitacao_em: string | null
        }
        SetofOptions: {
          from: "*"
          to: "abastecimento_autorizacoes"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      topac_decidir_abastecimento: {
        Args: { p_decisao: string; p_id: string }
        Returns: {
          app_fuel_id: string | null
          app_request_id: string
          autorizado: boolean
          autorizado_em: string | null
          autorizado_por: string | null
          autorizado_por_nome: string | null
          categoria: string
          combustivel: string | null
          company_id: string | null
          concluido_em: string | null
          created_at: string
          employee_code: string | null
          empresa_nome: string | null
          filial: string | null
          fim_semana: boolean
          fora_expediente: boolean
          funcionario_id: string | null
          funcionario_nome: string
          hora_extra_fim: string | null
          hora_extra_inicio: string | null
          hora_extra_minutos: number
          id: string
          observacao: string | null
          ocr_bomba_em: string | null
          ocr_km: number | null
          ocr_litros: number | null
          ocr_painel_em: string | null
          ocr_preco_litro: number | null
          ocr_status: string | null
          ocr_valor: number | null
          placa: string | null
          posto_codigo: string | null
          posto_nome: string | null
          solicitado_em: string
          status: string
          tipo_hora_extra: string | null
          updated_at: string
          valor_estimado: number | null
          whatsapp_solicitacao_em: string | null
        }
        SetofOptions: {
          from: "*"
          to: "abastecimento_autorizacoes"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      topac_desfazer_ultima_leitura_funcionario: {
        Args: { p_funcionario_id: string }
        Returns: Json
      }
      topac_dn4_can_access: { Args: never; Returns: boolean }
      topac_dn4_can_admin: { Args: never; Returns: boolean }
      topac_document_locator: {
        Args: { p_bucket: string; p_path: string; p_url: string }
        Returns: string
      }
      topac_filial_company_allowed: {
        Args: { p_company_id: string; p_user_id?: string }
        Returns: boolean
      }
      topac_filial_employee_allowed: {
        Args: { p_funcionario_id: string; p_user_id?: string }
        Returns: boolean
      }
      topac_has_any_role: {
        Args: { _roles: string[]; _user_id?: string }
        Returns: boolean
      }
      topac_is_filial_user: { Args: { p_user_id?: string }; Returns: boolean }
      topac_login_identity: {
        Args: { p_cpf: string; p_phone_last4: string }
        Returns: Json
      }
      topac_minhas_restricoes: { Args: never; Returns: Json }
      topac_norm_text: { Args: { p_text: string }; Returns: string }
      topac_operador_restrito: { Args: { p_recurso: string }; Returns: boolean }
      topac_placa_from_ativo: {
        Args: { p_descricao: string; p_placa: string }
        Returns: string
      }
      topac_resolver_acesso_cpf: {
        Args: { p_cpf?: string; p_email?: string; p_nome?: string }
        Returns: Json
      }
      topac_role_from_acesso: {
        Args: { p_filial: string; p_modulo: string; p_perfil: string }
        Returns: string
      }
      topac_roles_validas: { Args: { p_roles: string[] }; Returns: string[] }
      topac_strip_remuneration_from_role: {
        Args: { p_value: string }
        Returns: string
      }
      topac_tem_acesso_privado: { Args: { p_chave: string }; Returns: boolean }
      topac_vincular_usuario_base: {
        Args: {
          p_cargo: string
          p_cpf: string
          p_email: string
          p_empresa: string
          p_filial: string
          p_nome: string
          p_telefone: string
          p_user_id: string
        }
        Returns: undefined
      }
      unaccent: { Args: { "": string }; Returns: string }
      uniforme_cancelar_entrega: {
        Args: { p_entrega_id: string; p_motivo: string }
        Returns: Json
      }
      uniforme_contar_estoque: {
        Args: {
          p_minimo?: number
          p_modelo: string
          p_observacao?: string
          p_saldo: number
          p_tamanho: string
          p_tipo: string
          p_unidade: string
        }
        Returns: string
      }
      uniforme_corrigir_entrada: {
        Args: { p_motivo: string; p_movimento_id: string; p_quantidade: number }
        Returns: Json
      }
      uniforme_entrar_estoque: {
        Args: {
          p_modelo: string
          p_observacao?: string
          p_quantidade: number
          p_tamanho: string
          p_tipo: string
          p_unidade: string
        }
        Returns: string
      }
      uniforme_importar_contagem: {
        Args: { p_linhas: Json; p_observacao?: string; p_unidade: string }
        Returns: number
      }
      uniforme_registrar_entrega: {
        Args: {
          p_company_id: string
          p_data_entrega: string
          p_entrega_id: string
          p_funcionario_id: string
          p_itens: Json
          p_unidade: string
        }
        Returns: string
      }
      usuario_tem_modulo_operacional: {
        Args: { p_modulo: string }
        Returns: boolean
      }
      validar_abastecimento_qr_token_publico: {
        Args: { p_codigo: string }
        Returns: Json
      }
      vincular_aso_pendente: {
        Args: {
          p_funcionario_id: string
          p_pendente_id: string
          p_user_id?: string
          p_user_nome?: string
        }
        Returns: Json
      }
    }
    Enums: {
      app_role:
        | "admin"
        | "diretor_geral"
        | "filial_matriz"
        | "filial_praia"
        | "filial_goiania"
        | "almoxarifado"
        | "usuario"
        | "tecnico_campo"
        | "operacional"
        | "faturamento"
        | "financeiro"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "diretor_geral",
        "filial_matriz",
        "filial_praia",
        "filial_goiania",
        "almoxarifado",
        "usuario",
        "tecnico_campo",
        "operacional",
        "faturamento",
        "financeiro",
      ],
    },
  },
} as const
