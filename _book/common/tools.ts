import Router from 'next/router'

interface IRoute {
  pathname: string;
  query: {
    [key: string]: any;
  }
}

const jumpUrl = (url: string | IRoute, types?: string) => { 
  if (!url) return 
  if(!types) Router.push(url)
  else Router.replace(url)
}

export default {
  jumpUrl
}