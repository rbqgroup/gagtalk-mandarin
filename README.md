# Gagtalk Mandarin

这是一个将普通话转换成口塞语的 npm 包。

英文字母由 [Bondage Club 的算法](https://gitgud.io/BondageProjects/Bondage-College/-/blob/master/BondageClub/Scripts/Speech.js) 提供支持。

## 安装

```
npm i gagtalk-mandarin
```

支持 Node 14+

## 用法

```typescript
import { garble, GagTypes } from 'gagtalk-mandarin';
const garbledText: string = garble('你好，世界！\nHello, world!', GagTypes.cleave);
```

garble 方法将输入字符按照一定的条件交由不同的处理程序处理。`GagTypes` 对象中定义了一些预设，但也可以在第 2 个参数传入自己的 `ConditionalHandler[]` 以自定义转换规则。

中文转换的核心代码位于 `ChineseGarbler` 类中。

本项目有完备的类型定义。更多细节见 IDE 提示信息或源代码。

### 命令行

如果是本地包：`node bin/garble.js <gagType> <text>`

如果已安装为全局包: `gagtalk <gagType> <text>`

### 示例

输入：天地玄黄 宇宙洪荒 日月盈昃 辰宿列张 The quick brown fox jumps over the lazy dog.

| GagTypes     | 输出结果                                |
|--------------|-----------------------------------------|
| cleave       | 天地含黄 呃ˇ热哼ˊ荒 热呃ˋ盈呃ˋ 神树列嚷 ehe kuiek baown hok aumpz ovea ehe aasy mom. |
| ringMask     | 安呃ˋ含杭 呃ˇ热哼ˊ杭ˉ 热呃ˋ嗯ˊ呃ˋ 很ˊ互热嚷 ehe keekk faean mek aemfh efea ehe aahe mem.     |
| hollowedBall | 安呃ˋ含杭 呃ˇ呃ˋ哼ˊ杭ˉ 呃ˋ呃ˋ嗯ˊ呃ˋ 很ˊ互呃ˋ昂ˉ ehe keeka faeam mek aemfh efea ehe aehe mem. |
| solidBall    | 安呃ˋ安ˊ昂 呃ˇ呃ˋ嗯ˊ昂ˉ 呃ˋ呃ˋ嗯ˊ呃ˋ 嗯ˊ呜ˋ呃ˋ昂ˉ mhe meema baemm mem aemmh emea mhe 
aehe mem.    |
| deepthroat   | 嗯呃嗯昂 呜呃嗯昂 呃呃嗯呃 嗯呜呃昂 mhe meema baemm mem aemmh emea mhe aehe mem.   | 
| mouthCorset  | ¯ˋˊˊ ˇˋˊ¯ ˋˋˊˋ ˊˋˋ¯ mmm mmmph mmmph mmm mmmph mmph mmm mmph mmm.  |
| robot        | tian di xuan huang yu zhou hong huang ri yue ying ze chen su lie zhang The quick brown fox jumps oüer the lazy dog.        |

## 计划

- [x] garble 方法支持可选参数（声调样式、转换前后相同的音节是否保留原字）
- [ ] 日语假名支持
