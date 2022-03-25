import { HitokotoModel } from '../../types';

export async function getHitokto(): Promise<HitokotoModel> {
  return new Promise((resolve) => {
    fetch('https://v1.hitokoto.cn/')
      .then((d) => d.json())
      .then((d) => resolve(d));
  });
}
