import React from 'react'

export const Foters = () => {

    
    return (
        <>

            <div className='container max-w-full w-[90%] mx-auto '>
                <div className="foter-content w-full p-[45px] bg-gradient-to-l from-[#004D57] to-[#017686] rounded-[15px] max-h-[752px] text-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7   p-10 flex flex-col justify-between">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-3xl">
                                    Биз доимо сизга ёрдам беришга ва саволларингизга жавоб беришга тайёрмиз.
                                </h1>

                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-teal-100">
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-3">Телефон</h3>
                                    <p className="text-sm">+998(78) 122-89-89</p>

                                    <h3 className="font-semibold text-lg text-white mt-8 mb-3">Email</h3>
                                    <p className="text-sm">birinchibusinessclub@gmail.com</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-3">Манзил</h3>
                                    <p className="text-sm">Тошкент ш., Лашкарлар кўч., 8A</p>

                                    <h3 className="font-semibold text-lg text-white mt-8 mb-3">Ижтимоий тармоқ</h3>
                                    <div className="flex items-center gap-4 text-teal-200">
                                        {/* Simple social icons */}
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.5a4.5 4.5 0 019 0v.5h6" />
                                        </svg>
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex items-center">
                            <div className="w-full bg-gradient-to-br from-[#004D57] to-[#017686] rounded-2xl p-10 shadow-2xl">
                                <h2 className="text-3xl font-semibold mb-8">Анкетани тўлдиринг</h2>

                                <form className="space-y-6" >
                                    <div>
                                        <label className="block text-sm text-teal-200 mb-2">Толик Исм</label>
                                        <input
                                            className="w-full bg-transparent border-b border-teal-300/30 py-3 focus:outline-none placeholder-teal-200"
                                            placeholder="" />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-teal-200 mb-2">+998 (99) 999-99-99</label>
                                        <input
                                            className="w-full bg-transparent border-b border-teal-300/30 py-3 focus:outline-none placeholder-teal-200"
                                            placeholder="" />
                                    </div>

                                    <div>
                                        <p className="font-medium">Компаниянгизнинг йиллик айланмаси <span className="text-red-400">*</span></p>
                                        <div className="mt-4 space-y-3">

                                            <label className="flex items-start gap-3">
                                                <input type="checkbox" className="w-5 h-5 accent-teal-800 rounded" />
                                                <p>300.000 - 1 000 000 $</p>
                                            </label>

                                            <label className="flex items-start gap-3">
                                                <input type="checkbox" className="w-5 h-5 accent-teal-800 rounded" />
                                                <p>1 000 000 - 10 000 000 $</p>
                                            </label>

                                            <label className="flex items-start gap-3">
                                                <input type="checkbox" className="w-5 h-5 accent-teal-800 rounded" />
                                                <p>10 000 000 $+</p>
                                            </label>

                                        </div>

                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-3 bg-teal-800/90 hover:bg-teal-900/95 px-6 py-3 rounded-full font-medium shadow-lg transition-all">
                                            Ариза юбориш
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
