
import NavBar from '../components/NavBar'
import './style.less'

const Index: any = () => { 
  const content = [
    {
      text: 'blog',
      link: '/blog'
    },{
      text: 'charts',
      link: '/charts'
    },
  ]
  return <div className="index">
  <NavBar 
    content={content}
  />
  <p className="red">Hello Next.js</p>
</div>
}

export default Index