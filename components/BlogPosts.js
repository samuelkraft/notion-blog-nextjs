
import Link from "next/link";

import { Text } from "../pages/[id].js";

function BlogPosts({posts}) {

    
  return (
    <div>
                
        <div >
        <ol className="grid md:grid-cols-2 md:mx-9 my-6" >
          
          {posts.map((post) => {
          /*  if (post.properties.Status.select.name == 'Complete'){*/
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );

            const title = post.properties.Title.title;
            const postId = post.id;
            
           
            let imgSrc = "";
            let hasImage = false;
            if ( post.properties.Cover.files.length != 0){
                imgSrc = post.properties.Cover.files[0].file.url;
                hasImage = true;
                console.log("image") 
            } else{
                console.log('noimage')
            };
            
            const type = post.properties.Type.select.name;
            const description = post.properties.Description.rich_text[0].plain_text;
            const tags = post.properties.Tags.multi_select;

          
            return (

              
              <li key={postId} className="m-4" >
                    
                <div className="overflow-hidden shadow-xl rounded-3xl h-90   cursor-pointer m-auto">
                    <Link href={`/${postId}`} className="w-full block h-full">
                        <a>

                        {(hasImage) ?  (<img alt="blog photo" src={imgSrc} className="max-h-40 w-full object-cover " />) : console.log('no image')}
                        <div className="bg-white w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                                {type}

                            </p>
                            <p className="text-gray-800  text-xl font-medium mb-2">
                            
                                  
                                    <Text text={title} />
                                   
                            </p>
                            <p className="text-gray-400  font-light text-md">{description}
                            </p>
                            <div className="flex items-center mt-4">
                            
                                <div className="flex flex-col justify-between text-sm">
                                    
                                    <p className="text-gray-400 ">
                                        {date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-starts items-center mt-4">

                                    {tags.map((tag) => {
                                        return (
                                        <div key={`${postId}${tag.name}`} className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                            #{tag.name}
                                        </div>
                                        )}
                                    )}
                                
                                </div>
                        </div>
                        </a>
                        </Link>
                </div>

                
              </li>

              

              
            );
         
          })}
        
        </ol>
        
</div>
            

    
      
    </div>
  );
}




export default BlogPosts;