import { 
  Box, 
  Button, 
  Center, 
  Divider, 
  HStack, 
  Image, 
  VStack
} from "@chakra-ui/react"
import blogs from "./blogs.json"
import { useState } from "react";

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
  const formattedBlogs = blogs.map(blog => toBlogEntry(blog)).reverse();
  const [shownIdx, setShownIdx] = useState(formattedBlogs.map(_ => false));
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
      <VStack>
        { formattedBlogs.map((blog, idx) => (
          <VStack key={blog.title}>
            <Box>
              <Button 
                onClick={() => {
                  const modified = shownIdx.slice();
                  modified[idx] = !modified[idx];
                  setShownIdx(modified);
                }}
                size={"xs"}
              >
                {`${blog.date} - ${blog.title}`}
              </Button>
            </Box>
            {
              shownIdx[idx] ? (
                <Box pt={"10px"}>
                  <BlogEntry key={blog.title} blog={blog} />
                </Box>
              ) : null
            }
          </VStack>
        ))}
      </VStack>
    </Center>
  </>);
}

const BlogEntry = ({ blog }: { blog: BlogEntry }) => {
  return (
    <Box textAlign={"left"}>
      <Box sx={{ fontSize: "18px" }}>{ blog.title }</Box>
      <Box sx={{ pt: "3px", fontSize: "10px", fontStyle: "italic" }}>{ blog.date }</Box>
      <Box sx={{ pt: "10px", fontSize: "12px" }}>{ blog.body }</Box>
      { blog.images?.length ? (
        <HStack spacing="10px" pt="15px">
          { blog.images.map(imageUrl => (
            <Box key={imageUrl} sx={{ maxWidth: "50%", maxHeight: "50%" }}>
              <Image src={`images/blog/${imageUrl}`} alt={""} />
            </Box>
          ))}
        </HStack>
      ) : null}
      <Center>
        <Divider 
          sx={{ 
            width: "50%", 
            margin: "25px" 
          }}
        />
      </Center>
    </Box>
  );
}
