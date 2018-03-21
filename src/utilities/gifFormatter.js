function GifFormatter(x) {
  return {
    src: x.images.downsized_large.url,
    url: x.url,
    username: x.username,
    title: x.title
  }
}

export default GifFormatter;