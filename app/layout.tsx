
// app/layout.tsx

import './globals.css'; // 引入全局样式（包括字体样式）

import ClientOnly from './components/ClientOnly';  // 用于只在客户端渲染的组件
import LoginModal from './components/Modals/LoginModal';  // 登录模态框
import NavBar from './components/navbar/Navbar';  // 导航栏组件
import RegisterModal from './components/Modals/RegisterModal';  // 注册模态框
import RentModal from './components/Modals/RentModal';  // 租赁模态框
import SearchModal from './components/Modals/SearchModal';  // 搜索模态框
import ToasterProvider from './providers/ToasterProvider';  // 通知提供者
import getCurrentUser from './actions/getCurrentUser';  // 获取当前用户

// 页面元数据配置
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnbv2 clone',
};

// `font-sans` 是 Tailwind 默认的无衬线字体类，若你在 Tailwind 配置中将 `Nunito` 设置为默认字体，它会自动使用
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 获取当前用户信息
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className="font-sans">  {/* 使用 Tailwind 的 font-sans 类来应用默认的字体 */}
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>  {/* 渲染页面内容 */}
      </body>
    </html>
  );
}
