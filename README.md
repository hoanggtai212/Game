# Skyland — 1 background cho nhiều map

Project này dùng **một ảnh duy nhất** (`assets/world-map.png`) để tạo nhiều chặng liên tiếp.

## Cách hoạt động

JS tự tạo nhiều `.map-section`. Mỗi section:
- dùng cùng `world-map.png`
- thay đổi nhẹ `background-size`
- thay đổi `background-position`
- có các nút bài do HTML/JS tạo
- các section nối sát nhau theo chiều dọc

## Thêm chặng

Mở `script.js` và thêm:

```js
{name:"Chặng 08", range:"Bài 29–32", from:29,
 positions:[[70,25],[46,48],[48,73],[37,94]],
 zoom:1.05, pos:"center 6%"}
```

Không cần tạo background mới.

## Đổi vị trí bài

Mỗi cặp `[x,y]` là phần trăm vị trí:
- `x`: trái → phải
- `y`: trên → dưới

Ví dụ `[70,25]` nghĩa là bài nằm khoảng 70% chiều ngang và 25% chiều dọc của đoạn map.

## Đưa lên GitHub Pages

Upload toàn bộ project lên repository → Settings → Pages → Deploy from branch → `main` → `/root`.
