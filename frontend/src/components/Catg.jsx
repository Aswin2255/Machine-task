import {Link, useNavigate} from 'react-router-dom'
function Catg({ item }) {
 
  return (
    
   <div   className="cursor-pointer">
     <Link to={`/${item._id}`}>
     <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
       
       <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
         {item.name} ({item.count})
       </h5>
       
       
       
     </div>
     
     </Link>
    </div>
    
  );
}

export default Catg;
