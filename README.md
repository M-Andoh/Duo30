# A326

# インストール

```
$ sudo apt update
$ sudo apt install php-xml composer -y
$ mkdir Duo30
$ cd Duo30
$ echo "# Duo30" >> README.md
$ composer create-project laravel/laravel Duo30_base
$ git init
$ git add .
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin git@github.com:M-Andoh/Duo30.git
$ git push -u origin main
$ cd Duo30_base
```

## sail インストール & 初期設定

```
$ php artisan sail:install
(mysqlを選択：ご自由に）
$ php artisan key:generate
```

### config/app.php の変更

```
    'timezone' => 'UTC',
    ==>
    'timezone' => env('APP_TIMEZONE', 'UTC'),
```

### .env の変更

```
APP_NAME=ToDo
APP_TIMEZONE=Asia/Tokyo
APP_LOCALE=ja
APP_FAKER_LOCALE=ja_JP

（以下は自由に）
DB_DATABASE
DB_USERNAME
DB_PASSWORD
```

```
$ sail up -d
(mysqlを選択：ご自由に）
$ sail artisan key:generate
```

### db 準備

- database/migrations/0001_01_01_000000_create_users_table.php の変更

以下を追加してみました。

```
$table->tinyInteger('role_id')->default(0);
```

- 動作確認

```
$ sail up -d
$ sail artisan migrate
```

- seeder 作成

```
$ sail artisan make:seeder UserSeeder
```

- seeder 更新
  ファイル変更後、反映

```
$ sail artisan db:seed --class=UserSeeder
```

http://localhost に接続

## breeze インストール

### breeze 初期設定

```
$ sail composer require laravel/breeze --dev
$ sail npm uninstall @types/node
$ rm -fr node_modules/ package-lock.json
$sail npm install -D   @types/babel__core   @types/babel__generator   @types/babel__template   @types/babel__traverse   @types/estree   @types/lodash
$ sail npm install -D @types/node@latest
$ sail artisan breeze:install react --typescript --dark --eslint
$ sail npm install react react-dom @types/react @types/react-dom
$ sail npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
$ sail composer require tightenco/ziggy
$ sail npm install ziggy-js
$ sail npm install esbuild-plugin-postcss2 postcss tailwindcss autoprefixer

```

## MUI インストール

```
$ sail npm install -@mui/material @mui/icons-material @emotion/react @emotion/styled -save-dev
```

## ESBUILD インストール

```
$ sail npm install esbuild esbuild-plugin-sass --save-dev
```

## breeze 画面有効化のため修正

## sanctum 有効化

### route/api 追加

```
sail artisan install:api
```

### .env 修正

```
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DRIVER=cookie
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost,127.0.0.1,
```

### config/sanctum.php 修正

```
    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
        '%s%s',
        'localhost,localhost:3000,localhost:8000,127.0.0.1,127.0.0.1:8000,::1',
        Sanctum::currentApplicationUrlWithPort()  // <-- 変更
    ))),
```

### bootstrap/app.php 修正

```
  ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi();  //<-- 追加
    })
```

### axios 使用時注意点

```
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
```

<TextField
label="Email"
value={data.email}
onChange={e => setData("email", e.target.value)}
error={mutation.isError && !!mutation.error?.response?.data?.errors?.email}
helperText={mutation.error?.response?.data?.errors?.email}
/>
