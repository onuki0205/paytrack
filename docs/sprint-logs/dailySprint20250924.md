📝 デイリースプリントログ（2025年9月24日）
🎯 本日の目標
- Vite + Vue + Vuetify + Pinia プロジェクトのセットアップ
- Prettier を導入し、コード整形ルールを明確化
- 実行環境の安定化（esbuild・Rollup・Vite関連の依存崩れ対応）
- Axios 通信層の設計開始
- vite.config.ts の本格構成（Vuetify + Pinia + Router）
- 状態管理ストアの追加
- API モジュールの分割

✅ 実施内容
1. プロジェクト再構築
ディレクトリ: F:\Github\paytrack\paytrack-app
使用コマンド:
npm create vue@latest


選択オプション:
- ✔ TypeScript
- ✔ Vue Router
- ✔ Pinia
- ✔ ESLint
- ✔ Prettier（今回導入）
- ✔ Vitest
- ✔ Vuetify（手動追加）

2. Prettier の導入と設定
対象ファイル: .prettierrc
```
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

補足:
- semi: false により、文末のセミコロンを省略するスタイルに統一
- VSCode 設定で editor.formatOnSave を有効化済み

3. 実行環境の安定化対応
対応内容:
- @mdi/font 未導入による Vuetify アイコンエラー → npm install @mdi/font で解決
- esbuild のネイティブバイナリ未解決 → .npmrc の optional=false を削除し、npm install を再実行
- vite.config.ts の isolate 検証 → 読み込み成功を確認

4. vite.config.ts の本格構成
対象ファイル: vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})



5. 状態管理ストアの追加
対象ファイル: src/stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})



6. Axios 通信層の設計とモジュール分割
対象ファイル: src/api/client.ts
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


モジュール例:
- src/api/modules/expense.ts

import { apiClient } from '../client'

export const fetchExpenses = () => apiClient.get('/expenses')


- src/api/modules/auth.ts
import { apiClient } from '../client'

export const login = (payload: { email: string; password: string }) =>
  apiClient.post('/auth/login', payload)



🧠 学び・課題
- .npmrc の optional=false は Rollup 問題には有効だが、esbuild には逆効果 → 環境ごとに切り替えが必要
- Prettier の semi: false は ASI（自動セミコロン挿入）に依存するため、改行位置に注意
- vite.config.ts の isolate 検証は依存崩れの原因特定に有効
- Axios 通信層は baseURL の環境変数化とモジュール分割により、保守性と再利用性が向上する

🔜 次回予定
- ブランチを切る
🏗️ バックエンド構築（AWS）
- [ ] paytrack-backend/ ディレクトリの初期化と構成設計
- [ ] terraform/main.tf に RDS, Lambda, API Gateway の雛形を記述
- [ ] Lambda 関数の TypeScript テンプレート作成（src/handlers/）
- [ ] Cognito 認証フローの設計（JWT → API Gateway → Lambda）
🔐 インフラ・セキュリティ設計
- [ ] IAM Role 設計（Lambda → RDS 接続用）
- [ ] RDS セキュリティグループの構成（Terraform）
- [ ] .env or secrets.tfvars による環境変数管理方針の決定
🔄 フロントエンド連携
- [ ] paytrack-app から API Gateway 経由で Lambda にアクセスする構成の検証
- [ ] Axios or Fetch による API 呼び出しの型定義（TypeScript）
🧪 テスト・CI/CD
- [ ] Lambda 関数のユニットテスト（Vitest）
- [ ] deploy.yml に Terraform 実行ステップを追加（GitHub Actions）
- [ ] CI 成果物として Lint + Test + Deploy のログ出力を確認
📘 README・構成図整備
- [ ] paytrack-backend/README.md に構成・技術選定理由を記述
- [ ] バックエンド構成図（Lambda/API/RDS/Cognito）を作成
- [ ] フロントエンドとの連携図（Pinia → API → Lambda → RDS）を整理
