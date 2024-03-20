import { 
  Box, 
  Center, 
  Divider, 
  HStack, 
  Image 
} from "@chakra-ui/react"
import blogs from "./blogs.json"

type BlogEntry = {
  title: string;
  body: string;
  date: string;
  images?: string[];
};

const toBlogEntry = (rawBlog: any): BlogEntry => {
  if (rawBlog.title && rawBlog.body) {
    return rawBlog as BlogEntry;
  }
  throw new Error("Blog is invalid!");
}

export const RailwayBlogBody = () => {
  const formattedBlogs = blogs.map(blog => toBlogEntry(blog));
  return (<>
    <Box 
      sx={{ 
        fontSize: "28px", 
        textAlign: "center", 
        fontStyle: "italic",
        pt: "16px" 
      }}
    >
      <u>{"Brian's Railway Blog"}</u>
    </Box>
    <Center sx={{ pt: "24px", margin: "auto", width: "50%" }}>
      <Box sx={{ textAlign: "left" }}>
        { formattedBlogs.map(blog => <BlogEntry key={blog.title} blog={blog} />)}
      </Box>
    </Center>
    <Center>
      <Divider 
        sx={{ 
          width: "50%", 
          margin: "25px" 
        }}
      />
    </Center>
  </>);
}

const BlogEntry = ({ blog }: { blog: BlogEntry }) => {
  return (<>
    <Box sx={{ fontSize: "18px" }}>{ blog.title }</Box>
    <Box sx={{ pt: "3px", fontSize: "10px", fontStyle: "italic" }}>{ blog.date }</Box>
    <Box sx={{ pt: "10px", fontSize: "12px" }}>{ blog.body }</Box>
    { blog.images?.length ? (
      <HStack spacing="10px" pt="15px">
        { blog.images.map(imageUrl => (
          <Box key={imageUrl} sx={{ maxWidth: "50%", maxHeight: "50%" }}>
            <Image src={`images/blog/${imageUrl}`} />
          </Box>
        ))}
      </HStack>
    ) : null}
  </>)
}
