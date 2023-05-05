import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className='navbar'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeECWgH2GAtQQqnK3PdNTT0malQGv7yTmerUnMRHKFg&usqp=CAU&ec=48600112" alt="" />
      {/* <img className="pro" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAZlBMVEX///8jHyAAAAAIAAAZFBUgHB0cFxjZ2dkRCgzp6en8/PwWEBLJycmRkJDt7e3k5OSlpKRnZWbDwsKHh4eCgYEtKitsa2v29vZDQUGsrKyfnp7T0tIyMDFZV1hPTU4MAAV5eHi3treajp28AAAEdklEQVR4nO2biW6jQAyGO4YZJoFwHwlneP+X3GHTHJsmBIzNrlZ8UqWqqtS/Hl9jT76+NjY2NjY2Nv5TCt8L06hpmigNPb/4i0ripAWAzrWV7XbmuzaJ/46QIBGglXhEaRBJsLqSXSpAip9IEOluVSX7ELpXSn6r6SDcryfFaeGNkAtwdNaSEtvuqBQhXHclJ05eOsqz2yQrKNkfxs/ndk4HfqeZKGUQwy2lnCrFiCl5pVQTfOWKhIpTil+rzxpuqNpn1HK2ZkgRwjrzSammO8sFvlPat/ZMLXbLFdjeXLMYw3hMWpq5ZjGGaXikVGp6PF+RisdjJmfcR5iyr55vFmMYzSElwJjFGIaj5zwhtZwYtKSfGqjXuCm9lH00P6IH7Ig+3fnHOWXxjjrSF8hdhgkjE0gZ/RUl0CgpQmj6QArmtQt3rP9cCy6kTVDTa/mXfLdokTHd0k9l9jky1+UMrV2CC2rNcZntkbWxZ9BSILWwDPFm3dOuqJpDyleI6jFDFi0BIsPIjGmUmM+PJJ3zSPlyEHc1tsHdea5h9JlLiqnV8zxGMtToGzOmUgOsk6mimdM5uA3rssJ3pyc85XKOpQze5Au+VFzzjhuTSyRLUXwihinHpGCVKXyvPndVtlrBKgNO/emcoF5tUVIkesw0tk7W3Dx69VuvUVCzB9ATfQvuz/CWLrQreYo5nVt4FHGUWX/MzaSGLIpvxxPznpR3hMclVdCfBdwR5/6hFiYAR77DKpLBSZ7+gu/0YVmWYe/8kfGN6sF1UibTBA18547kU6Hxk+8cBA1L11DBtUZLUIcxNf5B3dZMLsd64vS4xZKWOFevzV9UZ/nYckn6QWb4tFAzMdMcfv7L1aF53qJL6mvJq4ZOWcNrilNcOUEQOFV8Gl5aWC9SIG17F74ZSknbMhkvy+osM1nOst/0NhahZbzRjae8MPYbdGuk6u07iqnIjiia/BY7qrvjtjS9b46dYD5ikVxmkTOgZyjaXx85v3xGZstPieSEBpafUoVdA/xEL42lWZfWcdyF++GYxnEvLLwyRXRmMYaJlkjx6LxlQC8pBXlHqqVbEEp7Sm8ZAPxuALmSHtGC7vH2OaXnDrjopYmPesEwhtTYQkCaXC6gU0xKVYruWNgXBchN/RjqiJOyq6ndxThMjduEevRmMYbBpd6e3l2Mw+Dau5JFC+7eltIWxgsaF0ik/cIVZN+AeNr3GeTjP4b0gk4w/5QWljPCaZm9XZwCcgNJ3kkNILupQDDUI4Gca6YM/Qu2Z/Az6khS+Au+M2mFNkPKkjV+ryjFqGXLtiqju6112cJBg5+/mtgiUFa+fBgUawKvUaBp9rKnIywrBzYcyZYCRd/a6KNSlt32pGuk6lADvJuxv0XaAPWLFcZinDKqu1cLzzc6XOjqqGRbVAde2QgAS9sjTyyksrUFIJrSC7g/sxbEYZK32WXfqbVr27YyX67Wlx9lbZ6E8XofRd0X/i7w+vCQ5sOnhAeiPD2EvRfs/GLFj31ubGxsbGxsrMMvkhVB7/o00QkAAAAASUVORK5CYII=" alt=""></img> */}
      <ul>
       
        <li>
        <img className="pro" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAZlBMVEX///8jHyAAAAAIAAAZFBUgHB0cFxjZ2dkRCgzp6en8/PwWEBLJycmRkJDt7e3k5OSlpKRnZWbDwsKHh4eCgYEtKitsa2v29vZDQUGsrKyfnp7T0tIyMDFZV1hPTU4MAAV5eHi3treajp28AAAEdklEQVR4nO2biW6jQAyGO4YZJoFwHwlneP+X3GHTHJsmBIzNrlZ8UqWqqtS/Hl9jT76+NjY2NjY2Nv5TCt8L06hpmigNPb/4i0ripAWAzrWV7XbmuzaJ/46QIBGglXhEaRBJsLqSXSpAip9IEOluVSX7ELpXSn6r6SDcryfFaeGNkAtwdNaSEtvuqBQhXHclJ05eOsqz2yQrKNkfxs/ndk4HfqeZKGUQwy2lnCrFiCl5pVQTfOWKhIpTil+rzxpuqNpn1HK2ZkgRwjrzSammO8sFvlPat/ZMLXbLFdjeXLMYw3hMWpq5ZjGGaXikVGp6PF+RisdjJmfcR5iyr55vFmMYzSElwJjFGIaj5zwhtZwYtKSfGqjXuCm9lH00P6IH7Ig+3fnHOWXxjjrSF8hdhgkjE0gZ/RUl0CgpQmj6QArmtQt3rP9cCy6kTVDTa/mXfLdokTHd0k9l9jky1+UMrV2CC2rNcZntkbWxZ9BSILWwDPFm3dOuqJpDyleI6jFDFi0BIsPIjGmUmM+PJJ3zSPlyEHc1tsHdea5h9JlLiqnV8zxGMtToGzOmUgOsk6mimdM5uA3rssJ3pyc85XKOpQze5Au+VFzzjhuTSyRLUXwihinHpGCVKXyvPndVtlrBKgNO/emcoF5tUVIkesw0tk7W3Dx69VuvUVCzB9ATfQvuz/CWLrQreYo5nVt4FHGUWX/MzaSGLIpvxxPznpR3hMclVdCfBdwR5/6hFiYAR77DKpLBSZ7+gu/0YVmWYe/8kfGN6sF1UibTBA18547kU6Hxk+8cBA1L11DBtUZLUIcxNf5B3dZMLsd64vS4xZKWOFevzV9UZ/nYckn6QWb4tFAzMdMcfv7L1aF53qJL6mvJq4ZOWcNrilNcOUEQOFV8Gl5aWC9SIG17F74ZSknbMhkvy+osM1nOst/0NhahZbzRjae8MPYbdGuk6u07iqnIjiia/BY7qrvjtjS9b46dYD5ikVxmkTOgZyjaXx85v3xGZstPieSEBpafUoVdA/xEL42lWZfWcdyF++GYxnEvLLwyRXRmMYaJlkjx6LxlQC8pBXlHqqVbEEp7Sm8ZAPxuALmSHtGC7vH2OaXnDrjopYmPesEwhtTYQkCaXC6gU0xKVYruWNgXBchN/RjqiJOyq6ndxThMjduEevRmMYbBpd6e3l2Mw+Dau5JFC+7eltIWxgsaF0ik/cIVZN+AeNr3GeTjP4b0gk4w/5QWljPCaZm9XZwCcgNJ3kkNILupQDDUI4Gca6YM/Qu2Z/Az6khS+Au+M2mFNkPKkjV+ryjFqGXLtiqju6112cJBg5+/mtgiUFa+fBgUawKvUaBp9rKnIywrBzYcyZYCRd/a6KNSlt32pGuk6lADvJuxv0XaAPWLFcZinDKqu1cLzzc6XOjqqGRbVAde2QgAS9sjTyyksrUFIJrSC7g/sxbEYZK32WXfqbVr27YyX67Wlx9lbZ6E8XofRd0X/i7w+vCQ5sOnhAeiPD2EvRfs/GLFj31ubGxsbGxsrMMvkhVB7/o00QkAAAAASUVORK5CYII=" alt=""></img>
          <a href="">Profile</a>
        </li>
      </ul>
    </div>
    <div className="side-bar">
      <div className="logo-div">
      <img src="https://th.bing.com/th/id/OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa?pid=ImgDet&rs=1" alt="" />
      </div>
      <ul>
      <div>
      <li>
          <Link to={'/home/home'}>Home</Link>
         </li>
         </div>
         <div>
         <li>
           <Link to={'/department/department'}>Department</Link>
         </li>
         </div>
         <div>
         <li>
         <Link to={'/departmenthead'}>Department Head</Link>
         </li>
         </div>
         <div>
         <li>
           <Link to={'/employee'}>Employee</Link>
         </li>
         </div>
         <div>
         <li>
         <Link to={'/profile'}>Profile</Link>
         </li>
         </div>
         <div>
         <li>
           <a href="">Logout</a>
         </li>
         </div>
         
       </ul>
    </div>
    <div className='image'>
      <img className="ho" src='https://medcitynews.com/uploads/2022/09/GettyImages-1277730976.jpg' alt=''></img>
      <p></p>
    </div>
    <Outlet/>
    </> 
   
  )
}



export default Layout
