import Layout from "./components/Layout";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Layout>
          {children} {/* 라우팅으로 결정된 현재 페이지가 랜더링 되는 자리 */}
        </Layout>
      </body>
    </html>
  );
}
