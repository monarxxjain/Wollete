import Image from 'next/image'
export default function AboutusCard({ name, job }) {
  return (
    <div className="rounded-[10px] bg-[#EBF4FF] mb:my-4">
      <div className="p-3">
        <Image src="/png/Aboutus/au-2.png" alt="Picture of the author" width={500} height={800} />
      </div>
      <div className="text-body-bold text-center pb-4">{name}</div>
      <div className="text-body-regular text-center py-1">{job}</div>
      <div className="flex items-center justify-center pt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M11.8762 9.89017C11.8758 10.6563 11.5659 11.3909 11.0146 11.9324C10.4633 12.4739 9.71585 12.7778 8.93662 12.7775C8.15739 12.7771 7.41023 12.4724 6.85951 11.9303C6.30878 11.3883 5.99961 10.6534 6 9.88728C6.00039 9.12115 6.31031 8.38654 6.86159 7.84507C7.41286 7.3036 8.16033 6.99962 8.93956 7C9.71879 7.00038 10.466 7.3051 11.0167 7.84711C11.5674 8.38912 11.8766 9.12403 11.8762 9.89017ZM11.9643 14.9166H6.08814V33H11.9643V14.9166ZM21.2487 14.9166H15.4019V33H21.1899V23.5105C21.1899 18.2242 28.1973 17.7331 28.1973 23.5105V33H34V21.5462C34 12.6345 23.6285 12.9667 21.1899 17.3431L21.2487 14.9166Z"
            fill="#0E72E8"
          />
        </svg>
      </div>
    </div>
  )
}
