import CategoryCard from './CategoryCard'
import Images from '@/constants/Images'

export default function page() {
  return (
    <div className='w-full grid grid-cols-4 gap-4 my-4 p-5'>
    
      <CategoryCard title={"Headphone"} image={Images.homecard1.src} link={""}/>
      <CategoryCard title={"Earphone"} image={Images.homecard2.src} link={""}/>
      <CategoryCard title={"Smartphone"} image={Images.homecard3.src} link={""}/>
      <CategoryCard title={"Smartwatch"} image={Images.homecard4.src} link={""}/>
      <CategoryCard title={"Headphone"} image={Images.homecard1.src} link={""}/>
      <CategoryCard title={"Earphone"} image={Images.homecard2.src} link={""}/>
      <CategoryCard title={"Smartphone"} image={Images.homecard3.src} link={""}/>
      <CategoryCard title={"Smartwatch"} image={Images.homecard4.src} link={""}/>
    
    </div>
  )
}
