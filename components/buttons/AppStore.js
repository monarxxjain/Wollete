export default function AppStore() {
  return (
    <div>
      <button
        type="button"
        className="group flex w-[153px] min-w-[153px] py-[18px] px-[16px] justify-center items-center gap-[4px] rounded-[10px] border-[2px] 
      border-solid border-[#0E72E8] bg-transparent text-[#0E72E8] text-[16px] not-italic font-bold leading-[150%] hover:bg-[#0E72E8] hover:text-[#F3F3F3]
      active:bg-[#00489E] transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          className="block group-hover:hidden"
        >
          <path
            d="M17.8311 20.2778C16.7972 21.2277 15.6685 21.0777 14.5819 20.6278C13.4321 20.1678 12.3771 20.1478 11.164 20.6278C9.64491 21.2477 8.84317 21.0677 7.93595 20.2778C2.78795 15.2485 3.54749 7.58942 9.39173 7.30946C10.8159 7.37945 11.8075 8.04936 12.6409 8.10935C13.8857 7.86939 15.0777 7.17947 16.4069 7.26946C17.9998 7.38945 19.2025 7.98937 19.9936 9.06923C16.7023 10.939 17.4829 15.0485 20.5 16.1983C19.8987 17.6981 19.1181 19.188 17.8205 20.2878L17.8311 20.2778ZM12.5354 7.24946C12.3771 5.01975 14.2865 3.17998 16.4808 3C16.7867 5.57967 14.0123 7.49943 12.5354 7.24946Z"
            fill="#0E72E8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="hidden group-hover:block group-active:block"
        >
          <path
            d="M17.3311 20.2778C16.2972 21.2277 15.1685 21.0777 14.0819 20.6278C12.9321 20.1678 11.8771 20.1478 10.664 20.6278C9.14491 21.2477 8.34317 21.0677 7.43595 20.2778C2.28795 15.2485 3.04749 7.58942 8.89173 7.30946C10.3159 7.37945 11.3075 8.04936 12.1409 8.10935C13.3857 7.86939 14.5777 7.17947 15.9069 7.26946C17.4998 7.38945 18.7025 7.98937 19.4936 9.06923C16.2023 10.939 16.9829 15.0485 20 16.1983C19.3987 17.6981 18.6181 19.188 17.3205 20.2878L17.3311 20.2778ZM12.0354 7.24946C11.8771 5.01975 13.7865 3.17998 15.9808 3C16.2867 5.57967 13.5123 7.49943 12.0354 7.24946Z"
            fill="#F3F3F3"
          />
        </svg>
        App Store
      </button>
    </div>
  )
}