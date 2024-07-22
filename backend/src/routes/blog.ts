import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';
import { createblog, updateblog } from "@ayushsaini77/common-medium";

export const blogRoute=new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>(); 


blogRoute.use('/*',async (c,next)=>{
    const authorization=c.req.header("authorization") || "";
    const headers=authorization.split(" ")[1];
  
    const response=await verify(headers,c.env.JWT_SECRET);
    if(response){
        //@ts-ignore
      c.set('userId',response.id);
      await next();
    }else{
      c.status(403);
      return c.json({msg: "unauthorized"});
    }
  })

blogRoute.post('/post',async (c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body= await c.req.json();
    const { success }=createblog.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({msg: "Wrong Inputs"});
    }

    const userId=c.get("userId");
    
    const blog=await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })
    return c.json({
        id: blog.id
    })
})

blogRoute.put('/update',async (c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body= await c.req.json();
    const { success }=updateblog.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({msg: "Wrong Inputs"});
    }
    
    const blog=await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: blog.id
    })
})

blogRoute.get('/:id',async (c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body= c.req.param('id');
    
    try{
        const blog=await prisma.post.findFirst({
            where: {
                id: body
            },
            include: {
                author:{
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog
        });
    }catch(err){
        c.status(411);
        return c.json({msg: "Error while fetching blogs"})
    }

    
})


blogRoute.get('/getting',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const resp=await prisma.post.findFirst({
        where:{
            authorId: "3ca16e3a-7312-4472-93f6-4d659c35d07b"
        }
    })
    return c.json(resp);
})

blogRoute.get('/myblog',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body=await c.req.json();

    const resp=await prisma.post.findMany({
        where: {
            authorId: body.id
        }
    })

    return c.json(resp);
})

// pagination add 

// blogRoute.get('/bulk',async (c)=>{
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate());
    
//         console.log("begin");
//         const blog=await prisma.post.findMany({
//             select: {
//                 title: true,
//                 content: true,
//                 authorId: true,
//                 createdAt: true,
//                 id: true,
//                 author: {
//                     select: {
//                         name: true
//                     }
//                 }
//             }
//         });
//         console.log(blog);
//         return c.json({
//             blog
//         })
// })
