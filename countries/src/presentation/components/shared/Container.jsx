export const Container = ({ children, language }) => (
    <section className={`container overflow-hidden mx-auto ${language === 'fa' ? 'rtl font-iransans' : 'ltr font-nunito'} px-8 text-text-light dark:text-text-dark`}>
      {children}
    </section>
  )
  