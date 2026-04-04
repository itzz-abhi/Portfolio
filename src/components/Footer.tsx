const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhishek Singh. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/itzz-abhi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhishek-singh-727523336/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgEHsX3%2ByRV2pR8L2BWRDdA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/itzzAbhi/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
