const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhishek Singh. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/abhishek8434" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhishek-singh-093744228/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/abhishek8434/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
