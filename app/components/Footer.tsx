// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="tab-nav">
          <a 
            href="https://tinhluongtaowine.vercel.app" 
            className="tab-btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            🌐 Tính Lương TaoWine
          </a>
        </div>
        <p>
          © 2025 🙏 Học Tiếng trung | {' '}
          <a 
            href="https://www.facebook.com/profile.php?id=100007963391487" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📘 Tác giả: Nghĩa Anh
          </a>
        </p>
      </div>
    </footer>
  )
}
