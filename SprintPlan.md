# スプリント　#1 : 支払い登録機能の実装
支払情報（項目名、金額、日付等）を登録できるフォームの実装とRDSへの保存機能を実装。
## スプリント期間
2025/9/23 - 2025/10/5
## スプリント成果物
| 成果物 | 内容 |
|-------|------|
| PaymentForm.vue | 支払い登録フォームコンポーネント |
| POST/payments API | Lambda + API Gatewayで支払い登録API |
| payments テーブル | RDSに支払い情報を保存するテーブル |
| Terraform構成 | RDS, Lambda, API Gatewayの構築コード化 |
| README.md | スプリント内容のドキュメント化 |
## タスク分解
- フロントエンド（Vue）
- [ ] VuetifyでフォームUI作成（項目名・金額・日付・メモ）
- [ ] バリデーション追加（必須項目・金額の数値チェック）
- [ ] AxiosでAPI呼び出し（POST）
- バックエンド（AWS）
- [ ] TerraformでRDS（MySQL）構築
- [ ] payments テーブル作成（SQL設計）
- [ ] Lambda関数作成（Node.jsでPOST処理）
- [ ] API Gatewayでエンドポイント公開
- [ ] Cognitoトークンによる認証制御（任意）
- ドキュメント
- [ ] READMEにスプリント成果を記載
- [ ] 構成図（Mermaid.jsまたはPNG）を追加
## 優先順位と着手順
1. RDS構築とテーブル設計（基盤）
2. Lambda関数でPOST処理（APIの核）
3. フロントエンドでフォームUI作成（ユーザー操作）
4. AxiosでAPI呼び出し（接続確認）
5. バリデーション追加（UX向上）
6. ドキュメント作成（情報共有）


# スプリント　#2 : 支払い一覧表示機能の実装
登録した支払い情報を一覧表示する機能を実装。
## スプリント期間
2025/10/6 - 2025/10/13
## スプリント成果物
| 成果物 | 内容 |
|-------|------|
| PaymentList.vue | 支払い一覧表示コンポーネント |
| GET/payments API | Lambda + API Gatewayで支払い取得API |
| RDSクエリ | 支払い情報を取得するSQLクエリ |
| Terraform構成 | RDS, Lambda, API GatewayのGETエンドポイント構築コード化 |
| README.md | スプリント内容のドキュメント化 |
## タスク分解
- フロントエンド（Vue）
- [ ] Vuetifyデータテーブルで一覧UI作成
- [ ] AxiosでAPI呼び出し（GET）
- [ ] ローディング・エラーハンドリング実装
- バックエンド（AWS）
- [ ] Lambda関数作成（Node.jsでGET処理）
- [ ] API GatewayでGETエンドポイント追加
- [ ] CognitoトークンでユーザID取得
- [ ] RDSクエリでユーザの支払い情報取得
- [ ] Terraformで構成コード化
- ドキュメント
- [ ] READMEにスプリント成果を記載
- [ ] 構成図更新（Mermaid.jsまたはPNG）
## 優先順位と着手順
1. Lambda関数でGET処理（APIの核）
2. API GatewayでGETエンドポイント追加（接続準備）
3. RDSクエリで支払い情報取得（データ準備）
4. フロントエンドで一覧UI作成（ユーザー操作）
5. AxiosでAPI呼び出し（接続確認）
6. ローディング・エラーハンドリング実装（UX向上）
7. ドキュメント作成（情報共有）

# スプリント　#3 : ユーザ認証機能の実装
ユーザ登録・ログイン機能を実装し、支払い情報をユーザごとに管理できるようにする。
## スプリント期間 
2025/10/25 - 2025/11/1
## スプリント成果物
| 成果物 | 内容 |
|-------|------|
| Login.vue | ログインコンポーネント |
| Register.vue | ユーザ登録コンポーネント |
| Amazon Cognito構成 | ユーザプール・IDプールの設定 |
| 認証トークン取得 | JWTトークンの取得とAPI連携 |
| API認証制御 | LambdaでCognitoトークン検証 |
| RDSクエリ修正 | ユーザIDで支払い情報をフィルタリング |
| README.md | スプリント内容のドキュメント化 |
## タスク分解
- フロントエンド（Vue）
- [ ] Vuetifyでログイン・登録フォームUI作成
- [ ] Cognito Hosted UI連携
- [ ] JWTトークンの取得とAxiosのヘッダー設定
- [ ] ログイン状態管理（Pinia）
- バックエンド（AWS）
- [ ] TerraformでCognitoユーザプール・IDプール構築
- [ ] API GatewayでJWTトークン認証設定
- [ ] LambdaでユーザID取得と認証制御実装
- [ ] RDSクエリをユーザIDでフィルタリング
- ドキュメント
- [ ] READMEにスプリント成果を記載
- [ ] 構成図更新（Mermaid.jsまたはPNG）
## 優先順位と着手順
1. Cognito構成とTerraformコード化（基盤）
2. API Gatewayで認証設定（接続準備）
3. Lambdaで認証制御実装（セキュリティ）
4. Vueでログイン・登録UI作成（ユーザー操作）
5. JWTトークン取得とAxios設定（接続確認）
6. RDSクエリ修正（データ整合性）
8. ドキュメント作成（情報共有）

# スプリント　#4 : Googleカレンダー連携機能の実装
支払い日をGoogleカレンダーにイベント登録する機能を実装。
## スプリント期間
2025/11/2 - 2025/11/9
## スプリント成果物
| 成果物 | 内容 |
|-------|------|
| Google Cloud構成 | OAuth2クライアントID・シークレット設定 |
| OAuth2認証フロー | VueでGoogle認証フロー実装 |
| Google Calendar API連携 | 支払い日をカレンダーに登録 |
| README.md | スプリント内容のドキュメント化 |
## タスク分解
- フロントエンド（Vue）
- [ ] Google CloudでOAuth2クライアントID・シークレット作成
- [ ] VuetifyでGoogleログインボタンUI作成
- [ ] OAuth2認証フロー実装（Google APIライブラリ使用）
- [ ] 支払い登録時にGoogle Calendar APIでイベント作成
- バックエンド（AWS）
- [ ] 必要に応じてLambdaでGoogle API連携ロジック実装
- ドキュメント
- [ ] READMEにスプリント成果を記載
- [ ] 構成図更新（Mermaid.jsまたはPNG）
## 優先順位と着手順
1. Google CloudでOAuth2クライアントID・シークレット作成（基盤）
2. VueでGoogleログインボタンUI作成（ユーザー操作）
3. OAuth2認証フロー実装（接続確認）
4. 支払い登録時にGoogle Calendar APIでイベント作成（機能実装）
5. 必要に応じてLambdaでGoogle API連携ロジック実装（バックエンド補完）
6. ドキュメント作成（情報共有）