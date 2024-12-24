export function FaqItem({ letter, question, answer, contactLink }) {
    return (
      <div className="flex gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-800">{letter}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{question}</h3>
          <p className="text-gray-600 leading-relaxed">
            {answer}
            {contactLink && (
              <a href="#" className="text-orange-500 hover:text-orange-600">
                {contactLink}
              </a>
            )}
          </p>
        </div>
      </div>
    )
  }
  
  