
import { useCallback } from 'react'
import tools from '../common/tools'
interface IProps {
  content: Array<IContent>
}

interface IContent {
  text: string;
  link: string;
}

const NavBar = (props: IProps) => {
  const { content = [] } = props;
  const onClick = useCallback((link: string) => {
    tools.jumpUrl(link)
  },[])
  console.log('hehe')
  return <div>
  {
    content.map((item: IContent) => <div key={item.text}>
      <div onClick={() => { onClick(item.link) }}>
        <p>{item.text}</p>
        </div>
    </div>)
  }
</div>
}

export default NavBar