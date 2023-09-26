const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} Your Company
            </div>
        </footer>
    );
};

export default Footer;
