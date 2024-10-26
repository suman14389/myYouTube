import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {useNavigate} from 'react-router-dom';
import { closeMenu } from '../Redux/Slices/MenuSlice';


const LeftBarItem = ({item}) => {

    const {icon, name} = item;
    const isLeftBarOpen = useSelector((store) => store.menu.isMenuOpen);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleItemClick = () => {
        if(name === "Home"){
            navigate("/");
            dispatch(closeMenu());
        }
    }

  return (
    <>
        <div
            className={`${!isLeftBarOpen ? 'items-center flex-col cursor-pointer hover:bg-slate-100' : 'cursor-pointer hover:bg-slate-100 font-bold flex-row items-center w-full border border-b-0 border-t-1 border-r-0'} flex px-2 py-2`}
            onClick={handleItemClick}
        >
            <img src={icon} alt={name} className='w-10 h-10'/>
            <span className={`${!isLeftBarOpen ? 'text-[10px]' : 'text-[16px] pl-1'}`}>{name}</span>
        </div>
        {
            isLeftBarOpen && <div className='w-full'>
                {
                    item.children.map((child) => {
                        return (
                           <div className='flex items-center py-1 cursor-pointer hover:bg-slate-100 pl-10 '>
                             <img src={child.icon} alt={child.name} className='w-9 h-9'/>
                             <span className='pl-1'>{child.name}</span>
                           </div>
                        )
                    })
                }
            </div>
        }
    </>
  )
}

export default LeftBarItem