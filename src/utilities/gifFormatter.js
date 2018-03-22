function GifFormatter(x) {
  console.log(x);
  return {
    src: x.images.fixed_width_downsampled.url,
    srcLrg: x.images.fixed_width.url,
    url: x.url,
    username: x.username,
    title: x.title
  }
}

export default GifFormatter;