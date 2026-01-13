# 海龍丸Webサイト 更新マニュアル

このマニュアルでは、料金や基本情報などの簡単な変更方法を説明します。

---

## 目次
1. [料金の変更](#1-料金の変更)
2. [釣り場情報の変更](#2-釣り場情報の変更)
3. [電話番号の変更](#3-電話番号の変更)
4. [ブログ記事の投稿](#4-ブログ記事の投稿)
5. [画像の変更・追加](#5-画像の変更追加)
6. [営業時間・アクセス情報の変更](#6-営業時間アクセス情報の変更)

---

## 1. 料金の変更

### 変更するファイル
`components/Pricing.tsx`

### 手順

1. エディタで`components/Pricing.tsx`を開く

2. `plans`配列を見つける(18行目あたり)

3. 料金プランを変更:

```typescript
const plans: PricePlan[] = [
  {
    name: '落し込み',           // 釣法の名前
    nameEn: 'Otoshikomi',       // 英語名
    priceRange: '¥13,000～15,000', // ← ここを変更
    description: '伝統的な落とし込み釣法。青物を狙う王道スタイル。',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ'], // 対象魚
    season: '春〜秋',           // シーズン
    icon: Anchor,
  },
  // 他のプランも同様に変更可能
]
```

### 新しいプランを追加する場合

```typescript
{
  name: '新しい釣法',
  nameEn: 'New Method',
  priceRange: '¥10,000～',
  description: '説明文を記載',
  targetFish: ['マダイ', 'ブリ'],
  season: '通年',
  icon: Fish, // アイコンを選択
}
```

利用可能なアイコン: `Anchor`, `Fish`, `Waves`, `Moon`, `Zap`, `Circle`, `Target`

4. レンタル料金を変更する場合(276-282行目):

```typescript
<div className="text-sm text-slate-600">
  <span className="font-bold text-navy-deep">電動リール＋ロッド:</span> ¥1,000～2,000 // ← ここを変更
</div>
<div className="text-sm text-slate-600">
  <span className="font-bold text-navy-deep">仕掛け:</span> ¥500～ // ← ここを変更
</div>
```

5. 保存後、開発サーバーで確認:
```bash
npm run dev
```
http://localhost:3000 にアクセスして確認

6. 問題なければ、ビルド＆デプロイ(DEPLOYMENT.mdを参照)

---

## 2. 釣り場情報の変更

### 変更するファイル
`components/FishingSpots.tsx`

### 手順

1. `components/FishingSpots.tsx`を開く

2. `spots`配列を見つける(15行目あたり)

3. 釣り場情報を変更:

```typescript
const spots: FishingSpot[] = [
  {
    name: '七里ヶ瀬',           // 釣り場の名前
    description: '玄界灘を代表する一級ポイント。...', // 説明
    distance: '約20km',         // 港からの距離
    targetFish: ['ブリ', 'ヒラマサ', 'マダイ'], // 対象魚
  },
  // 他の釣り場も同様
]
```

### 新しい釣り場を追加

```typescript
{
  name: '新しいポイント',
  description: '詳細な説明をここに記載',
  distance: '約30km',
  targetFish: ['マダイ', 'アジ'],
}
```

4. 保存してブラウザで確認

---

## 3. 電話番号の変更

電話番号は複数箇所に記載されているため、全て変更する必要があります。

### 変更箇所

#### 3-1. ヘッダー(`components/Header.tsx`)
67-73行目と95-101行目の2箇所:

```typescript
<a href="tel:09073837799" // ← 新しい番号に変更
```

```typescript
<span className="font-bold text-lg">090-7383-7799</span> // ← 表示も変更
```

#### 3-2. Hero(`components/Hero.tsx`)
137-142行目:

```typescript
<a href="tel:09073837799" // ← 新しい番号に変更
```

```typescript
<span>090-7383-7799</span> // ← 表示も変更
```

#### 3-3. Footer(`components/Footer.tsx`)
電話番号が記載されている箇所を検索して変更

### 一括置換の方法

VS Codeやエディタの「すべて置換」機能を使用:

1. `Cmd+Shift+F` (Mac) または `Ctrl+Shift+F` (Windows)で検索
2. `09073837799`を検索
3. 新しい番号に一括置換
4. `090-7383-7799`も同様に検索・置換

---

## 4. ブログ記事の投稿

ブログ記事はMicroCMS(ヘッドレスCMS)で管理します。

### 手順

1. MicroCMSにログイン:
   https://app.microcms.io/

2. 「blog」APIを選択

3. 「コンテンツを追加」をクリック

4. 記事情報を入力:
   - **タイトル**: 釣果レポートのタイトル
   - **カテゴリ**:
     - `fishing-report` (釣果レポート)
     - `news` (お知らせ)
     - `tips` (釣りのコツ)
   - **excerpt**: 記事の要約(2-3行)
   - **images**: 釣果写真をアップロード(複数可)
   - **content**: 記事本文(リッチテキスト)

5. 「公開」をクリック

6. サイトに自動反映されます(数分かかる場合があります)

### 画像のアップロード

- 推奨サイズ: 横1200px以上
- ファイル形式: JPEG, PNG, WebP
- ファイルサイズ: 1MB以下推奨

---

## 5. 画像の変更・追加

### Heroカルーセル画像の変更

#### 5-1. 画像をアップロード
`public/images/釣果/`フォルダに新しい画像を配置

#### 5-2. `components/Hero.tsx`を編集
7-28行目の`heroImages`配列:

```typescript
const heroImages = [
  {
    src: '/images/釣果/釣果-1.png', // ← 画像パス
    alt: '大物釣果',                 // ← 説明
  },
  // 新しい画像を追加する場合:
  {
    src: '/images/釣果/新しい画像.jpg',
    alt: '説明',
  },
]
```

### ロゴの変更

`public/images/logo/`に新しいロゴ画像を配置

`components/Hero.tsx`の115-122行目:
```typescript
<Image
  src="/images/logo/logo_v3.png" // ← 新しいロゴのパス
  alt="海龍丸"
  width={600}
  height={328}
  ...
/>
```

---

## 6. 営業時間・アクセス情報の変更

### Footerの情報を変更

`components/Footer.tsx`を編集

営業時間、住所、Googleマップのリンクなどを変更できます。

---

## よくある質問

### Q1: 変更が反映されない
**A**: ブラウザのキャッシュをクリアしてください(Cmd+Shift+R / Ctrl+Shift+R)

### Q2: 画像が表示されない
**A**:
- ファイルパスが正しいか確認(`/images/xxx.jpg`)
- ファイル名に日本語や特殊文字が含まれていないか確認
- 画像サイズが大きすぎないか確認(5MB以下推奨)

### Q3: エラーが出て動かない
**A**:
1. 変更したファイルの構文エラーを確認
2. 開発サーバーのターミナルでエラーメッセージを確認
3. 変更前の状態に戻す

### Q4: どのファイルを変更すればいいかわからない
**A**: VS Codeで該当テキストを検索(`Cmd+Shift+F`)して、該当ファイルを特定

---

## 開発サーバーの起動・停止

### 起動
```bash
cd /Users/yudy/YudyLab/ビジネス/kairyumaru_web
npm run dev
```

ブラウザで http://localhost:3000 を開く

### 停止
ターミナルで `Ctrl+C`

---

## デプロイ(本番環境への反映)

変更を本番サイトに反映する場合は、`DEPLOYMENT.md`を参照してください。

---

## サポート

不明な点がある場合:
1. このマニュアルを再確認
2. エラーメッセージをGoogle検索
3. ファイルをバックアップしてから変更を試す
