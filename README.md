# Gagtalk Mandarin

这是一个将普通话翻译成口塞语的 npm 包。

## 用法

```typescript
import { garble, GagTypes } from 'gagtalk-mandarin';
const garbledText: string = garble('你好，世界！\nHello, world!', GagTypes.cleave);
```

本项目有完备的类型定义。更多细节见 IDE 提示信息或源代码。

## 计划

- [ ] 假名支持
