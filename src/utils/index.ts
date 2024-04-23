function preLoadImage(link: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = link;
    img.onload = () => {
      // load 事件代表图片已经加载完毕，通过该回调才访问到图片真正的尺寸信息
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = (err) => {
      reject(err);
    };
  });
}
