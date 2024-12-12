const FeesStructure = () => {
    const feesList = [
      { program: "Bachelor's Degree", fee: "150,000 PKR per semester" },
      { program: "Master's Degree", fee: "200,000 PKR per semester" },
      { program: "Doctoral Degree", fee: "250,000 PKR per semester" },
    ]
  
    return (
      <section id="fees" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Fees Structure</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-6 text-left">Program</th>
                  <th className="py-3 px-6 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                {feesList.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 border-b">{item.program}</td>
                    <td className="py-4 px-6 border-b">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">* Fees are subject to change. Please contact the admissions office for the most up-to-date information.</p>
        </div>
      </section>
    )
  }
  
  export default FeesStructure
  
  