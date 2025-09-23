```mermaid
erDiagram
  USERS ||--o{ PAYMENTS : has
  USERS {
    string id PK "CognitoのユーザーID"
    string email "メールアドレス"
    string password_hash "ハッシュ化されたパスワード"
    string name "表示名（任意）"
    datetime created_at "登録日時"
  }
  PAYMENTS {
    string id PK "支払いID"
    string user_id FK "ユーザーID（外部キー）"
    string title "支払い項目名"
    float amount "金額"
    date payment_date "支払い日"
    string repeat "繰り返し設定"
    string memo "メモ"
    datetime created_at "登録日時"
    datetime updated_at "更新日時"
  }