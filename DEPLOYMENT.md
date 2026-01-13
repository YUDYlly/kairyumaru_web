# 海龍丸Webサイト デプロイ手順書

## エックスサーバーへのデプロイ方法

### 前提条件
- Node.js 18以上がインストールされていること
- エックスサーバーのアカウントとFTP情報を用意
- ドメイン設定が完了していること

---

## 1. 本番用ビルドの作成

### 1-1. プロジェクトディレクトリに移動
```bash
cd /Users/yudy/YudyLab/ビジネス/kairyumaru_web
```

### 1-2. 依存パッケージのインストール(初回のみ)
```bash
npm install
```

### 1-3. 環境変数の設定
`.env.local`ファイルを作成し、以下を記載:
```
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 1-4. 本番用ビルド
```bash
npm run build
```

エラーが出ないことを確認してください。

### 1-5. 静的HTMLエクスポート
Next.jsを静的サイトとしてエクスポートします:

`next.config.js`に以下を追加(既に設定済みの場合はスキップ):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

その後、エクスポート実行:
```bash
npm run build
```

ビルドが完了すると、`out`フォルダに静的ファイルが生成されます。

---

## 2. エックスサーバーへのアップロード

### 2-1. FTPクライアントの設定

#### FileZillaを使用する場合:
1. FileZillaを開く
2. 新しいサイトを追加:
   - **ホスト**: `your-domain.com` または `123.456.789.012`
   - **プロトコル**: FTP - ファイル転送プロトコル (またはSFTP)
   - **ポート**: 21 (SFTPの場合は22)
   - **ユーザー**: エックスサーバーから提供されたFTPユーザー名
   - **パスワード**: FTPパスワード

#### コマンドライン(lftp)を使用する場合:
```bash
lftp -u username,password your-domain.com
```

### 2-2. ファイルのアップロード

1. サーバーの`public_html`ディレクトリに移動
2. `out`フォルダ内の**全ファイル**をアップロード
   - `out/_next/` → `public_html/_next/`
   - `out/images/` → `public_html/images/`
   - `out/index.html` → `public_html/index.html`
   - その他すべてのファイル・フォルダ

**重要**: `out`フォルダ自体ではなく、`out`フォルダ**内**のファイルをアップロードしてください。

### 2-3. .htaccessの設定

`public_html`に`.htaccess`ファイルを作成し、以下を記載:

```apache
# Enable HTTPS redirect (optional but recommended)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Set default charset
AddDefaultCharset UTF-8

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

---

## 3. デプロイ後の確認

### 3-1. ブラウザで確認
1. `https://your-domain.com`にアクセス
2. 以下を確認:
   - [ ] トップページが正しく表示される
   - [ ] 画像が全て読み込まれる
   - [ ] Heroのカルーセルが動作する
   - [ ] ナビゲーションメニューが機能する
   - [ ] スマホ表示が正しい(DevToolsで確認)
   - [ ] Googleカレンダーが表示される
   - [ ] ブログ記事が表示される
   - [ ] 各セクションへのリンクが機能する

### 3-2. パフォーマンステスト
Google PageSpeed Insightsで確認:
https://pagespeed.web.dev/

---

## 4. 更新時の手順

サイトを更新する場合:

1. ローカルで変更を加える
2. テストする(`npm run dev`で動作確認)
3. ビルドする(`npm run build`)
4. `out`フォルダの内容を再度アップロード

**注意**:
- 画像やCSSは古いバージョンがキャッシュされている可能性があります
- 更新後、ブラウザで「スーパーリロード」(Ctrl+Shift+R / Cmd+Shift+R)を実行してください

---

## 5. トラブルシューティング

### 画像が表示されない
- `out/images/`フォルダが正しくアップロードされているか確認
- ファイルパスが正しいか確認(`/images/xxx.jpg`)

### CSSが適用されない
- `out/_next/static/css/`が正しくアップロードされているか確認
- ブラウザのキャッシュをクリア

### 404エラーが出る
- `.htaccess`が正しく設定されているか確認
- ファイルのパーミッション設定を確認(644推奨)

### Googleカレンダーが表示されない
- カレンダーの公開設定を確認
- iframeのURLが正しいか確認

---

## 6. バックアップ

定期的にバックアップを取ることを推奨します:

1. **ローカルコードのバックアップ**: GitHubなどのリポジトリにpush
2. **サーバーファイルのバックアップ**: FTPで定期的にダウンロード
3. **MicroCMSのデータ**: MicroCMSの管理画面でエクスポート

---

## サポート

問題が発生した場合:
1. このマニュアルのトラブルシューティングを確認
2. エックスサーバーのサポートに問い合わせ
3. ブラウザのコンソールでエラーメッセージを確認
