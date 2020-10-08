## 功能

- 多個清單頁面，使用相同 js 內的功能
- 即使多個頁面間的 id 不同，也可以進行相同的事件註冊

## 頁面

- [估價](./Offers.html)
- [廠商](./Vendors.html)

## 差異部份

- tbody id

## 重點

- 設計共用時，請調整為可以視情況呼叫，不該綁死 function 執行的時間點
- `差異部份於各頁面自行實作`
- 共用部份請遵守所共用的結構即可 !
- ListData.js 中的 ListData.RegisterListDataColumnEvents() 設計成 function，該 function 內的呼叫只依賴於原本設計的結構，而 `不依賴於呼叫端的 dom id`