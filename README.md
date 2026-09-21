# Skyland Adventure — Map Screen

Màn hình chọn bài theo phong cách bản đồ phiêu lưu trên đảo bay.

## Chạy thử

Mở `index.html` bằng trình duyệt.

## Cấu trúc

```text
map-game/
├─ index.html
├─ style.css
├─ script.js
└─ assets/
   └─ map.png
```

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub.
2. Upload toàn bộ các file/thư mục trong project.
3. Vào **Settings → Pages**.
4. Chọn branch `main` và thư mục `/root`.
5. Lưu lại, GitHub sẽ cấp link website.

## Nối sang màn chơi thật

Trong `script.js`, đổi phần `playBtn` thành:

```js
window.location.href = `levels/level-${selectedLevel}.html`;
```

Sau đó tạo:
- `levels/level-5.html`
- `levels/level-6.html`
- `levels/level-7.html`
- `levels/level-8.html`
