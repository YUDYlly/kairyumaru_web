# 海龍丸 ランディングページ

海釣り船「海龍丸」の公式ランディングページです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (アイコン)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### 3. ビルド

```bash
npm run build
```

### 4. 本番環境での起動

```bash
npm start
```

## プロジェクト構成

```
kairyumaru_web/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── Header.tsx       # ヘッダー（ナビゲーション）
│   ├── Hero.tsx         # ヒーローセクション
│   ├── LatestResults.tsx # 最新の釣果
│   ├── Concept.tsx      # コンセプト
│   ├── ShipEquipment.tsx # 船体・装備
│   ├── Pricing.tsx      # 料金
│   ├── BookingCalendar.tsx # 予約カレンダー
│   └── Footer.tsx       # フッター
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## デザインコンセプト

- **ターゲット**: 海釣り経験者（中上級者）
- **カラーパレット**: 
  - ベース: 深い紺色 (#0a192f)
  - アクセント: シルバー (#cbd5e1)
  - 海の透明感: 深緑色 (#1e3a5f)
- **フォント**: 
  - 見出し: Noto Serif JP（明朝体）
  - 本文: Noto Sans JP（ゴシック体）

## カスタマイズ

### カラーの変更

`tailwind.config.ts` の `colors` セクションを編集してください。

### コンテンツの更新

各コンポーネントファイル（`components/` ディレクトリ内）を編集して、テキストやデータを更新してください。

### Googleカレンダーの埋め込み

`components/BookingCalendar.tsx` のプレースホルダー部分を、Googleカレンダーの埋め込みコードに置き換えてください。

## ライセンス

このプロジェクトはプライベートプロジェクトです。

