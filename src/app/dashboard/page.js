import DashboardPage from '@/template/DashboardPage'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route';
import User from '@/models/User';

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOption)
  const user = await User.findOne({email: session.user.email})
  return (
    <DashboardPage createdAt={user.createdAt} email={user.email}/>
  )
}

export default Dashboard