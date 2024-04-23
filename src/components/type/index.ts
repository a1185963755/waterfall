export interface IWaterFallProps {
  gap: number; // 卡片间隔
  column: number; // 瀑布流列数
  bottom: number; // 距底距离（触底加载更多）
  pageSize: number;
  request: (page: number, pageSize: number) => Promise<ICardItem[]>;
}

export interface ICardItem {
  id: string | number;
  url: string;
  width: number;
  height: number;
  [key: string]: any;
}

export interface IBookCardPos {
  width: number;
  imageHeight: number; // 图片高度
  cardHeight: number; // 卡片高度
  x: number;
  y: number;
}
