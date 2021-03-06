const fs = require('fs');
const OSS = require('ali-oss');
const bucketName = 'bucker-for-sae';
const accessKeyId = process.env.ACCESSKEYID;
const accessKeySecret = process.env.ACCESSKEYSECRET;
const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId,
  accessKeySecret,
  bucket: bucketName,
});

async function putsList() {
  try {
    const files = await fs.readdirSync('./dist');
    if (!files.length) return;
    for await (const item of files) {
      if (item === 'index.html') continue;
      client
        .putStream(`/simple-blog/assets/${item}`, fs.createReadStream(`./dist/${item}`))
        .then((res, err) => {
          if (err) console.log('err', err);
          console.log(`deploy file: ${item}`);
        });
    }
  } catch (error) {}
}
putsList();
