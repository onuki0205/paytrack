# API仕様書：PayTrack Mini

## 認証方式

- 認証：Amazon Cognito（JWTトークン）
- トークン付与：Authorizationヘッダーに `Bearer <token>` 形式で送信

---

## 支払い登録（Create Payment）

- **URL**：`POST /payments`
- **認証**：必須
- **リクエストボディ**（JSON）：

```json
{
  "title": "電気代",
  "amount": 8000,
  "payment_date": "2025-09-30",
  "repeat": "monthly",
  "memo": "9月分"
}
```

- レスポンス：

```
{
  "id": "abc123",
  "message": "Payment created successfully"
}
```

## 支払い一覧取得（Get Payments）

- URL：GET /payments
- 認証：必須
- レスポンス：

```
[
  {
    "id": "abc123",
    "title": "電気代",
    "amount": 8000,
    "payment_date": "2025-09-30",
    "repeat": "monthly",
    "memo": "9月分"
  },
  ...
]
```

## 支払い詳細取得（Get Payment by ID）

- URL：GET /payments/{id}
- 認証：必須
- レスポンス：

```
{
  "id": "abc123",
  "title": "電気代",
  "amount": 8000,
  "payment_date": "2025-09-30",
  "repeat": "monthly",
  "memo": "9月分"
}
```

## 支払い更新（Update Payment）

- URL：PUT /payments/{id}
- 認証：必須
- リクエストボディ：

```
{
  "title": "電気代（修正）",
  "amount": 8500,
  "payment_date": "2025-10-01",
  "repeat": "monthly",
  "memo": "10月分"
}
```

- レスポンス：

```
{
  "message": "Payment updated successfully"
}

```

## 支払い削除（Delete Payment）

- URL：DELETE /payments/{id}
- 認証：必須
- レスポンス：

```
{
  "message": "Payment deleted successfully"
}
```

## Googleカレンダー連携（予定）

- URL：POST /calendar/sync
- 認証：必須（OAuth2）
- リクエストボディ：

```
{
  "payment_id": "abc123"
}
```

- レスポンス：

```
{
  "message": "Event added to Google Calendar"
}
```
