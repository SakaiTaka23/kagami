# kagami

- 一日を振り返るSNS
- 一日に一回まで投稿可能
- いいねはできる
- フォロー・フォロワーも可能
- いいね数やフォロ・フォロワーの数は確認できない
- シンプルなデザイン

```mermaid
erDiagram
user ||--o{post : "" 

user {
 char id
 char name
}

post {
 char id
 char user_id
 text content
}
```

```mermaid
flowchart LR
    subgraph 認証
    タイムライン --- サインアップ
    サインアップ --- サインイン
    タイムライン --- サインイン
    end

    subgraph プロフィール
    タイムライン --- プロフィールページ
    プロフィールページ --- プロフィール編集ページ
    end

    subgraph 投稿
    タイムライン --- 投稿ページ
    タイムライン --- 詳細
    タイムライン --- 投稿頻度
    詳細 --- プロフィール
    end

    subgraph テンプレート
    タイムライン --- テンプレート一覧
    テンプレート一覧 --- テンプレート詳細
    end
```
