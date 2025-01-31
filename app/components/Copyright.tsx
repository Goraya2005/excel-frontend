


export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="bg-black py-4 text-white text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-2xl">
              <i className="fas fa-copyright"></i> Copyright &copy; {currentYear} Naeem Goraya
            </p>
          </div>
        </footer>
      );
    };
  