import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt';
import { signinInput, signupinput } from "@ayushsaini77/common-medium";
import { useReducer } from "hono/jsx";


export const userRoute=new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
        id: string
    }
}>();


userRoute.post('/signup',async (c) => {
	const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

const body=await c.req.json();

const { success }=signinInput.safeParse(body);
if(!success){
  c.status(411);
  return c.json({msg: "Wrong Inputs"})
}

  try{
    const User=await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })

    const userId=await prisma.user.findUnique({
      where:{
        email: body.email
      },select:{
        id: true
      }
    })

    const jwt=await sign({id: User.id},c.env.JWT_SECRET);
    return c.json({jwt,userId});

  }catch(err){
    c.status(403);
    return c.json({error: "Something went wrong."});
  }
})

userRoute.post('/signin',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

  const body=await c.req.json();
  const { success }=signinInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({msg: "Wrong Inputs"})
  }

  const isexist=await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  })

  const name=await prisma.user.findUnique({
    where:{
      email:body.email
    },
    select:{
      name: true
    }
  })

  const userId=await prisma.user.findUnique({
    where:{
      email: body.email
    },select:{
      id: true
    }
  })

  if(isexist){
    const token=await sign({id: isexist.id},c.env.JWT_SECRET);
    return c.json({token: token,name: name?.name,userId});
  }else{
    c.status(403);
    return c.json({msg: "Invalid Username or Password"});
  }
})

userRoute.get('/decode',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

  const token=c.req.header("authorization");
  const jwt=token?.split(" ")[1];
  const id=decode(jwt || "").payload.id;
  
  // return c.json(id.payload);
  const Findname=await prisma.user.findUnique({
    where: {
      id: id as string
    },
    select:{
      name: true
    }
  })
  const name=Findname?.name
  return c.json({name});

})


userRoute.get('/bulkpost',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

  const findall=await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true
        }
      }
    }
  });
  
  
  return c.json(findall);
})


userRoute.get('/:id',async (c)=>{
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body=c.req.param('id');

  const resp=await prisma.post.findMany({
      where: {
          authorId: body
      },
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
  })

  return c.json(resp);
})

userRoute.post('/delete',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

  const body=await c.req.json();

  const resp=await prisma.post.delete({
    where:{
      id: body.id
    }
  })

  return c.json({msg: "deleted successfully"})
})
